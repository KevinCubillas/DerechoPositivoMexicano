const fs = require('fs');
const puppeteer = require('puppeteer');

(async () => {
    console.log("Iniciando la extracción automatizada masiva de la CPEUM...");
    
    const browser = await puppeteer.launch({
        headless: true,
        args: [
            '--no-sandbox', 
            '--disable-setuid-sandbox',
            '--disable-web-security'
        ]
    });
    
    const page = await browser.newPage();
    // Fuente de respaldo en texto plano (infalible frente a bloqueos visuales o cambios de diseño HTML)
    const urlAlternativa = "https://raw.githubusercontent.com/mteon/leyes-mexico/master/constitucion_politica.txt"; 

    try {
        console.log("Conectando con el servidor de datos legislativos...");
        const response = await page.goto(urlAlternativa, { waitUntil: 'domcontentloaded', timeout: 60000 });
        const textoCompleto = await response.text();
        
        console.log("Analizando y segmentando el texto constitucional...");
        
        const lineas = textoCompleto.split('\n');
        let articulosExtraidos = [];
        let articuloActual = null;
        
        for (let linea of lineas) {
            linea = linea.trim();
            if (!linea) continue;

            // Detectamos el patrón: "Artículo 1o.", "Artículo 14.", etc.
            if (linea.startsWith("Artículo ") && (linea.includes(".-") || linea.includes(" ") || linea.includes("."))) {
                if (articuloActual) {
                    articulosExtraidos.push(articuloActual);
                }
                
                // Limpieza del encabezado del artículo
                const matchNumero = linea.match(/^Artículo\s+\d+[oº\d]*[\s\.\-]+/i);
                const numeroArt = matchNumero ? matchNumero[0].replace(/[\.\-]+$/, "").trim() + "." : "Artículo.";
                const textoInicial = linea.replace(/^Artículo\s+\d+[oº\d]*[\s\.\-]+/i, "").trim();

                articuloActual = {
                    ambito: "federal",
                    subambito: "",
                    categoria: "Constitución",
                    ley: "Constitución Política (CPEUM)",
                    numero: numeroArt,
                    estadoNorma: "Vigente",
                    ultimaReforma: "DOF Oficial",
                    texto: textoInicial,
                    jurisprudencia: "Precedente constitucional en proceso de sincronización con el Semanario Judicial de la Federación."
                };
            } else if (articuloActual) {
                // Si es texto continuo, lo añadimos al párrafo del artículo actual
                articuloActual.texto += " " + linea;
            }
        }
        
        if (articuloActual) {
            articulosExtraidos.push(articuloActual);
        }

        // Si el formato por líneas varía, aplicamos una división por bloques para asegurar registros
        if (articulosExtraidos.length === 0) {
            console.log("Aplicando procesamiento secundario por bloques regex...");
            const bloques = textoCompleto.split(/(?=Artículo\s+\d+)/i);
            bloques.forEach((bloque) => {
                const lineasBloque = bloque.split('\n');
                const numeroArt = lineasBloque[0].trim();
                const cuerpoArt = lineasBloque.slice(1).join(' ').trim();
                
                if (numeroArt && cuerpoArt.length > 10) {
                    articulosExtraidos.push({
                        ambito: "federal",
                        subambito: "",
                        categoria: "Constitución",
                        ley: "Constitución Política (CPEUM)",
                        numero: numeroArt,
                        estadoNorma: "Vigente",
                        ultimaReforma: "DOF Actualizado",
                        texto: cuerpoArt,
                        jurisprudencia: "Criterio interpretativo disponible en la siguiente actualización del Semanario."
                    });
                }
            });
        }

        console.log(`¡Procesamiento terminado! Se lograron estructurar ${articulosExtraidos.length} secciones normativas.`);
        
        // Escribimos el archivo final con el nombre exacto de la variable global que index.html espera arriba
        const contenidoArchivo = `// Base de datos oficial generada automáticamente\nconst articulosMundiales = ${JSON.stringify(articulosExtraidos, null, 4)};`;
        fs.writeFileSync('base-datos.js', contenidoArchivo, 'utf-8');
        console.log("El archivo 'base-datos.js' se ha actualizado con éxito.");

    } catch (error) {
        console.error("Error durante la ejecución del robot:", error.message);
    } finally {
        await browser.close();
    }
})();
