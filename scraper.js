const fs = require('fs');
const puppeteer = require('puppeteer');

(async () => {
    console.log("Iniciando la extracción automatizada masiva de la CPEUM...");
    
    const browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    
    const page = await browser.newPage();
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

            if (linea.startsWith("Artículo ") && (linea.includes(".-") || linea.includes(" ") || linea.includes("."))) {
                if (articuloActual) {
                    articulosExtraidos.push(articuloActual);
                }
                
                const matchNumero = linea.match(/^Artículo\s+\d+[oº\d]*[\s\.\-]+/i);
                const numeroArt = matchNumero ? matchNumero[0].replace(/[\.\-]+$/, "").trim() + "." : "Artículo.";
                const textoInicial = linea.replace(/^Artículo\s+\d+[oº\d]*[\s\.\-]+/i, "").trim();

                articuloActual = {
                    ambito: "federal",
                    subambito: "",
                    categoria: "Constitución",
                    ley: "Constitución Politics (CPEUM)",
                    numero: numeroArt,
                    estadoNorma: "Vigente",
                    ultimaReforma: "DOF Oficial",
                    texto: textoInicial,
                    jurisprudencia: "Precedente constitucional en proceso de sincronización con el Semanario Judicial de la Federación."
                };
            } else if (articuloActual) {
                articuloActual.texto += " " + linea;
            }
        }
        
        if (articuloActual) {
            articulosExtraidos.push(articuloActual);
        }

        console.log(`¡Procesamiento terminado! Se lograron estructurar ${articulosExtraidos.length} artículos.`);
        
        // LEER EL INDEX.HTML ACTUAL
        let htmlContent = fs.readFileSync('index.html', 'utf8');

        // REGEX RADICAL: Buscar dónde empieza "var articlesMundialesBackup = [" y dónde termina "];" para meter los 136 artículos reales
        const regexBackup = /(var articlesMundialesBackup = \[\s*)[\s\S]*?(\s*\];)/;
        
        if (regexBackup.test(htmlContent)) {
            const jsonArticulos = JSON.stringify(articulosExtraidos, null, 16);
            // Reemplazamos los 3 de prueba por los 136 reales dentro del arreglo de respaldo
            htmlContent = htmlContent.replace(regexBackup, `var articlesMundialesBackup = ${jsonArticulos};`);
            
            fs.writeFileSync('index.html', htmlContent, 'utf8');
            console.log("¡Éxito! Los artículos reales fueron inyectados directamente dentro de tu index.html de manera indestructible.");
        } else {
            console.log("Error: No se encontró la variable 'articlesMundialesBackup' en el index.html para inyectar los datos.");
        }

    } catch (error) {
        console.error("Error durante la ejecución del robot:", error.message);
    } finally {
        await browser.close();
    }
})();
