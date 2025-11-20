import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, Router } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary"; // CORRIGIDO: ./ em vez de ../
import { ThemeProvider } from "./contexts/ThemeContext"; // CORRIGIDO: ./ em vez de ../
import Home from "./Home"; 

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
  // Pega o caminho base configurado no vite.config.ts (que é /manifesto-tajani/)
  // O replace remove a barra final para evitar duplicação
  const basePath = import.meta.env.BASE_URL.replace(/\/$/, "");

  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          {/* O Router precisa envolver as rotas para aplicar a base corretamente */}
          <Router base={basePath}>
            <AppRoutes />
          </Router>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
