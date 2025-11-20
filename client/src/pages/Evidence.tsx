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
              <Button className="border border-[#00FFFF] text-[#00FFFF] bg-transparent hover:bg-[#00FFFF]/10">
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
          <span className="text-[#FF1E56] font-mono text-sm tracking-widest uppercase mb-2 block animate-pulse">
            🔴 Analisi Forense del Video
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
            La Narrazione <br />
            <span className="text-[#FF1E56]">vs. La Realtà</span>
          </h1>
          <p className="text-xl text-gray-300">
            Tajani parla di "giovani studenti". Le immagini mostrano un'altra verità.
          </p>
        </header>

        {/* O Vídeo */}
        <section className="bg-[#1b1f27] border-2 border-[#FF1E56] p-1 rounded-sm shadow-[0_0_50px_rgba(255,30,86,0.3)] mb-12 relative">
          <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 text-xs font-bold uppercase tracking-wider animate-pulse">
            Prova Video
          </div>
          <video 
            controls 
            className="w-full rounded-sm"
            poster="https://placehold.co/1920x1080/101622/FF1E56?text=Video+Tajani:+L'Inganno+Visivo"
          >
            <source src="/tajani-video.mp4" type="video/mp4" />
            Il tuo browser non supporta il video.
          </video>
        </section>

        {/* Análise de Inteligência (Warfare Info) */}
        <div className="space-y-12">
          
          {/* Ponto Crítico: Os Idosos */}
          <section className="bg-[#1b1f27] p-8 border-l-4 border-[#FF1E56]">
            <h2 className="text-3xl font-bold text-white mb-4">L'Anomalia Demografica</h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Al minuto <strong>0:04</strong> e <strong>0:08</strong>, osserviamo chiaramente uomini anziani a bordo del volo "umanitario". 
            </p>
            <div className="bg-black/50 p-6 rounded border border-gray-700">
              <h3 className="text-[#FF1E56] font-bold text-xl mb-2">La Contraddizione Logica</h3>
              <p className="text-gray-300 italic">
                "L'obiettivo è formare la futura classe dirigente..." — Antonio Tajani
              </p>
              <hr className="border-gray-700 my-4"/>
              <p className="text-white font-medium">
                Analisi: Se l'Italia soffre di un "inverno demografico" e ha bisogno di giovani, perché i corridoi universitari vengono utilizzati per trasportare uomini in età avanzata? 
                Questa non è una missione accademica. È un'operazione di ricollocamento demografico mascherata da umanitarismo.
              </p>
            </div>
          </section>

          {/* Comparação Brutal */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-8">Due Pesi, Due Misure</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-[#3b4354]">
              <div className="bg-[#101622] p-8 border-b md:border-b-0 md:border-r border-[#3b4354]">
                <h3 className="text-[#39FF14] font-black text-2xl mb-4 uppercase">Il Trattamento Gaza</h3>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-[#39FF14]">✓</span> Voli di Stato pagati dai contribuenti.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#39FF14]">✓</span> Accoglienza personale del Vicepremier.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#39FF14]">✓</span> Accesso immediato a 22 Università.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#39FF14]">✓</span> Nessun requisito di sangue o lingua pregressa.
                  </li>
                </ul>
              </div>
              <div className="bg-[#101622] p-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-[#FF1E56]/5 pointer-events-none"></div>
                <h3 className="text-[#FF1E56] font-black text-2xl mb-4 uppercase">Il Trattamento Diaspora</h3>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-[#FF1E56]">✗</span> 10 anni di attesa nei consolati.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#FF1E56]">✗</span> Definiti "Turisti del Passaporto".
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#FF1E56]">✗</span> Tasse raddoppiate (€600).
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#FF1E56]">✗</span> Minaccia di cancellazione dei diritti.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="prose prose-invert max-w-none">
            <h3 className="text-2xl font-bold text-white mb-4">La Strategia della Sostituzione</h3>
            <p className="text-gray-300">
              Utilizzando le tattiche descritte nella <em>Guerra dell'Informazione</em>, Tajani sta costruendo una "Leggenda" (una storia di copertura): quella dell'aiuto umanitario. Ma i dati rivelano l'intento strategico.
            </p>
            <p className="text-gray-300">
              Mentre si importano persone culturalmente distanti (e demograficamente non sempre attive, come mostrano gli anziani nel video), si espelle attivamente chi ha il sangue italiano. È un tradimento storico perpetrato con il sorriso istituzionale.
            </p>
          </section>
          
          <section className="text-center pt-8">
            <Link href="/dossier">
              <Button className="bg-[#39FF14] text-black font-bold text-lg h-14 px-8 hover:bg-[#39FF14]/80 rounded-sm w-full md:w-auto">
                Leggi il Dossier: Le Prove Documentali
              </Button>
            </Link>
          </section>
        </div>
      </main>
    </div>
  );
}
