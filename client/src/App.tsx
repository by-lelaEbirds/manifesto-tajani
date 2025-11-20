import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, Router } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Dossier from "./pages/Dossier";
import Evidence from "./pages/Evidence"; // Importe a nova página

function AppRoutes() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/dossier" component={Dossier} />
      <Route path="/evidence" component={Evidence} /> {/* Nova Rota */}
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const basePath = (import.meta.env.BASE_URL || "").replace(/\/$/, "");

  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <Router base={basePath}>
            <AppRoutes />
          </Router>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
