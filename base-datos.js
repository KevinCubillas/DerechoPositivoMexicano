// Base de datos oficial expandida: Derecho Positivo Mexicano
const articulosMundiales = [
    // =========================================================================
    // 1. ORDENAMIENTO FEDERAL: CONSTITUCIÓN (CPEUM)
    // =========================================================================
    {
        ambito: "federal",
        categoria: "Constitución",
        ley: "Constitución Política (CPEUM)",
        numero: "Artículo 1o. [Derechos Humanos y sus Garantías]",
        estadoNorma: "Vigente",
        ultimaReforma: "Ref. 2011",
        texto: "En los Estados Unidos Mexicanos todas las personas gozarán de los derechos humanos reconocidos en esta Constitución y en los tratados internacionales de los que el Estado Mexicano sea parte...",
        jurisprudencia: "Contradicción de Tesis 293/2011 (Pleno de la SCJN): Los derechos humanos de fuente internacional y constitucional integran un mismo bloque de constitucionalidad. Si existe una restricción expresa en la CPEUM, se debe estar a lo que mande el texto constitucional."
    },
    {
        ambito: "federal",
        categoria: "Constitución",
        ley: "Constitución Política (CPEUM)",
        numero: "Artículo 27. [Propiedad Originaria y Derecho Agrario]",
        estadoNorma: "Vigente",
        ultimaReforma: "Ref. 1992",
        texto: "La propiedad de las tierras y aguas comprendidas dentro de los límites del territorio nacional, corresponde originariamente a la Nación... Se reconoce la personalidad jurídica de los núcleos de población ejidales y comunales y se protege su propiedad sobre la tierra...",
        jurisprudencia: "Segunda Sala SCJN: La protección al patrimonio ejidal es de orden público. Procede la suplencia de la queja deficiente en favor de ejidatarios y comuneros de manera amplia en los juicios agrarios."
    },
    {
        ambito: "federal",
        categoria: "Constitución",
        ley: "Constitución Política (CPEUM)",
        numero: "Artículo 123. [Derecho al Trabajo]",
        estadoNorma: "Vigente",
        ultimaReforma: "Ref. 2017",
        texto: "Toda persona tiene derecho al trabajo digno y socialmente útil... El Congreso de la Unión deberá expedir leyes sobre el trabajo, las cuales regirán entre los obreros, jornaleros, empleados domésticos, artesanos y de una manera general, todo contrato de trabajo...",
        jurisprudencia: "Jurisprudencia SCJN (2017): La transición al nuevo modelo de justicia laboral extingue las Juntas de Conciliación y traslada la facultad jurisdiccional a los Tribunales Laborales del Poder Judicial, priorizando la instancia conciliatoria prejudicial."
    },

    // =========================================================================
    // 2. ORDENAMIENTO FEDERAL: LEYES GENERALES / MARCO (NUEVAS INCLUSIONES)
    // =========================================================================
    {
        ambito: "federal",
        categoria: "Leyes Generales / Marco",
        ley: "Ley General de Víctimas",
        numero: "Artículo 5. [Principios Rectores]",
        estadoNorma: "Vigente",
        ultimaReforma: "Ref. 2023",
        texto: "Esta ley se aplicará de conformidad con los principios de dignidad, buena fe, enfoque diferencial y especializado, máxima protección, no criminalización y victimización secundaria...",
        jurisprudencia: "Criterio de Tribunales Colegiados: El principio de máxima protección obliga a las autoridades a aplicar la interpretación más amplia que favorezca la reparación integral del daño de la víctima."
    },

    // =========================================================================
    // 3. ORDENAMIENTO FEDERAL: LEYES FEDERALES (AMPARO, TRABAJO, AGRARIA)
    // =========================================================================
    {
        ambito: "federal",
        categoria: "Leyes Federales",
        ley: "Ley de Amparo",
        numero: "Artículo 107. [Amparo Indirecto]",
        estadoNorma: "Vigente",
        ultimaReforma: "Ref. 2024",
        texto: "El amparo indirecto procede: I. Contra normas generales que por su sola entrada en vigor o con motivo del primer acto de su aplicación causen perjuicio al quejoso; II. Contra actos u omisiones que provengan de autoridades distintas de los tribunales judiciales, administrativos o del trabajo...",
        jurisprudencia: "Pleno de la SCJN: Interés Legítimo en el Amparo Indirecto. Requiere de una afectación jurídica indirecta pero real, derivada de una especial situación que el quejoso ocupa en el ordenamiento jurídico respecto al ecosistema o derechos difusos."
    },
    {
        ambito: "federal",
        categoria: "Leyes Federales",
        ley: "Ley Federal del Trabajo",
        numero: "Artículo 5o. [Estipulaciones Prohibidas e Irrenunciabilidad]",
        estadoNorma: "Vigente",
        ultimaReforma: "Ref. 2024",
        texto: "Las disposiciones de esta Ley son de orden público por lo que no producirá efecto legal... la estipulación que establezca: una jornada mayor que la permitida, una jornada inhumana, un salario inferior al mínimo o la renuncia de cualquier derecho...",
        jurisprudencia: "Tesis de Segunda Sala: El principio de irrenunciabilidad implica que cualquier convenio de liquidación o renuncia que contenga una cláusula lesiva a los derechos mínimos del trabajador carece de validez legal."
    },
    {
        ambito: "federal",
        categoria: "Leyes Federales",
        ley: "Ley Agraria",
        numero: "Artículo 14. [Calidad de Ejidatario]",
        estadoNorma: "Vigente",
        ultimaReforma: "Ref. 2022",
        texto: "La calidad de ejidatario se acredita: I. Con el certificado de derechos agrarios expedido por la autoridad competente; II. Con el certificado de derechos sobre tierras ejidales; o III. Con la sentencia o resolución relativa del Tribunal Agrario.",
        jurisprudencia: "Tribunales Colegiados en Materia Administrativa: La posesión material de una parcela ejidal no otorga por sí misma la calidad jurídica de ejidatario, requiriéndose forzosamente el reconocimiento de la Asamblea o la resolución judicial del Tribunal de la materia."
    },

    // =========================================================================
    // 4. ORDENAMIENTO FEDERAL: CÓDIGOS FEDERALES (NUEVO CÓDIGO NACIONAL NACIONAL)
    // =========================================================================
    {
        ambito: "federal",
        categoria: "Códigos Federales",
        ley: "Código Nacional de Procedimientos Civiles y Familiares",
        numero: "Artículo 2. [Principios del Procedimiento Oral]",
        estadoNorma: "Vigente",
        ultimaReforma: "Texto Unificado",
        texto: "El procedimiento civil y de justicia familiar se regirá bajo los principios de oralidad, inmediación, contradicción, concentración, continuidad, publicidad, perspectiva de género y el interés superior de la infancia.",
        jurisprudencia: "Primera Sala SCJN: El principio de inmediación exige de forma obligatoria e insustituible la presencia física y activa del juez en las audiencias orales; su ausencia produce la nulidad absoluta de todo lo actuado."
    },

    // =========================================================================
    // 5. TRATADOS INTERNACIONALES (DERECHOS HUMANOS Y TRABAJO)
    // =========================================================================
    {
        ambito: "internacional",
        categoria: "Derechos Humanos",
        ley: "Convención Americana sobre DDHH (Pacto de San José)",
        numero: "Artículo 8. [Garantías Judiciales]",
        estadoNorma: "Vigente",
        ultimaReforma: "Ratificado '81",
        texto: "Toda persona tiene derecho a ser oída, con las debidas garantías y dentro de un plazo razonable, por un juez o tribunal competente, independiente e imparcial, establecido con anterioridad por la ley...",
        jurisprudencia: "Corte IDH (Caso Radilla Pacheco): El control de convencionalidad vincula a todos los jueces mexicanos; estos deben contrastar las leyes domésticas con el Pacto de San José para inaplicar aquellas que vulneren los derechos humanos internacionales."
    },
    {
        ambito: "internacional",
        categoria: "Derecho Laboral / Social",
        ley: "Convenio 87 de la OIT (Libertad Sindical)",
        numero: "Artículo 2. [Derecho de Sindicación Autónoma]",
        estadoNorma: "Vigente",
        ultimaReforma: "Ratificado '50",
        texto: "Los trabajadores y los empleadores, sin ninguna distinción y sin autorización previa, tienen el derecho de constituir las organizaciones que estimen convenientes, así como el de afiliarse a estas organizaciones...",
        jurisprudencia: "Segunda Sala SCJN: La libertad sindical contempla tanto la vertiente positiva de libre asociación como la negativa, lo que significa que nadie puede ser coaccionado u obligado a formar parte de un sindicato para conservar su empleo."
    }
];
