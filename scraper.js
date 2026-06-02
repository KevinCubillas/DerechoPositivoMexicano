const fs = require('fs');
const puppeteer = require('puppeteer');

(async () => {
    console.log("Iniciando la extracción automatizada y masiva de la CPEUM...");
    
    const browser = await puppeteer.launch({
        headless: true,
        args: [
            '--no-sandbox', 
            '--disable-setuid-sandbox',
            '--disable-web-security',
            '--user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
        ]
    });
    
    const page = await browser.newPage();
    
    // URL oficial del índice de artículos en texto de la CPEUM (Cámara de Diputados)
    const urlTextoCPEUM = "https://www.diputados.gob.mx/LeyesBiblio/htm/1.htm"; 

    try {
        console.log("Conectando con el servidor parlamentario...");
        await page.goto(urlTextoCPEUM, { waitUntil: 'domcontentloaded', timeout: 60000 });
        
        console.log("Analizando la estructura del texto constitucional...");
        
        // El robot procesa el documento completo buscando los párrafos de los artículos
        const catalogoCompleto = await page.evaluate(() => {
            const parrafos = document.querySelectorAll('p');
            let articulosExtraidos = [];
            let articuloActual = null;
            
            parrafos.forEach(p => {
                const textoParrafo = p.innerText.trim();
                
                // Detectamos el inicio de un artículo (Ej: "Artículo 1o.-", "Artículo 2o.-")
                if (textoParrafo.startsWith("Artículo ") && (textoParrafo.includes(".-") || textoParrafo.includes("."))) {
                    if (articuloActual) {
                        articulosExtraidos.push(articuloActual);
                    }
                    
                    // Separamos el número del texto inicial
                    const partes = textoParrafo.split(/[\.-]/);
                    const numeroArt = partes[0].trim() + ".";
                    const textoInicial = partes.slice(1).join(".").trim();
                    
                    articuloActual = {
                        ambito: "federal",
                        subambito: "",
                        categoria: "Constitución",
                        ley: "Constitución Política (CPEUM)",
                        numero: numeroArt,
                        estadoNorma: "Vigente",
                        ultimaReforma: "Texto Oficial DOF",
                        texto: textoInicial,
                        jurisprudencia: "Precedente en proceso de sincronización con el Semanario Judicial de la Federación."
                    };
                } else if (articuloActual && textoParrafo.length > 0) {
                    // Si el párrafo no empieza con "Artículo", es la continuación del artículo anterior
                    articuloActual.texto += "\n\n" + textoParrafo;
                }
            });
            
            if (articuloActual) {
                articulosExtraidos.push(articuloActual);
            }
            
            return articulosExtraidos;
        });

        if (catalogoCompleto.length === 0) {
            throw new Error("La estructura de la página cambió o el acceso fue denegado.");
        }

        console.log(`¡Éxito! Se han extraído automáticamente ${catalogoCompleto.length} secciones de la CPEUM.`);
        
        // Guardamos el archivo con la variable exacta que espera tu index.html original
        const contenidoArchivo = `// Base de datos oficial generada automáticamente\nconst articulosMundiales = ${JSON.stringify(catalogoCompleto, null, 4)};`;
        fs.writeFileSync('base-datos.js', contenidoArchivo, 'utf-8');
        
    } catch (error) {
        console.error("Error durante la extracción masiva:", error.message);
        console.log("Para evitar romper la app, se mantendrá un respaldo mínimo seguro.");
    } finally {
        await browser.close();
    }
})();
