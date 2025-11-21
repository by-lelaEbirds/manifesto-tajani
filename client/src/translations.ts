export type Language = "it" | "pt" | "en" | "es";

export type TranslationContent = {
  nav: {
    manifesto: string;
    demands: string;
    dossier: string;
    backHome: string;
  };
  hero: {
    title_prefix: string;
    title_highlight: string;
    subtitle: string;
    cta_manifesto: string;
    cta_dossier: string;
    cta_evidence: string;
  };
  intro: {
    title: string;
    text1: string;
    text2: string;
  };
  weapons: {
    title: string;
    item1_title: string;
    item1_desc: string;
    item2_title: string;
    item2_desc: string;
    item3_title: string;
    item3_desc: string;
    item4_title: string;
    item4_desc: string;
  };
  violations: {
    title: string;
    art3_title: string;
    art3_desc: string;
    art22_title: string;
    art22_desc: string;
    art35_title: string;
    art35_desc: string;
  };
  manifesto: {
    title: string;
    preamble_title: string;
    preamble_desc: string;
    fundament_title: string;
    fundament_desc1: string;
    fundament_desc2: string;
    distinction_title: string;
    distinction_desc: string;
  };
  demands: {
    title: string;
    item1_title: string;
    item1_desc: string;
    item2_title: string;
    item2_desc: string;
    item3_title: string;
    item3_desc: string;
    item4_title: string;
    item4_desc: string;
  };
  footer: {
    join: string;
    digital_resistance: string;
    subtitle: string;
    cta_button: string;
    disclaimer: string;
  };
};

