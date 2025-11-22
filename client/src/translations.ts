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
    section_court_title: string;
    section_court_card_title: string;
    section_court_text: string;
    section_court_subtext: string;
    section_eu_title: string;
    section_eu_text: string;
    section_eu_case: string;
    section_minors_title: string;
    section_minors_text: string;
    section_minors_circular: string;
    section_force_majeure_title: string;
    section_force_majeure_text: string;
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
      dossier: "Dossier Giuridico",
      backHome: "Torna alla Home",
      evidence_btn: "Video Prova",
      analysis_btn: "Analisi Legale",
    },
    hero: {
      title_prefix: "Il Decreto Tajani",
      title_highlight: "È Incostituzionale",
      subtitle: "Un'analisi giuridica esaustiva sulla violazione del Jus Sanguinis e l'incompatibilità con il Diritto dell'Unione Europea.",
      cta_manifesto: "Leggi il Manifesto",
      cta_dossier: "Analisi Giuridica",
      cta_evidence: "Guarda la Prova",
    },
    intro: {
      title: "Rottura del Patto Costituzionale",
      text1: "La Legge n. 74/2025 non è una semplice riforma, ma uno strumento di revoca retroattiva di massa dei diritti acquisiti.",
      text2: "Viola i principi di irretroattività e legittimo affidamento, come stabilito dalle Sezioni Unite della Cassazione (Sent. 4466/2009).",
    },
    weapons: {
      title: "Le 4 Violazioni Sistemiche",
      item1_title: "Retroattività Mascherata",
      item1_desc: "L'art. 3-bis impone una fictio iuris: si 'considera mai acquisita' la cittadinanza per chi non ha attivato l'iter entro il 27/03/2025.",
      item2_title: "Discriminazione Geografica",
      item2_desc: "Il requisito di 'esclusività' colpisce selettivamente i nati in paesi di Ius Soli (Americhe), violando l'art. 3 della Costituzione.",
      item3_title: "Trappola Amministrativa",
      item3_desc: "Condizionare un diritto imprescrittibile all'efficienza del portale 'Prenot@mi' è costituzionalmente illegittimo.",
      item4_title: "Inversione dell'Onere",
      item4_desc: "Si richiede al cittadino la 'Probatio Diabolica' di fatti negativi impossibili da dimostrare dopo decenni.",
    },
    violations: {
      title: "Incompatibilità UE e Costituzionali",
      art3_title: "Art. 3 Cost. & Principio di Uguaglianza",
      art3_desc: "La legge crea una disparità irragionevole tra discendenti in base alla legge del luogo di nascita (cittadinanza imposta vs. volontaria).",
      art22_title: "Art. 22 Cost. & Diritti Acquisiti",
      art22_desc: "La cittadinanza è uno status acquisito alla nascita. La legge tenta di riscrivere biografie giuridiche consolidate da decenni.",
      art35_title: "Diritto UE: Dottrina Tjebbes",
      art35_desc: "La Corte di Giustizia UE (C-221/17) vieta la perdita automatica della cittadinanza senza un esame individuale delle conseguenze sproporzionate.",
    },
    manifesto: {
      title: "Fondamenti Giuridici",
      preamble_title: "Diritto Vivente",
      preamble_desc: "Secondo la Cassazione (2009), lo status civitatis è 'permanente e imprescrittibile'. Non è una concessione revocabile.",
      fundament_title: "I. La Tesi della Forza Maggiore",
      fundament_desc1: "Il collasso del sistema consolare costituisce 'impossibilità oggettiva'.",
      fundament_desc2: "Nessuno può essere obbligato all'impossibile (ad impossibilia nemo tenetur). La scadenza del 27 marzo è inopponibile a chi ha tentato di prenotare invano.",
      distinction_title: "II. Il Tradimento della Fiducia",
      distinction_desc: "La riforma viola il 'legittimo affidamento' di milioni di persone che hanno pianificato la loro vita basandosi sulla certezza del diritto italiano.",
    },
    demands: {
      title: "Azioni Legali Immediate",
      item1_title: "Ricorso al TAR Lazio",
      item1_desc: "Impugnazione della Circolare 26185 per 'eccesso di potere' sui minori.",
      item2_title: "Questione di Costituzionalità",
      item2_desc: "Supporto all'Ordinanza del Tribunale di Torino (25/06/2025) presso la Consulta.",
      item3_title: "Pressione UE",
      item3_desc: "Denuncia alla Commissione Europea per violazione degli artt. 20 TFUE e 7 Carta UE.",
      item4_title: "Class Action",
      item4_desc: "Azioni risarcitorie per la mancata erogazione del servizio consolare (prenot@mi).",
    },
    footer: {
      join: "Unisciti alla",
      digital_resistance: "Difesa Legale",
      subtitle: "La battaglia si sposta dai consolati alle aule di giustizia. Informati e resisti.",
      cta_button: "Scarica Analisi",
      disclaimer: "Basato su analisi giuridica ex art. 21 Cost. Non è consulenza legale personalizzata.",
    },
    dossier: {
      label: "Analisi Forense",
      title_line1: "LA ROTTURA",
      title_line2: "PARADIGMATICA",
      quote: "\"La Legge 74/2025 non regola il futuro, ma cancella il passato. È un atto di esproprio giuridico di massa.\"",
      section1_title: "Anatomia della Violazione",
      section1_text1: "L'art. 3-bis introduce una clausola di estinzione retroattiva: chi possiede altra cittadinanza 'si considera non averla mai acquisita'. Questa formulazione cancella lo status giuridico originario.",
      section1_text2: "Non si tratta di una perdita ex nunc (da ora in poi), ma di un annullamento ex tunc (dall'origine), trasformando cittadini in stranieri per decreto.",
      section2_title: "Il 'Bancomat' della Farnesina",
      section2_intro: "Mentre si negano i fondi per i consolati lamentando scarsità di risorse, si finanziano operazioni estere discutibili. Questo dimostra che il blocco della cittadinanza è una scelta politica, non economica.",
      video_label: "Prova Documentale",
      video_protocol: "PROTOCOLLO TUNISIA",
      video_quote: "\"Investimento nella stabilità...\"",
      video_analysis: "CONNESSIONE: I fondi per la 'stabilità' tunisina derivano dai tagli ai servizi consolari per gli italiani all'estero.",
      card_albania_title: "Costo Albania: €160M",
      card_albania_text: "Il governo ha trovato €160 milioni per i centri in Albania, ma zero per i consolati. Le risorse esistono, ma vengono usate per respingere, non per accogliere.",
      card_tax_title: "Tassa Ricorsi: €600",
      card_tax_text: "Il D.L. 36/2025 impone una barriera economica censitaria. Monetizzare un diritto fondamentale è una violazione del principio di solidarietà.",
      section3_title: "Sicurezza Nazionale Compromessa",
      section3_card_title: "Dossier Click Day",
      section3_text: "La scusa ufficiale per la Legge 74/2025 è la 'sicurezza'. Ma la realtà è opposta: mentre si bloccano i discendenti di sangue italiano, il governo ha ammesso che il 'Decreto Flussi' è stato totalmente infiltrato dalle mafie per l'immigrazione irregolare.",
      section3_subtext: "L'inchiesta 'Click Day' prova che il vero problema di sicurezza è la gestione governativa, non la cittadinanza iure sanguinis.",
      section3_video_label: "Video Testimonianza (Fonte: Il Sole 24 Ore)",
      section3_video_quote: "\"La criminalità organizzata si è infiltrata nella gestione delle domande...\"",
      section3_video_btn: "Guarda la Confessione",
      section_court_title: "La Sentenza Monitoria",
      section_court_card_title: "Corte Cost. 142/2025",
      section_court_text: "Il governo agisce al di sopra della legge. La Consulta ha esplicitamente avvertito che le nuove norme non possono essere retroattive, ma il Ministero le applica comunque.",
      section_court_subtext: "Questa è una violazione dello Stato di Diritto che apre la strada ai ricorsi di massa.",
      section_eu_title: "Lo Scudo Europeo",
      section_eu_text: "Poiché l'Italia fa parte dell'UE, non ha sovranità assoluta sulla revoca della cittadinanza. La 'Dottrina Tjebbes' protegge i cittadini dagli abusi statali.",
      section_eu_case: "Precedente C-221/17 (Tjebbes): La Corte UE impone un test di proporzionalità individuale prima di ogni revoca.",
      section_minors_title: "La Trappola per i Minori",
      section_minors_text: "Nella sua foga restrittiva, il Ministero ha inventato la categoria 'Cittadinanza per beneficio di legge', non prevista dal Parlamento, colpendo i più vulnerabili.",
      section_minors_circular: "Circolare 26185 (28/05/2025): Introduce scadenze decadenziali per i minori, un eccesso di potere amministrativo impugnato al TAR Lazio.",
      section_force_majeure_title: "Tesi della Forza Maggiore",
      section_force_majeure_text: "\"Ad impossibilia nemo tenetur\". Il cittadino non può perdere un diritto per l'impossibilità tecnica del portale Prenot@mi. Il collasso del sistema giustifica il ritardo.",
      section4_title: "L'Arma 'Ius Italiae'",
      section4_text1: "La proposta cancella la storia unitaria d'Italia.",
      section4_text2: "Si vuole sostituire il diritto di sangue con una naturalizzazione precaria.",
      section4_point_a_title: "Limite 2ª Generazione",
      section4_point_a_desc: "Esclusione arbitraria basata sulla data di nascita dell'avo.",
      section4_point_b_title: "Abolizione Regola 1861",
      section4_point_b_desc: "Negazione della continuità storica dello Stato Italiano.",
      section5_title: "Il Cavallo di Troia: 'Ius Scholae'",
      section5_text1: "Mentre chiude la porta al sangue, Tajani spalanca quella dello Ius Scholae. La proposta: cittadinanza dopo un ciclo scolastico.",
      section5_text2: "Con proiezioni che indicano presto 1 milione di studenti stranieri, lo Ius Scholae rischia di diventare uno strumento di alterazione demografica irreversibile.",
      conclusion_title: "Prospettive Giudiziarie",
      conclusion_text: "La battaglia legale è aperta. L'Ordinanza di Torino e il ricorso al TAR Lazio sono le prime brecce nel muro.",
      disclaimer_title: "Nota Legale",
      disclaimer_text: "Le informazioni si basano sull'analisi della Legge 74/2025 e giurisprudenza connessa (Rottmann, Tjebbes).",
    },
    evidence: {
      label: "Prova Forense",
      title_line1: "La Narrazione",
      title_line2: "vs. La Realtà",
      subtitle: "Analisi comparata tra la retorica dell'emergenza e i dati reali.",
      video_source: "FONTE: Canale Ufficiale Ministro Tajani",
      section1_title: "Anomalia Demografica",
      section1_text: "I dati smentiscono l'invasione. L'Italia ha bisogno di demografia, ma sceglie di respingere i propri discendenti.",
      section1_box_title: "Contraddizione",
      section1_box_quote: "\"Formare la classe dirigente...\"",
      section1_box_analysis: "ANALISI: Si importano studenti stranieri mentre si espellono cittadini iure sanguinis.",
      comparison_title: "Doppio Standard",
      gaza_title: "Privilegio Gaza",
      gaza_p1: "Voli di Stato gratuiti.",
      gaza_p2: "Nessun requisito di lingua.",
      gaza_p3: "Accesso universitario diretto.",
      gaza_p4: "Accoglienza ministeriale.",
      diaspora_title: "Punizione Diaspora",
      diaspora_p1: "Blocco 'Prenot@mi' decennale.",
      diaspora_p2: "Tassa €600 non rimborsabile.",
      diaspora_p3: "Revoca retroattiva status.",
      diaspora_p4: "Disprezzo istituzionale.",
      cta_read_dossier: "LEGGI ANALISI LEGALE",
    }
  },
  pt: {
    nav: {
      manifesto: "Manifesto",
      demands: "Exigências",
      dossier: "Dossiê Jurídico",
      backHome: "Voltar para Home",
      evidence_btn: "Vídeo Prova",
      analysis_btn: "Análise Legal",
    },
    hero: {
      title_prefix: "O Decreto Tajani",
      title_highlight: "É Inconstitucional",
      subtitle: "Uma análise jurídica exaustiva sobre a violação do Jus Sanguinis e a incompatibilidade com o Direito da União Europeia.",
      cta_manifesto: "Leia o Manifesto",
      cta_dossier: "Análise Jurídica",
      cta_evidence: "Veja a Prova",
    },
    intro: {
      title: "Ruptura do Pacto Constitucional",
      text1: "A Lei n.º 74/2025 não é uma simples reforma, mas um instrumento de revogação retroativa massiva de direitos adquiridos.",
      text2: "Viola os princípios da irretroatividade e da confiança legítima, conforme estabelecido pelas Seções Unidas da Cassação (Sent. 4466/2009).",
    },
    weapons: {
      title: "As 4 Violações Sistêmicas",
      item1_title: "Retroatividade Mascarada",
      item1_desc: "O Art. 3-bis impõe uma fictio iuris: 'considera-se nunca adquirida' a cidadania para quem não ativou o processo até 27/03/2025.",
      item2_title: "Discriminação Geográfica",
      item2_desc: "O requisito de 'exclusividade' atinge seletivamente os nascidos em países de Ius Soli (Américas), violando o Art. 3 da Constituição.",
      item3_title: "Armadilha Administrativa",
      item3_desc: "Condicionar um direito imprescritível à eficiência do portal 'Prenot@mi' é constitucionalmente ilegítimo.",
      item4_title: "Inversão do Ônus",
      item4_desc: "Exige-se do cidadão a 'Probatio Diabolica' de fatos negativos impossíveis de provar após décadas.",
    },
    violations: {
      title: "Incompatibilidades UE e Constitucionais",
      art3_title: "Art. 3 Const. & Princípio da Igualdade",
      art3_desc: "A lei cria uma disparidade irracional entre descendentes com base na lei do local de nascimento (cidadania imposta vs. voluntária).",
      art22_title: "Art. 22 Const. & Direitos Adquiridos",
      art22_desc: "A cidadania é um status adquirido ao nascimento. A lei tenta reescrever biografias jurídicas consolidadas há décadas.",
      art35_title: "Direito UE: Doutrina Tjebbes",
      art35_desc: "O Tribunal de Justiça da UE (C-221/17) proíbe a perda automática da cidadania sem um exame individual das consequências desproporcionais.",
    },
    manifesto: {
      title: "Fundamentos Jurídicos",
      preamble_title: "Direito Vivente",
      preamble_desc: "Segundo a Cassação (2009), o status civitatis é 'permanente e imprescritível'. Não é uma concessão revogável.",
      fundament_title: "I. A Tese da Força Maior",
      fundament_desc1: "O colapso do sistema consular constitui 'impossibilidade objetiva'.",
      fundament_desc2: "Ninguém pode ser obrigado ao impossível (ad impossibilia nemo tenetur). O prazo de 27 de março é inoponível a quem tentou agendar em vão.",
      distinction_title: "II. A Traição da Confiança",
      distinction_desc: "A reforma viola a 'confiança legítima' (legittimo affidamento) de milhões que planejaram suas vidas baseados na certeza do direito italiano.",
    },
    demands: {
      title: "Ações Legais Imediatas",
      item1_title: "Recurso ao TAR do Lácio",
      item1_desc: "Impugnação da Circular 26185 por 'excesso de poder' sobre os menores.",
      item2_title: "Questão de Constitucionalidade",
      item2_desc: "Apoio à Ordinanza do Tribunal de Turim (25/06/2025) junto à Corte Constitucional.",
      item3_title: "Pressão UE",
      item3_desc: "Denúncia à Comissão Europeia por violação dos arts. 20 TFUE e 7 Carta UE.",
      item4_title: "Class Action",
      item4_desc: "Ações indenizatórias pela falha na prestação do serviço consular (prenot@mi).",
    },
    footer: {
      join: "Junte-se à",
      digital_resistance: "Defesa Legal",
      subtitle: "A batalha desloca-se dos consulados para os tribunais. Informe-se e resista.",
      cta_button: "Baixar Análise",
      disclaimer: "Baseado em análise jurídica ex art. 21 Const. Não é consultoria jurídica personalizada.",
    },
    dossier: {
      label: "Análise Forense",
      title_line1: "A RUPTURA",
      title_line2: "PARADIGMÁTICA",
      quote: "\"A Lei 74/2025 não regula o futuro, mas apaga o passado. É um ato de expropriação jurídica em massa.\"",
      section1_title: "Anatomia da Violação",
      section1_text1: "O Art. 3-bis introduz uma cláusula de extinção retroativa: quem possui outra cidadania 'considera-se nunca a ter adquirido'. Esta formulação cancela o status jurídico originário.",
      section1_text2: "Não se trata de uma perda ex nunc (daqui para frente), mas de uma anulação ex tunc (desde a origem), transformando cidadãos em estrangeiros por decreto.",
      section2_title: "O 'Caixa Eletrônico' da Farnesina",
      section2_intro: "Enquanto se negam fundos para os consulados alegando escassez, financiam-se operações externas milionárias. Isso prova que o bloqueio da cidadania é uma escolha política, não econômica.",
      video_label: "Prova Documental",
      video_protocol: "PROTOCOLO TUNÍSIA",
      video_quote: "\"Investimento na estabilidade...\"",
      video_analysis: "CONEXÃO: Os fundos para a 'estabilidade' tunisiana derivam diretamente dos cortes nos serviços consulares para italianos no exterior.",
      card_albania_title: "Custo Albânia: €160M",
      card_albania_text: "O governo encontrou €160 milhões para construir centros de detenção na Albânia, mas zero para os consulados. O dinheiro existe, mas é usado para rejeitar, não para acolher.",
      card_tax_title: "Taxa Recursos: €600",
      card_tax_text: "O D.L. 36/2025 impõe uma taxa de €600 por processo, transformando um direito fundamental em um produto de luxo. É a monetização da cidadania e uma barreira de classe inconstitucional.",
      section3_title: "Segurança Nacional Comprometida",
      section3_card_title: "Dossiê Click Day",
      section3_text: "A justificativa oficial da Lei 74/2025 é 'segurança'. Mas a realidade é oposta: enquanto bloqueiam descendentes (que têm sangue italiano), o governo admitiu que o 'Decreto Flussi' (sistema de vistos) foi totalmente infiltrado pela máfia para trazer imigração irregular.",
      section3_subtext: "A investigação 'Click Day' prova que o verdadeiro problema de segurança é a gestão governamental, não a cidadania iure sanguinis.",
      section3_video_label: "Vídeo Testemunho (Fonte: Il Sole 24 Ore)",
      section3_video_quote: "\"O crime organizado infiltrou-se na gestão dos pedidos...\"",
      section3_video_btn: "Assista à Confissão",
      section_court_title: "A Sentença Monitória",
      section_court_card_title: "Corte Const. 142/2025",
      section_court_text: "O governo age acima da lei. A Corte Constitucional já alertou que as novas restrições não podem ser retroativas, mas o Ministério as aplica mesmo assim.",
      section_court_subtext: "Isso é uma violação do Estado de Direito que abre caminho para recursos em massa.",
      section_eu_title: "O Escudo Europeu",
      section_eu_text: "Como a Itália faz parte da UE, não tem soberania absoluta sobre a revogação de cidadania. A 'Doutrina Tjebbes' protege os cidadãos contra abusos estatais.",
      section_eu_case: "Precedente C-221/17 (Tjebbes): O Tribunal da UE impõe um teste de proporcionalidade individual antes de qualquer revogação.",
      section_minors_title: "A Armadilha para Menores",
      section_minors_text: "Em sua ânsia restritiva, o Ministério inventou a categoria 'Cidadania por benefício de lei', não prevista pelo Parlamento, atingindo os mais vulneráveis.",
      section_minors_circular: "Circular 26185 (28/05/2025): Introduz prazos decadenciais para menores, um excesso de poder administrativo impugnado no TAR do Lácio.",
      section_force_majeure_title: "Tese da Força Maior",
      section_force_majeure_text: "\"Ad impossibilia nemo tenetur\". O cidadão não pode perder um direito pela impossibilidade técnica do portal Prenot@mi. O colapso do sistema justifica o atraso.",
      section4_title: "A Arma 'Ius Italiae'",
      section4_text1: "A proposta apaga a história unitária da Itália.",
      section4_text2: "Quer-se substituir o direito de sangue por uma naturalização precária.",
      section4_point_a_title: "Limite 2ª Geração",
      section4_point_a_desc: "Exclusão arbitrária baseada na data de nascimento do antepassado.",
      section4_point_b_title: "Abolição Regra 1861",
      section4_point_b_desc: "Negação da continuidade histórica do Estado Italiano.",
      section5_title: "O Cavalo de Troia: 'Ius Scholae'",
      section5_text1: "Enquanto fecha a porta ao sangue, Tajani escancara a do Ius Scholae. A proposta: cidadania após um ciclo escolar.",
      section5_text2: "Com projeções indicando em breve 1 milhão de estudantes estrangeiros, o Ius Scholae arrisca tornar-se um instrumento de alteração demográfica irreversível.",
      conclusion_title: "Perspectivas Judiciais",
      conclusion_text: "A batalha legal está aberta. A Ordinanza de Turim e o recurso ao TAR do Lácio são as primeiras brechas no muro.",
      disclaimer_title: "Nota Legal",
      disclaimer_text: "As informações baseiam-se na análise da Lei 74/2025 e jurisprudência conexa (Rottmann, Tjebbes).",
    },
    evidence: {
      label: "Prova Forense",
      title_line1: "A Narrativa",
      title_line2: "vs. A Realidade",
      subtitle: "Análise comparada entre a retórica da emergência e os dados reais.",
      video_source: "FONTE: Canal Oficial Ministro Tajani",
      section1_title: "Anomalia Demográfica",
      section1_text: "Os dados desmentem a invasão. A Itália precisa de demografia, mas escolhe repelir seus próprios descendentes.",
      section1_box_title: "Contradição",
      section1_box_quote: "\"Formar a classe dirigente...\"",
      section1_box_analysis: "ANÁLISE: Importam-se estudantes estrangeiros enquanto se expulsam cidadãos iure sanguinis.",
      comparison_title: "Duplo Padrão",
      gaza_title: "Privilégio Gaza",
      gaza_p1: "Voos de Estado gratuitos.",
      gaza_p2: "Sem requisito de língua.",
      gaza_p3: "Acesso universitário direto.",
      gaza_p4: "Recepção ministerial.",
      diaspora_title: "Punição Diáspora",
      diaspora_p1: "Bloqueio 'Prenot@mi' decenal.",
      diaspora_p2: "Taxa €600 não reembolsável.",
      diaspora_p3: "Revogação retroativa status.",
      diaspora_p4: "Desprezo institucional.",
      cta_read_dossier: "LER ANÁLISE JURÍDICA",
    }
  },
  en: {
    nav: {
      manifesto: "Manifesto",
      demands: "Demands",
      dossier: "Legal Dossier",
      backHome: "Back to Home",
      evidence_btn: "Video Evidence",
      analysis_btn: "Legal Analysis",
    },
    hero: {
      title_prefix: "The Tajani Decree",
      title_highlight: "Is Unconstitutional",
      subtitle: "An exhaustive legal analysis on the violation of Jus Sanguinis and incompatibility with European Union Law.",
      cta_manifesto: "Read the Manifesto",
      cta_dossier: "Legal Analysis",
      cta_evidence: "Watch Evidence",
    },
    intro: {
      title: "Breach of Constitutional Pact",
      text1: "Law no. 74/2025 is not a simple reform, but an instrument of massive retroactive revocation of acquired rights.",
      text2: "It violates the principles of non-retroactivity and legitimate expectations, as established by the United Sections of the Cassation (Sent. 4466/2009).",
    },
    weapons: {
      title: "The 4 Systemic Violations",
      item1_title: "Masked Retroactivity",
      item1_desc: "Art. 3-bis imposes a fictio iuris: citizenship is 'considered never acquired' for those who did not activate the process by 03/27/2025.",
      item2_title: "Geographical Discrimination",
      item2_desc: "The 'exclusivity' requirement selectively targets those born in Jus Soli countries (Americas), violating Art. 3 of the Constitution.",
      item3_title: "Administrative Trap",
      item3_desc: "Conditioning an imprescriptible right on the efficiency of the 'Prenot@mi' portal is constitutionally illegitimate.",
      item4_title: "Burden Reversal",
      item4_desc: "The citizen is required to provide 'Probatio Diabolica' of negative facts impossible to prove after decades.",
    },
    violations: {
      title: "EU and Constitutional Incompatibilities",
      art3_title: "Art. 3 Const. & Principle of Equality",
      art3_desc: "The law creates an unreasonable disparity between descendants based on the law of the place of birth (imposed vs. voluntary citizenship).",
      art22_title: "Art. 22 Const. & Acquired Rights",
      art22_desc: "Citizenship is a status acquired at birth. The law attempts to rewrite legal biographies consolidated for decades.",
      art35_title: "EU Law: Tjebbes Doctrine",
      art35_desc: "The EU Court of Justice (C-221/17) prohibits the automatic loss of citizenship without an individual examination of disproportionate consequences.",
    },
    manifesto: {
      title: "Legal Foundations",
      preamble_title: "Living Law",
      preamble_desc: "According to the Cassation (2009), status civitatis is 'permanent and imprescriptible'. It is not a revocable concession.",
      fundament_title: "I. The Force Majeure Thesis",
      fundament_desc1: "The collapse of the consular system constitutes 'objective impossibility'.",
      fundament_desc2: "No one can be obligated to the impossible (ad impossibilia nemo tenetur). The March 27 deadline is unenforceable against those who tried to book in vain.",
      distinction_title: "II. Betrayal of Trust",
      distinction_desc: "The reform violates the 'legitimate expectation' (legittimo affidamento) of millions who planned their lives based on the certainty of Italian law.",
    },
    demands: {
      title: "Immediate Legal Actions",
      item1_title: "Appeal to Lazio TAR",
      item1_desc: "Challenge to Circular 26185 for 'excess of power' regarding minors.",
      item2_title: "Constitutional Question",
      item2_desc: "Support for the Turin Tribunal Ordinance (06/25/2025) at the Constitutional Court.",
      item3_title: "EU Pressure",
      item3_desc: "Complaint to the European Commission for violation of Arts. 20 TFEU and 7 EU Charter.",
      item4_title: "Class Action",
      item4_desc: "Compensation actions for failure to provide consular service (prenot@mi).",
    },
    footer: {
      join: "Join the",
      digital_resistance: "Legal Defense",
      subtitle: "The battle shifts from consulates to courtrooms. Get informed and resist.",
      cta_button: "Download Analysis",
      disclaimer: "Based on legal analysis ex art. 21 Const. Not personalized legal advice.",
    },
    dossier: {
      label: "Forensic Analysis",
      title_line1: "THE PARADIGMATIC",
      title_line2: "RUPTURE",
      quote: "\"Law 74/2025 does not regulate the future, but erases the past. It is an act of mass legal expropriation.\"",
      section1_title: "Anatomy of the Violation",
      section1_text1: "Art. 3-bis introduces a retroactive extinction clause: those possessing another citizenship 'are considered never to have acquired it'. This wording cancels the original legal status.",
      section1_text2: "It is not an ex nunc loss (from now on), but an ex tunc annulment (from the origin), transforming citizens into foreigners by decree.",
      section2_title: "The Foreign Ministry's ATM",
      section2_intro: "While funds are denied for consulates alleging scarcity, millions are spent on questionable foreign operations. This proves that blocking citizenship is a political choice, not an economic one.",
      video_label: "Documentary Proof",
      video_protocol: "TUNISIA PROTOCOL",
      video_quote: "\"Investment in stability...\"",
      video_analysis: "CONNECTION: Funds for Tunisian 'stability' derive directly from cuts to consular services for Italians abroad.",
      card_albania_title: "Albania Cost: €160M",
      card_albania_text: "The government found €160 million to build detention centers in Albania, but zero for consulates. The money exists, but it is used to reject, not to welcome.",
      card_tax_title: "Appeal Tax: €600",
      card_tax_text: "D.L. 36/2025 imposes a €600 tax per case, turning a fundamental right into a luxury product. It is the monetization of citizenship and an unconstitutional class barrier.",
      section3_title: "National Security Compromised",
      section3_card_title: "Click Day Dossier",
      section3_text: "The official excuse for Law 74/2025 is 'security'. But the reality is opposite: while blocking descendants (who have Italian blood), the government admitted that the 'Decreto Flussi' (visa system) was totally infiltrated by the mafia to bring in irregular immigration.",
      section3_subtext: "The 'Click Day' investigation proves that the real security problem is government management, not iure sanguinis citizenship.",
      section3_video_label: "Video Testimony (Source: Il Sole 24 Ore)",
      section3_video_quote: "\"Organized crime infiltrated the application management...\"",
      section3_video_btn: "Watch the Confession",
      section_court_title: "The Monitory Sentence",
      section_court_card_title: "Const. Court 142/2025",
      section_court_text: "The government acts above the law. The Constitutional Court has explicitly warned that new restrictions cannot be retroactive, yet the Ministry applies them anyway.",
      section_court_subtext: "This is a violation of the Rule of Law paving the way for mass appeals.",
      section_eu_title: "The European Shield",
      section_eu_text: "Since Italy is part of the EU, it does not have absolute sovereignty over citizenship revocation. The 'Tjebbes Doctrine' protects citizens from state abuse.",
      section_eu_case: "Precedent C-221/17 (Tjebbes): The EU Court imposes an individual proportionality test before any revocation.",
      section_minors_title: "The Trap for Minors",
      section_minors_text: "In its restrictive zeal, the Ministry invented the category 'Citizenship by benefit of law', not foreseen by Parliament, targeting the most vulnerable.",
      section_minors_circular: "Circular 26185 (05/28/2025): Introduces forfeiture deadlines for minors, an administrative excess of power challenged at the Lazio TAR.",
      section_force_majeure_title: "Force Majeure Thesis",
      section_force_majeure_text: "\"Ad impossibilia nemo tenetur\". A citizen cannot lose a right due to the technical impossibility of the Prenot@mi portal. The system collapse justifies the delay.",
      section4_title: "The 'Ius Italiae' Weapon",
      section4_text1: "The proposal erases Italy's unitary history.",
      section4_text2: "They want to replace blood right with precarious naturalization.",
      section4_point_a_title: "2nd Generation Limit",
      section4_point_a_desc: "Arbitrary exclusion based on ancestor's birth date.",
      section4_point_b_title: "Abolition of 1861 Rule",
      section4_point_b_desc: "Denial of historical continuity of the Italian State.",
      section5_title: "The Trojan Horse: 'Ius Scholae'",
      section5_text1: "While closing the door to blood, Tajani throws open the one to Ius Scholae. The proposal: citizenship after one school cycle.",
      section5_text2: "With projections indicating 1 million foreign students soon, Ius Scholae risks becoming an irreversible tool of demographic alteration.",
      conclusion_title: "Judicial Perspectives",
      conclusion_text: "The legal battle is open. The Turin Ordinance and the appeal to Lazio TAR are the first breaches in the wall.",
      disclaimer_title: "Legal Note",
      disclaimer_text: "Information based on analysis of Law 74/2025 and related case law (Rottmann, Tjebbes).",
    },
    evidence: {
      label: "Forensic Evidence",
      title_line1: "The Narrative",
      title_line2: "vs. Reality",
      subtitle: "Comparative analysis between emergency rhetoric and real data.",
      video_source: "SOURCE: Official Channel Minister Tajani",
      section1_title: "Demographic Anomaly",
      section1_text: "Data belies the invasion. Italy needs demographics but chooses to repel its own descendants.",
      section1_box_title: "Contradiction",
      section1_box_quote: "\"Train the ruling class...\"",
      section1_box_analysis: "ANALYSIS: Foreign students are imported while iure sanguinis citizens are expelled.",
      comparison_title: "Double Standard",
      gaza_title: "Gaza Privilege",
      gaza_p1: "Free State flights.",
      gaza_p2: "No language requirement.",
      gaza_p3: "Direct university access.",
      gaza_p4: "Ministerial welcome.",
      diaspora_title: "Diaspora Punishment",
      diaspora_p1: "Decadal 'Prenot@mi' block.",
      diaspora_p2: "Non-refundable €600 tax.",
      diaspora_p3: "Retroactive status revocation.",
      diaspora_p4: "Institutional contempt.",
      cta_read_dossier: "READ LEGAL ANALYSIS",
    }
  },
  es: {
    nav: {
      manifesto: "Manifiesto",
      demands: "Exigencias",
      dossier: "Dossier Jurídico",
      backHome: "Volver al Inicio",
      evidence_btn: "Video Evidencia",
      analysis_btn: "Análisis Legal",
    },
    hero: {
      title_prefix: "El Decreto Tajani",
      title_highlight: "Es Inconstitucional",
      subtitle: "Un análisis jurídico exhaustivo sobre la violación del Jus Sanguinis y la incompatibilidad con el Derecho de la Unión Europea.",
      cta_manifesto: "Leer el Manifiesto",
      cta_dossier: "Análisis Jurídico",
      cta_evidence: "Ver Evidencia",
    },
    intro: {
      title: "Ruptura del Pacto Constitucional",
      text1: "La Ley n.º 74/2025 no es una simple reforma, sino un instrumento de revocación retroactiva masiva de derechos adquiridos.",
      text2: "Viola los principios de irretroactividad y confianza legítima, según lo establecido por las Secciones Unidas de Casación (Sent. 4466/2009).",
    },
    weapons: {
      title: "Las 4 Violaciones Sistémicas",
      item1_title: "Retroactividad Enmascarada",
      item1_desc: "El Art. 3-bis impone una fictio iuris: se 'considera nunca adquirida' la ciudadanía para quien no activó el proceso antes del 27/03/2025.",
      item2_title: "Discriminación Geográfica",
      item2_desc: "El requisito de 'exclusividad' afecta selectivamente a los nacidos en países de Ius Soli (Américas), violando el Art. 3 de la Constitución.",
      item3_title: "Trampa Administrativa",
      item3_desc: "Condicionar un derecho imprescriptible a la eficiencia del portal 'Prenot@mi' es constitucionalmente ilegítimo.",
      item4_title: "Inversión de la Carga",
      item4_desc: "Se exige al ciudadano la 'Probatio Diabolica' de hechos negativos imposibles de probar después de décadas.",
    },
    violations: {
      title: "Incompatibilidades UE y Constitucionales",
      art3_title: "Art. 3 Const. & Principio de Igualdad",
      art3_desc: "La ley crea una disparidad irracional entre descendentes basada en la ley del lugar de nacimiento (ciudadanía impuesta vs. voluntaria).",
      art22_title: "Art. 22 Const. & Derechos Adquiridos",
      art22_desc: "La ciudadanía es un estatus adquirido al nacimiento. La ley intenta reescribir biografías jurídicas consolidadas hace décadas.",
      art35_title: "Derecho UE: Doctrina Tjebbes",
      art35_desc: "El Tribunal de Justicia de la UE (C-221/17) prohíbe la pérdida automática de la ciudadanía sin un examen individual de consecuencias desproporcionadas.",
    },
    manifesto: {
      title: "Fundamentos Jurídicos",
      preamble_title: "Derecho Vivente",
      preamble_desc: "Según la Casación (2009), el status civitatis es 'permanente e imprescriptible'. No es una concesión revocable.",
      fundament_title: "I. La Tesis de Fuerza Mayor",
      fundament_desc1: "El colapso del sistema consular constituye 'imposibilidad objetiva'.",
      fundament_desc2: "Nadie puede ser obligado a lo imposible (ad impossibilia nemo tenetur). El plazo del 27 de marzo es inoponible a quien intentó agendar en vano.",
      distinction_title: "II. La Traición de la Confianza",
      distinction_desc: "La reforma viola la 'confianza legítima' (legittimo affidamento) de millones que planificaron sus vidas basados en la certeza del derecho italiano.",
    },
    demands: {
      title: "Acciones Legales Inmediatas",
      item1_title: "Recurso al TAR del Lacio",
      item1_desc: "Impugnación de la Circular 26185 por 'exceso de poder' sobre los menores.",
      item2_title: "Cuestión de Constitucionalidad",
      item2_desc: "Apoyo a la Ordenanza del Tribunal de Turín (25/06/2025) ante la Corte Constitucional.",
      item3_title: "Presión UE",
      item3_desc: "Denuncia a la Comisión Europea por violación de los arts. 20 TFUE y 7 Carta UE.",
      item4_title: "Class Action",
      item4_desc: "Acciones indemnizatorias por la falla en la prestación del servicio consular (prenot@mi).",
    },
    footer: {
      join: "Únete a la",
      digital_resistance: "Defensa Legal",
      subtitle: "La batalla se desplaza de los consulados a los tribunales. Infórmate y resiste.",
      cta_button: "Descargar Análisis",
      disclaimer: "Basado en análisis jurídico ex art. 21 Const. No es asesoría legal personalizada.",
    },
    dossier: {
      label: "Análisis Forense",
      title_line1: "LA RUPTURA",
      title_line2: "PARADIGMÁTICA",
      quote: "\"La Ley 74/2025 no regula el futuro, sino que borra el pasado. Es un acto de expropiación jurídica masiva.\"",
      section1_title: "Anatomía de la Violación",
      section1_text1: "El Art. 3-bis introduce una cláusula de extinción retroactiva: quien posee otra ciudadanía 'se considera nunca haberla adquirido'. Esta formulación cancela el estatus jurídico originario.",
      section1_text2: "No se trata de una pérdida ex nunc (de ahora en adelante), sino de una anulación ex tunc (desde el origen), transformando ciudadanos en extranjeros por decreto.",
      section2_title: "El 'Cajero Automático' de la Farnesina",
      section2_intro: "Mientras se niegan fondos para consulados alegando escasez, se financian operaciones externas millonarias. Esto prueba que el bloqueo de la ciudadanía es una elección política, no económica.",
      video_label: "Prueba Documental",
      video_protocol: "PROTOCOLO TÚNEZ",
      video_quote: "\"Inversión en la estabilidad...\"",
      video_analysis: "CONEXIÓN: Los fondos para la 'estabilidade' tunecina derivan directamente de recortes a servicios consulares para italianos en el exterior.",
      card_albania_title: "Costo Albania: €160M",
      card_albania_text: "El gobierno encontró €160 millones para construir centros de detención en Albania, pero cero para los consulados. El dinero existe, pero se usa para rechazar, no para acoger.",
      card_tax_title: "Tasa Recursos: €600",
      card_tax_text: "El D.L. 36/2025 impone una tasa de €600 por caso, convirtiendo un derecho fundamental en un producto de lujo. Es la monetización de la ciudadanía y una barrera de clase inconstitucional.",
      section3_title: "Seguridad Nacional Comprometida",
      section3_card_title: "Dossier Click Day",
      section3_text: "La excusa oficial de la Ley 74/2025 es la 'seguridad'. Pero la realidad es opuesta: mientras bloquean a descendientes (con sangre italiana), el gobierno admitió que el 'Decreto Flussi' (sistema de visas) fue totalmente infiltrado por la mafia para traer inmigración irregular.",
      section3_subtext: "La investigación 'Click Day' prueba que el verdadero problema de seguridad es la gestión gubernamental, no la ciudadanía iure sanguinis.",
      section3_video_label: "Video Testimonio (Fuente: Il Sole 24 Ore)",
      section3_video_quote: "\"El crimen organizado se infiltró en la gestión de solicitudes...\"",
      section3_video_btn: "Ver Testimonio",
      section_court_title: "La Sentencia Monitoria",
      section_court_card_title: "Corte Const. 142/2025",
      section_court_text: "El gobierno actúa por encima de la ley. La Corte Constitucional ya advirtió explícitamente que las nuevas restricciones no pueden ser retroactivas, pero el Ministerio las aplica de todos modos.",
      section_court_subtext: "Esto es una violación del Estado de Derecho que abre el camino a recursos masivos.",
      section_eu_title: "El Escudo Europeo",
      section_eu_text: "Como Italia es parte de la UE, no tiene soberanía absoluta sobre la revocación de ciudadanía. La 'Doctrina Tjebbes' protege a los ciudadanos contra abusos estatales.",
      section_eu_case: "Precedente C-221/17 (Tjebbes): El Tribunal de la UE impone una prueba de proporcionalidad individual antes de cualquier revocación.",
      section_minors_title: "La Trampa para Menores",
      section_minors_text: "En su afán restrictivo, el Ministerio inventó la categoría 'Ciudadanía por beneficio de ley', no prevista por el Parlamento, golpeando a los más vulnerables.",
      section_minors_circular: "Circular 26185 (28/05/2025): Introduce plazos de caducidad para menores, un exceso de poder administrativo impugnado ante el TAR del Lacio.",
      section_force_majeure_title: "Tesis de Fuerza Mayor",
      section_force_majeure_text: "\"Ad impossibilia nemo tenetur\". El ciudadano no puede perder un derecho por la imposibilidad técnica del portal Prenot@mi. El colapso del sistema justifica el retraso.",
      section4_title: "El Arma 'Ius Italiae'",
      section4_text1: "La propuesta borra la historia unitaria de Italia.",
      section4_text2: "Se quiere sustituir el derecho de sangre por una naturalización precaria.",
      section4_point_a_title: "Límite 2ª Generación",
      section4_point_a_desc: "Exclusión arbitraria basada en la fecha de nacimiento del antepasado.",
      section4_point_b_title: "Abolición Regra 1861",
      section4_point_b_desc: "Negación de la continuidad histórica del Estado Italiano.",
      section5_title: "El Caballo de Troya: 'Ius Scholae'",
      section5_text1: "Mientras cierra la puerta a la sangre, Tajani abre de par en par la del Ius Scholae. La propuesta: ciudadanía tras un ciclo escolar.",
      section5_text2: "Con proyecciones que indican pronto 1 millón de estudiantes extranjeros, el Ius Scholae corre el riesgo de convertirse en una herramienta de alteración demográfica irreversible.",
      conclusion_title: "Perspectivas Judiciales",
      conclusion_text: "La batalla legal está abierta. La Ordenanza de Turín y el recurso al TAR del Lacio son las primeras brechas en el muro.",
      disclaimer_title: "Nota Legal",
      disclaimer_text: "Información basada en análisis de la Ley 74/2025 y jurisprudencia conexa (Rottmann, Tjebbes).",
    },
    evidence: {
      label: "Prueba Forense",
      title_line1: "La Narrativa",
      title_line2: "vs. La Realidad",
      subtitle: "Análisis comparado entre la retórica de emergencia y los datos reales.",
      video_source: "FUENTE: Canal Oficial Ministro Tajani",
      section1_title: "Anomalía Demográfica",
      section1_text: "Los datos desmienten la invasión. Italia necesita demografía pero elige repeler a sus propios descendentes.",
      section1_box_title: "Contradicción",
      section1_box_quote: "\"Formar la classe dirigente...\"",
      section1_box_analysis: "ANÁLISIS: Se importan estudiantes extranjeros mientras se expulsan ciudadanos iure sanguinis.",
      comparison_title: "Doble Rasero",
      gaza_title: "Privilegio Gaza",
      gaza_p1: "Vuelos de Estado gratuitos.",
      gaza_p2: "Sin requisito de idioma.",
      gaza_p3: "Acceso universitario directo.",
      gaza_p4: "Recepción ministerial.",
      diaspora_title: "Castigo Diáspora",
      diaspora_p1: "Bloqueo 'Prenot@mi' decenal.",
      diaspora_p2: "Tasa €600 no reembolsable.",
      diaspora_p3: "Revocación retroactiva estatus.",
      diaspora_p4: "Desprecio institucional.",
      cta_read_dossier: "LEER ANÁLISIS JURÍDICO",
    }
  },
};
