import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import PageTransition from "@/components/PageTransition";
import SourceLink from "@/components/SourceLink";
import { useLanguage } from "@/contexts/LanguageContext"; // Importar Hook
import LanguageSwitcher from "@/components/LanguageSwitcher"; // Importar Switcher

export default function Home() {
  const { t } = useLanguage(); // Usar o hook de tradução

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const PETITION_URL = "https://www.change.org/p/ripudio-al-d-l-tajani-28-03-25";

  return (
    <PageTransition>
      <div className="min-h-screen bg-background text-foreground dark">
        
        {/* HEADER CON BANDIERA ITALIANA */}
        <div className="sticky top-0 z-50 w-full">
            {/* Linha da Bandeira */}
            <div 
              className="h-1.5 w-full" 
              style={{
                background: "linear-gradient(90deg, #39FF14 0%, #39FF14 33.33%, #ffffff 33.33%, #ffffff 66.66%, #FF1E56 66.66%, #FF1E56 100%)"
              }}
            ></div>
            
            <nav className="bg-black/50 backdrop-blur-sm border-b border-[#3b4354]">
            <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <h1 className="text-xl font-bold text-white hidden sm:block">Manifesto Tajani</h1>
                  {/* Language Switcher inserido aqui para mobile/desktop */}
                  <LanguageSwitcher />
                </div>

                <div className="flex gap-4 items-center">
                <Link href="/dossier">
                    <button className="text-[#00FFFF] hover:text-[#39FF14] transition-colors text-sm font-medium uppercase tracking-wider hidden md:block">
                    {t.nav.dossier}
                    </button>
                </Link>
                <button onClick={() => scrollToSection("manifesto")} className="text-gray-300 hover:text-[#39FF14] transition-colors text-sm">
                  {t.nav.manifesto}
                </button>
                <button onClick={() => scrollToSection("demands")} className="text-gray-300 hover:text-[#39FF14] transition-colors text-sm">
                  {t.nav.demands}
                </button>
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
                {t.hero.title_prefix} <br/><span className="text-[#FF1E56]">{t.hero.title_highlight}</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                {t.hero.subtitle}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
                <Button onClick={() => scrollToSection("manifesto")} className="bg-[#39FF14] text-black font-bold text-lg h-12 px-8 hover:bg-opacity-80 transition-all rounded-sm">
                    {t.hero.cta_manifesto}
                </Button>
                
                <Link href="/dossier">
                    <Button className="bg-[#00FFFF]/10 text-[#00FFFF] font-bold text-lg h-12 px-8 hover:bg-[#00FFFF]/20 transition-all rounded-sm border border-[#00FFFF]">
                    {t.hero.cta_dossier}
                    </Button>
                </Link>

                <Link href="/evidence">
                    <Button className="bg-[#FF1E56] text-white font-bold text-lg h-12 px-8 hover:bg-[#FF1E56]/80 transition-all rounded-sm border border-[#FF1E56] animate-pulse">
                    {t.hero.cta_evidence}
                    </Button>
                </Link>
                </div>

            </div>
            </section>

            {/* INTRO SECTION */}
            <section className="py-16 px-4 bg-black/30">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{t.intro.title}</h2>
                <p className="text-lg text-gray-300 leading-relaxed mb-4">
                {t.intro.text1}
                <SourceLink 
                  href="https://temi.camera.it/leg19/provvedimento/d-l-36-2025-disposizioni-urgenti-in-materia-di-cittadinanza.html" 
                  label="D.L. 36/2025" 
                  sourceName="Camera dei Deputati" 
                />
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                {t.intro.text2}
                <SourceLink 
                  href="https://www.senato.it/istituzione/la-costituzione" 
                  label="Costituzione" 
                  sourceName="Senato della Repubblica" 
                />.
                </p>
            </div>
            </section>

            {/* AS 4 ARMAS */}
            <section className="py-16 px-4">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">{t.weapons.title}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border border-[#3b4354] bg-[#1b1f27] p-6 rounded-sm hover:border-[#39FF14] transition-colors">
                    <div className="flex items-start gap-4">
                    <span className="text-[#39FF14] text-3xl font-bold">1</span>
                    <div>
                        <h3 className="text-xl font-bold text-white mb-2">{t.weapons.item1_title}</h3>
                        <p className="text-gray-400">{t.weapons.item1_desc}</p>
                    </div>
                    </div>
                </div>
                <div className="border border-[#3b4354] bg-[#1b1f27] p-6 rounded-sm hover:border-[#39FF14] transition-colors">
                    <div className="flex items-start gap-4">
                    <span className="text-[#39FF14] text-3xl font-bold">2</span>
                    <div>
                        <h3 className="text-xl font-bold text-white mb-2">{t.weapons.item2_title}</h3>
                        <p className="text-gray-400">{t.weapons.item2_desc}</p>
                    </div>
                    </div>
                </div>
                <div className="border border-[#3b4354] bg-[#1b1f27] p-6 rounded-sm hover:border-[#39FF14] transition-colors">
                    <div className="flex items-start gap-4">
                    <span className="text-[#39FF14] text-3xl font-bold">3</span>
                    <div>
                        <h3 className="text-xl font-bold text-white mb-2">{t.weapons.item3_title}</h3>
                        <p className="text-gray-400">{t.weapons.item3_desc}</p>
                    </div>
                    </div>
                </div>
                <div className="border border-[#3b4354] bg-[#1b1f27] p-6 rounded-sm hover:border-[#39FF14] transition-colors">
                    <div className="flex items-start gap-4">
                    <span className="text-[#39FF14] text-3xl font-bold">4</span>
                    <div>
                        <h3 className="text-xl font-bold text-white mb-2">{t.weapons.item4_title}</h3>
                        <p className="text-gray-400">{t.weapons.item4_desc}</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>

            <section className="py-16 px-4 bg-black/30">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">{t.violations.title}</h2>
                <div className="space-y-6">
                <div className="border-l-4 border-[#00FFFF] bg-[#00FFFF]/10 p-6 rounded-r-sm">
                    <h3 className="text-2xl font-bold text-white mb-2">{t.violations.art3_title}</h3>
                    <p className="text-gray-300">{t.violations.art3_desc}</p>
                </div>
                <div className="border-l-4 border-[#FF1E56] bg-[#FF1E56]/10 p-6 rounded-r-sm">
                    <h3 className="text-2xl font-bold text-white mb-2">{t.violations.art22_title}</h3>
                    <p className="text-gray-300">{t.violations.art22_desc}</p>
                </div>
                <div className="border-l-4 border-[#39FF14] bg-[#39FF14]/10 p-6 rounded-r-sm">
                    <h3 className="text-2xl font-bold text-white mb-2">{t.violations.art35_title}</h3>
                    <p className="text-gray-300">{t.violations.art35_desc}</p>
                </div>
                </div>
            </div>
            </section>

            <section id="manifesto" className="py-16 px-4">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">{t.manifesto.title}</h2>
                <div className="bg-[#1b1f27] border border-[#3b4354] p-8 rounded-sm space-y-6 text-gray-300 leading-relaxed">
                <div>
                    <h3 className="text-2xl font-bold text-white mb-4">{t.manifesto.preamble_title}</h3>
                    <p>{t.manifesto.preamble_desc}</p>
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-white mb-4">{t.manifesto.fundament_title}</h3>
                    <p>{t.manifesto.fundament_desc1}</p>
                    <p className="mt-4">{t.manifesto.fundament_desc2}</p>
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-white mb-4">{t.manifesto.distinction_title}</h3>
                    <p>{t.manifesto.distinction_desc}</p>
                </div>
                </div>
            </div>
            </section>

            <section id="demands" className="py-16 px-4 bg-black/30">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">{t.demands.title}</h2>
                <div className="space-y-6">
                <div className="border-l-4 border-[#00FFFF] bg-[#00FFFF]/10 p-6 rounded-r-sm">
                    <h3 className="text-2xl font-bold text-white mb-2">{t.demands.item1_title}</h3>
                    <p className="text-gray-300">{t.demands.item1_desc}</p>
                </div>
                <div className="border-l-4 border-[#39FF14] bg-[#39FF14]/10 p-6 rounded-r-sm">
                    <h3 className="text-2xl font-bold text-white mb-2">{t.demands.item2_title}</h3>
                    <p className="text-gray-300">{t.demands.item2_desc}</p>
                </div>
                <div className="border-l-4 border-[#FF1E56] bg-[#FF1E56]/10 p-6 rounded-r-sm">
                    <h3 className="text-2xl font-bold text-white mb-2">{t.demands.item3_title}</h3>
                    <p className="text-gray-300">{t.demands.item3_desc}</p>
                </div>
                <div className="border-l-4 border-[#00FFFF] bg-[#00FFFF]/10 p-6 rounded-r-sm">
                    <h3 className="text-2xl font-bold text-white mb-2">{t.demands.item4_title}</h3>
                    <p className="text-gray-300">{t.demands.item4_desc}</p>
                </div>
                </div>
            </div>
            </section>

            <section className="py-20 px-4 bg-black/50 border-t border-[#3b4354]">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
                {t.footer.join} <span className="text-[#39FF14]">{t.footer.digital_resistance}</span>
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                {t.footer.subtitle}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                    href={PETITION_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Button className="bg-[#FF1E56] text-white font-bold text-lg h-12 px-8 hover:bg-opacity-80 transition-all rounded-sm w-full sm:w-auto shadow-[0_0_20px_rgba(255,30,86,0.5)]">
                        {t.footer.cta_button}
                    </Button>
                </a>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-800 text-gray-500 text-xs">
                    <p>{t.footer.disclaimer}</p>
                </div>
            </div>
            </section>
        </main>
      </div>
    </PageTransition>
  );
}
