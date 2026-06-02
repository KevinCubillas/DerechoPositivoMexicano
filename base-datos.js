// Base de datos oficial especializada
const articulosMundiales = [
    {
        "ambito": "federal",
        "categoria": "Constitución",
        "ley": "Constitución Política (CPEUM)",
        "numero": "Artículo 1o. [Derechos Humanos y Bloque de Constitucionalidad]",
        "estadoNorma": "Vigente",
        "ultimaReforma": "Ref. DOF 2011",
        "texto": "En los Estados Unidos Mexicanos todas las personas gozarán de los derechos humanos reconocidos en esta Constitución y en los tratados internacionales de los que el Estado Mexicano sea parte, así como de las garantías para su protección...",
        "jurisprudencia": "Contradicción de Tesis 293/2011 (Pleno SCJN): Los derechos humanos de fuente internacional y rango constitucional forman un mismo bloque. Las restricciones expresas de la CPEUM prevalecen sobre el principio pro persona."
    },
    {
        "ambito": "federal",
        "categoria": "Constitución",
        "ley": "Constitución Política (CPEUM)",
        "numero": "Artículo 16. [Actos de Molestia y Control de Detención]",
        "estadoNorma": "Vigente",
        "ultimaReforma": "Ref. DOF 2019",
        "texto": "Nadie puede ser molestado en su persona, familia, domicilio, papeles o posesiones, sino en virtud de mandamiento escrito de la autoridad competente, que funde y motive la causa legal del procedimiento... No podrá librarse orden de aprehensión sino por la autoridad judicial y sin que preceda denuncia o querella...",
        "jurisprudencia": "Tesis Jurisprudencial (Primera Sala): Elementos de la Flagrancia. Cualquier detención que no se ajuste estrictamente a los supuestos constitucionales del artículo 16 constitucional genera la invalidez de la captura y la exclusión de las pruebas obtenidas de forma directa."
    },
    {
        "ambito": "federal",
        "categoria": "Constitución",
        "ley": "Constitución Política (CPEUM)",
        "numero": "Artículo 20. [Principios del Proceso Penal y Derechos de la Víctima]",
        "estadoNorma": "Vigente",
        "ultimaReforma": "Ref. DOF 2018",
        "texto": "El proceso penal será acusatorio y oral. Se guiará por los principios de publicidad, contradicción, concentración, continuidad e inmediación... Apartado A: De los principios generales... Apartado B: De los derechos de la persona imputada... Apartado C: De los derechos de la víctima o del ofendido...",
        "jurisprudencia": "Jurisprudencia SCJN (Primera Sala): El principio de inmediación exige de manera insustituible que el juez presencie la recepción de pruebas y el debate oral. La delegación de esta función causa la nulidad absoluta de las actuaciones."
    },
    {
        "ambito": "federal",
        "categoria": "Códigos Federales",
        "ley": "Código Penal Federal",
        "numero": "Artículo 7o. [Definición de Delito y Conducta]",
        "estadoNorma": "Vigente",
        "ultimaReforma": "Ref. DOF 2024",
        "texto": "Delito es el acto u omisión que sancionan las leyes penales. Las acciones u omisiones delictivas solamente pueden realizarse dolosa o culposamente.",
        "jurisprudencia": "Precedente SCJN: El principio de tipicidad exige una correspondencia exacta entre la conducta desplegada por el sujeto activo y los elementos del tipo penal descritos en la ley, prohibiéndose la aplicación por analogía."
    },
    {
        "ambito": "federal",
        "categoria": "Códigos Federales",
        "ley": "Código Penal Federal",
        "numero": "Artículo 15. [Causas de Exclusión del Delito]",
        "estadoNorma": "Vigente",
        "ultimaReforma": "Ref. DOF 2023",
        "texto": "El delito se excluye cuando: El hecho se realice sin intervención de la voluntad del agente; se demuestre la inexistencia de alguno de los elementos del tipo; se actúe en legítima defensa, por necesidad o bajo estricto cumplimiento de un deber...",
        "jurisprudencia": "Tesis Colegiada: Legítima Defensa. Los elementos de proporcionalidad y racionalidad de los medios empleados deben valorarse bajo una perspectiva de razonabilidad fáctica, analizando el contexto de peligro real e inminente en el que se encontraba el sujeto."
    },
    {
        "ambito": "federal",
        "categoria": "Códigos Federales",
        "ley": "Código Nacional de Procedimientos Penales",
        "numero": "Artículo 20. [Principio de Presunción de Inocencia]",
        "estadoNorma": "Vigente",
        "ultimaReforma": "Texto Unificado",
        "texto": "Toda persona se presume inocente y será tratada como tal en todas las etapas del procedimiento, mientras no se declare su responsabilidad mediante sentencia emitida por el Órgano jurisdiccional, en los términos señalados en este Código.",
        "jurisprudencia": "Jurisprudencia por Contradicción (SCJN): La presunción de inocencia opera en una triple vertiente en el sistema acusatorio: como regla de trato procesal, como regla probatoria (estándar de prueba más allá de toda duda razonable) y como regla conceptual de juicio."
    },
    {
        "ambito": "federal",
        "categoria": "Códigos Federales",
        "ley": "Código Nacional de Procedimientos Penales",
        "numero": "Artículo 211. [Etapas del Procedimiento Penal Acusatorio]",
        "estadoNorma": "Vigente",
        "ultimaReforma": "Texto Unificado",
        "texto": "El procedimiento penal comprende las siguientes etapas: I. La de investigación (inicial y complementaria); II. La intermedia o de preparación del juicio; III. La de Juicio (audiencia de debate, fallo y sentencia).",
        "jurisprudencia": "Pleno del Circuito: La etapa intermedia constituye las fronteras de depuración probatoria de la litis penal. Una vez clausurada mediante el auto de apertura a juicio oral, precluye el derecho de las partes para alegar violaciones procesales cometidas en la investigación."
    }
];