import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, Router } from "wouter"; // Adicionei Router aqui
import ErrorBoundary from "../components/ErrorBoundary";
import { ThemeProvider } from "../contexts/ThemeContext";
import Home from "./Home"; // Corrigido: Home está em src/, não em src/pages/

function AppRoutes() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/404" component={NotFound} />
      {/* Rota de fallback final: qualquer coisa não encontrada cai aqui */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  // Pega o caminho base configurado no vite.config.ts (que é /manifesto-tajani/)
  // O replace remove a barra final para evitar duplicação
  const basePath = import.meta.env.BASE_URL.replace(/\/$/, "");

  return (
    // A correção é envolver o conteúdo principal com o Router e passar o basePath
    <Router base={basePath}>
      <ErrorBoundary>
        <ThemeProvider defaultTheme="dark">
          <TooltipProvider>
            <Toaster />
            <AppRoutes />
          </TooltipProvider>
        </ThemeProvider>
      </ErrorBoundary>
    </Router>
  );
}

export default App;
