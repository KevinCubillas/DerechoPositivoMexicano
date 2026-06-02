// Base de datos oficial para la plataforma de Derecho Positivo Mexicano
const articulosMundiales = [
    // ==========================================
    // ORDENAMIENTO FEDERAL: CONSTITUCIÓN (CPEUM)
    // ==========================================
    {
        ambito: "federal",
        categoria: "Constitución",
        ley: "Constitución Política (CPEUM)",
        numero: "Artículo 1o. [Derechos Humanos y sus Garantías]",
        estadoNorma: "Vigente",
        ultimaReforma: "Ref. 2011",
        texto: "En los Estados Unidos Mexicanos todas las personas gozarán de los derechos humanos reconocidos en esta Constitución y en los tratados internacionales de los que el Estado Mexicano sea parte, así como de las garantías para su protección, cuyo ejercicio no podrá restringirse ni suspenderse, salvo en los casos y bajo las condiciones que esta Constitución establece...",
        jurisprudencia: "Contradicción de Tesis 293/2011 (Pleno de la SCJN): Determina que los derechos humanos de fuente internacional y constitucional integran un mismo bloque de constitucionalidad, pero cuando en la Constitución haya una restricción expresa al ejercicio de un derecho, se debe estar a lo que manda el texto constitucional."
    },
    {
        ambito: "federal",
        categoria: "Constitución",
        ley: "Constitución Política (CPEUM)",
        numero: "Artículo 27. [Propiedad Originaria y Derecho Agrario]",
        estadoNorma: "Vigente",
        ultimaReforma: "Ref. 1992",
        texto: "La propiedad de las tierras y aguas comprendidas dentro de los límites del territorio nacional, corresponde originariamente a la Nación, la cual ha tenido y tiene el derecho de transmitir el dominio de ellas a los particulares, constituyendo la propiedad privada... Se reconoce la personalidad jurídica de los núcleos de población ejidales y comunales y se protege su propiedad sobre la tierra...",
        jurisprudencia: "Precedente Segunda Sala SCJN: La protección del derecho agrario e inmobiliario ejidal es de orden público e interés social. Los juicios ante los Tribunales Agrarios deben garantizar la suplencia de la queja a favor de ejidatarios y comuneros."
    },
    {
        ambito: "federal",
        categoria: "Constitución",
        ley: "Constitución Política (CPEUM)",
        numero: "Artículo 123. [Derecho al Trabajo]",
        estadoNorma: "Vigente",
        ultimaReforma: "Ref. 2017",
        texto: "Toda persona tiene derecho al trabajo digno y socialmente útil; al efecto, se promoverán la creación de empleos y la organización social de trabajo, conforme a la ley. El Congreso de la Unión, sin contravenir a las bases siguientes deberá expedir leyes sobre el trabajo, las cuales regirán entre los obreros, jornaleros, empleados domésticos, artesanos y de una manera general, todo contrato de trabajo...",
        jurisprudencia: "Tesis Jurisprudencial (Segunda Sala): La reforma constitucional de 2017 extinguió las Juntas de Conciliación y Arbitraje para transitar al nuevo modelo de Tribunales Laborales del Poder Judicial, exigiendo la conciliación prejudicial obligatoria como requisito de procedibilidad."
    },

    // ==========================================
    // ORDENAMIENTO FEDERAL: LEYES FEDERALES
    // ==========================================
    {
        ambito: "federal",
        categoria: "Leyes Federales",
        ley: "Ley Federal del Trabajo",
        numero: "Artículo 5o. [Estipulaciones Prohibidas]",
        estadoNorma: "Vigente",
        ultimaReforma: "Ref. 2024",
        texto: "Las disposiciones de esta Ley son de orden público por lo que no producirá efecto legal, ni impedirá el goce y el ejercicio de los derechos, sea escrita o verbal, la estipulación que establezca: una jornada mayor que la permitida por esta ley, jornadas inhumanas, un salario inferior al mínimo, o la renuncia de cualquier derecho laboral.",
        jurisprudencia: "Criterio de los Tribunales Colegiados: Principio de Irrenunciabilidad de Derechos Laborales. Cualquier convenio liquidatorio que vulnere los mínimos de ley del trabajador es nulo de pleno derecho, sin importar que haya sido firmado ante autoridad jurisdiccional."
    },

    // ==========================================
    // ORDENAMIENTOS ESTATALES (EJEMPLOS DE ESTADOS)
    // ==========================================
    {
        ambito: "estatal",
        subambito: "Ciudad de México",
        categoria: "Constitución Local",
        ley: "Constitución Política del Estado", // Mapeado al selector de la app
        numero: "Artículo 3o. [De los Principios Rectores en la CDMX]",
        estadoNorma: "Vigente",
        ultimaReforma: "Texto Original",
        texto: "La Ciudad de México adopta para su régimen interior la forma de gobierno republicano, representativo, democrático y laico. La soberanía reside esencialmente en su pueblo y todo poder público dimana de este.",
        jurisprudencia: "Acción de Inconstitucionalidad (SCJN): Las constituciones locales pueden ampliar el catálogo de derechos humanos, siempre y cuando no contravengan ni reduzcan los estándares fijados en la CPEUM."
    },

    // ==========================================
    // TRATADOS INTERNACIONALES (DERECHOS HUMANOS)
    // ==========================================
    {
        ambito: "internacional",
        categoria: "Derechos Humanos",
        ley: "Convención Americana sobre DDHH (Pacto de San José)",
        numero: "Artículo 8. [Garantías Judiciales]",
        estadoNorma: "Vigente",
        ultimaReforma: "Ratificado '81",
        texto: "Toda persona tiene derecho a ser oída, con las debidas garantías y dentro de un plazo razonable, por un juez o tribunal competente, independiente e imparcial, establecido con anterioridad por la ley, en la sustanciación de cualquier acusación penal formulada contra ella, o para la determinación de sus derechos y obligaciones de orden civil, laboral, fiscal o de cualquier otro carácter.",
        jurisprudencia: "Caso Radilla Pacheco vs. México (Corte IDH): Establece la obligatoriedad del control de convencionalidad ex officio para todas las autoridades judiciales del Estado Mexicano, debiendo armonizar las leyes internas con el Pacto de San José."
    },
    {
        ambito: "internacional",
        categoria: "Derecho Laboral / Social",
        ley: "Convenio 87 de la OIT (Libertad Sindical)",
        numero: "Artículo 2. [Derecho de Sindicación]",
        estadoNorma: "Vigente",
        ultimaReforma: "Ratificado '50",
        texto: "Los trabajadores y los empleadores, sin ninguna distinción y sin autorización previa, tienen el derecho de constituir las organizaciones que estimen convenientes, así como el de afiliarse a estas organizaciones, con la sola condición de observar los estatutos de las mismas.",
        jurisprudencia: "Tesis de Segunda Sala: El derecho a la libre sindicación ampara tanto la libertad positiva (asociarse) como la negativa (no asociarse o renunciar al sindicato), declarando inconstitucionales las antiguas cláusulas de exclusión por separación."
    }
];