import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useEffect } from "react";

export default function Evidence() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground dark">
      <nav className="sticky top-0 z-50 w-full bg-black/50 backdrop-blur-sm border-b border-[#3b4354]">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/">
            <span className="text-xl font-bold text-white cursor-pointer hover:text-[#39FF14] transition-colors">
              Manifesto Tajani
            </span>
          </Link>
          <div className="flex gap-4">
            <Link href="/dossier">
              <Button variant="outline" className="border-[#00FFFF] text-[#00FFFF] hover:bg-[#00FFFF]/10">
                Analisi Dati
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

      <main className="w-full max-w-4xl mx-auto px-4 py-12">
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
            La Prova del <br />
            <span className="text-[#FF1E56]">Doppio Standard</span>
          </h1>
          <p className="text-xl text-gray-300">
            Mentre i consolati in Sud America sono al collasso, l'aeroporto di Fiumicino apre le porte.
          </p>
        </header>

        {/* O Vídeo */}
        <section className="bg-[#1b1f27] border border-[#FF1E56] p-2 rounded-sm shadow-[0_0_30px_rgba(255,30,86,0.2)] mb-12">
          <video 
            controls 
            className="w-full rounded-sm"
            poster="https://placehold.co/1920x1080/101622/FF1E56?text=Video+Tajani:+Il+Corridoio+Universitario"
          >
            <source src="/tajani-video.mp4" type="video/mp4" />
            Il tuo browser non supporta il video.
          </video>
          <p className="text-center text-gray-500 text-sm mt-2">
            Video: Tajani accoglie studenti da Gaza (Ottobre 2025)
          </p>
        </section>

        {/* Análise do Vídeo */}
        <div className="space-y-12">
          <section className="prose prose-invert max-w-none">
            <h2 className="text-3xl font-bold text-white mb-4">L'Ipocrisia in Diretta</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Nel video qui sopra, vediamo il Ministro Antonio Tajani accogliere personalmente 15 studenti palestinesi all'aeroporto, offrendo loro borse di studio (progetto IUPALS) finanziate dai contribuenti italiani e l'accesso a 22 università d'eccellenza come La Sapienza.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mt-4">
              <strong>Il contrasto è nauseante.</strong> Tajani dice agli studenti arabi: <em>"Vorrei ringraziare tutti voi, persona per persona"</em>. Nel frattempo, ai discendenti italiani in Brasile e Argentina, che condividono il nostro sangue e la nostra storia, viene detto che sono "turisti del passaporto" che vogliono solo andare a Miami.
            </p>

            <div className="bg-[#FF1E56]/10 border-l-4 border-[#FF1E56] p-6 my-8">
              <h3 className="text-xl font-bold text-white mb-2">Trascrizione Chiave:</h3>
              <p className="italic text-gray-300">
                Tajani (0:21): "...l'obiettivo è formare in Italia la futura classe dirigente dello Stato palestinese..."
              </p>
              <p className="mt-4 font-bold text-white">
                Domanda: E la classe dirigente italiana? Perché investiamo sul futuro di uno stato estero mentre rinneghiamo i figli della nostra stessa nazione?
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-white mb-6">La Sostituzione Culturale</h2>
            <p className="text-gray-300 mb-4">
              Questo video non è un caso isolato. È la prova visiva di una strategia politica precisa: <strong>sostituire il diritto di sangue (Ius Sanguinis) con il diritto di utilità.</strong>
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="bg-[#1b1f27] p-6 border border-[#3b4354] rounded-sm">
                <h3 className="text-[#39FF14] font-bold text-xl mb-3">Per gli Stranieri</h3>
                <ul className="list-disc list-inside text-gray-400 space-y-2">
                  <li>Corridoi universitari prioritari</li>
                  <li>Borse di studio finanziate</li>
                  <li>Accoglienza istituzionale (Ministri in aeroporto)</li>
                  <li>Quote "Decreto Flussi" (Bangladesh, Tunisia)</li>
                </ul>
              </div>
              <div className="bg-[#1b1f27] p-6 border border-[#FF1E56] rounded-sm">
                <h3 className="text-[#FF1E56] font-bold text-xl mb-3">Per i Discendenti</h3>
                <ul className="list-disc list-inside text-gray-400 space-y-2">
                  <li>10+ anni di attesa nei consolati</li>
                  <li>Accuse di "frode" e "turismo"</li>
                  <li>Tassa di cittadinanza raddoppiata (€600)</li>
                  <li>Proposta di legge per limitare le generazioni</li>
                </ul>
              </div>
            </div>
          </section>
          
          <section className="text-center pt-8">
            <Link href="/dossier">
              <Button className="bg-[#39FF14] text-black font-bold text-lg h-14 px-8 hover:bg-[#39FF14]/80 rounded-sm">
                Leggi il Dossier Completo: I Dati Reali
              </Button>
            </Link>
          </section>
        </div>
      </main>
    </div>
  );
}
