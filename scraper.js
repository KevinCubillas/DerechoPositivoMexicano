const fs = require('fs');
const puppeteer = require('puppeteer');

(async () => {
    console.log("Iniciando la extracción automatizada masiva de la CPEUM...");
    
    const browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    
    const page = await browser.newPage();
    // Usamos esta fuente en texto plano que está 100% activa y estructurada por artículos
    const urlOficial = "https://raw.githubusercontent.com/skatox/leyes-mexico/master/ConstitucionPoliticaEstadosUnidosMexicanos.txt"; 

    try {
        console.log("Conectando con el servidor de datos legislativos...");
        const response = await page.goto(urlOficial, { waitUntil: 'domcontentloaded', timeout: 60000 });
        const textoCompleto = await response.text();
        
        console.log("Analizando y segmentando el texto constitucional...");
        
        // Dividimos de forma segura usando expresiones regulares al inicio de cada "Artículo X"
        const bloques = textoCompleto.split(/(?=Artículo\s+\d+)/i);
        let articulosExtraidos = [];
        
        bloques.forEach((bloque) => {
            const lineas = bloque.trim().split('\n');
            if (lineas.length === 0 || !lineas[0].toLowerCase().includes('artículo')) return;

            // La primera línea contiene el número del artículo
            const numeroArt = lineas[0].trim().replace(/[\.\-]+$/, "") + ".";
            // Unimos las líneas siguientes para formar todo el cuerpo del texto plano
            const cuerpoArt = lineas.slice(1).join(' ').replace(/\s+/g, ' ').trim();

            if (cuerpoArt.length > 15) {
                articulosExtraidos.push({
                    ambito: "federal",
                    subambito: "",
                    categoria: "Constitución",
                    ley: "Constitución Política (CPEUM)",
                    numero: numeroArt,
                    estadoNorma: "Vigente",
                    ultimaReforma: "DOF Actualizado",
                    texto: cuerpoArt,
                    jurisprudencia: "Precedente interpretativo disponible en la próxima actualización del Semanario Judicial."
                });
            }
        });
        
        console.log(`¡Procesamiento terminado! Se lograron estructurar ${articulosExtraidos.length} secciones normativas.`);
        
        // Escribimos el archivo final asegurando que defina la variable en el entorno 'window'
        // Esto destruye el bloqueo de seguridad (CORS) de los navegadores al abrirlo de forma local
        const contenidoArchivo = `window.articulosMundiales = ${JSON.stringify(articulosExtraidos, null, 4)};`;
        fs.writeFileSync('base-datos.js', contenidoArchivo, 'utf-8');
        console.log("El archivo 'base-datos.js' se ha actualizado con éxito.");

    } catch (error) {
        console.error("Error durante la ejecución del robot:", error.message);
    } finally {
        await browser.close();
    }
})();
