import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useEffect } from "react";
import PageTransition from "@/components/PageTransition";
import SourceLink from "@/components/SourceLink";

export default function Evidence() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Percorso video
  const basePath = import.meta.env.BASE_URL.replace(/\/$/, "");
  const videoPath = `${basePath}/tajani-video.mp4`;

  return (
    <PageTransition>
      <div className="min-h-screen bg-background text-foreground dark font-sans">
        
        {/* LINHA DA BANDEIRA ITALIANA (Cyberpunk Style) */}
        <div 
          className="sticky top-0 z-[51] w-full h-1.5"
          style={{
            background: "linear-gradient(90deg, #39FF14 0%, #39FF14 33.33%, #ffffff 33.33%, #ffffff 66.66%, #FF1E56 66.66%, #FF1E56 100%)"
          }}
        ></div>

        <nav className="sticky top-1.5 z-50 w-full bg-black/80 backdrop-blur-md border-b border-[#3b4354]">
          <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
            <Link href="/">
              <span className="text-xl font-bold text-white cursor-pointer hover:text-[#39FF14] transition-colors tracking-tight">
                Manifesto Tajani
              </span>
            </Link>
            <div className="flex gap-4">
              <Link href="/dossier">
                <Button className="border border-[#00FFFF] text-[#00FFFF] bg-transparent hover:bg-[#00FFFF]/10 transition-all duration-300">
                  Analisi Dati
                </Button>
              </Link>
              <Link href="/">
                <Button className="text-gray-300 hover:text-white bg-transparent hover:bg-white/5">
                  Torna alla Home
                </Button>
              </Link>
            </div>
          </div>
        </nav>

        <main className="w-full max-w-5xl mx-auto px-4 py-12">
          <header className="mb-12 text-center">
            <div className="inline-block bg-red-500/10 border border-red-500/50 px-4 py-1 rounded-full mb-4">
              <span className="text-[#FF1E56] font-mono text-xs font-bold tracking-widest uppercase animate-pulse">
                ⚠️ Prova Forense Acquisita
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight leading-none">
              La Narrazione <br />
              <span className="text-[#FF1E56] text-shadow-glow">vs. La Realtà</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Mentre i nostri consolati chiudono, i corridoi aerei si aprono.
              <br/>Guarda con i tuoi occhi il doppio standard del Vicepremier.
            </p>
          </header>

          {/* VÍDEO CORRIGIDO: Faixa em baixo (sem sobrepor controles) */}
          <section className="bg-[#101622] border-2 border-[#FF1E56] rounded-lg shadow-[0_0_50px_rgba(255,30,86,0.15)] mb-16 overflow-hidden flex flex-col">
            <div className="relative w-full bg-black">
                {/* Efeito de luz superior */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FF1E56] to-transparent opacity-50 z-10"></div>
                
                <video 
                  controls 
                  className="max-h-[70vh] w-full object-contain mx-auto"
                  preload="metadata"
                  poster="https://placehold.co/1920x1080/101622/FF1E56?text=Premere+Play+per+la+Verita"
                >
                  <source src={videoPath} type="video/mp4" />
                  Il tuo browser non supporta il video.
                </video>
            </div>
            
            {/* Faixa de Fonte (Agora estática em baixo, fundo sólido) */}
            <div className="w-full p-3 bg-[#1b1f27] border-t border-[#3b4354]">
              <p className="text-gray-400 text-sm font-mono flex items-center justify-center gap-2">
                <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                FONTE: Canale Ufficiale Ministro Tajani (Ottobre 2025)
              </p>
            </div>
          </section>

          {/* Análise de Inteligência */}
          <div className="space-y-16">
            
            <section className="bg-gradient-to-r from-[#1b1f27] to-[#101622] p-8 border-l-4 border-[#FF1E56] rounded-r-lg">
              <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="text-[#FF1E56]">01.</span> L'Anomalia Demografica
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Osservate attentamente i minuti <strong>0:04</strong> e <strong>0:08</strong>. Il governo parla di "giovani studenti", ma le immagini rivelano <strong>uomini in età avanzata</strong> a bordo di voli umanitari finanziati dalle tasse italiane.
                <SourceLink 
                  href="https://www.agenzianova.com/news/gaza-proseguono-i-corridoi-universitari-arrivati-in-italia-49-studenti-con-borse-di-studio-video/" 
                  label="Video Agenzia Nova" 
                  sourceName="Agenzia Nova - Arrivo Studenti" 
                />
              </p>
              <div className="bg-black/40 p-6 rounded border border-red-900/50 backdrop-blur-sm">
                <h3 className="text-[#FF1E56] font-bold text-xl mb-2 uppercase tracking-wide">Contraddizione Logica</h3>
                <p className="text-gray-300 italic mb-4 text-lg">
                  "L'obiettivo è formare la futura classe dirigente..." — Antonio Tajani
                </p>
                <p className="text-white font-medium border-t border-gray-700 pt-4">
                  <strong>Analisi Tattica:</strong> Se l'Italia soffre di un "inverno demografico", perché importiamo uomini anziani mentre espelliamo burocraticamente i giovani discendenti sudamericani? 
                  Questa non è accoglienza. È <strong>sostituzione demografica</strong> mascherata da umanitarismo.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Due Pesi, Due Misure</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-[#3b4354] rounded-lg overflow-hidden shadow-2xl">
                <div className="bg-[#101622] p-8 border-b md:border-b-0 md:border-r border-[#3b4354] hover:bg-[#151b29] transition-colors">
                  <div className="flex items-center gap-3 mb-6">
                     <span className="text-3xl">✈️</span>
                     <h3 className="text-[#39FF14] font-black text-2xl uppercase tracking-wide">Il Privilegio Gaza</h3>
                  </div>
                  <ul className="space-y-4 text-gray-300 font-medium">
                    <li className="flex items-start gap-3">
                      <span className="text-[#39FF14] font-bold">✓</span> Voli di Stato gratuiti (pagati da noi).
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#39FF14] font-bold">✓</span> Accoglienza personale del Ministro.
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#39FF14] font-bold">✓</span> Accesso diretto a 22 Università.
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#39FF14] font-bold">✓</span> Nessun requisito di lingua o sangue.
                    </li>
                  </ul>
                </div>
                <div className="bg-[#101622] p-8 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-red-900/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                  <div className="flex items-center gap-3 mb-6">
                     <span className="text-3xl">🚫</span>
                     <h3 className="text-[#FF1E56] font-black text-2xl uppercase tracking-wide">La Punizione Diaspora</h3>
                  </div>
                  <ul className="space-y-4 text-gray-300 font-medium">
                    <li className="flex items-start gap-3">
                      <span className="text-[#FF1E56] font-bold">✗</span> 12 anni di attesa per un timbro.
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#FF1E56] font-bold">✗</span> Insultati come "Turisti".
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#FF1E56] font-bold">✗</span> Tasse raddoppiate a €600.
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#FF1E56] font-bold">✗</span> Minaccia di cancellazione dei diritti.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="text-center pt-12 pb-8">
              <Link href="/dossier">
                <Button className="bg-[#39FF14] text-black font-black text-xl h-16 px-10 hover:bg-[#39FF14]/80 rounded-none skew-x-[-10deg] hover:skew-x-0 transition-transform shadow-[0_0_20px_rgba(57,255,20,0.4)]">
                  LEGGI IL DOSSIER COMPLETO
                </Button>
              </Link>
            </section>
          </div>
        </main>
      </div>
    </PageTransition>
  );
}
