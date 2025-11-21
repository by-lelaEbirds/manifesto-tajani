import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { translations, Language, TranslationContent } from "../translations";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationContent;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Tenta recuperar do localStorage ou define Italiano como padrão
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem("manifesto-lang");
    return (saved as Language) || "it";
  });

  useEffect(() => {
    localStorage.setItem("manifesto-lang", language);
    // Opcional: alterar o atributo lang do HTML para acessibilidade
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
