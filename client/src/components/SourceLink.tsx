import { ExternalLink } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface SourceLinkProps {
  href: string;
  label: string;
  sourceName: string;
}

export default function SourceLink({ href, label, sourceName }: SourceLinkProps) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 ml-1 px-1.5 py-0.5 rounded bg-[#39FF14]/10 border border-[#39FF14]/30 text-[10px] text-[#39FF14] hover:bg-[#39FF14]/20 transition-all cursor-pointer align-super no-underline"
          onClick={(e) => e.stopPropagation()}
        >
          {label}
          <ExternalLink size={8} />
        </a>
      </TooltipTrigger>
      <TooltipContent className="bg-black/90 border border-[#39FF14]/50 text-xs text-white">
        <p>Fonte Verificada: <span className="font-bold text-[#39FF14]">{sourceName}</span></p>
      </TooltipContent>
    </Tooltip>
  );
}
