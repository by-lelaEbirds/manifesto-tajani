import { useLanguage } from "../contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Language } from "../translations";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  const languages: { code: Language; label: string; flag: React.ReactNode }[] = [
    {
      code: "it",
      label: "Italiano",
      flag: (
        <svg viewBox="0 0 640 480" className="w-full h-full">
          <g fillRule="evenodd" strokeWidth="1pt">
            <path fill="#fff" d="M0 0h640v480H0z"/>
            <path fill="#009246" d="M0 0h213.3v480H0z"/>
            <path fill="#ce2b37" d="M426.7 0h213.3v480H426.7z"/>
          </g>
        </svg>
      )
    },
    {
      code: "pt",
      label: "Português",
      flag: (
        <svg viewBox="0 0 640 480" className="w-full h-full">
          <path fill="#006600" d="M0 0h213.3v480H0z"/>
          <path fill="#ff0000" d="M213.3 0H640v480H213.3z"/>
          <g transform="translate(213.3 240) scale(0.6)">
            <circle r="100" fill="#ffff00" stroke="#000" strokeWidth="10"/>
            <path fill="#fff" stroke="#000" strokeWidth="10" d="M-50-60h100v120h-100z"/>
            <path fill="#003399" d="M-30-40h60v80h-60z"/>
            <path fill="#fff" d="M-10-20h20v40h-20z"/>
            <path fill="#fff" d="M-10-20h20v40h-20z" transform="rotate(45)"/>
          </g>
        </svg>
      )
    },
    {
      code: "en",
      label: "English",
      flag: (
        <svg viewBox="0 0 640 480" className="w-full h-full">
          <path fill="#012169" d="M0 0h640v480H0z"/>
          <path fill="#FFF" d="M75 0l244 181L562 0h78v62L400 240l240 178v62h-80L320 301 81 480H0v-60l239-178L0 64V0h75z"/>
          <path fill="#C8102E" d="M424 294l216 166v20h-20L400 316 180 480h-20v-20l220-166V264h-20L139 480H89l231-192V264H0v-48h320v-24L89 0h50l221 172V0h40v172L620 0h50L376 216v24h264v48H424v6z"/>
        </svg>
      )
    },
    {
      code: "es",
      label: "Español",
      flag: (
        <svg viewBox="0 0 640 480" className="w-full h-full">
          <path fill="#aa151b" d="M0 0h640v480H0z"/>
          <path fill="#f1bf00" d="M0 120h640v240H0z"/>
        </svg>
      )
    }
  ];

  return (
    <div className="flex gap-2 items-center">
      {languages.map((lang) => (
        <Button
          key={lang.code}
          onClick={() => setLanguage(lang.code)}
          variant="ghost"
          className={`p-0 w-8 h-6 overflow-hidden rounded-sm border transition-all hover:scale-110 ${
            language === lang.code 
              ? "border-[#39FF14] shadow-[0_0_10px_rgba(57,255,20,0.5)] opacity-100" 
              : "border-transparent opacity-50 hover:opacity-100"
          }`}
          title={lang.label}
        >
          {lang.flag}
        </Button>
      ))}
    </div>
  );
}
