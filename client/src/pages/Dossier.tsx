import { Link } from "wouter";
import { useEffect } from "react";
import PageTransition from "@/components/PageTransition";
import SourceLink from "@/components/SourceLink";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { Button } from "@/components/ui/button";

export default function Dossier() {
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageTransition>
      <div className="min-h-screen bg-background text-foreground dark font-sans selection:bg-[#FF1E56] selection:text-white">
        
        {/* PROGRESS BAR */}
        <div 
          className="sticky top-0 z-[51] w-full h-1.5"
          style={{
            background: "linear-gradient(90deg, #39FF14 0%, #39FF14 33.33%, #ffffff 33.33%, #ffffff 66.66%, #FF1E56 66.66%, #FF1E56 100%)"
          }}
        ></div>

        <nav className="sticky top-1.5 z-50 w-full bg-black/90 backdrop-blur-md border-b border-[#3b4354]">
          <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
             <div className="flex items-center gap-4">
                <Link href="/">
                  <span className="text-xl font-bold text-white cursor-pointer hover:text-[#39FF14] transition-colors hidden sm:block">
                    Manifesto Tajani
                  </span>
                </Link>
                <LanguageSwitcher />
             </div>
            <div className="flex gap-4">
               <Link href="/evidence" className="inline-flex items-center justify-center rounded-md text-sm font-medium border border-[#FF1E56] text-[#FF1E56] bg-transparent hover:bg-[#FF1E56]/10 hover:scale-105 h-10 px-4 py-2 transition-all">
                  {t.nav.evidence_btn}
              </Link>
              <Link href="/" className="inline-flex items-center justify-center rounded-md text-sm font-medium text-gray-300 hover:text-white bg-transparent h-10 px-4 py-2">
                  {t.nav.backHome}
              </Link>
            </div>
          </div>
        </nav>

        <main className="w-full max-w-4xl mx-auto px-4 py-16">
          <header className="mb-20">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-[1px] bg-[#FF1E56] w-12"></span>
              <span className="text-[#FF1E56] font-mono text-sm tracking-[0.2em] uppercase">{t.dossier.label}</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 leading-[0.9]">
              {t.dossier.title_line1} <br />
              {t.dossier.title_line2}
            </h1>
            <p className="text-2xl text-gray-300 leading-relaxed border-l-4 border-[#39FF14] pl-6 italic">
              {t.dossier.quote}
            </p>
          </header>

          <div className="space-y-24 text-gray-300 leading-relaxed text-lg">
            
            {/* 01. A RUPTURA PARADIGMÁTICA */}
            <section>
              <h2 className="text-4xl font-bold text-white mb-8 flex items-baseline gap-4">
                <span className="text-[#39FF14] text-6xl font-black opacity-50">01</span>
                {t.dossier.section1_title}
              </h2>
              <p className="mb-6 first-letter:text-5xl first-letter:font-bold first-letter:text-white first-letter:float-left first-letter:mr-3">
                {t.dossier.section1_text1}
              </p>
              <p>
                {t.dossier.section1_text2}
                <SourceLink 
                    href="https://italyget.com/wp-content/uploads/2025/06/Torino-Corte-Costituzionale-Ordinanza-Redacted.pdf" 
                    label="Ordinanza Tribunale Torino" 
                    sourceName="Tribunal de Turim (25/06/2025)" 
                />
              </p>
            </section>

            {/* 02. O CAIXA ELETRÔNICO (Argumento Econômico) */}
            <section className="bg-[#1b1f27] border-y border-[#3b4354] py-12 -mx-4 px-4 md:mx-0 md:px-8 md:rounded-xl">
              <h2 className="text-3xl font-bold text-white mb-8">
                <span className="text-[#00FFFF]">02.</span> {t.dossier.section2_title}
              </h2>
              <p className="mb-6">{t.dossier.section2_intro}</p>
              
              <div className="mb-12 bg-black/40 border border-[#00FFFF]/30 rounded-lg overflow-hidden shadow-lg">
                <div className="bg-[#00FFFF]/10 px-4 py-2 border-b border-[#00FFFF]/30 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-[#00FFFF] animate-pulse"></div>
                        <span className="text-[#00FFFF] text-xs font-mono tracking-widest uppercase">{t.dossier.video_label}</span>
                    </div>
                    <span className="text-[10px] text-gray-500 font-mono">{t.dossier.video_protocol}</span>
                </div>
                <div className="grid md:grid-cols-2 gap-0">
                    <div className="aspect-video w-full bg-black relative">
                        <iframe 
                            className="absolute top-0 left-0 w-full h-full"
                            src="https://www.youtube.com/embed/iZEwm9acihU" 
                            title="Tajani su Accordo Tunisia" 
                            frameBorder="0" 
                            allowFullScreen
                        ></iframe>
                    </div>
                    <div className="p-6 flex flex-col justify-center bg-[#101622] border-t md:border-t-0 md:border-l border-gray-800">
                        <blockquote className="text-white text-sm italic mb-4 border-l-2 border-[#00FFFF] pl-4">
                            {t.dossier.video_quote}
                        </blockquote>
                        <div className="flex items-center gap-3 mt-auto pt-4 border-t border-gray-800">
                            <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-xs text-white font-bold">AT</div>
                            <div>
                                <p className="text-xs text-white font-bold">Antonio Tajani</p>
                                <p className="text-[10px] text-gray-400">Question Time alla Camera</p>
                            </div>
                        </div>
                         <p className="text-[10px] text-[#FF1E56] mt-4 font-mono bg-[#FF1E56]/10 p-2 rounded">
                            <strong>{t.dossier.video_analysis}</strong>
                        </p>
                    </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 my-8">
                <div className="bg-black/40 p-6 rounded border border-red-500/30 relative overflow-hidden">
                   <div className="absolute top-0 right-0 p-1 bg-red-500/20 text-[10px] text-red-500 font-bold">DATI UFFICIALI</div>
                   <h4 className="text-[#FF1E56] font-bold mb-2 text-xl">{t.dossier.card_albania_title}</h4>
                   <p className="text-sm">
                     {t.dossier.card_albania_text} 
                     <SourceLink 
                        href="https://tg24.sky.it/politica/2024/08/07/centro-migranti-albania-accordo-piantedosi" 
                        label="Confessione Piantedosi" 
                        sourceName="Sky TG24 / Min. Interno" 
                     />
                   </p>
                </div>
                <div className="bg-black/40 p-6 rounded border border-[#39FF14]/30">
                   <h4 className="text-[#39FF14] font-bold mb-2 text-xl">{t.dossier.card_tax_title}</h4>
                   <p className="text-sm">{t.dossier.card_tax_text} 
                   <SourceLink 
                     href="https://temi.camera.it/leg19/provvedimento/d-l-36-2025-disposizioni-urgenti-in-materia-di-cittadinanza.html" 
                     label="D.L. 36/2025" 
                     sourceName="Atti Camera dei Deputati" 
                   />
                   </p>
                </div>
              </div>
            </section>

            {/* 03. SEGURANÇA NACIONAL (Argumento de Hipocrisia) */}
            <section className="relative">
              <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-[#FF1E56] to-transparent"></div>
              <h2 className="text-4xl font-bold text-white mb-8 flex items-baseline gap-4">
                <span className="text-[#FF1E56] text-6xl font-black opacity-50">03</span>
                {t.dossier.section3_title}
              </h2>
              <div className="bg-[#FF1E56]/5 p-6 rounded border border-[#FF1E56]/20 mb-6">
                <h3 className="text-[#FF1E56] font-bold text-xl mb-2 uppercase tracking-widest">{t.dossier.section3_card_title}</h3>
                <p className="mb-4">
                  {t.dossier.section3_text}
                </p>
                <p className="text-sm text-gray-400 mb-4">
                  {t.dossier.section3_subtext}
                  <SourceLink 
                      href="https://ntplusdiritto.ilsole24ore.com/art/via-libera-decreto-flussi-novita-click-days-stagionali-controlli-sui-cellulari-e-datori-AG9JPTL" 
                      label="Inchiesta Il Sole 24 Ore" 
                      sourceName="Il Sole 24 Ore" 
                  />
                </p>
                
                {/* VIDEO MELONI / CLICK DAY */}
                <div className="mt-6 bg-black/60 p-4 rounded border border-gray-800">
                   <p className="text-xs text-gray-500 uppercase tracking-widest mb-2">{t.dossier.section3_video_label}</p>
                   <div className="flex flex-col md:flex-row gap-4 items-center">
                      <div className="flex-1">
                        <p className="text-white text-sm italic">
                          {t.dossier.section3_video_quote}
                        </p>
                        <p className="text-[#FF1E56] text-xs font-bold mt-2">— Ammissione Ufficiale del Governo</p>
                      </div>
                      <a 
                        href="https://www.youtube.com/watch?v=-DLHvldxuus" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-[#FF1E56] hover:bg-[#FF1E56]/80 text-white px-4 py-2 rounded transition-colors font-bold text-sm whitespace-nowrap"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                        {t.dossier.section3_video_btn}
                      </a>
                   </div>
                </div>
              </div>
            </section>

             {/* 04. A SENTENÇA MONITÓRIA (Novo Jurídico) */}
             <section className="bg-gradient-to-r from-[#1b1f27] to-[#101622] p-8 rounded-lg border-l-4 border-yellow-500">
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                    <span className="text-yellow-500">04.</span> {t.dossier.section_court_title}
                </h2>
                <div className="flex items-center gap-3 mb-4">
                     <span className="bg-yellow-500/20 text-yellow-500 text-xs font-bold px-2 py-1 rounded border border-yellow-500/50">
                        {t.dossier.section_court_card_title}
                     </span>
                </div>
                <p className="mb-4 text-white font-medium">
                    {t.dossier.section_court_text}
                </p>
                <p className="text-sm text-gray-400">
                    {t.dossier.section_court_subtext}
                    <SourceLink 
                        href="https://italyget.com/the-italian-citizenship-decision-142-2025-by-the-contitutional-court-a-two-part-analysis-to-understand-whats-next/" 
                        label="Análise da Sentença" 
                        sourceName="ItalyGet / Corte Constitucional" 
                    />
                </p>
            </section>

            {/* 05. ESCUDO EUROPEU */}
            <section className="bg-[#101622] border border-[#00FFFF]/30 p-8 rounded-lg relative overflow-hidden mt-8">
                <div className="absolute top-0 right-0 p-4 opacity-20">
                    <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="#00FFFF" strokeWidth="1">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                    </svg>
                </div>
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                    <span className="text-[#00FFFF]">05.</span> {t.dossier.section_eu_title}
                </h2>
                <p className="mb-4 text-white font-medium">
                    {t.dossier.section_eu_text}
                </p>
                <div className="bg-[#00FFFF]/10 border-l-4 border-[#00FFFF] p-4 my-4">
                    <p className="text-sm text-[#00FFFF] font-mono mb-2">JURISPRUDÊNCIA VINCULANTE</p>
                    <p className="italic">{t.dossier.section_eu_case}</p>
                    <div className="mt-2">
                         <SourceLink 
                            href="https://curia.europa.eu/juris/liste.jsf?num=C-221/17" 
                            label="Caso Tjebbes (C-221/17)" 
                            sourceName="Tribunal de Justiça da UE" 
                        />
                         <SourceLink 
                            href="https://curia.europa.eu/juris/liste.jsf?num=C-135/08" 
                            label="Caso Rottmann (C-135/08)" 
                            sourceName="Tribunal de Justiça da UE" 
                        />
                    </div>
                </div>
            </section>

            {/* 06. FORÇA MAIOR E PRENOT@MI */}
            <section className="mt-8">
                 <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                    <span className="text-[#39FF14]">06.</span> {t.dossier.section_force_majeure_title}
                </h2>
                <p className="mb-4">
                    {t.dossier.section_force_majeure_text}
                </p>
                <div className="grid md:grid-cols-2 gap-6 mt-8">
                     <div className="bg-[#1b1f27] p-6 rounded border border-gray-700 hover:border-[#39FF14] transition-colors">
                        <h4 className="text-[#39FF14] font-bold mb-2 uppercase text-sm">O Fato Administrativo</h4>
                        <p className="text-sm text-gray-400">Filas de 10 anos e bugs no sistema (Prenot@mi) impediram o agendamento tempestivo de milhares de requerentes.</p>
                     </div>
                     <div className="bg-[#1b1f27] p-6 rounded border border-gray-700 hover:border-[#39FF14] transition-colors">
                        <h4 className="text-[#39FF14] font-bold mb-2 uppercase text-sm">A Consequência Jurídica</h4>
                        <p className="text-sm text-gray-400">O Estado não pode punir o cidadão pela sua própria ineficiência. Princípio <em>"Ad impossibilia nemo tenetur"</em>.</p>
                     </div>
                </div>
            </section>

             {/* 07. ARMADILHA PARA MENORES */}
             <section className="border-l-4 border-red-500 pl-6 py-2 my-12 bg-red-500/5">
                <h2 className="text-3xl font-bold text-white mb-6">07. {t.dossier.section_minors_title}</h2>
                <p className="mb-4">{t.dossier.section_minors_text}</p>
                <div className="bg-red-500/10 border border-red-500/30 p-4 rounded">
                    <p className="text-[#FF1E56] font-bold text-sm mb-1">ALERTA DE ILEGALIDADE ADMINISTRATIVA</p>
                    <p className="text-gray-300 text-sm">{t.dossier.section_minors_circular}</p>
                     <div className="mt-2">
                        <SourceLink 
                            href="https://italyget.com/benefit-of-law-a-category-invented-by-circular-26185-the-lazio-tar-decides-on-november-12th/" 
                            label="Impugnação TAR Lazio" 
                            sourceName="Recurso Administrativo Coletivo" 
                        />
                    </div>
                </div>
            </section>

            {/* 08. IUS SCHOLAE E DEMOGRAFIA */}
            <section>
              <h2 className="text-4xl font-bold text-white mb-8 flex items-baseline gap-4">
                <span className="text-white text-6xl font-black opacity-20">08</span>
                {t.dossier.section4_title}
              </h2>
              <p className="mb-6 font-medium text-white">
                {t.dossier.section4_text1}
              </p>
              <p className="mb-8">
                {t.dossier.section4_text2}
              </p>

              <div className="space-y-4">
                <div className="flex gap-4 items-start bg-[#2a2f3a] p-4 rounded">
                  <span className="font-bold text-[#00FFFF] text-xl">A.</span>
                  <div>
                    <h4 className="text-white font-bold">{t.dossier.section4_point_a_title}</h4>
                    <p className="text-sm text-gray-400">{t.dossier.section4_point_a_desc}</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start bg-[#2a2f3a] p-4 rounded">
                  <span className="font-bold text-[#00FFFF] text-xl">B.</span>
                  <div>
                    <h4 className="text-white font-bold">{t.dossier.section4_point_b_title}</h4>
                    <p className="text-sm text-gray-400">{t.dossier.section4_point_b_desc}</p>
                  </div>
                </div>
              </div>
            </section>

             {/* 09. O CAVALO DE TROIA (Ius Scholae) */}
            <section>
              <h2 className="text-3xl font-bold text-white mb-6">09. {t.dossier.section5_title}</h2>
              <p className="mb-4">
                {t.dossier.section5_text1}
              </p>
              <p className="mb-4">
                {t.dossier.section5_text2}
                <SourceLink 
                    href="https://www.ismu.org/in-10-anni-gli-alunni-con-background-migratorio-potranno-arrivare-a-un-milione/" 
                    label="Dati Ufficiali ISMU 2024" 
                    sourceName="Fondazione ISMU - Proiezione 1 Milione" 
                />
              </p>
            </section>

            <section className="border-t border-gray-700 pt-16 mt-16">
              <h2 className="text-4xl font-black text-white mb-8">{t.dossier.conclusion_title}</h2>
              <p className="text-xl text-gray-300 font-medium mb-8">
                {t.dossier.conclusion_text}
              </p>
              
              <div className="bg-[#101622] p-8 rounded-lg border border-gray-800 mt-12">
                <h4 className="text-gray-500 text-xs uppercase tracking-widest mb-4">{t.dossier.disclaimer_title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {t.dossier.disclaimer_text}
                </p>
                <p className="text-gray-500 text-xs mt-4 pt-4 border-t border-gray-800">
                  Fontes: Análise Jurídica Exaustiva da Lei 74/2025, Sentença Corte Costituzionale 142/2025, Parecer CGIE, Il Sole 24 Ore, Atti Parlamentari.
                </p>
              </div>
            </section>

          </div>
        </main>
      </div>
    </PageTransition>
  );
}
