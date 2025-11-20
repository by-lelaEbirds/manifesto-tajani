// client/src/pages/Home.tsx

import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import PageTransition from "@/components/PageTransition";
import SourceLink from "@/components/SourceLink"; // Importe o novo componente

export default function Home() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // URL DO ABAIXO ASSINADO
  const PETITION_URL = "https://www.change.org/p/ripudio-al-d-l-tajani-28-03-25";

  return (
    <PageTransition>
      <div className="min-h-screen bg-background text-foreground dark">
        
        {/* HEADER (Mantido igual) */}
        <div className="sticky top-0 z-50 w-full">
            <div className="h-1 bg-[#39FF14]"></div>
            <nav className="bg-black/50 backdrop-blur-sm border-b border-[#3b4354]">
            <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
                <h1 className="text-xl font-bold text-white">Manifesto Tajani</h1>
                <div className="flex gap-4 items-center">
                <Link href="/dossier">
                    <button className="text-[#00FFFF] hover:text-[#39FF14] transition-colors text-sm font-medium uppercase tracking-wider hidden md:block">
                    Dossier Analitico
                    </button>
                </Link>
                <button onClick={() => scrollToSection("manifesto")} className="text-gray-300 hover:text-[#39FF14] transition-colors text-sm">Manifesto</button>
                <button onClick={() => scrollToSection("demands")} className="text-gray-300 hover:text-[#39FF14] transition-colors text-sm">Esigenze</button>
                </div>
            </div>
            </nav>
        </div>

        <main className="w-full">
            {/* HERO SECTION */}
            <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "linear-gradient(135deg, rgba(16, 22, 34, 0.85) 0%, rgba(16, 22, 34, 0.95) 100%)", backgroundColor: "#101622"}}></div>
            <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
                <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight tracking-tight">
                Il Decreto Tajani <br/><span className="text-[#FF1E56]">È Incostituzionale</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Un manifesto digitale di resistenza contro la violazione del Jus Sanguinis e l'espropriazione della cittadinanza italiana.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
                <Button onClick={() => scrollToSection("manifesto")} className="bg-[#39FF14] text-black font-bold text-lg h-12 px-8 hover:bg-opacity-80 transition-all rounded-sm">
                    Leggi il Manifesto
                </Button>
                
                <Link href="/dossier">
                    <Button className="bg-[#00FFFF]/10 text-[#00FFFF] font-bold text-lg h-12 px-8 hover:bg-[#00FFFF]/20 transition-all rounded-sm border border-[#00FFFF]">
                    Dati e Analisi
                    </Button>
                </Link>

                <Link href="/evidence">
                    <Button className="bg-[#FF1E56] text-white font-bold text-lg h-12 px-8 hover:bg-[#FF1E56]/80 transition-all rounded-sm border border-[#FF1E56] animate-pulse">
                    Guarda la Prova
                    </Button>
                </Link>
                </div>

            </div>
            </section>

            {/* INTRO SECTION */}
            <section className="py-16 px-4 bg-black/30">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">La Minaccia Imminente</h2>
                <p className="text-lg text-gray-300 leading-relaxed mb-4">
                Il Decreto-Legge n. 36/2025 (il Decreto Tajani)
                <SourceLink 
                  href="https://temi.camera.it/leg19/provvedimento/d-l-36-2025-disposizioni-urgenti-in-materia-di-cittadinanza.html" 
                  label="D.L. 36/2025" 
                  sourceName="Camera dei Deputati" 
                />
                rappresenta una rottura fondamentale con il principio storico del Jus Sanguinis italiano.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                Questo decreto attacca direttamente il diritto di sangue, negando la cittadinanza a milioni di discendenti di italiani e violando frontalmente gli Articoli 3, 22 e 35 della Costituzione della Repubblica Italiana
                <SourceLink 
                  href="https://www.senato.it/istituzione/la-costituzione" 
                  label="Costituzione" 
                  sourceName="Senato della Repubblica" 
                />.
                </p>
            </div>
            </section>

            {/* AS 4 ARMAS (Mantido, sem necessidade crítica de fontes externas aqui pois é análise) */}
            <section className="py-16 px-4">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">Le Quattro Armi della Distruzione</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border border-[#3b4354] bg-[#1b1f27] p-6 rounded-sm hover:border-[#39FF14] transition-colors">
                    <div className="flex items-start gap-4">
                    <span className="text-[#39FF14] text-3xl font-bold">1</span>
                    <div>
                        <h3 className="text-xl font-bold text-white mb-2">Limitazione Generazionale</h3>
                        <p className="text-gray-400">La trappola dell'esclusività disqualifica automaticamente quasi tutte le linee genealogiche oltre la prima generazione.</p>
                    </div>
                    </div>
                </div>
                <div className="border border-[#3b4354] bg-[#1b1f27] p-6 rounded-sm hover:border-[#39FF14] transition-colors">
                    <div className="flex items-start gap-4">
                    <span className="text-[#39FF14] text-3xl font-bold">2</span>
                    <div>
                        <h3 className="text-xl font-bold text-white mb-2">Punizione ai Figli Minori</h3>
                        <p className="text-gray-400">Spezza l'unità dello status civitatis della famiglia, costringendo i minori a trasferirsi in Italia per due anni.</p>
                    </div>
                    </div>
                </div>
                <div className="border border-[#3b4354] bg-[#1b1f27] p-6 rounded-sm hover:border-[#39FF14] transition-colors">
                    <div className="flex items-start gap-4">
                    <span className="text-[#39FF14] text-3xl font-bold">3</span>
                    <div>
                        <h3 className="text-xl font-bold text-white mb-2">Non-Automaticità</h3>
                        <p className="text-gray-400">Trasforma il diritto automatico di sangue in un processo condizionale, mutando il diritto in beneficio discrezionale.</p>
                    </div>
                    </div>
                </div>
                <div className="border border-[#3b4354] bg-[#1b1f27] p-6 rounded-sm hover:border-[#39FF14] transition-colors">
                    <div className="flex items-start gap-4">
                    <span className="text-[#39FF14] text-3xl font-bold">4</span>
                    <div>
                        <h3 className="text-xl font-bold text-white mb-2">Probatio Diabolica</h3>
                        <p className="text-gray-400">Inverte l'onere della prova, esigendo che il cittadino provi fatti negativi impossibili da provare.</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>

            <section className="py-16 px-4 bg-black/30">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">Le Violazioni Costituzionali</h2>
                <div className="space-y-6">
                <div className="border-l-4 border-[#00FFFF] bg-[#00FFFF]/10 p-6 rounded-r-sm">
                    <h3 className="text-2xl font-bold text-white mb-2">Articolo 3: Violazione dell'Uguaglianza</h3>
                    <p className="text-gray-300">Il decreto crea cittadini di seconda categoria attraverso discriminazione geografica, temporale e familiare, violando il principio di pari dignità sociale.</p>
                </div>
                <div className="border-l-4 border-[#FF1E56] bg-[#FF1E56]/10 p-6 rounded-r-sm">
                    <h3 className="text-2xl font-bold text-white mb-2">Articolo 22: Privazione Politica della Cittadinanza</h3>
                    <p className="text-gray-300">Il decreto esegue una privazione di massa della cittadinanza per motivi politici, disfarçato da riforma procedurale.</p>
                </div>
                <div className="border-l-4 border-[#39FF14] bg-[#39FF14]/10 p-6 rounded-r-sm">
                    <h3 className="text-2xl font-bold text-white mb-2">Articolo 35: Tradimento della Memoria Migrante</h3>
                    <p className="text-gray-300">Il decreto tradisce la promessa costituzionale di proteggere l'emigrazione italiana, sostituendo la cittadinanza con un permesso di lavoro servile.</p>
                </div>
                </div>
            </div>
            </section>

            {/* MANIFESTO TEXTO */}
            <section id="manifesto" className="py-16 px-4">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Il Manifesto Completo</h2>
                <div className="bg-[#1b1f27] border border-[#3b4354] p-8 rounded-sm space-y-6 text-gray-300 leading-relaxed">
                <div>
                    <h3 className="text-2xl font-bold text-white mb-4">Preambolo</h3>
                    <p>Noi, cittadini italiani per diritto di sangue (Jus Sanguinis), discendenti di coloro che l'Italia ha esportato nel mondo, dichiariamo solennemente che il Decreto-Legge n. 36/2025 è profondamente incostituzionale e rappresenta un tradimento dei principi fondamentali della Repubblica Italiana.</p>
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-white mb-4">I. Il Fondamento Perpetuo</h3>
                    <p>Il Jus Sanguinis non è una concessione dello Stato italiano. È un diritto acquisito a titolo originario, acquisito nel preciso momento della nascita. Un individuo nasce cittadino italiano se discendente di un cittadino italiano, indipendentemente dal luogo di nascita.</p>
                    <p className="mt-4">La Corte di Cassazione italiana ha qualificato questo diritto come diritto soggettivo e imprescritibile. Non è una grazia, non è un privilegio, non è una concessione. È uno status che esiste per il semplice fatto di essere nato da genitori italiani.</p>
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-white mb-4">II. La Distinzione Cruciale</h3>
                    <p>Qui risiede la distinzione ontologica cruciale tra due concetti:</p>
                    <ul className="list-disc list-inside mt-4 space-y-2 text-gray-400">
                    <li>Riconoscimento: L'atto che dichiara un diritto già esistente.</li>
                    <li>Concessione: L'atto mediante il quale lo Stato conferisce un beneficio nuovo.</li>
                    </ul>
                    <p className="mt-4">Il Decreto Tajani tenta di trasformare il riconoscimento in una concessione, operando una mutazione ontologica del diritto stesso. Questo è illegittimo e incostituzionale.</p>
                </div>
                </div>
            </div>
            </section>

            {/* DEMANDS */}
            <section id="demands" className="py-16 px-4 bg-black/30">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">Le Nostre Esigenze Non Negoziabili</h2>
                <div className="space-y-6">
                <div className="border-l-4 border-[#00FFFF] bg-[#00FFFF]/10 p-6 rounded-r-sm">
                    <h3 className="text-2xl font-bold text-white mb-2">Ritiro Immediato</h3>
                    <p className="text-gray-300">Esigiamo il ritiro immediato e completo del Decreto-Legge n. 36/2025 e della Legge n. 74/2025. Questa legislazione deve essere abrogata nella sua totalità.</p>
                </div>
                {/* Outros cards mantidos */}
                <div className="border-l-4 border-[#39FF14] bg-[#39FF14]/10 p-6 rounded-r-sm">
                    <h3 className="text-2xl font-bold text-white mb-2">Protezione Costituzionale</h3>
                    <p className="text-gray-300">Esigiamo la reaffermazione del diritto Jus Sanguinis senza limiti generazionali, conforme alla Costituzione Italiana. Il diritto di sangue non ha scadenza.</p>
                </div>
                <div className="border-l-4 border-[#FF1E56] bg-[#FF1E56]/10 p-6 rounded-r-sm">
                    <h3 className="text-2xl font-bold text-white mb-2">Dialogo Trasparente</h3>
                    <p className="text-gray-300">Esigiamo l'inizio di un dialogo trasparente con le comunità di discendenti italiani per riformare e accelerare i processi consolari. Il problema non è il diritto; è l'amministrazione.</p>
                </div>
                <div className="border-l-4 border-[#00FFFF] bg-[#00FFFF]/10 p-6 rounded-r-sm">
                    <h3 className="text-2xl font-bold text-white mb-2">Giustizia Retroattiva</h3>
                    <p className="text-gray-300">Esigiamo che tutti coloro i cui diritti sono stati violati dal Decreto Tajani ricevano riconoscimento retroattivo della loro cittadinanza e compensazione per i danni subiti.</p>
                </div>
                </div>
            </div>
            </section>

            {/* FOOTER COM O LINK DO CHANGE.ORG */}
            <section className="py-20 px-4 bg-black/50 border-t border-[#3b4354]">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
                Unisciti alla <span className="text-[#39FF14]">Resistenza Digitale</span>
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                La tua voce è cruciale. Condividi questo manifesto, sostieni la causa e seguici per rimanere informato. La lotta per la nostra eredità è adesso.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                
                {/* LINK ATUALIZADO AQUI */}
                <a 
                    href={PETITION_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Button className="bg-[#FF1E56] text-white font-bold text-lg h-12 px-8 hover:bg-opacity-80 transition-all rounded-sm w-full sm:w-auto">
                        Sostieni la Causa
                    </Button>
                </a>

                <Button className="bg-[#282e39] text-white font-bold text-lg h-12 px-8 hover:bg-opacity-80 transition-all rounded-sm border border-[#3b4354]">
                    Condividi il Manifesto
                </Button>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-800 text-gray-500 text-xs">
                    <p>Non affiliato a partiti politici. Iniziativa civile indipendente.</p>
                </div>
            </div>
            </section>
        </main>
      </div>
    </PageTransition>
  );
}
