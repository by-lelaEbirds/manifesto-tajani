import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, Router } from "wouter"; // Adicionei Router aqui
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./Home"; // Corrigido: Home está em src/, não em src/pages/

function AppRoutes() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/404" component={NotFound} />
      {/* Rota de fallback final */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  // Pega o caminho base do vite.config.ts (deve ser /manifesto-tajani/)
  // Se por acaso estiver vazio, usa apenas a barra
  const basePath = import.meta.env.BASE_URL.replace(/\/$/, "") || "";

  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          {/* O segredo está aqui: avisar o Wouter sobre a subpasta */}
          <Router base={basePath}>
            <AppRoutes />
          </Router>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
