import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Products from "@/pages/products";
import ProductDetail from "@/pages/product-detail";
import About from "@/pages/about";
import Services from "@/pages/services";
import Contact from "@/pages/contact";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import ScrollToTop from "@/components/ScrollToTop";

function Router() {
  return (
    <div className="min-h-screen text-foreground flex flex-col">
      <div className="flex-1 bg-background">
        <Header />

        {/* PAGE ROUTES */}
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/products" component={Products} />
          <Route path="/product/:id" component={ProductDetail} />
          <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </div>

      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />

        {/* ensures all pages begin at the top */}
        <ScrollToTop /> 

        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}
