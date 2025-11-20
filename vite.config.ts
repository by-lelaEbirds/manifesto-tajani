import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";
import { defineConfig } from "vite";

// Criação manual do __dirname para compatibilidade total
const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  base: '/manifesto-tajani/',
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client", "src"),
    },
  },
  // Removemos o envDir complexo e deixamos o padrão
  root: path.resolve(__dirname, "client"),
  build: {
    outDir: path.resolve(__dirname, "dist"),
    emptyOutDir: true,
  },
});
