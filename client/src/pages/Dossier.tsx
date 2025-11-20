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
              <Button variant="outline" className="border-[#FF1E56] text-[#FF1E56] hover:bg-[#FF1E56]/10">
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
            <h2 className="text-3xl font-bold text-white mb-6">1. Introduzione: Il Sangue contro l'Utilità</h2>
            <p className="mb-4">
              L'Italia si trova a un bivio esistenziale. Da un lato, l'inverno demografico; dall'altro, una pressione migratoria strutturale. In questo scenario, il Vicepremier Antonio Tajani ha operato una scelta di campo netta e crudele: <strong>il sangue antico non basta più, l'utilità economica presente è tutto ciò che conta.</strong>
            </p>
            <p>
              Mentre la retorica ufficiale parla di "italianità", nei fatti si sta compiendo una transizione dolorosa: da una nazione fondata sulla discendenza (etno-ancestrale) a una nazione fondata sulla residenza e sulla funzionalità economica. In questo nuovo modello, i figli della diaspora non sono più risorse, ma "passività".
            </p>
          </section>

          {/* Dati Economici vs Retorica */}
          <section className="bg-[#1b1f27] border border-[#3b4354] p-8 rounded-sm">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-[#00FFFF]">2.</span> La Menzogna Economica
            </h2>
            <p className="mb-6">
              La giustificazione per aprire le porte all'immigrazione non-etnica è sempre economica. Si dice che "ce lo chiede il mercato". I dati della Fondazione Moressa indicano che i migranti contribuiscono per <strong>154 miliardi di euro al PIL (9% del totale)</strong>.
            </p>
            <p className="mb-6">
              Tuttavia, questa narrazione omette deliberatamente il costo sociale e di sicurezza. Il Ministro Piantedosi ha ammesso che l'Italia spende <strong>1,7 miliardi di euro l'anno</strong> solo per il sistema di accoglienza (hotspot, CAS).
            </p>
            <div className="bg-black/40 p-6 rounded border-l-2 border-[#00FFFF]">
              <h4 className="text-white font-bold mb-2">Il Paradosso dei Costi</h4>
              <p>
                Mentre si spendono miliardi per accogliere chi arriva illegalmente o tramite corridoi umanitari, si vuole aumentare la tassa di cittadinanza per i discendenti da 300 a <strong>600 euro</strong>. Il messaggio è chiaro: lo straniero viene sovvenzionato, il fratello di sangue viene tassato.
              </p>
            </div>
          </section>

          {/* Ius Italiae e l'Attacco */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-6">3. "Ius Italiae": L'Arma contro la Diaspora</h2>
            <p className="mb-4">
              La proposta di riforma "Ius Italiae" di Forza Italia non è una riforma: è una <strong>demolizione controllata</strong> della Legge 91/1992. Tajani giustifica questo attacco con il mito del "Turismo del Passaporto", affermando che i discendenti "fingono di non parlare italiano solo per andare a Miami".
            </p>
            <p className="mb-4">
              Questa è una generalizzazione offensiva che riduce milioni di italo-brasiliani e italo-argentini a opportunisti.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div>
                <h3 className="text-white font-bold text-xl mb-4 border-b border-[#FF1E56] pb-2">Le Nuove Regole Trappola</h3>
                <ul className="space-y-3 list-disc pl-4">
                  <li><strong>Limite alla 2ª Generazione:</strong> Se il tuo bisnonno era italiano, sei fuori.</li>
                  <li><strong>Abolizione della Regola 1861:</strong> Cancellazione retroattiva dei diritti storici.</li>
                  <li><strong>Obbligo di Residenza:</strong> Costringere chi vive all'estero a trasferirsi in Italia per anni.</li>
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

          {/* Fallimento Amministrativo */}
          <section className="bg-[#1b1f27] border border-[#3b4354] p-8 rounded-sm">
             <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-[#39FF14]">4.</span> Il Fallimento del "Click Day"
            </h2>
            <p className="mb-4">
              Tajani sostiene che la "migrazione legale" è la soluzione. Ma la realtà amministrativa racconta un'altra storia. Nel 2024, il sistema "Click Day" per i lavoratori stranieri è collassato sotto il peso di <strong>frodi massive</strong> e infiltrazioni criminali, specialmente da Bangladesh, Pakistan e Sri Lanka.
            </p>
            <p>
              Il governo ha dovuto sospendere i visti perché non riusciva a distinguere i lavoratori onesti dai trafficanti. Eppure, continuano a promuovere l'apertura verso paesi culturalmente distanti, mentre chiudono i consolati in Sud America, dove la frode è inesistente e il legame culturale è totale.
            </p>
          </section>

           {/* Islamizzazione e Ius Scholae */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-6">5. Il Cavallo di Troia: "Ius Scholae"</h2>
            <p className="mb-4">
              Mentre chiude la porta al sangue italiano, Tajani spalanca quella dello <em>Ius Scholae</em>. La proposta è di dare la cittadinanza dopo un ciclo scolastico.
            </p>
            <p className="mb-4">
              La Lega di Salvini ha giustamente identificato il rischio: con le proiezioni che indicano presto <strong>1 milione di studenti stranieri</strong>, molti dei quali di religione islamica e provenienti da contesti non integrati, lo Ius Scholae rischia di diventare uno strumento di rapida alterazione demografica e culturale.
            </p>
            <p className="p-4 bg-[#39FF14]/5 border-l-2 border-[#39FF14] mt-4">
              La strategia è chiara: sostituire l'<em>ethnos</em> (la discendenza) con il <em>demos</em> (la residenza). Un italiano non è più chi ha sangue italiano, ma chiunque occupi un banco di scuola per 10 anni.
            </p>
          </section>

          <section className="border-t border-gray-800 pt-12 mt-12">
            <h2 className="text-3xl font-bold text-white mb-6">Conclusione</h2>
            <p className="text-xl text-gray-300 font-medium">
              Siamo di fronte a un'operazione di ingegneria sociale. Tajani e i suoi alleati tecnocrati hanno deciso che il futuro dell'Italia non passa per il Brasile o l'Argentina, ma per il Nord Africa e il Medio Oriente.
            </p>
            <p className="mt-6 text-gray-400 text-sm">
              Tutti i dati citati in questo dossier provengono da fonti ufficiali: Fondazione ISMU, Ministero dell'Interno, Fondazione Moressa e atti parlamentari del D.L. 36/2025.
            </p>
          </section>

        </div>
      </main>
    </div>
  );
}
