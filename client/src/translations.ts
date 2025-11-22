export type Language = "it" | "pt" | "en" | "es";

export type TranslationContent = {
  nav: {
    manifesto: string;
    demands: string;
    dossier: string;
    backHome: string;
    evidence_btn: string;
    analysis_btn: string;
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
  dossier: {
    label: string;
    title_line1: string;
    title_line2: string;
    quote: string;
    section1_title: string;
    section1_text1: string;
    section1_text2: string;
    section2_title: string;
    section2_intro: string;
    video_label: string;
    video_protocol: string;
    video_quote: string;
    video_analysis: string;
    card_albania_title: string;
    card_albania_text: string;
    card_tax_title: string;
    card_tax_text: string;
    section3_title: string;
    section3_card_title: string;
    section3_text: string;
    section3_subtext: string;
    section3_video_label: string;
    section3_video_quote: string;
    section3_video_btn: string;
    section4_title: string;
    section4_text1: string;
    section4_text2: string;
    section4_point_a_title: string;
    section4_point_a_desc: string;
    section4_point_b_title: string;
    section4_point_b_desc: string;
    section5_title: string;
    section5_text1: string;
    section5_text2: string;
    conclusion_title: string;
    conclusion_text: string;
    disclaimer_title: string;
    disclaimer_text: string;
  };
  evidence: {
    label: string;
    title_line1: string;
    title_line2: string;
    subtitle: string;
    video_source: string;
    section1_title: string;
    section1_text: string;
    section1_box_title: string;
    section1_box_quote: string;
    section1_box_analysis: string;
    comparison_title: string;
    gaza_title: string;
    gaza_p1: string;
    gaza_p2: string;
    gaza_p3: string;
    gaza_p4: string;
    diaspora_title: string;
    diaspora_p1: string;
    diaspora_p2: string;
    diaspora_p3: string;
    diaspora_p4: string;
    cta_read_dossier: string;
  };
};

export const translations: Record<Language, TranslationContent> = {
  it: {
    nav: {
      manifesto: "Manifesto",
      demands: "Esigenze",
      dossier: "Dossier Analitico",
      backHome: "Torna alla Home",
      evidence_btn: "Video Prova",
      analysis_btn: "Analisi Dati",
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
      distinction_title: "II. La Distinzione Crucial",
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
    dossier: {
      label: "Rapporto Confidenziale",
      title_line1: "LA DOTTRINA",
      title_line2: "TAJANI",
      quote: "\"Un'analisi forense dell'Architettura della Decezione: come la Farnesina finanzia regimi autoritari mentre dichiara guerra alla diaspora italiana.\"",
      section1_title: "Il Calcolo Cinico",
      section1_text1: "L'Italia si trova a un bivio esistenziale. Stretta tra un inverno demografico senza precedenti e una pressione migratoria strutturale, la leadership di Antonio Tajani ha operato una scelta di campo netta, crudele e non dichiarata: il sangue antico non basta più.",
      section1_text2: "In questo nuovo modello di \"Nazione S.p.A.\", il cittadino non è più chi condivide la storia e l'anima della nazione, ma chi è \"funzionale\" al mercato. I figli della diaspora sono stati declassati da \"fratelli\" a \"passività di bilancio\".",
      section2_title: "Il \"Bancomat\" della Farnesina",
      section2_intro: "Mentre i nostri consolati in Sud America crollano per mancanza di fondi, Tajani ha trasformato il Ministero degli Esteri in un ente pagatore per regimi instabili. La strategia è chiara: finanziare l'esterno per bloccare l'interno.",
      video_label: "Archivio Video: Agenzia Vista",
      video_protocol: "PROTOCOLLO TUNISIA",
      video_quote: "\"Il memorandum... non riguarda solo la gestione dei flussi migratori, è un investimento nella stabilità e nella prosperità condivisa...\"",
      video_analysis: "ANALISI: La \"stabilità\" citata si traduce nel finanziamento di guardie costiere, mentre i fondi per la \"prosperità condivisa\" vengono negati ai consolati italiani.",
      card_albania_title: "L'Ipocrisia Albanese: €160 Milioni",
      card_albania_text: "Il Ministro Piantedosi ha confermato che i centri in Albania costano 160 milioni di euro all'anno. Un'operazione di facciata costosissima.",
      card_tax_title: "La Tassa della Vergogna: €600",
      card_tax_text: "Mentre regaliamo motovedette alla Tunisia, Tajani vuole raddoppiare la tassa di cittadinanza per i discendenti a 600 euro.",
      section3_title: "Sicurezza Nazionale Compromessa",
      section3_card_title: "Dossier Click Day",
      section3_text: "La narrazione di \"legge e ordine\" è crollata. Il sistema \"Click Day\" per i visti di lavoro è stato infiltrato dalla criminalità organizzata.",
      section3_subtext: "Non lo diciamo noi, lo ha ammesso il Governo stesso. È una falla di sicurezza nazionale.",
      section3_video_label: "Video Testimonianza (Fonte: Il Sole 24 Ore)",
      section3_video_quote: "\"La criminalità organizzata si è infiltrata nella gestione delle domande...\"",
      section3_video_btn: "Guarda la Confessione",
      section4_title: "L'Arma \"Ius Italiae\"",
      section4_text1: "La proposta di riforma \"Ius Italiae\" di Forza Italia non è una riforma. È una demolizione controllata della Legge 91/1992.",
      section4_text2: "Tajani giustifica questo attacco con il mito insultante del \"Turismo del Passaporto\".",
      section4_point_a_title: "Il Limite della 2ª Generazione",
      section4_point_a_desc: "Se il tuo bisnonno era italiano, sei fuori. Cancellazione retroattiva di un diritto di nascita.",
      section4_point_b_title: "Abolizione della Regola 1861",
      section4_point_b_desc: "Si vuole cancellare la storia unitaria d'Italia, negando la cittadinanza a chi discende dai fondatori della patria.",
      section5_title: "Il Cavallo di Troia: \"Ius Scholae\"",
      section5_text1: "Mentre chiude la porta al sangue, Tajani spalanca quella dello Ius Scholae. La proposta: cittadinanza dopo un ciclo scolastico.",
      section5_text2: "Con proiezioni che indicano presto 1 milione di studenti stranieri, lo Ius Scholae rischia di diventare uno strumento di alterazione demografica irreversibile.",
      conclusion_title: "Conclusione",
      conclusion_text: "Siamo di fronte a un'operazione di ingegneria sociale. Tajani e i suoi alleati tecnocrati hanno deciso che il futuro dell'Italia non passa per San Paolo o Buenos Aires, ma per Tunisi e Islamabad.",
      disclaimer_title: "Dichiarazione di Indipendenza",
      disclaimer_text: "Questo sito e questo dossier NON hanno alcun finanziamento politico. Non siamo legati a partiti. Siamo cittadini, discendenti e patrioti profondamente delusi.",
    },
    evidence: {
      label: "Prova Forense Acquisita",
      title_line1: "La Narrazione",
      title_line2: "vs. La Realtà",
      subtitle: "Mentre i nostri consolati chiudono, i corridoi aerei si aprono. Guarda con i tuoi occhi il doppio standard del Vicepremier.",
      video_source: "FONTE: Canale Ufficiale Ministro Tajani (Ottobre 2025)",
      section1_title: "L'Anomalia Demografica",
      section1_text: "Osservate attentamente i minuti 0:04 e 0:08. Il governo parla di \"giovani studenti\", ma le immagini rivelano uomini in età avanzata a bordo di voli umanitari finanziati dalle tasse italiane.",
      section1_box_title: "Contraddizione Logica",
      section1_box_quote: "\"L'obiettivo è formare la futura classe dirigente...\" — Antonio Tajani",
      section1_box_analysis: "Analisi Tattica: Se l'Italia soffre di un \"inverno demografico\", perché importiamo uomini anziani mentre espelliamo burocraticamente i giovani discendenti sudamericani?",
      comparison_title: "Due Pesi, Due Misure",
      gaza_title: "Il Privilegio Gaza",
      gaza_p1: "Voli di Stato gratuiti (pagati da noi).",
      gaza_p2: "Accoglienza personale del Ministro.",
      gaza_p3: "Accesso diretto a 22 Università.",
      gaza_p4: "Nessun requisito di lingua o sangue.",
      diaspora_title: "La Punizione Diaspora",
      diaspora_p1: "12 anni di attesa per un timbro.",
      diaspora_p2: "Insultati come \"Turisti\".",
      diaspora_p3: "Tasse raddoppiate a €600.",
      diaspora_p4: "Minaccia di cancellazione dei diritti.",
      cta_read_dossier: "LEGGI IL DOSSIER COMPLETO",
    }
  },
  pt: {
    nav: {
      manifesto: "Manifesto",
      demands: "Exigências",
      dossier: "Dossiê Analítico",
      backHome: "Voltar para Home",
      evidence_btn: "Vídeo Prova",
      analysis_btn: "Análise de Dados",
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
      fundament_desc1: "O Jus Sanguinis não é uma concessão do Estado. É um direito adquirido a título originario no nascimento.",
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
    dossier: {
      label: "Relatório Confidencial",
      title_line1: "A DOUTRINA",
      title_line2: "TAJANI",
      quote: "\"Uma análise forense da Arquitetura da Decepção: como a Farnesina financia regimes autoritários enquanto declara guerra à diáspora italiana.\"",
      section1_title: "O Cálculo Cínico",
      section1_text1: "A Itália encontra-se numa encruzilhada existencial. Pressionada entre um inverno demográfico sem precedentes e uma pressão migratória estrutural, a liderança de Tajani fez uma escolha clara: o sangue antigo não basta mais.",
      section1_text2: "Neste novo modelo de \"Nação S.p.A.\", o cidadão não é mais quem compartilha a história da nação, mas quem é \"funcional\" ao mercado. Os filhos da diáspora foram rebaixados de \"irmãos\" para \"passivos orçamentários\".",
      section2_title: "O \"Caixa Eletrônico\" da Farnesina",
      section2_intro: "Enquanto nossos consulados na América do Sul colapsam por falta de fundos, Tajani transformou o Ministério das Relações Exteriores em um pagador para regimes instáveis.",
      video_label: "Arquivo Vídeo: Agência Vista",
      video_protocol: "PROTOCOLO TUNÍSIA",
      video_quote: "\"O memorando... não diz respeito apenas à gestão dos fluxos migratórios, é um investimento na estabilidade...\"",
      video_analysis: "ANÁLISE: A \"estabilidade\" citada traduz-se no financiamento de guardas costeiras, enquanto os fundos são negados aos consulados italianos.",
      card_albania_title: "A Hipocrisia Albanesa: €160 Milhões",
      card_albania_text: "O Ministro Piantedosi confirmou que os centros na Albânia custam 160 milhões de euros por ano. Uma operação de fachada caríssima.",
      card_tax_title: "A Taxa da Vergonha: €600",
      card_tax_text: "Enquanto damos barcos de patrulha à Tunísia, Tajani quer dobrar a taxa de cidadania para os descendentes para 600 euros.",
      section3_title: "Segurança Nacional Comprometida",
      section3_card_title: "Dossiê Click Day",
      section3_text: "A narrativa de \"lei e ordem\" colapsou. O sistema \"Click Day\" para vistos de trabalho foi infiltrado pelo crime organizado.",
      section3_subtext: "Não somos nós que dizemos, o próprio Governo admitiu. É uma falha de segurança nacional.",
      section3_video_label: "Vídeo Testemunho (Fonte: Il Sole 24 Ore)",
      section3_video_quote: "\"O crime organizado infiltrou-se na gestão dos pedidos...\"",
      section3_video_btn: "Assista à Confissão",
      section4_title: "A Arma \"Ius Italiae\"",
      section4_text1: "A proposta de reforma \"Ius Italiae\" não é uma reforma. É uma demolição controlada da Lei 91/1992.",
      section4_text2: "Tajani justifica este ataque com o mito insultuoso do \"Turismo do Passaporte\".",
      section4_point_a_title: "O Limite da 2ª Geração",
      section4_point_a_desc: "Se o seu bisavô era italiano, você está fora. Cancelamento retroativo de um direito de nascença.",
      section4_point_b_title: "Abolição da Regra 1861",
      section4_point_b_desc: "Querem apagar a história unitária da Itália, negando a cidadania a quem descende dos fundadores da pátria.",
      section5_title: "O Cavalo de Troia: \"Ius Scholae\"",
      section5_text1: "Enquanto fecha a porta ao sangue, Tajani escancara a do Ius Scholae. A proposta: cidadania após um ciclo escolar.",
      section5_text2: "Com projeções indicando em breve 1 milhão de estudantes estrangeiros, o Ius Scholae arrisca tornar-se um instrumento de alteração demográfica irreversível.",
      conclusion_title: "Conclusão",
      conclusion_text: "Estamos diante de uma operação de engenharia social. Tajani e seus aliados tecnocratas decidiram que o futuro da Itália não passa por São Paulo ou Buenos Aires, mas por Túnis e Islamabad.",
      disclaimer_title: "Declaração de Independência",
      disclaimer_text: "Este site e este dossiê NÃO têm financiamento político. Não somos ligados a partidos. Somos cidadãos, descendentes e patriotas profundamente desiludidos.",
    },
    evidence: {
      label: "Prova Forense Adquirida",
      title_line1: "A Narrativa",
      title_line2: "vs. A Realidade",
      subtitle: "Enquanto nossos consulados fecham, os corredores aéreos se abrem. Veja com seus próprios olhos o duplo padrão do Vice-primeiro-ministro.",
      video_source: "FONTE: Canal Oficial Ministro Tajani (Outubro 2025)",
      section1_title: "A Anomalia Demográfica",
      section1_text: "Observe atentamente os minutos 0:04 e 0:08. O governo fala de \"jovens estudantes\", mas as imagens revelam homens em idade avançada a bordo de voos humanitários financiados pelos impostos italianos.",
      section1_box_title: "Contradição Lógica",
      section1_box_quote: "\"O objetivo é formar a futura classe dirigente...\" — Antonio Tajani",
      section1_box_analysis: "Análise Tática: Se a Itália sofre de um \"inverno demográfico\", por que importamos homens idosos enquanto expulsamos burocraticamente os jovens descendentes sul-americanos?",
      comparison_title: "Dois Pesos, Duas Medidas",
      gaza_title: "O Privilégio Gaza",
      gaza_p1: "Voos de Estado gratuitos (pagos por nós).",
      gaza_p2: "Recepção pessoal do Ministro.",
      gaza_p3: "Acesso direto a 22 Universidades.",
      gaza_p4: "Nenhum requisito de língua ou sangue.",
      diaspora_title: "A Punição Diáspora",
      diaspora_p1: "12 anos de espera por um carimbo.",
      diaspora_p2: "Insultados como \"Turistas\".",
      diaspora_p3: "Taxas dobradas para €600.",
      diaspora_p4: "Ameaça de cancelamento de direitos.",
      cta_read_dossier: "LEIA O DOSSIÊ COMPLETO",
    }
  },
  en: {
    nav: {
      manifesto: "Manifesto",
      demands: "Demands",
      dossier: "Analytic Dossier",
      backHome: "Back to Home",
      evidence_btn: "Video Evidence",
      analysis_btn: "Data Analysis",
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
    dossier: {
      label: "Confidential Report",
      title_line1: "THE TAJANI",
      title_line2: "DOCTRINE",
      quote: "\"A forensic analysis of the Architecture of Deception: how the Foreign Ministry funds authoritarian regimes while declaring war on the Italian diaspora.\"",
      section1_title: "The Cynical Calculation",
      section1_text1: "Italy is at an existential crossroads. Squeezed between unprecedented demographic winter and structural migratory pressure, Tajani's leadership has made a clear choice: ancient blood is no longer enough.",
      section1_text2: "In this new model of \"Nation Inc.\", the citizen is no longer one who shares the nation's history, but one who is \"functional\" to the market. Diaspora children have been downgraded from \"brothers\" to \"budget liabilities\".",
      section2_title: "The Foreign Ministry's ATM",
      section2_intro: "While our consulates in South America collapse from lack of funds, Tajani has transformed the Foreign Ministry into a paymaster for unstable regimes.",
      video_label: "Video Archive: Vista Agency",
      video_protocol: "TUNISIA PROTOCOL",
      video_quote: "\"The memorandum... is not just about migration management, it is an investment in stability...\"",
      video_analysis: "ANALYSIS: The cited \"stability\" translates to funding coast guards, while funds are denied to Italian consulates.",
      card_albania_title: "The Albanian Hypocrisy: €160 Million",
      card_albania_text: "Minister Piantedosi confirmed that centers in Albania cost 160 million euros per year. A very expensive facade operation.",
      card_tax_title: "The Tax of Shame: €600",
      card_tax_text: "While we gift patrol boats to Tunisia, Tajani wants to double the citizenship tax for descendants to 600 euros.",
      section3_title: "National Security Compromised",
      section3_card_title: "Click Day Dossier",
      section3_text: "The \"law and order\" narrative has collapsed. The \"Click Day\" system for work visas was infiltrated by organized crime.",
      section3_subtext: "We don't say it, the Government itself admitted it. It is a national security breach.",
      section3_video_label: "Video Testimony (Source: Il Sole 24 Ore)",
      section3_video_quote: "\"Organized crime infiltrated the application management...\"",
      section3_video_btn: "Watch the Confession",
      section4_title: "The \"Ius Italiae\" Weapon",
      section4_text1: "Forza Italia's \"Ius Italiae\" reform proposal is not a reform. It is a controlled demolition of Law 91/1992.",
      section4_text2: "Tajani justifies this attack with the insulting myth of \"Passport Tourism\".",
      section4_point_a_title: "The 2nd Generation Limit",
      section4_point_a_desc: "If your great-grandfather was Italian, you are out. Retroactive cancellation of a birthright.",
      section4_point_b_title: "Abolition of the 1861 Rule",
      section4_point_b_desc: "They want to erase Italy's unitary history, denying citizenship to those descending from the fatherland's founders.",
      section5_title: "The Trojan Horse: \"Ius Scholae\"",
      section5_text1: "While closing the door to blood, Tajani throws open the one to Ius Scholae. The proposal: citizenship after one school cycle.",
      section5_text2: "With projections indicating 1 million foreign students soon, Ius Scholae risks becoming an irreversible tool of demographic alteration.",
      conclusion_title: "Conclusion",
      conclusion_text: "We are facing a social engineering operation. Tajani and his technocrat allies have decided that Italy's future does not pass through São Paulo or Buenos Aires, but through Tunis and Islamabad.",
      disclaimer_title: "Declaration of Independence",
      disclaimer_text: "This site and dossier have NO political funding. We are not linked to parties. We are deeply disappointed citizens, descendants, and patriots.",
    },
    evidence: {
      label: "Forensic Evidence Acquired",
      title_line1: "The Narrative",
      title_line2: "vs. Reality",
      subtitle: "While our consulates close, air corridors open. See with your own eyes the Deputy Premier's double standard.",
      video_source: "SOURCE: Official Channel Minister Tajani (October 2025)",
      section1_title: "The Demographic Anomaly",
      section1_text: "Watch closely at minutes 0:04 and 0:08. The government speaks of \"young students\", but images reveal elderly men aboard humanitarian flights funded by Italian taxes.",
      section1_box_title: "Logical Contradiction",
      section1_box_quote: "\"The goal is to train the future ruling class...\" — Antonio Tajani",
      section1_box_analysis: "Tactical Analysis: If Italy suffers from a \"demographic winter\", why do we import elderly men while bureaucratically expelling young South American descendants?",
      comparison_title: "Double Standards",
      gaza_title: "The Gaza Privilege",
      gaza_p1: "Free State flights (paid by us).",
      gaza_p2: "Personal welcome by the Minister.",
      gaza_p3: "Direct access to 22 Universities.",
      gaza_p4: "No language or blood requirements.",
      diaspora_title: "The Diaspora Punishment",
      diaspora_p1: "12 years waiting for a stamp.",
      diaspora_p2: "Insulted as \"Tourists\".",
      diaspora_p3: "Taxes doubled to €600.",
      diaspora_p4: "Threat of rights cancellation.",
      cta_read_dossier: "READ FULL DOSSIER",
    }
  },
  es: {
    nav: {
      manifesto: "Manifiesto",
      demands: "Exigencias",
      dossier: "Dossier Analítico",
      backHome: "Volver al Inicio",
      evidence_btn: "Video Evidencia",
      analysis_btn: "Análisis de Datos",
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
    dossier: {
      label: "Informe Confidencial",
      title_line1: "LA DOCTRINA",
      title_line2: "TAJANI",
      quote: "\"Un análisis forense de la Arquitectura del Engaño: cómo la Farnesina financia regímenes autoritarios mientras declara la guerra a la diáspora italiana.\"",
      section1_title: "El Cálculo Cínico",
      section1_text1: "Italia se encuentra en una encrucijada existencial. Atrapada entre un invierno demográfico sin precedentes y una presión migratoria estructural, el liderazgo de Tajani ha tomado una decisión clara: la sangre antigua ya no es suficiente.",
      section1_text2: "En este nuevo modelo de \"Nación S.A.\", el ciudadano ya no es quien comparte la historia de la nación, sino quien es \"funcional\" al mercado. Los hijos de la diáspora han sido degradados de \"hermanos\" a \"pasivos presupuestarios\".",
      section2_title: "El \"Cajero Automático\" de la Farnesina",
      section2_intro: "Mientras nuestros consulados en Sudamérica colapsan por falta de fondos, Tajani ha transformado el Ministerio de Asuntos Exteriores en un pagador para regímenes inestables.",
      video_label: "Archivo de Video: Agencia Vista",
      video_protocol: "PROTOCOLO TÚNEZ",
      video_quote: "\"El memorando... no se trata solo de la gestión de flujos migratorios, es una inversión en estabilidad...\"",
      video_analysis: "ANÁLISIS: La \"estabilidad\" citada se traduce en financiación de guardias costeras, mientras se niegan fondos a los consulados italianos.",
      card_albania_title: "La Hipocresía Albanesa: €160 Millones",
      card_albania_text: "El Ministro Piantedosi confirmó que los centros en Albania cuestan 160 millones de euros al año. Una operación de fachada carísima.",
      card_tax_title: "El Impuesto de la Vergüenza: €600",
      card_tax_text: "Mientras regalamos lanchas patrulleras a Túnez, Tajani quiere duplicar el impuesto de ciudadanía para descendientes a 600 euros.",
      section3_title: "Seguridad Nacional Comprometida",
      section3_card_title: "Dossier Click Day",
      section3_text: "La narrativa de \"ley y orden\" ha colapsado. El sistema \"Click Day\" para visas de trabajo fue infiltrado por el crimen organizado.",
      section3_subtext: "No lo decimos nosotros, el propio Gobierno lo admitió. Es una brecha de seguridad nacional.",
      section3_video_label: "Video Testimonio (Fuente: Il Sole 24 Ore)",
      section3_video_quote: "\"El crimen organizado se infiltró en la gestión de solicitudes...\"",
      section3_video_btn: "Ver la Confesión",
      section4_title: "El Arma \"Ius Italiae\"",
      section4_text1: "La propuesta de reforma \"Ius Italiae\" no es una reforma. Es una demolición controlada de la Ley 91/1992.",
      section4_text2: "Tajani justifica este ataque con el mito insultante del \"Turismo de Pasaporte\".",
      section4_point_a_title: "El Límite de la 2ª Generación",
      section4_point_a_desc: "Si tu bisabuelo era italiano, estás fuera. Cancelación retroactiva de un derecho de nacimiento.",
      section4_point_b_title: "Abolición de la Regla 1861",
      section4_point_b_desc: "Quieren borrar la historia unitaria de Italia, negando la ciudadanía a quienes descienden de los fundadores de la patria.",
      section5_title: "El Caballo de Troya: \"Ius Scholae\"",
      section5_text1: "Mientras cierra la puerta a la sangre, Tajani abre de par en par la del Ius Scholae. La propuesta: ciudadanía tras un ciclo escolar.",
      section5_text2: "Con proyecciones que indican pronto 1 millón de estudiantes extranjeros, el Ius Scholae corre el riesgo de convertirse en una herramienta de alteración demográfica irreversible.",
      conclusion_title: "Conclusión",
      conclusion_text: "Estamos ante una operación de ingeniería social. Tajani y sus aliados tecnócratas han decidido que el futuro de Italia no pasa por São Paulo o Buenos Aires, sino por Túnez e Islamabad.",
      disclaimer_title: "Declaración de Independencia",
      disclaimer_text: "Este sitio y este dossier NO tienen financiación política. No estamos vinculados a partidos. Somos ciudadanos, descendientes y patriotas profundamente decepcionados.",
    },
    evidence: {
      label: "Prueba Forense Adquirida",
      title_line1: "La Narrativa",
      title_line2: "vs. La Realidad",
      subtitle: "Mientras nuestros consulados cierran, los corredores aéreos se abren. Mira con tus propios ojos el doble rasero del Viceprimer Ministro.",
      video_source: "FUENTE: Canal Oficial Ministro Tajani (Octubre 2025)",
      section1_title: "La Anomalía Demográfica",
      section1_text: "Observa atentamente los minutos 0:04 y 0:08. El gobierno habla de \"jóvenes estudiantes\", pero las imágenes revelan hombres de edad avanzada a bordo de vuelos humanitarios financiados por impuestos italianos.",
      section1_box_title: "Contradicción Lógica",
      section1_box_quote: "\"El objetivo es formar la futura clase dirigente...\" — Antonio Tajani",
      section1_box_analysis: "Análisis Táctico: Si Italia sufre un \"invierno demográfico\", ¿por qué importamos hombres ancianos mientras expulsamos burocráticamente a jóvenes descendientes sudamericanos?",
      comparison_title: "Doble Rasero",
      gaza_title: "El Privilegio Gaza",
      gaza_p1: "Vuelos de Estado gratuitos (pagados por nosotros).",
      gaza_p2: "Bienvenida personal del Ministro.",
      gaza_p3: "Acceso directo a 22 Universidades.",
      gaza_p4: "Sin requisitos de idioma o sangre.",
      diaspora_title: "El Castigo Diáspora",
      diaspora_p1: "12 años de espera por un sello.",
      diaspora_p2: "Insultados como \"Turistas\".",
      diaspora_p3: "Impuestos duplicados a €600.",
      diaspora_p4: "Amenaza de cancelación de derechos.",
      cta_read_dossier: "LEER DOSSIER COMPLETO",
    }
  },
};
