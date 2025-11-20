import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#101622] text-white">
      <h1 className="text-4xl font-bold text-[#39FF14] mb-4">404</h1>
      <p className="mb-8 text-gray-400">Pagina non trovata</p>
      <Link href="/">
        <a className="text-[#00FFFF] hover:underline">Torna alla Home</a>
      </Link>
    </div>
  );
}
