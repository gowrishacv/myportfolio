import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import AzureLandingZoneCaseStudy from "./pages/AzureLandingZoneCaseStudy";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />

      <div className="fixed right-4 z-50 bottom-[calc(env(safe-area-inset-bottom)+1rem)] sm:bottom-auto sm:top-[calc(env(safe-area-inset-top)+1rem)]">
        <LanguageSwitcher />
      </div>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route
            path="/azure-landing-zone-case-study"
            element={<AzureLandingZoneCaseStudy />}
          />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
