import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, Router } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home"; // <--- CORREÇÃO AQUI: Aponta para a pasta pages

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
  // Pega o caminho base configurado no vite.config.ts
  // Garante que não seja undefined e remove barra final extra
  const basePath = (import.meta.env.BASE_URL || "").replace(/\/$/, "");

  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          {/* Router configurado com a base correta para o GitHub Pages */}
          <Router base={basePath}>
            <AppRoutes />
          </Router>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
