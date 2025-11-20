import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useEffect } from "react";
import PageTransition from "@/components/PageTransition";
import SourceLink from "@/components/SourceLink";

export default function Dossier() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageTransition>
      <div className="min-h-screen bg-background text-foreground dark font-sans selection:bg-[#FF1E56] selection:text-white">
        <nav className="sticky top-0 z-50 w-full bg-black/90 backdrop-blur-md border-b border-[#3b4354]">
          <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
            <Link href="/">
              <span className="text-xl font-bold text-white cursor-pointer hover:text-[#39FF14] transition-colors">
                Manifesto Tajani
              </span>
            </Link>
            <div className="flex gap-4">
               <Link href="/evidence">
                <Button className="border border-[#FF1E56] text-[#FF1E56] bg-transparent hover:bg-[#FF1E56]/10 hover:scale-105 transition-transform">
                  Video Prova
                </Button>
              </Link>
              <Link href="/">
                <Button className="text-gray-300 hover:text-white bg-transparent">
                  Torna alla Home
                </Button>
              </Link>
            </div>
          </div>
        </nav>

        <main className="w-full max-w-4xl mx-auto px-4 py-16">
          <header className="mb-20">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-[1px] bg-[#FF1E56] w-12"></span>
              <span className="text-[#FF1E56] font-mono text-sm tracking-[0.2em] uppercase">Rapporto Confidenziale</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 leading-[0.9]">
              LA DOTTRINA <br />
              TAJANI
            </h1>
            <p className="text-2xl text-gray-300 leading-relaxed border-l-4 border-[#39FF14] pl-6 italic">
              "Un'analisi forense dell'Architettura della Decezione: come la Farnesina finanzia regimi autoritari mentre dichiara guerra alla diaspora italiana."
            </p>
          </header>

          <div className="space-y-20 text-gray-300 leading-relaxed text-lg">
            
            {/* Introduzione Agressiva */}
            <section>
              <h2 className="text-4xl font-bold text-white mb-8 flex items-baseline gap-4">
                <span className="text-[#39FF14] text-6xl font-black opacity-50">01</span>
                Il Calcolo Cinico
              </h2>
              <p className="mb-6 first-letter:text-5xl first-letter:font-bold first-letter:text-white first-letter:float-left first-letter:mr-3">
                L'Italia si trova a un bivio esistenziale. Stretta tra un inverno demografico senza precedenti e una pressione migratoria strutturale, la leadership di Antonio Tajani ha operato una scelta di campo netta, crudele e non dichiarata: <strong>il sangue antico non basta più.</strong>
              </p>
              <p>
                In questo nuovo modello di "Nazione S.p.A.", il cittadino non è più chi condivide la storia e l'anima della nazione, ma chi è "funzionale" al mercato. I figli della diaspora, che hanno costruito nazioni come il Brasile e l'Argentina, sono stati declassati da "fratelli" a "passività di bilancio".
              </p>
            </section>

            {/* A Mentira Econômica e o "Bancomat" */}
            <section className="bg-[#1b1f27] border-y border-[#3b4354] py-12 -mx-4 px-4 md:mx-0 md:px-8 md:rounded-xl">
              <h2 className="text-3xl font-bold text-white mb-8">
                <span className="text-[#00FFFF]">02.</span> Il "Bancomat" della Farnesina
              </h2>
              <p className="mb-6">
                Mentre i nostri consolati in Sud America crollano per mancanza di fondi, Tajani ha trasformato il Ministero degli Esteri in un ente pagatore per regimi instabili.
                La strategia è chiara: <strong>finanziare l'esterno per bloccare l'interno.</strong>
              </p>
              <div className="grid md:grid-cols-2 gap-8 my-8">
                <div className="bg-black/40 p-6 rounded border border-red-500/30 relative overflow-hidden">
                   <div className="absolute top-0 right-0 p-1 bg-red-500/20 text-[10px] text-red-500 font-bold">DATI UFFICIALI</div>
                   <h4 className="text-[#FF1E56] font-bold mb-2 text-xl">L'Ipocrisia Albanese: €160 Milioni</h4>
                   <p className="text-sm">
                     Il Ministro Piantedosi ha confermato che i centri in Albania costano <strong>160 milioni di euro all'anno</strong>. 
                     <SourceLink 
                        href="https://tg24.sky.it/politica/2024/08/07/centro-migranti-albania-accordo-piantedosi" 
                        label="Confessione Piantedosi" 
                        sourceName="Sky TG24 / Min. Interno" 
                     />
                     Un'operazione di facciata costosissima, mentre si negano pochi milioni per assumere personale consolare in Brasile.
                   </p>
                </div>
                <div className="bg-black/40 p-6 rounded border border-[#39FF14]/30">
                   <h4 className="text-[#39FF14] font-bold mb-2 text-xl">La Tassa della Vergogna: €600</h4>
                   <p className="text-sm">Mentre regaliamo motovedette e fondi alla Tunisia e alla Libia senza garanzie sui diritti umani, Tajani vuole raddoppiare la tassa di cittadinanza per i discendenti a 600 euro. 
                   <SourceLink 
                     href="https://temi.camera.it/leg19/provvedimento/d-l-36-2025-disposizioni-urgenti-in-materia-di-cittadinanza.html" 
                     label="D.L. 36/2025" 
                     sourceName="Atti Camera dei Deputati" 
                   />
                   <strong>Il denaro degli italiani all'estero finanzia la politica estera fallimentare nel Mediterraneo.</strong></p>
                </div>
              </div>
            </section>

            {/* Sicurezza Nazionale Compromessa (CLICK DAY) */}
            <section className="relative">
              <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-[#FF1E56] to-transparent"></div>
              <h2 className="text-4xl font-bold text-white mb-8 flex items-baseline gap-4">
                <span className="text-[#FF1E56] text-6xl font-black opacity-50">03</span>
                Sicurezza Nazionale Compromessa
              </h2>
              <div className="bg-[#FF1E56]/5 p-6 rounded border border-[#FF1E56]/20 mb-6">
                <h3 className="text-[#FF1E56] font-bold text-xl mb-2 uppercase tracking-widest">Dossier Click Day</h3>
                <p className="mb-4">
                  La narrazione di "legge e ordine" di Tajani è crollata. Il sistema "Click Day" per i visti di lavoro è stato infiltrato dalla <strong>criminalità organizzata</strong>, che ha venduto visti a cittadini di Bangladesh e Pakistan.
                </p>
                <p className="text-sm text-gray-400 mb-4">
                  Non lo diciamo noi, lo ha ammesso il Governo stesso. È una falla di sicurezza nazionale che espone l'Italia a rischi di infiltrazione terroristica, mentre si bloccano i discendenti cristiani e occidentali del Sud America.
                  <SourceLink 
                      href="https://ntplusdiritto.ilsole24ore.com/art/via-libera-decreto-flussi-novita-click-days-stagionali-controlli-sui-cellulari-e-datori-AG9JPTL" 
                      label="Inchiesta Il Sole 24 Ore" 
                      sourceName="Il Sole 24 Ore / Dati Giudiziari" 
                  />
                </p>
                <ul className="space-y-2 text-sm font-mono text-[#FF1E56]">
                  <li>> Mancanza totale di controlli OSINT sulle aziende richiedenti.</li>
                  <li>> Vendita di visti nel mercato nero (fino a 15.000€).</li>
                  <li>> Sospensione dei visti come ammissione di colpa.</li>
                </ul>
              </div>
            </section>

            {/* O Ataque do Ius Italiae */}
            <section>
              <h2 className="text-4xl font-bold text-white mb-8 flex items-baseline gap-4">
                <span className="text-white text-6xl font-black opacity-20">04</span>
                L'Arma "Ius Italiae"
              </h2>
              <p className="mb-6 font-medium text-white">
                La proposta di riforma "Ius Italiae" di Forza Italia non è una riforma. È una demolizione controllata della Legge 91/1992
                <SourceLink 
                    href="https://forzaitalia.it/wp-content/uploads/2024/10/IUS_ITALIAE.pdf" 
                    label="Doc. Ufficiale" 
                    sourceName="Forza Italia" 
                />.
              </p>
              <p className="mb-8">
                Tajani giustifica questo attacco con il mito insultante del "Turismo del Passaporto", affermando che i discendenti "fingono di non parlare italiano solo per andare a Miami". Una generalizzazione che offende milioni di persone oneste per colpire pochi furbi.
              </p>

              <div className="space-y-4">
                <div className="flex gap-4 items-start bg-[#2a2f3a] p-4 rounded">
                  <span className="font-bold text-[#00FFFF] text-xl">A.</span>
                  <div>
                    <h4 className="text-white font-bold">Il Limite della 2ª Generazione</h4>
                    <p className="text-sm text-gray-400">Se il tuo bisnonno era italiano, sei fuori. Cancellazione retroattiva di un diritto di nascita.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start bg-[#2a2f3a] p-4 rounded">
                  <span className="font-bold text-[#00FFFF] text-xl">B.</span>
                  <div>
                    <h4 className="text-white font-bold">Abolizione della Regola 1861</h4>
                    <p className="text-sm text-gray-400">Si vuole cancellare la storia unitaria d'Italia, negando la cittadinanza a chi discende dai fondatori della patria.</p>
                  </div>
                </div>
              </div>
            </section>

             {/* Ius Scholae e Dati Demografici (LINK CORRETTO) */}
            <section>
              <h2 className="text-3xl font-bold text-white mb-6">05. Il Cavallo di Troia: "Ius Scholae"</h2>
              <p className="mb-4">
                Mentre chiude la porta al sangue, Tajani spalanca quella dello <em>Ius Scholae</em>. La proposta: cittadinanza dopo un ciclo scolastico.
              </p>
              <p className="mb-4">
                Con proiezioni che indicano presto <strong>1 milione di studenti stranieri</strong>, lo Ius Scholae rischia di diventare uno strumento di alterazione demografica irreversibile. I dati della Fondazione ISMU confermano la portata di questa trasformazione.
                <SourceLink 
                    href="https://www.ismu.org/" 
                    label="Dati Fondazione ISMU" 
                    sourceName="Fondazione ISMU - Rapporto sulle Migrazioni" 
                />
              </p>
            </section>

            <section className="border-t border-gray-700 pt-16 mt-16">
              <h2 className="text-4xl font-black text-white mb-8">Conclusione</h2>
              <p className="text-xl text-gray-300 font-medium mb-8">
                Siamo di fronte a un'operazione di ingegneria sociale. Tajani e i suoi alleati tecnocrati hanno deciso che il futuro dell'Italia non passa per San Paolo o Buenos Aires, ma per Tunisi e Islamabad.
              </p>
              
              {/* DISCLAIMER AGRESSIVO */}
              <div className="bg-[#101622] p-8 rounded-lg border border-gray-800 mt-12">
                <h4 className="text-gray-500 text-xs uppercase tracking-widest mb-4">Dichiarazione di Indipendenza</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Questo sito e questo dossier <strong>NON hanno alcun finanziamento politico</strong>. Non siamo legati a partiti.
                  Siamo cittadini, discendenti e patrioti profondamente <strong>delusi e traditi</strong> dalla figura di Antonio Tajani. 
                  Ci aspettavamo un difensore dell'italianità nel mondo; abbiamo trovato un liquidatore della nostra eredità.
                </p>
                <p className="text-gray-500 text-xs mt-4 pt-4 border-t border-gray-800">
                  Fonti Dati: Fondazione ISMU, Ministero dell'Interno, Il Sole 24 Ore, SkyTG24, Atti Parlamentari.
                </p>
              </div>
            </section>

          </div>
        </main>
      </div>
    </PageTransition>
  );
}