export const translations: Record<Language, TranslationContent> = {
  it: {
    nav: {
      manifesto: "Manifesto",
      demands: "Esigenze",
      dossier: "Dossier Analitico",
      backHome: "Torna alla Home",
    },
    hero: {
      title_prefix: "Il Decreto Tajani",
      title_highlight: "È Incostituzionale",
      subtitle: "Un manifesto digitale di resistenza contro la violazione del Jus Sanguinis e l'espropriazione della cittadinanza italiana.",
      cta_manifesto: "Leggi il Manifesto",
      cta_dossier: "Dati e Analisi",
      cta_evidence: "Guarda la Prova",
    },
    intro: {
      title: "La Minaccia Imminente",
      text1: "Il Decreto-Legge n. 36/2025 (il Decreto Tajani) rappresenta una rottura fondamentale con il principio storico del Jus Sanguinis italiano.",
      text2: "Questo decreto attacca direttamente il diritto di sangue, negando la cittadinanza a milioni di discendenti di italiani e violando frontalmente gli Articoli 3, 22 e 35 della Costituzione della Repubblica Italiana.",
    },
    weapons: {
      title: "Le Quattro Armi della Distruzione",
      item1_title: "Limitazione Generazionale",
      item1_desc: "La trappola dell'esclusività disqualifica automaticamente quasi tutte le linee genealogiche oltre la prima generazione.",
      item2_title: "Punizione ai Figli Minori",
      item2_desc: "Spezza l'unità dello status civitatis della famiglia, costringendo i minori a trasferirsi in Italia per due anni.",
      item3_title: "Non-Automaticità",
      item3_desc: "Trasforma il diritto automatico di sangue in un processo condizionale, mutando il diritto in beneficio discrezionale.",
      item4_title: "Probatio Diabolica",
      item4_desc: "Inverte l'onere della prova, esigendo che il cittadino provi fatti negativi impossibili da provare.",
    },
    violations: {
      title: "Le Violazioni Costituzionali",
      art3_title: "Articolo 3: Violazione dell'Uguaglianza",
      art3_desc: "Il decreto crea cittadini di seconda categoria attraverso discriminazione geografica, temporale e familiare.",
      art22_title: "Articolo 22: Privazione Politica",
      art22_desc: "Il decreto esegue una privazione di massa della cittadinanza per motivi politici, disfarçato da riforma procedurale.",
      art35_title: "Articolo 35: Tradimento della Memoria",
      art35_desc: "Il decreto tradisce la promessa costituzionale di proteggere l'emigrazione italiana, sostituendo la cittadinanza con un permesso di lavoro.",
    },
    manifesto: {
      title: "Il Manifesto Completo",
      preamble_title: "Preambolo",
      preamble_desc: "Noi, cittadini italiani per diritto di sangue, dichiariamo che il Decreto-Legge n. 36/2025 è profondamente incostituzionale.",
      fundament_title: "I. Il Fondamento Perpetuo",
      fundament_desc1: "Il Jus Sanguinis non è una concessione dello Stato italiano. È un diritto acquisito a titolo originario alla nascita.",
      fundament_desc2: "La Corte di Cassazione ha qualificato questo diritto come soggettivo e imprescritibile. Non è una grazia.",
      distinction_title: "II. La Distinzione Cruciale",
      distinction_desc: "Il Decreto Tajani tenta illegittimamente di trasformare il riconoscimento (atto dichiarativo) in una concessione (atto costitutivo).",
    },
    demands: {
      title: "Le Nostre Esigenze Non Negoziabili",
      item1_title: "Ritiro Immediato",
      item1_desc: "Esigiamo il ritiro immediato e completo del Decreto-Legge n. 36/2025.",
      item2_title: "Protezione Costituzionale",
      item2_desc: "Esigiamo la reaffermazione del diritto Jus Sanguinis senza limiti generazionali.",
      item3_title: "Dialogo Trasparente",
      item3_desc: "Esigiamo un dialogo trasparente con le comunità di discendenti per riformare i consolati.",
      item4_title: "Giustizia Retroattiva",
      item4_desc: "Esigiamo riconoscimento retroattivo e compensazione per i diritti violati.",
    },
    footer: {
      join: "Unisciti alla",
      digital_resistance: "Resistenza Digitale",
      subtitle: "La tua voce è cruciale. Condividi questo manifesto e sostieni la causa.",
      cta_button: "Sostieni la Causa",
      disclaimer: "Non affiliato a partiti politici. Iniziativa civile indipendente.",
    },
  },
  pt: {
    nav: {
      manifesto: "Manifesto",
      demands: "Exigências",
      dossier: "Dossiê Analítico",
      backHome: "Voltar para Home",
    },
    hero: {
      title_prefix: "O Decreto Tajani",
      title_highlight: "É Inconstitucional",
      subtitle: "Um manifesto digital de resistência contra a violação do Jus Sanguinis e a expropriação da cidadania italiana.",
      cta_manifesto: "Leia o Manifesto",
      cta_dossier: "Dados e Análise",
      cta_evidence: "Veja a Prova",
    },
    intro: {
      title: "A Ameaça Iminente",
      text1: "O Decreto-Lei n. 36/2025 (o Decreto Tajani) representa uma ruptura fundamental com o princípio histórico do Jus Sanguinis italiano.",
      text2: "Este decreto ataca diretamente o direito de sangue, negando a cidadania a milhões de descendentes e violando frontalmente os Artigos 3, 22 e 35 da Constituição Italiana.",
    },
    weapons: {
      title: "As Quatro Armas da Destruição",
      item1_title: "Limitação Geracional",
      item1_desc: "A armadilha da exclusividade desqualifica automaticamente quase todas as linhas genealógicas além da primeira geração.",
      item2_title: "Punição aos Filhos Menores",
      item2_desc: "Quebra a unidade do status civitatis da família, forçando menores a se mudarem para a Itália por dois anos.",
      item3_title: "Não-Automaticidade",
      item3_desc: "Transforma o direito automático de sangue em um processo condicional, mutando o direito em benefício discricionário.",
      item4_title: "Probatio Diabolica",
      item4_desc: "Inverte o ônus da prova, exigindo que o cidadão prove fatos negativos impossíveis de provar.",
    },
    violations: {
      title: "As Violações Constitucionais",
      art3_title: "Artigo 3: Violação da Igualdade",
      art3_desc: "O decreto cria cidadãos de segunda classe através de discriminação geográfica, temporal e familiar.",
      art22_title: "Artigo 22: Privação Política",
      art22_desc: "Executa uma privação em massa da cidadania por motivos políticos, disfarçada de reforma processual.",
      art35_title: "Artigo 35: Traição da Memória",
      art35_desc: "Trai a promessa constitucional de proteger a emigração italiana, substituindo a cidadania por uma permissão de trabalho.",
    },
    manifesto: {
      title: "O Manifesto Completo",
      preamble_title: "Preâmbulo",
      preamble_desc: "Nós, cidadãos italianos por direito de sangue, declaramos que o Decreto-Lei n. 36/2025 é profundamente inconstitucional.",
      fundament_title: "I. O Fundamento Perpétuo",
      fundament_desc1: "O Jus Sanguinis não é uma concessão do Estado. É um direito adquirido a título originário no nascimento.",
      fundament_desc2: "A Corte de Cassação qualificou este direito como subjetivo e imprescritível. Não é um favor.",
      distinction_title: "II. A Distinção Crucial",
      distinction_desc: "O Decreto tenta transformar ilegitimamente o reconhecimento (ato declaratório) em concessão (ato constitutivo).",
    },
    demands: {
      title: "Nossas Exigências Inegociáveis",
      item1_title: "Retirada Imediata",
      item1_desc: "Exigimos a retirada imediata e completa do Decreto-Lei n. 36/2025.",
      item2_title: "Proteção Constitucional",
      item2_desc: "Exigimos a reafirmação do Jus Sanguinis sem limites geracionais.",
      item3_title: "Diálogo Transparente",
      item3_desc: "Exigimos diálogo transparente com as comunidades de descendentes para reformar os consulados.",
      item4_title: "Justiça Retroativa",
      item4_desc: "Exigimos reconhecimento retroativo e compensação pelos direitos violados.",
    },
    footer: {
      join: "Junte-se à",
      digital_resistance: "Resistência Digital",
      subtitle: "Sua voz é crucial. Compartilhe este manifesto e apoie a causa.",
      cta_button: "Apoie a Causa",
      disclaimer: "Não afiliado a partidos políticos. Iniciativa civil independente.",
    },
  },
  en: {
    nav: {
      manifesto: "Manifesto",
      demands: "Demands",
      dossier: "Analytic Dossier",
      backHome: "Back to Home",
    },
    hero: {
      title_prefix: "The Tajani Decree",
      title_highlight: "Is Unconstitutional",
      subtitle: "A digital manifesto of resistance against the violation of Jus Sanguinis and the expropriation of Italian citizenship.",
      cta_manifesto: "Read the Manifesto",
      cta_dossier: "Data & Analysis",
      cta_evidence: "Watch Evidence",
    },
    intro: {
      title: "The Imminent Threat",
      text1: "Decree-Law n. 36/2025 (the Tajani Decree) represents a fundamental break with the historical principle of Italian Jus Sanguinis.",
      text2: "This decree directly attacks blood rights, denying citizenship to millions of descendants and frontally violating Articles 3, 22, and 35 of the Italian Constitution.",
    },
    weapons: {
      title: "The Four Weapons of Destruction",
      item1_title: "Generational Limitation",
      item1_desc: "The exclusivity trap automatically disqualifies almost all genealogical lines beyond the first generation.",
      item2_title: "Punishment of Minors",
      item2_desc: "Breaks the unity of family status, forcing minors to move to Italy for two years.",
      item3_title: "Non-Automaticity",
      item3_desc: "Transforms the automatic blood right into a conditional process, mutating the right into a discretionary benefit.",
      item4_title: "Probatio Diabolica",
      item4_desc: "Reverses the burden of proof, requiring the citizen to prove negative facts that are impossible to prove.",
    },
    violations: {
      title: "Constitutional Violations",
      art3_title: "Article 3: Equality Violation",
      art3_desc: "Creates second-class citizens through geographical, temporal, and familial discrimination.",
      art22_title: "Article 22: Political Deprivation",
      art22_desc: "Executes a mass deprivation of citizenship for political reasons, disguised as procedural reform.",
      art35_title: "Article 35: Betrayal of Memory",
      art35_desc: "Betrays the constitutional promise to protect Italian emigration, replacing citizenship with a work permit.",
    },
    manifesto: {
      title: "The Full Manifesto",
      preamble_title: "Preamble",
      preamble_desc: "We, Italian citizens by blood right, declare that Decree-Law n. 36/2025 is deeply unconstitutional.",
      fundament_title: "I. The Perpetual Foundation",
      fundament_desc1: "Jus Sanguinis is not a concession by the State. It is a right acquired originally at birth.",
      fundament_desc2: "The Court of Cassation has qualified this right as subjective and imprescriptible. It is not a favor.",
      distinction_title: "II. The Crucial Distinction",
      distinction_desc: "The Decree illegitimately attempts to transform recognition (declaratory act) into concession (constitutive act).",
    },
    demands: {
      title: "Our Non-Negotiable Demands",
      item1_title: "Immediate Withdrawal",
      item1_desc: "We demand the immediate and complete withdrawal of Decree-Law n. 36/2025.",
      item2_title: "Constitutional Protection",
      item2_desc: "We demand the reaffirmation of Jus Sanguinis without generational limits.",
      item3_title: "Transparent Dialogue",
      item3_desc: "We demand transparent dialogue with descendant communities to reform consulates.",
      item4_title: "Retroactive Justice",
      item4_desc: "We demand retroactive recognition and compensation for violated rights.",
    },
    footer: {
      join: "Join the",
      digital_resistance: "Digital Resistance",
      subtitle: "Your voice is crucial. Share this manifesto and support the cause.",
      cta_button: "Support the Cause",
      disclaimer: "Not affiliated with political parties. Independent civil initiative.",
    },
  },
  es: {
    nav: {
      manifesto: "Manifiesto",
      demands: "Exigencias",
      dossier: "Dossier Analítico",
      backHome: "Volver al Inicio",
    },
    hero: {
      title_prefix: "El Decreto Tajani",
      title_highlight: "Es Inconstitucional",
      subtitle: "Un manifiesto digital de resistencia contra la violación del Jus Sanguinis y la expropiación de la ciudadanía italiana.",
      cta_manifesto: "Leer el Manifiesto",
      cta_dossier: "Datos y Análisis",
      cta_evidence: "Ver Evidencia",
    },
    intro: {
      title: "La Amenaza Inminente",
      text1: "El Decreto-Ley n. 36/2025 (el Decreto Tajani) representa una ruptura fundamental con el principio histórico del Jus Sanguinis italiano.",
      text2: "Este decreto ataca directamente el derecho de sangre, negando la ciudadanía a millones de descendientes y violando frontalmente los Artículos 3, 22 y 35 de la Constitución Italiana.",
    },
    weapons: {
      title: "Las Cuatro Armas de Destrucción",
      item1_title: "Limitación Generacional",
      item1_desc: "La trampa de la exclusividad descalifica automáticamente casi todas las líneas genealógicas más allá de la primera generación.",
      item2_title: "Castigo a los Hijos Menores",
      item2_desc: "Rompe la unidad del status civitatis de la familia, obligando a los menores a trasladarse a Italia por dos años.",
      item3_title: "No Automaticidad",
      item3_desc: "Transforma el derecho automático de sangre en un proceso condicional, mutando el derecho en beneficio discrecional.",
      item4_title: "Probatio Diabolica",
      item4_desc: "Invierte la carga de la prueba, exigiendo que el ciudadano pruebe hechos negativos imposibles de probar.",
    },
    violations: {
      title: "Las Violaciones Constitucionales",
      art3_title: "Artículo 3: Violación de la Igualdad",
      art3_desc: "Crea ciudadanos de segunda clase a través de discriminación geográfica, temporal y familiar.",
      art22_title: "Artículo 22: Privación Política",
      art22_desc: "Ejecuta una privación masiva de la ciudadanía por motivos políticos, disfrazada de reforma procesal.",
      art35_title: "Artículo 35: Traición de la Memoria",
      art35_desc: "Traiciona la promesa constitucional de proteger la emigración italiana, sustituyendo la ciudadanía por un permiso de trabajo.",
    },
    manifesto: {
      title: "El Manifiesto Completo",
      preamble_title: "Preámbulo",
      preamble_desc: "Nosotros, ciudadanos italianos por derecho de sangre, declaramos que el Decreto-Ley n. 36/2025 es profundamente inconstitucional.",
      fundament_title: "I. El Fundamento Perpetuo",
      fundament_desc1: "El Jus Sanguinis no es una concesión del Estado. Es un derecho adquirido a título originario al nacer.",
      fundament_desc2: "La Corte de Casación ha calificado este derecho como subjetivo e imprescriptible. No es un favor.",
      distinction_title: "II. La Distinción Crucial",
      distinction_desc: "El Decreto intenta transformar ilegítimamente el reconocimiento (acto declarativo) en concesión (acto constitutivo).",
    },
    demands: {
      title: "Nuestras Exigencias Innegociables",
      item1_title: "Retirada Inmediata",
      item1_desc: "Exigimos la retirada inmediata y completa del Decreto-Ley n. 36/2025.",
      item2_title: "Protección Constitucional",
      item2_desc: "Exigimos la reafirmación del Jus Sanguinis sin límites generacionales.",
      item3_title: "Diálogo Transparente",
      item3_desc: "Exigimos diálogo transparente con las comunidades de descendientes para reformar los consulados.",
      item4_title: "Justicia Retroactiva",
      item4_desc: "Exigimos reconocimiento retroactivo y compensación por los derechos violados.",
    },
    footer: {
      join: "Únete a la",
      digital_resistance: "Resistencia Digital",
      subtitle: "Tu voz es crucial. Comparte este manifiesto y apoya la causa.",
      cta_button: "Apoya la Causa",
      disclaimer: "No afiliado a partidos políticos. Iniciativa civil independiente.",
    },
  },
};
