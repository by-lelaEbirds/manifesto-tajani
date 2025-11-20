import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useEffect } from "react";
import PageTransition from "@/components/PageTransition";

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
              IL TRADIMENTO <br />
              DI SANGUE
            </h1>
            <p className="text-2xl text-gray-300 leading-relaxed border-l-4 border-[#39FF14] pl-6 italic">
              "Come il governo Tajani sta barattando 150 anni di storia della diaspora per una politica migratoria utilitaristica, fallimentare e culturalmente suicida."
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

            {/* A Mentira Econômica */}
            <section className="bg-[#1b1f27] border-y border-[#3b4354] py-12 -mx-4 px-4 md:mx-0 md:px-8 md:rounded-xl">
              <h2 className="text-3xl font-bold text-white mb-8">
                <span className="text-[#00FFFF]">02.</span> La Menzogna Economica
              </h2>
              <p className="mb-6">
                La giustificazione ufficiale per aprire le porte all'immigrazione non-etnica è sempre economica. "Ce lo chiede il mercato", dicono. I dati indicano che i migranti contribuiscono per <strong>154 miliardi di euro al PIL</strong>. Ma questa è solo metà della storia.
              </p>
              <div className="grid md:grid-cols-2 gap-8 my-8">
                <div className="bg-black/40 p-6 rounded border border-red-500/30">
                   <h4 className="text-[#FF1E56] font-bold mb-2 text-xl">Costo Reale: €1,7 Miliardi</h4>
                   <p className="text-sm">Il Ministro Piantedosi ha ammesso che l'Italia spende 1,7 miliardi di euro l'anno solo per il sistema di accoglienza (hotspot, CAS) di migranti spesso irregolari.</p>
                </div>
                <div className="bg-black/40 p-6 rounded border border-[#39FF14]/30">
                   <h4 className="text-[#39FF14] font-bold mb-2 text-xl">Tassa Raddoppiata: €600</h4>
                   <p className="text-sm">Mentre sovvenzioniamo l'accoglienza straniera, Tajani vuole raddoppiare la tassa di cittadinanza per i discendenti. <strong>Lo straniero viene pagato, il fratello viene tassato.</strong></p>
                </div>
              </div>
            </section>

            {/* O Ataque do Ius Italiae */}
            <section>
              <h2 className="text-4xl font-bold text-white mb-8 flex items-baseline gap-4">
                <span className="text-[#FF1E56] text-6xl font-black opacity-50">03</span>
                L'Arma "Ius Italiae"
              </h2>
              <p className="mb-6 font-medium text-white">
                La proposta di riforma "Ius Italiae" di Forza Italia non è una riforma. È una demolizione controllata della Legge 91/1992.
              </p>
              <p className="mb-8">
                Tajani giustifica questo attacco con il mito insultante del "Turismo del Passaporto", affermando che i discendenti "fingono di non parlare italiano solo per andare a Miami". Una generalizzazione che offende milioni di persone oneste per colpire pochi furbi.
              </p>

              <div className="space-y-4">
                <div className="flex gap-4 items-start bg-[#FF1E56]/5 p-4 rounded border-l-4 border-[#FF1E56]">
                  <span className="font-bold text-[#FF1E56] text-xl">A.</span>
                  <div>
                    <h4 className="text-white font-bold">Il Limite della 2ª Generazione</h4>
                    <p className="text-sm text-gray-400">Se il tuo bisnonno era italiano, sei fuori. Cancellazione retroattiva di un diritto di nascita.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start bg-[#FF1E56]/5 p-4 rounded border-l-4 border-[#FF1E56]">
                  <span className="font-bold text-[#FF1E56] text-xl">B.</span>
                  <div>
                    <h4 className="text-white font-bold">Abolizione della Regola 1861</h4>
                    <p className="text-sm text-gray-400">Si vuole cancellare la storia unitaria d'Italia, negando la cittadinanza a chi discende dai fondatori della patria.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start bg-[#FF1E56]/5 p-4 rounded border-l-4 border-[#FF1E56]">
                  <span className="font-bold text-[#FF1E56] text-xl">C.</span>
                  <div>
                    <h4 className="text-white font-bold">Obbligo di Residenza</h4>
                    <p className="text-sm text-gray-400">Costringere chi ha già una vita, un lavoro e una famiglia all'estero a trasferirsi in Italia. Una clausola impossibile per la maggioranza.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* A Questão Islâmica e o Fracasso */}
            <section className="bg-[#1b1f27] p-8 rounded-xl shadow-2xl border border-gray-800">
               <h2 className="text-3xl font-bold text-white mb-6">
                <span className="text-[#00FFFF]">04.</span> La Preferenza Islamica e il Caos
              </h2>
              <p className="mb-6">
                Mentre la Lega agita lo spettro dell'"islamizzazione", il governo Tajani, tramite il <strong>Decreto Flussi</strong>, assegna quote massicce a lavoratori provenienti da Bangladesh, Pakistan e Tunisia.
              </p>
              <p className="mb-6">
                Il risultato? <strong>Il collasso totale.</strong> Nel 2024, il sistema "Click Day" è stato infiltrato dalla criminalità organizzata, vendendo visti a persone che non avevano alcuna intenzione di lavorare. Il governo non riesce a controllare chi entra "legalmente", ma è perfettamente efficiente nel bloccare i discendenti italiani cristiani e cattolici del Sud America.
              </p>
              <div className="p-4 bg-red-900/20 border border-red-500/40 rounded text-center">
                <p className="text-white font-bold">
                  "Stanno sostituendo l'Ethnos (il popolo) con il Demos (la popolazione residente)."
                </p>
              </div>
            </section>

             {/* Ius Scholae */}
            <section>
              <h2 className="text-3xl font-bold text-white mb-6">05. Il Cavallo di Troia: "Ius Scholae"</h2>
              <p className="mb-4">
                Mentre chiude la porta al sangue, Tajani spalanca quella dello <em>Ius Scholae</em>. La proposta: cittadinanza dopo un ciclo scolastico.
              </p>
              <p className="mb-4">
                Con proiezioni che indicano presto <strong>1 milione di studenti stranieri</strong>, lo Ius Scholae rischia di diventare uno strumento di alterazione demografica irreversibile, regalando la cittadinanza senza garantire una vera assimilazione culturale, come dimostrano i casi di studenti che non parlano italiano dopo 5 anni di scuola.
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
                  Fonti Dati: Fondazione ISMU, Ministero dell'Interno, Fondazione Moressa, Atti Parlamentari D.L. 36/2025.
                </p>
              </div>
            </section>

          </div>
        </main>
      </div>
    </PageTransition>
  );
}
