import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useEffect } from "react";

export default function Dossier() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground dark">
      {/* Header Compacto */}
      <nav className="sticky top-0 z-50 w-full bg-black/50 backdrop-blur-sm border-b border-[#3b4354]">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/">
            <span className="text-xl font-bold text-white cursor-pointer hover:text-[#39FF14] transition-colors">
              Manifesto Tajani
            </span>
          </Link>
          <Link href="/">
            <Button variant="ghost" className="text-gray-300 hover:text-white hover:bg-white/10">
              Torna alla Home
            </Button>
          </Link>
        </div>
      </nav>

      <main className="w-full max-w-4xl mx-auto px-4 py-12">
        <header className="mb-16 text-center">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
            Il Dilemma Italiano: <br />
            <span className="text-[#39FF14]">Analisi di una Crisi</span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Un rapporto dettagliato sulle contraddizioni economiche, demografiche e costituzionali della proposta "Ius Italiae".
          </p>
        </header>

        <div className="space-y-16">
          {/* Sezione 1: Il Paradosso */}
          <section className="bg-[#1b1f27] border border-[#3b4354] p-8 rounded-sm">
            <h2 className="text-3xl font-bold text-white mb-6 border-l-4 border-[#FF1E56] pl-4">
              1. Il Paradosso dell'Identità
            </h2>
            <div className="prose prose-invert max-w-none text-gray-300">
              <p className="mb-4">
                L'Italia contemporanea si trova a un bivio esistenziale, stretta tra un "inverno demografico" senza precedenti e una pressione migratoria strutturale. La strategia del Vicepremier Antonio Tajani rivela una contraddizione profonda: mentre si cerca di limitare lo <strong>Ius Sanguinis</strong> per la diaspora, si aprono canali pragmatici per la forza lavoro straniera.
              </p>
              <p>
                Questa visione tenta di transitare da un modello etno-ancestrale a uno "funzionale", basato sull'utilità economica, tradendo il patto storico con i discendenti italiani nel mondo.
              </p>
            </div>
          </section>

          {/* Sezione 2: Dati Economici */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-8">La Realtà dei Numeri</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#00FFFF]/5 border border-[#00FFFF]/20 p-6 rounded-sm">
                <h3 className="text-[#00FFFF] text-xl font-bold mb-2">154 Miliardi di Euro</h3>
                <p className="text-white font-medium">Contributo al PIL</p>
                <p className="text-sm text-gray-400 mt-2">
                  I migranti contribuiscono per circa il 9% del PIL italiano. Non sono un peso, ma una colonna portante dell'economia nazionale.
                  <br/><span className="text-xs opacity-70">Fonte: Fondazione Moressa / Cinformi</span>
                </p>
              </div>
              <div className="bg-[#39FF14]/5 border border-[#39FF14]/20 p-6 rounded-sm">
                <h3 className="text-[#39FF14] text-xl font-bold mb-2">1 Milione di Studenti</h3>
                <p className="text-white font-medium">Proiezione Decennale</p>
                <p className="text-sm text-gray-400 mt-2">
                  Il numero di alunni con background migratorio nelle scuole italiane raggiungerà presto il milione, rendendo lo Ius Scholae una necessità demografica, non solo ideologica.
                  <br/><span className="text-xs opacity-70">Fonte: Fondazione ISMU</span>
                </p>
              </div>
            </div>
          </section>

          {/* Sezione 3: L'Attacco alla Diaspora */}
          <section className="bg-[#1b1f27] border border-[#3b4354] p-8 rounded-sm">
            <h2 className="text-3xl font-bold text-white mb-6 border-l-4 border-[#39FF14] pl-4">
              2. L'Attacco alla Diaspora: "Turismo del Passaporto"
            </h2>
            <div className="prose prose-invert max-w-none text-gray-300">
              <p className="mb-4">
                La riforma "Ius Italiae" proposta da Forza Italia mira a limitare il riconoscimento della cittadinanza alla <strong>seconda generazione</strong>. La giustificazione addotta dal Ministro Tajani è il contrasto al cosiddetto "turismo del passaporte", sostenendo che molti richiedenti "fingono di non parlare italiano... solo per andare a Miami".
              </p>
              <div className="bg-black/30 p-4 rounded border-l-2 border-yellow-500 my-6 italic">
                "Classificare l'esercizio di un diritto originario come un'invasione è xenofobo e stigmatizzante. I discendenti non chiedono una nuova cittadinanza, ma il riconoscimento di ciò che appartiene loro per nascita."
                <div className="text-right text-sm not-italic mt-2 text-gray-400">- Luis Roberto Lorenzato, ex deputato</div>
              </div>
              <p>
                Questa retorica riduce 150 anni di storia migratoria a un mero calcolo opportunistico, ignorando il potenziale di una rete globale italiana (la "Tribù Globale").
              </p>
            </div>
          </section>

          {/* Sezione 4: Il Fallimento Amministrativo */}
          <section className="bg-[#1b1f27] border border-[#3b4354] p-8 rounded-sm">
            <h2 className="text-3xl font-bold text-white mb-6 border-l-4 border-[#00FFFF] pl-4">
              3. Il Fallimento del "Click Day"
            </h2>
            <div className="prose prose-invert max-w-none text-gray-300">
              <p className="mb-4">
                Mentre si chiudono le porte ai discendenti, i canali "regolari" come il Decreto Flussi sono collassati sotto il peso di frodi sistemiche. Nel 2024, il governo ha dovuto sospendere i visti per Bangladesh, Pakistan e Sri Lanka a causa di infiltrazioni criminali nel sistema digitale.
              </p>
              <p>
                Questo dimostra che la narrazione "la migrazione legale è l'unica via" è fallace se non accompagnata da una gestione amministrativa competente. Il governo sembra aver perso il controllo sia delle frontiere marittime che di quelle digitali.
              </p>
            </div>
          </section>

          {/* Sezione 5: Conclusione */}
          <section className="border-t border-gray-700 pt-12">
            <h2 className="text-3xl font-bold text-white mb-6">Conclusione: Sangue vs Utilità</h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Il governo sta inviando un messaggio chiaro: <strong>il sangue antico non basta più, l'utilità presente è primordiale.</strong>
            </p>
            <ul className="list-disc pl-6 space-y-4 text-gray-300">
              <li>Un discendente argentino è visto come un "passivo" (turista del passaporto).</li>
              <li>Un lavoratore straniero è visto come una necessità economica (da ammettere via quote).</li>
              <li>La "Ius Italiae" restringe l'<em>ethnos</em>, tradendo la memoria storica dell'emigrazione italiana.</li>
            </ul>
            <div className="mt-12 p-6 bg-red-500/10 border border-red-500/30 rounded-sm text-center">
              <p className="text-xl text-white font-bold">
                La lotta per la nostra eredità è adesso. Non permettiamo che la cittadinanza diventi merce di scambio politico.
              </p>
            </div>
          </section>

          {/* Fonti */}
          <footer className="text-sm text-gray-500 mt-16 pt-8 border-t border-gray-800">
            <h4 className="text-white font-bold mb-4">Fonti e Riferimenti Ufficiali</h4>
            <ul className="space-y-2 overflow-hidden text-ellipsis">
              <li>1. Fondazione ISMU - Dati demografici (2024)</li>
              <li>2. Fondazione Moressa / Cinformi - <a href="https://www.cinformi.it/Comunicazione/Notizie/Migranti-in-Italia-154-miliardi-di-PIL-9-del-totale" target="_blank" className="underline hover:text-[#39FF14]">Migranti: 154 miliardi di PIL</a></li>
              <li>3. Ministero dell'Interno - Dati sui costi dell'accoglienza (€1,7 mld)</li>
              <li>4. Avvenire - <a href="https://www.avvenire.it/attualita/tajani-insiste-sullo-ius-scholae-essere-italiani-non-e-legato-alle-generazioni_80044" target="_blank" className="underline hover:text-[#39FF14]">Tajani sullo Ius Scholae</a></li>
              <li>5. Italianismo - <a href="https://italianismo.com.br/it/inimigo-dos-italo-brasileiros-vice-premie-da-italia-visita-o-brasil/" target="_blank" className="underline hover:text-[#39FF14]">Il "nemico" degli italo-brasiliani</a></li>
            </ul>
          </footer>
        </div>
      </main>
    </div>
  );
}
