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
      title_prefix: "La Dottrina Tajani",
      title_highlight: "Il Tradimento del Sangue",
      subtitle: "Non è solo una riforma. È un'operazione di ingegneria sociale che sostituisce l'identità storica con l'utilità economica.",
      cta_manifesto: "Leggi il Manifesto",
      cta_dossier: "Intelligence Report",
      cta_evidence: "Guarda la Prova",
    },
    intro: {
      title: "L'Architettura della Decezione",
      text1: "Sotto la copertura di una retórica patriottica, il Decreto-Legge n. 36/2025 opera una mutazione genetica della cittadinanza. Tajani scambia la diaspora (un asset strategico) per flussi migratori funzionali a basso costo.",
      text2: "Mentre si finanziano regimi in Nord Africa per 'stabilità', si dichiara guerra amministrativa ai discendenti italiani, violando il principio di 'legittimo affidamento' sancito dalla Corte di Giustizia UE.",
    },
    weapons: {
      title: "Le Quattro Armi della Distruzione",
      item1_title: "Estinzione Retroattiva",
      item1_desc: "L'Articolo 3-bis crea una 'fictio iuris' che cancella nascite avvenute decenni fa, violando il principio costituzionale 'tempus regit actum'.",
      item2_title: "Trappola dell'Esclusività",
      item2_desc: "Punisce chi è nato in paesi di Ius Soli (Americhe), creando una discriminazione geografica basata su leggi straniere fuori dal controllo del cittadino.",
      item3_title: "Lotteria Amministrativa",
      item3_desc: "Condiziona un diritto fondamentale (status civitatis) alla fortuna di ottenere un appuntamento su un portale web fallimentare (Prenot@mi).",
      item4_title: "Probatio Diabolica",
      item4_desc: "Impone requisiti di residenza impossibili e retroattivi, invertendo l'onere della prova per estinguere il diritto per via burocratica.",
    },
    violations: {
      title: "Violazioni Costituzionali e UE",
      art3_title: "Articolo 3: Disparità Irragionevole",
      art3_desc: "Crea cittadini di serie A (Europa) e serie B (Americhe), violando l'uguaglianza sostanziale e il precedente della Corte di Torino (2025).",
      art22_title: "Articolo 22: Privazione Politica",
      art22_desc: "Esegue una privazione di massa della cittadinanza per motivi politici dissimulati, vietata dalla Carta Costituzionale.",
      art35_title: "Dottrina Tjebbes (UE)",
      art35_desc: "Viola il diritto europeo omettendo l'esame individuale delle conseguenze della perdita di cittadinanza (Caso C-221/17).",
    },
    manifesto: {
      title: "Il Manifesto della Resistenza",
      preamble_title: "Preambolo",
      preamble_desc: "Noi non siamo turisti. Siamo figli della nazione estesa. Denunciamo la 'Dottrina Tajani' come un atto di ostilità contro la storia italiana.",
      fundament_title: "I. Lo Status Indisponibile",
      fundament_desc1: "La Corte di Cassazione (S.U. 2009) ha definito la cittadinanza come status 'indisponibile e imprescrittibile'. Non è una concessione ministeriale.",
      fundament_desc2: "Tajani tenta di trasformare un diritto di nascita (Dichiarativo) in un permesso amministrativo (Costitutivo).",
      distinction_title: "II. Integrazione vs. Sostituzione",
      distinction_desc: "Accettiamo l'integrazione di chi ama l'Italia, ma rifiutiamo che essa avvenga al prezzo dell'espulsione di chi ha sangue italiano. Non è uno scambio zero-sum.",
    },
    demands: {
      title: "Evoluzione, Non Confisca",
      item1_title: "Rispetto del Diritto Acquisito",
      item1_desc: "Comprendiamo la necessità di regolamentare il futuro, ma rifiutiamo categoricamente la retroattività. Chi è nato italiano non può morire straniero per decreto.",
      item2_title: "Investimento, Non Tasse Punitiva",
      item2_desc: "I 600€ di tassa sono un'estorsione se i consolati non funzionano. Esigiamo che i fondi siano usati per il personale, non dirottati in Albania.",
      item3_title: "Fine della Retorica Ostile",
      item3_desc: "Stop alla definizione di 'Turismo del Passaporto'. La ricerca delle proprie origini è un atto di dignità, non una truffa.",
      item4_title: "Tavolo di Riforma Reale",
      item4_desc: "Una riforma della cittadinanza deve includere il CGIE e le comunità, non essere imposta dall'alto per calcoli elettorali.",
    },
    footer: {
      join: "Unisciti alla",
      digital_resistance: "Resistenza Digitale",
      subtitle: "La tua voce è l'unica arma contro l'oblio amministrativo.",
      cta_button: "Firma la Petizione",
      disclaimer: "Iniziativa civile indipendente basata su analisi forense di dati pubblici.",
    },
    dossier: {
      label: "Rapporto di Intelligence",
      title_line1: "LA DOTTRINA",
      title_line2: "TAJANI",
      quote: "\"Analisi forense: Come la Farnesina finanzia l'instabilità esterna mentre smantella la sicurezza interna.\"",
      section1_title: "Il Grande Scambio",
      section1_text1: "L'Italia affronta un inverno demografico. La soluzione di Tajani non è il rientro dei discendenti culturalmente affini, ma la sostituzione funzionale.",
      section1_text2: "I dati rivelano una preferenza per flussi migratori transazionali (utili per accordi energetici) a discapito della diaspora storica. È una scelta di 'Utilità' contro 'Identità'.",
      section2_title: "Il 'Bancomat' della Farnesina",
      section2_intro: "Mentre i consolati in Sud America collassano, il Ministero stanzia fondi massicci per 'esternalizzare le frontiere' a regimi instabili.",
      video_label: "Archivio: Strategia Geopolitica",
      video_protocol: "IL COSTO DELLA STABILITÀ",
      video_quote: "\"Investiamo nella stabilità del Mediterraneo...\"",
      video_analysis: "FACT-CHECK: 160 Milioni/anno in Albania per centri vuoti, mentre mancano 5 Milioni per assumere personale consolare in Brasile. Le priorità sono chiare.",
      card_albania_title: "Spreco in Albania: €160MLN",
      card_albania_text: "Un progetto simbolico e costoso (fonte: Min. Interno) che drena risorse vitali. Con questi fondi avremmo azzerato le file consolari in 6 mesi.",
      card_tax_title: "Estorsione Consolare",
      card_tax_text: "La tassa raddoppiata a 600€ non finanzia i servizi, ma copre i buchi di una politica estera fallimentare.",
      section3_title: "Falla di Sicurezza Nazionale",
      section3_card_title: "Lo Scandalo Click Day",
      section3_text: "Mentre si chiude la porta ai discendenti (che hanno documenti certi), si spalanca quella alle mafie. Il sistema 'Click Day' è stato infiltrato dal crimine organizzato.",
      section3_subtext: "Il Governo ha ammesso che migliaia di visti sono stati venduti a reti criminali. Tajani ha sospeso i visti per Bangladesh e Pakistan non per razzismo, ma per totale perdita di controllo.",
      section3_video_label: "Ammissione di Colpa",
      section3_video_quote: "\"La criminalità organizzata si è infiltrata... abbiamo dovuto sospendere.\"",
      section3_video_btn: "Guarda l'Ammissione",
      section4_title: "L'Arma 'Ius Italiae'",
      section4_text1: "Non è una riforma, è una demolizione controllata. Limitare la cittadinanza alla 2ª generazione significa cancellare la storia unitaria d'Italia.",
      section4_text2: "Si usa il mito del 'cittadino finto' per nascondere il fallimento dello Stato nel gestire le proprie anagrafi.",
      section4_point_a_title: "Il Paradosso Culturale",
      section4_point_a_desc: "Si nega la cittadinanza a chi mangia, prega e vive 'all'italiana' in Brasile, per darla per 'necessità' a chi non ha alcun legame culturale.",
      section4_point_b_title: "Guerra Cognitiva",
      section4_point_b_desc: "L'uso di termini come 'Turismo del Passaporto' è una PsyOp (Operazione Psicologica) per disumanizzare i discendenti agli occhi dell'opinione pubblica.",
      section5_title: "L'Incongruenza Ius Scholae",
      section5_text1: "Tajani spinge per lo Ius Scholae (cittadinanza rapida per residenza) mentre blocca lo Ius Sanguinis. Non siamo contrari all'integrazione, ma alla sostituzione.",
      section5_text2: "Questa doppia morale svela il vero obiettivo: trasformare la cittadinanza da diritto di sangue a mero strumento di ingegneria della forza lavoro.",
      conclusion_title: "Verdetto di Intelligence",
      conclusion_text: "La 'Dottrina Tajani' è una minaccia alla coesione nazionale. Sacrifica il 'Soft Power' globale dell'Italia (la sua diaspora) per accordi tattici di breve respiro nel Mediterraneo.",
      disclaimer_title: "Nota Investigativa",
      disclaimer_text: "Analisi basata su OSINT (Open Source Intelligence), atti parlamentari e report finanziari pubblici. Nessuna affiliazione partitica.",
    },
    evidence: {
      label: "Prova Forense",
      title_line1: "Narrazione",
      title_line2: "vs. Realtà",
      subtitle: "Il doppio standard non è un incidente. È una politica di stato. Guarda come vengono trattati due gruppi diversi.",
      video_source: "FONTE: Canali Ufficiali del Governo (2024-2025)",
      section1_title: "L'Anomalia dei 'Corridoi'",
      section1_text: "Il Governo celebra l'arrivo di 'studenti' e 'lavoratori' via corridoi umanitari. L'accoglienza è doverosa, ma il contrasto con il trattamento dei discendenti è brutale.",
      section1_box_title: "Dissonanza Cognitiva",
      section1_box_quote: "\"L'Italia ha bisogno di giovani...\" ma respinge i suoi stessi figli.",
      section1_box_analysis: "Analisi: Non è una questione di etnia, ma di priorità. I fondi ci sono per chi serve alla narrazione geopolitica, non per chi ha diritti costituzionali.",
      comparison_title: "Il Doppio Standard Operativo",
      gaza_title: "Il Canale Preferenziale",
      gaza_p1: "Voli di Stato e accoglienza VIP.",
      gaza_p2: "Procedure accelerate per 'motivi umanitari'.",
      gaza_p3: "Borse di studio e inserimento immediato.",
      gaza_p4: "Supporto mediatico totale.",
      diaspora_title: "Il Boicottaggio Amministrativo",
      diaspora_p1: "File di 10 anni create artificialmente.",
      diaspora_p2: "Denigrazione mediatica ('furbetti').",
      diaspora_p3: "Tasse punitive e requisiti impossibili.",
      diaspora_p4: "Minaccia di cancellazione retroattiva.",
      cta_read_dossier: "LEGGI L'ANALISI COMPLETA",
    }
  },
  pt: {
    nav: {
      manifesto: "Manifesto",
      demands: "Exigências",
      dossier: "Dossiê de Inteligência",
      backHome: "Voltar para Home",
      evidence_btn: "Vídeo Evidência",
      analysis_btn: "Análise de Dados",
    },
    hero: {
      title_prefix: "A Doutrina Tajani",
      title_highlight: "A Traição de Sangue",
      subtitle: "Não é apenas uma reforma. É uma operação de engenharia social que substitui a identidade histórica pela utilidade econômica.",
      cta_manifesto: "Leia o Manifesto",
      cta_dossier: "Relatório de Inteligência",
      cta_evidence: "Veja a Prova",
    },
    intro: {
      title: "A Arquitetura da Decepção",
      text1: "Sob a cobertura de uma retórica patriótica, o Decreto-Lei n. 36/2025 opera uma mutação genética da cidadania. Tajani troca a diáspora (um ativo estratégico) por fluxos migratórios funcionais de baixo custo.",
      text2: "Enquanto financia regimes no Norte da África por 'estabilidade', declara guerra administrativa aos descendentes italianos, violando o princípio da 'confiança legítima' sancionado pela Corte de Justiça da UE.",
    },
    weapons: {
      title: "As Quatro Armas da Destruição",
      item1_title: "Extinção Retroativa",
      item1_desc: "O Artigo 3-bis cria uma 'fictio iuris' que cancela nascimentos ocorridos há décadas, violando o princípio constitucional 'tempus regit actum'.",
      item2_title: "Armadilha da Exclusividade",
      item2_desc: "Pune quem nasceu em países de Jus Soli (Américas), criando uma discriminação geográfica baseada em leis estrangeiras fora do controle do cidadão.",
      item3_title: "Loteria Administrativa",
      item3_desc: "Condiciona um direito fundamental (status civitatis) à sorte de conseguir um agendamento em um portal web falido (Prenot@mi).",
      item4_title: "Probatio Diabolica",
      item4_desc: "Impõe requisitos de residência impossíveis e retroativos, invertendo o ônus da prova para extinguir o direito por via burocrática.",
    },
    violations: {
      title: "Violações Constitucionais e UE",
      art3_title: "Artigo 3: Disparidade Irracional",
      art3_desc: "Cria cidadãos de primeira classe (Europa) e segunda classe (Américas), violando a igualdade substancial e o precedente do Tribunal de Turim (2025).",
      art22_title: "Artigo 22: Privação Política",
      art22_desc: "Executa uma privação em massa da cidadania por motivos políticos dissimulados, vetada pela Carta Constitucional.",
      art35_title: "Doutrina Tjebbes (UE)",
      art35_desc: "Viola o direito europeu ao omitir o exame individual das consequências da perda de cidadania (Caso C-221/17).",
    },
    manifesto: {
      title: "O Manifesto da Resistência",
      preamble_title: "Preâmbulo",
      preamble_desc: "Nós não somos turistas. Somos filhos da nação estendida. Denunciamos a 'Doutrina Tajani' como um ato de hostilidade contra a história italiana.",
      fundament_title: "I. O Status Indisponível",
      fundament_desc1: "A Corte de Cassação (S.U. 2009) definiu a cidadania como status 'indisponível e imprescritível'. Não é uma concessão ministerial.",
      fundament_desc2: "Tajani tenta transformar um direito de nascença (Declaratório) em uma permissão administrativa (Constitutiva).",
      distinction_title: "II. Integração vs. Substituição",
      distinction_desc: "Aceitamos a integração de quem ama a Itália, mas recusamos que isso ocorra ao preço da expulsão de quem tem sangue italiano. Não é uma troca de soma zero.",
    },
    demands: {
      title: "Evolução, Não Confisco",
      item1_title: "Respeito ao Direito Adquirido",
      item1_desc: "Compreendemos a necessidade de regulamentar o futuro, mas recusamos categoricamente a retroatividade. Quem nasceu italiano não pode morrer estrangeiro por decreto.",
      item2_title: "Investimento, Não Taxa Punitiva",
      item2_desc: "Os 600€ de taxa são uma extorsão se os consulados não funcionam. Exigimos que os fundos sejam usados para pessoal, não desviados para a Albânia.",
      item3_title: "Fim da Retórica Hostil",
      item3_desc: "Pare com a definição de 'Turismo de Passaporte'. A busca pelas próprias origens é um ato de dignidade, não uma fraude.",
      item4_title: "Mesa de Reforma Real",
      item4_desc: "Uma reforma da cidadania deve incluir o CGIE e as comunidades, não ser imposta de cima para baixo por cálculos eleitorais.",
    },
    footer: {
      join: "Junte-se à",
      digital_resistance: "Resistência Digital",
      subtitle: "Sua voz é a única arma contra o esquecimento administrativo.",
      cta_button: "Assine a Petição",
      disclaimer: "Iniciativa civil independente baseada em análise forense de dados públicos.",
    },
    dossier: {
      label: "Relatório de Inteligência",
      title_line1: "A DOUTRINA",
      title_line2: "TAJANI",
      quote: "\"Análise forense: Como a Farnesina financia a instabilidade externa enquanto desmantela a segurança interna.\"",
      section1_title: "A Grande Troca",
      section1_text1: "A Itália enfrenta um inverno demográfico. A solução de Tajani não é o retorno dos descendentes culturalmente afins, mas a substituição funcional.",
      section1_text2: "Os dados revelam uma preferência por fluxos migratórios transacionais (úteis para acordos energéticos) em detrimento da diáspora histórica. É uma escolha de 'Utilidade' contra 'Identidade'.",
      section2_title: "O 'Caixa Eletrônico' da Farnesina",
      section2_intro: "Enquanto os consulados na América do Sul colapsam, o Ministério destina fundos massivos para 'externalizar fronteiras' a regimes instáveis.",
      video_label: "Arquivo: Estratégia Geopolítica",
      video_protocol: "O CUSTO DA ESTABILIDADE",
      video_quote: "\"Investimos na estabilidade do Mediterrâneo...\"",
      video_analysis: "FACT-CHECK: 160 Milhões/ano na Albânia para centros vazios, enquanto faltam 5 Milhões para contratar pessoal consular no Brasil. As prioridades são claras.",
      card_albania_title: "Desperdício na Albânia: €160MI",
      card_albania_text: "Um projeto simbólico e caro (fonte: Min. Interno) que drena recursos vitais. Com esses fundos teríamos zerado as filas consulares em 6 meses.",
      card_tax_title: "Extorsão Consular",
      card_tax_text: "A taxa dobrada para 600€ não financia os serviços, mas cobre os buracos de uma política externa falida.",
      section3_title: "Falha de Segurança Nacional",
      section3_card_title: "O Escândalo Click Day",
      section3_text: "Enquanto fecham a porta aos descendentes (que têm documentos certos), escancaram a das máfias. O sistema 'Click Day' foi infiltrado pelo crime organizado.",
      section3_subtext: "O Governo admitiu que milhares de vistos foram vendidos a redes criminosas. Tajani suspendeu os vistos para Bangladesh e Paquistão não por racismo, mas por total perda de controle.",
      section3_video_label: "Admissão de Culpa",
      section3_video_quote: "\"O crime organizado infiltrou-se... tivemos que suspender.\"",
      section3_video_btn: "Veja a Admissão",
      section4_title: "A Arma 'Ius Italiae'",
      section4_text1: "Não é uma reforma, é uma demolição controlada. Limitar a cidadania à 2ª geração significa apagar a história unitária da Itália.",
      section4_text2: "Usa-se o mito do 'cidadão falso' para esconder o fracasso do Estado em gerir seus próprios registros.",
      section4_point_a_title: "O Paradoxo Cultural",
      section4_point_a_desc: "Nega-se a cidadania a quem come, reza e vive 'à italiana' no Brasil, para dá-la por 'necessidade' a quem não tem vínculo cultural prévio.",
      section4_point_b_title: "Guerra Cognitiva",
      section4_point_b_desc: "O uso de termos como 'Turismo de Passaporte' é uma PsyOp (Operação Psicológica) para desumanizar os descendentes aos olhos da opinião pública.",
      section5_title: "A Incongruência Ius Scholae",
      section5_text1: "Tajani empurra o Ius Scholae (cidadania rápida por residência) enquanto bloqueia o Ius Sanguinis. Não somos contra a integração, mas contra a substituição.",
      section5_text2: "Essa dupla moral revela o verdadeiro objetivo: transformar a cidadania de direito de sangue em mera ferramenta de engenharia da força de trabalho.",
      conclusion_title: "Veredito de Inteligência",
      conclusion_text: "A 'Doutrina Tajani' é uma ameaça à coesão nacional. Sacrifica o 'Soft Power' global da Itália (sua diáspora) por acordos táticos de curto prazo no Mediterrâneo.",
      disclaimer_title: "Nota Investigativa",
      disclaimer_text: "Análise baseada em OSINT (Open Source Intelligence), atos parlamentares e relatórios financeiros públicos. Nenhuma afiliação partidária.",
    },
    evidence: {
      label: "Prova Forense",
      title_line1: "Narrativa",
      title_line2: "vs. Realidade",
      subtitle: "O padrão duplo não é um acidente. É uma política de estado. Veja como dois grupos diferentes são tratados.",
      video_source: "FONTE: Canais Oficiais do Governo (2024-2025)",
      section1_title: "A Anomalia dos 'Corredores'",
      section1_text: "O Governo celebra a chegada de 'estudantes' e 'trabalhadores' via corredores humanitários. O acolhimento é um dever, mas o contraste com o tratamento dos descendentes é brutal.",
      section1_box_title: "Dissonância Cognitiva",
      section1_box_quote: "\"A Itália precisa de jovens...\" mas rejeita seus próprios filhos.",
      section1_box_analysis: "Análise: Não é questão de etnia, mas de prioridade. Há fundos para quem serve à narrativa geopolítica, não para quem tem direitos constitucionais.",
      comparison_title: "O Padrão Duplo Operacional",
      gaza_title: "O Canal Preferencial",
      gaza_p1: "Voos de Estado e recepção VIP.",
      gaza_p2: "Procedimentos acelerados por 'motivos humanitários'.",
      gaza_p3: "Bolsas de estudo e inserção imediata.",
      gaza_p4: "Apoio midiático total.",
      diaspora_title: "O Boicote Administrativo",
      diaspora_p1: "Filas de 10 anos criadas artificialmente.",
      diaspora_p2: "Difamação midiática ('espertalhões').",
      diaspora_p3: "Taxas punitivas e requisitos impossíveis.",
      diaspora_p4: "Ameaça de cancelamento retroativo.",
      cta_read_dossier: "LEIA A ANÁLISE COMPLETA",
    }
  },
  en: {
    nav: {
      manifesto: "Manifesto",
      demands: "Demands",
      dossier: "Intelligence Dossier",
      backHome: "Back to Home",
      evidence_btn: "Video Evidence",
      analysis_btn: "Data Analysis",
    },
    hero: {
      title_prefix: "The Tajani Doctrine",
      title_highlight: "The Betrayal of Blood",
      subtitle: "It's not just a reform. It is a social engineering operation replacing historical identity with economic utility.",
      cta_manifesto: "Read the Manifesto",
      cta_dossier: "Intelligence Report",
      cta_evidence: "Watch Evidence",
    },
    intro: {
      title: "The Architecture of Deception",
      text1: "Under the cover of patriotic rhetoric, Decree-Law n. 36/2025 operates a genetic mutation of citizenship. Tajani swaps the diaspora (a strategic asset) for functional low-cost migration flows.",
      text2: "While funding regimes in North Africa for 'stability', administrative war is declared on Italian descendants, violating the principle of 'legitimate expectations' sanctioned by the EU Court of Justice.",
    },
    weapons: {
      title: "The Four Weapons of Destruction",
      item1_title: "Retroactive Extinction",
      item1_desc: "Article 3-bis creates a 'fictio iuris' canceling births from decades ago, violating the constitutional principle 'tempus regit actum'.",
      item2_title: "Exclusivity Trap",
      item2_desc: "Punishes those born in Jus Soli countries (Americas), creating geographic discrimination based on foreign laws beyond the citizen's control.",
      item3_title: "Administrative Lottery",
      item3_desc: "Conditions a fundamental right (status civitatis) on the luck of getting an appointment on a failed web portal (Prenot@mi).",
      item4_title: "Probatio Diabolica",
      item4_desc: "Imposes impossible and retroactive residence requirements, reversing the burden of proof to extinguish rights via bureaucracy.",
    },
    violations: {
      title: "Constitutional and EU Violations",
      art3_title: "Article 3: Unreasonable Disparity",
      art3_desc: "Creates first-class (Europe) and second-class (Americas) citizens, violating substantial equality and the Turin Court precedent (2025).",
      art22_title: "Article 22: Political Deprivation",
      art22_desc: "Executes mass deprivation of citizenship for dissimulated political reasons, banned by the Constitution.",
      art35_title: "Tjebbes Doctrine (EU)",
      art35_desc: "Violates European law by omitting individual examination of the consequences of citizenship loss (Case C-221/17).",
    },
    manifesto: {
      title: "The Resistance Manifesto",
      preamble_title: "Preamble",
      preamble_desc: "We are not tourists. We are children of the extended nation. We denounce the 'Tajani Doctrine' as an act of hostility against Italian history.",
      fundament_title: "I. Unavailable Status",
      fundament_desc1: "The Court of Cassation (S.U. 2009) defined citizenship as an 'unavailable and imprescriptible' status. It is not a ministerial concession.",
      fundament_desc2: "Tajani attempts to transform a birthright (Declaratory) into an administrative permit (Constitutive).",
      distinction_title: "II. Integration vs. Substitution",
      distinction_desc: "We accept the integration of those who love Italy, but refuse it at the price of expelling those with Italian blood. It is not a zero-sum game.",
    },
    demands: {
      title: "Evolution, Not Confiscation",
      item1_title: "Respect for Acquired Rights",
      item1_desc: "We understand the need to regulate the future, but strictly refuse retroactivity. One born Italian cannot die a foreigner by decree.",
      item2_title: "Investment, Not Punitive Tax",
      item2_desc: "The €600 fee is extortion if consulates don't work. We demand funds be used for staff, not diverted to Albania.",
      item3_title: "End Hostile Rhetoric",
      item3_desc: "Stop the 'Passport Tourism' definition. Seeking one's roots is an act of dignity, not a scam.",
      item4_title: "Real Reform Table",
      item4_desc: "Citizenship reform must include the CGIE and communities, not be imposed from above for electoral calculations.",
    },
    footer: {
      join: "Join the",
      digital_resistance: "Digital Resistance",
      subtitle: "Your voice is the only weapon against administrative oblivion.",
      cta_button: "Sign the Petition",
      disclaimer: "Independent civil initiative based on forensic analysis of public data.",
    },
    dossier: {
      label: "Intelligence Report",
      title_line1: "THE TAJANI",
      title_line2: "DOCTRINE",
      quote: "\"Forensic analysis: How the Foreign Ministry funds external instability while dismantling internal security.\"",
      section1_title: "The Great Swap",
      section1_text1: "Italy faces a demographic winter. Tajani's solution is not the return of culturally affine descendants, but functional substitution.",
      section1_text2: "Data reveals a preference for transactional migration flows (useful for energy deals) over the historical diaspora. It is a choice of 'Utility' vs 'Identity'.",
      section2_title: "The Ministry's 'ATM'",
      section2_intro: "While consulates in South America collapse, the Ministry allocates massive funds to 'externalize borders' to unstable regimes.",
      video_label: "Archive: Geopolitical Strategy",
      video_protocol: "THE COST OF STABILITY",
      video_quote: "\"We invest in Mediterranean stability...\"",
      video_analysis: "FACT-CHECK: 160 Million/year in Albania for empty centers, while 5 Million are missing to hire consular staff in Brazil. Priorities are clear.",
      card_albania_title: "Waste in Albania: €160M",
      card_albania_text: "A symbolic and expensive project (source: Interior Min.) draining vital resources. With these funds, we would have cleared consular queues in 6 months.",
      card_tax_title: "Consular Extortion",
      card_tax_text: "The fee doubled to €600 does not fund services but covers holes in failed foreign policy.",
      section3_title: "National Security Breach",
      section3_card_title: "The Click Day Scandal",
      section3_text: "While closing the door to descendants (who have certain documents), they throw open the door to mafias. The 'Click Day' system was infiltrated by organized crime.",
      section3_subtext: "The Government admitted thousands of visas were sold to criminal networks. Tajani suspended visas for Bangladesh and Pakistan not out of racism, but due to total loss of control.",
      section3_video_label: "Admission of Guilt",
      section3_video_quote: "\"Organized crime infiltrated... we had to suspend.\"",
      section3_video_btn: "Watch Admission",
      section4_title: "The 'Ius Italiae' Weapon",
      section4_text1: "Not a reform, but a controlled demolition. Limiting citizenship to the 2nd generation means erasing Italy's unitary history.",
      section4_text2: "The myth of the 'fake citizen' is used to hide the State's failure to manage its own registries.",
      section4_point_a_title: "The Cultural Paradox",
      section4_point_a_desc: "Citizenship is denied to those who eat, pray, and live 'Italian' in Brazil, to give it by 'necessity' to those with no prior cultural link.",
      section4_point_b_title: "Cognitive Warfare",
      section4_point_b_desc: "Using terms like 'Passport Tourism' is a PsyOp (Psychological Operation) to dehumanize descendants in the public eye.",
      section5_title: "The Ius Scholae Incongruence",
      section5_text1: "Tajani pushes for Ius Scholae (rapid citizenship by residence) while blocking Ius Sanguinis. We are not against integration, but against substitution.",
      section5_text2: "This double standard reveals the true goal: transforming citizenship from a blood right into a mere labor force engineering tool.",
      conclusion_title: "Intelligence Verdict",
      conclusion_text: "The 'Tajani Doctrine' is a threat to national cohesion. It sacrifices Italy's global 'Soft Power' (its diaspora) for short-sighted tactical deals in the Mediterranean.",
      disclaimer_title: "Investigative Note",
      disclaimer_text: "Analysis based on OSINT (Open Source Intelligence), parliamentary acts, and public financial reports. No party affiliation.",
    },
    evidence: {
      label: "Forensic Evidence",
      title_line1: "Narrative",
      title_line2: "vs. Reality",
      subtitle: "The double standard is not an accident. It is state policy. Watch how two different groups are treated.",
      video_source: "SOURCE: Official Government Channels (2024-2025)",
      section1_title: "The 'Corridors' Anomaly",
      section1_text: "The Government celebrates the arrival of 'students' and 'workers' via humanitarian corridors. Welcome is a duty, but the contrast with the treatment of descendants is brutal.",
      section1_box_title: "Cognitive Dissonance",
      section1_box_quote: "\"Italy needs young people...\" but rejects its own children.",
      section1_box_analysis: "Analysis: It's not about ethnicity, but priority. Funds exist for geopolitical narratives, not for those with constitutional rights.",
      comparison_title: "The Operational Double Standard",
      gaza_title: "The Preferential Channel",
      gaza_p1: "State flights and VIP reception.",
      gaza_p2: "Accelerated procedures for 'humanitarian reasons'.",
      gaza_p3: "Scholarships and immediate placement.",
      gaza_p4: "Total media support.",
      diaspora_title: "Administrative Boycott",
      diaspora_p1: "10-year queues created artificially.",
      diaspora_p2: "Media denigration ('freeloaders').",
      diaspora_p3: "Punitive taxes and impossible requirements.",
      diaspora_p4: "Threat of retroactive cancellation.",
      cta_read_dossier: "READ FULL ANALYSIS",
    }
  },
  es: {
    nav: {
      manifesto: "Manifiesto",
      demands: "Exigencias",
      dossier: "Dossier de Inteligencia",
      backHome: "Volver al Inicio",
      evidence_btn: "Video Evidencia",
      analysis_btn: "Análisis de Datos",
    },
    hero: {
      title_prefix: "La Doctrina Tajani",
      title_highlight: "La Traición de Sangre",
      subtitle: "No es solo una reforma. Es una operación de ingeniería social que sustituye la identidad histórica por la utilidad económica.",
      cta_manifesto: "Leer el Manifiesto",
      cta_dossier: "Reporte de Inteligencia",
      cta_evidence: "Ver Evidencia",
    },
    intro: {
      title: "La Arquitectura del Engaño",
      text1: "Bajo la cobertura de una retórica patriótica, el Decreto-Ley n. 36/2025 opera una mutación genética de la ciudadanía. Tajani intercambia la diáspora (un activo estratégico) por flujos migratorios funcionales de bajo coste.",
      text2: "Mientras financia regímenes en el Norte de África por 'estabilidad', declara guerra administrativa a los descendientes italianos, violando el principio de 'confianza legítima' sancionado por el Tribunal de Justicia de la UE.",
    },
    weapons: {
      title: "Las Cuatro Armas de Destrucción",
      item1_title: "Extinción Retroactiva",
      item1_desc: "El Artículo 3-bis crea una 'fictio iuris' que cancela nacimientos ocurridos hace décadas, violando el principio constitucional 'tempus regit actum'.",
      item2_title: "Trampa de la Exclusividad",
      item2_desc: "Castiga a quienes nacieron en países de Ius Soli (Américas), creando una discriminación geográfica basada en leyes extranjeras fuera del control del ciudadano.",
      item3_title: "Lotería Administrativa",
      item3_desc: "Condiciona un derecho fundamental (status civitatis) a la suerte de conseguir una cita en un portal web fallido (Prenot@mi).",
      item4_title: "Probatio Diabolica",
      item4_desc: "Impone requisitos de residencia imposibles y retroactivos, invirtiendo la carga de la prueba para extinguir el derecho por vía burocrática.",
    },
    violations: {
      title: "Violaciones Constitucionales y UE",
      art3_title: "Artículo 3: Disparidad Irracional",
      art3_desc: "Crea ciudadanos de primera clase (Europa) y segunda clase (Américas), violando la igualdad sustancial y el precedente del Tribunal de Turín (2025).",
      art22_title: "Artículo 22: Privación Política",
      art22_desc: "Ejecuta una privación masiva de la ciudadanía por motivos políticos disimulados, vetada por la Carta Constitucional.",
      art35_title: "Doctrina Tjebbes (UE)",
      art35_desc: "Viola el derecho europeo al omitir el examen individual de las consecuencias de la pérdida de ciudadanía (Caso C-221/17).",
    },
    manifesto: {
      title: "El Manifiesto de la Resistencia",
      preamble_title: "Preámbulo",
      preamble_desc: "No somos turistas. Somos hijos de la nación extendida. Denunciamos la 'Doctrina Tajani' como un acto de hostilidad contra la historia italiana.",
      fundament_title: "I. El Status Indisponible",
      fundament_desc1: "La Corte de Casación (S.U. 2009) definió la ciudadanía como status 'indisponible e imprescriptible'. No es una concesión ministerial.",
      fundament_desc2: "Tajani intenta transformar un derecho de nacimiento (Declarativo) en un permiso administrativo (Constitutivo).",
      distinction_title: "II. Integración vs. Sustitución",
      distinction_desc: "Aceptamos la integración de quien ama a Italia, pero rechazamos que ocurra al precio de la expulsión de quien tiene sangre italiana. No es un intercambio de suma cero.",
    },
    demands: {
      title: "Evolución, No Confiscación",
      item1_title: "Respeto al Derecho Adquirido",
      item1_desc: "Comprendemos la necesidad de regular el futuro, pero rechazamos categóricamente la retroactividad. Quien nació italiano no puede morir extranjero por decreto.",
      item2_title: "Inversión, No Tasa Punitiva",
      item2_desc: "Los 600€ de tasa son una extorsión si los consulados no funcionan. Exigimos que los fondos se usen para personal, no desviados a Albania.",
      item3_title: "Fin de la Retórica Hostil",
      item3_desc: "Basta con la definición de 'Turismo de Pasaporte'. La búsqueda de las propias raíces es un acto de dignidad, no una estafa.",
      item4_title: "Mesa de Reforma Real",
      item4_desc: "Una reforma de la ciudadanía debe incluir al CGIE y las comunidades, no ser impuesta desde arriba por cálculos electorales.",
    },
    footer: {
      join: "Únete a la",
      digital_resistance: "Resistencia Digital",
      subtitle: "Tu voz es la única arma contra el olvido administrativo.",
      cta_button: "Firma la Petición",
      disclaimer: "Iniciativa civil independiente basada en análisis forense de datos públicos.",
    },
    dossier: {
      label: "Reporte de Inteligencia",
      title_line1: "LA DOCTRINA",
      title_line2: "TAJANI",
      quote: "\"Análisis forense: Cómo la Farnesina financia la inestabilidad externa mientras desmantela la seguridad interna.\"",
      section1_title: "El Gran Intercambio",
      section1_text1: "Italia enfrenta un invierno demográfico. La solución de Tajani no es el retorno de los descendientes culturalmente afines, sino la sustitución funcional.",
      section1_text2: "Los datos revelan una preferencia por flujos migratorios transaccionales (útiles para acuerdos energéticos) sobre la diáspora histórica. Es una elección de 'Utilidad' contra 'Identidad'.",
      section2_title: "El 'Cajero Automático' de la Farnesina",
      section2_intro: "Mientras los consulados en Sudamérica colapsan, el Ministerio destina fondos masivos para 'externalizar fronteras' a regímenes inestables.",
      video_label: "Archivo: Estrategia Geopolítica",
      video_protocol: "EL COSTE DE LA ESTABILIDAD",
      video_quote: "\"Invertimos en la estabilidad del Mediterráneo...\"",
      video_analysis: "FACT-CHECK: 160 Millones/año en Albania para centros vacíos, mientras faltan 5 Millones para contratar personal consular en Brasil. Las prioridades son claras.",
      card_albania_title: "Despilfarro en Albania: €160M",
      card_albania_text: "Un proyecto simbólico y caro (fuente: Min. Interior) que drena recursos vitales. Con esos fondos habríamos eliminado las colas consulares en 6 meses.",
      card_tax_title: "Extorsión Consular",
      card_tax_text: "La tasa duplicada a 600€ no financia los servicios, sino que cubre los agujeros de una política exterior fallida.",
      section3_title: "Fallo de Seguridad Nacional",
      section3_card_title: "El Escándalo Click Day",
      section3_text: "Mientras cierran la puerta a los descendientes (que tienen documentos ciertos), abren la de las mafias. El sistema 'Click Day' fue infiltrado por el crimen organizado.",
      section3_subtext: "El Gobierno admitió que miles de visas fueron vendidas a redes criminales. Tajani suspendió las visas para Bangladesh y Pakistán no por racismo, sino por total pérdida de control.",
      section3_video_label: "Admisión de Culpa",
      section3_video_quote: "\"El crimen organizado se infiltró... tuvimos que suspender.\"",
      section3_video_btn: "Ver la Admisión",
      section4_title: "El Arma 'Ius Italiae'",
      section4_text1: "No es una reforma, es una demolición controlada. Limitar la ciudadanía a la 2ª generación significa borrar la historia unitaria de Italia.",
      section4_text2: "Se usa el mito del 'ciudadano falso' para esconder el fracaso del Estado en gestionar sus propios registros.",
      section4_point_a_title: "El Paradoja Cultural",
      section4_point_a_desc: "Se niega la ciudadanía a quien come, reza y vive 'a la italiana' en Brasil, para darla por 'necesidad' a quien no tiene vínculo cultural previo.",
      section4_point_b_title: "Guerra Cognitiva",
      section4_point_b_desc: "El uso de términos como 'Turismo de Pasaporte' es una PsyOp (Operación Psicológica) para deshumanizar a los descendientes ante la opinión pública.",
      section5_title: "La Incongruencia Ius Scholae",
      section5_text1: "Tajani empuja el Ius Scholae (ciudadanía rápida por residencia) mientras bloquea el Ius Sanguinis. No estamos contra la integración, sino contra la sustitución.",
      section5_text2: "Esta doble moral revela el verdadero objetivo: transformar la ciudadanía de derecho de sangre en mera herramienta de ingeniería de la fuerza laboral.",
      conclusion_title: "Veredicto de Inteligencia",
      conclusion_text: "La 'Doctrina Tajani' es una amenaza a la cohesión nacional. Sacrifica el 'Soft Power' global de Italia (su diáspora) por acuerdos tácticos de corto plazo en el Mediterráneo.",
      disclaimer_title: "Nota Investigativa",
      disclaimer_text: "Análisis basado en OSINT (Open Source Intelligence), actos parlamentarios y reportes financieros públicos. Ninguna afiliación partidista.",
    },
    evidence: {
      label: "Prueba Forense",
      title_line1: "Narrativa",
      title_line2: "vs. Realidad",
      subtitle: "El doble rasero no es un accidente. Es una política de estado. Mira cómo se tratan dos grupos diferentes.",
      video_source: "FUENTE: Canales Oficiales del Gobierno (2024-2025)",
      section1_title: "La Anomalía de los 'Corredores'",
      section1_text: "El Gobierno celebra la llegada de 'estudiantes' y 'trabajadores' vía corredores humanitarios. La acogida es un deber, pero el contraste con el trato a los descendientes es brutal.",
      section1_box_title: "Disonancia Cognitiva",
      section1_box_quote: "\"Italia necesita jóvenes...\" pero rechaza a sus propios hijos.",
      section1_box_analysis: "Análisis: No es cuestión de etnia, sino de prioridad. Hay fondos para quien sirve a la narrativa geopolítica, no para quien tiene derechos constitucionales.",
      comparison_title: "El Doble Rasero Operacional",
      gaza_title: "El Canal Preferencial",
      gaza_p1: "Vuelos de Estado y recepción VIP.",
      gaza_p2: "Procedimientos acelerados por 'motivos humanitarios'.",
      gaza_p3: "Becas de estudio e inserción inmediata.",
      gaza_p4: "Apoyo mediático total.",
      diaspora_title: "El Boicot Administrativo",
      diaspora_p1: "Colas de 10 años creadas artificialmente.",
      diaspora_p2: "Difamación mediática ('aprovechados').",
      diaspora_p3: "Tasas punitivas y requisitos imposibles.",
      diaspora_p4: "Amenaza de cancelación retroactiva.",
      cta_read_dossier: "LEER ANÁLISIS COMPLETA",
    }
  },
};
