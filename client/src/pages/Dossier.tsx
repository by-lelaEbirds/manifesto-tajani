import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useEffect } from "react";

export default function Dossier() {
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
             <Link href="/evidence">
              <Button className="border border-[#FF1E56] text-[#FF1E56] bg-transparent hover:bg-[#FF1E56]/10">
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

      <main className="w-full max-w-4xl mx-auto px-4 py-12">
        <header className="mb-16">
          <span className="text-[#FF1E56] font-mono text-sm tracking-widest uppercase mb-2 block">Rapporto Confidenziale</span>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
            Il Tradimento di Sangue: <br />
            <span className="text-[#39FF14]">Analisi del Piano Tajani</span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed border-l-4 border-[#39FF14] pl-6">
            Come il governo sta barattando 150 anni di storia della diaspora per una politica migratoria utilitaristica e fallimentare.
          </p>
        </header>

        <div className="space-y-16 text-gray-300 leading-relaxed text-lg">
          
          {/* Introduzione */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-6">1. Il Paradosso dell'Identità</h2>
            <p className="mb-4">
              L'Italia si trova a un bivio esistenziale. Da un lato, l'inverno demografico; dall'altro, una pressione migratoria strutturale. In questo scenario, il Vicepremier Antonio Tajani ha operato una scelta di campo netta e crudele: <strong>il sangue antico non basta più, l'utilità economica presente è tutto ciò che conta.</strong>
            </p>
            <p>
              Mentre la retorica ufficiale parla di "italianità", nei fatti si sta compiendo una transizione dolorosa: da una nazione fondata sulla discendenza (etno-ancestrale) a una nazione fondata sulla residenza e sulla funzionalità economica.
            </p>
          </section>

          {/* Islamizzazione e Decreto Flussi */}
          <section className="bg-[#1b1f27] border border-[#3b4354] p-8 rounded-sm">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-[#00FFFF]">2.</span> La Preferenza Islamica
            </h2>
            <p className="mb-6">
              I dati della Fondazione ISMU confermano che la demografia studentesca sta cambiando radicalmente, con proiezioni di <strong>1 milione di studenti stranieri</strong> in dieci anni.
            </p>
            <p className="mb-6">
              Paradossalmente, mentre la Lega agita lo spettro dell'"islamizzazione", il <strong>Decreto Flussi</strong> del governo assegna quote massicce a lavoratori provenienti da Bangladesh, Pakistan e Tunisia. 
              Il governo Tajani sta attivamente importando manodopera da paesi di cultura islamica per "necessità di mercato", mentre chiude le porte ai cristiani/cattolici sudamericani di sangue italiano.
            </p>
            <div className="bg-black/40 p-6 rounded border-l-2 border-[#00FFFF]">
              <h4 className="text-white font-bold mb-2">Il Fallimento del Click Day</h4>
              <p>
                Nel 2024, il sistema di visti è collassato a causa di frodi massive dal Bangladesh e Pakistan. Il crimine organizzato ha infiltrato il sistema digitale. Il governo non riesce a controllare chi entra "legalmente", ma è perfettamente efficiente nel bloccare i discendenti italiani.
              </p>
            </div>
          </section>

          {/* Ius Italiae e l'Attacco */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-6">3. "Ius Italiae": L'Arma contro la Diaspora</h2>
            <p className="mb-4">
              La proposta "Ius Italiae" non è una riforma, è una <strong>demolizione controllata</strong> della Legge 91/1992. Tajani giustifica questo attacco con il mito del "Turismo del Passaporto", affermando che i discendenti vogliono solo "andare a Miami".
            </p>
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div>
                <h3 className="text-white font-bold text-xl mb-4 border-b border-[#FF1E56] pb-2">Le Nuove Regole Trappola</h3>
                <ul className="space-y-3 list-disc pl-4">
                  <li><strong>Limite alla 2ª Generazione:</strong> Cancellazione dei diritti per milioni di persone.</li>
                  <li><strong>Abolizione della Regola 1861:</strong> Cancellazione retroattiva della storia.</li>
                  [cite_start]<li><strong>Tassa Raddoppiata:</strong> Da €300 a €600 per pratica[cite: 14].</li>
                </ul>
              </div>
              <div className="flex flex-col justify-center bg-[#FF1E56]/5 p-6 rounded text-sm">
                <p className="italic text-gray-300 mb-4">
                  "Classificare l'esercizio di un diritto originario come un'invasione è xenofobo. I discendenti non chiedono una nuova cittadinanza, ma il riconoscimento di ciò che appartiene loro per nascita."
                </p>
                <span className="text-[#FF1E56] font-bold text-right">— Luis Roberto Lorenzato, ex deputato</span>
              </div>
            </div>
          </section>

          {/* Conclusione */}
          <section className="border-t border-gray-800 pt-12 mt-12">
            <h2 className="text-3xl font-bold text-white mb-6">Conclusione: Sangue vs Utilità</h2>
            <p className="text-xl text-gray-300 font-medium">
              Il governo sta inviando un messaggio chiaro: <strong>il sangue antico non basta più.</strong> Un argentino con un bisavô italiano è visto come un "passivo". Un lavoratore straniero è visto come una "necessità".
            </p>
            <p className="mt-4 text-gray-400">
              Questa è un'operazione di ingegneria sociale. Stanno sostituendo la "Tribù Globale" italiana con una popolazione di residenti funzionali all'economia, indipendentemente dalla loro cultura o origine.
            </p>
            <p className="mt-8 text-xs text-gray-500">
              Fonti: Fondazione ISMU, Ministero dell'Interno, Fondazione Moressa, Atti Parlamentari D.L. 36/2025.
            </p>
          </section>

        </div>
      </main>
    </div>
  );
}
