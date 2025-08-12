import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import Hero from "@/components/landing/Hero";
import About from "@/components/landing/About";
import Services from "@/components/landing/Services";
import Benefits from "@/components/landing/Benefits";
import Portfolio from "@/components/landing/Portfolio";
import Testimonials from "@/components/landing/Testimonials";
import FinalCTA from "@/components/landing/FinalCTA";

const Index = () => {
  const canonicalUrl = typeof window !== "undefined" ? window.location.href : "https://wezt.tech";
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Wezt Tech',
    url: canonicalUrl,
    description: 'Criação de landing pages modernas e otimizadas para conversão.',
  };

  return (
    <main className="relative">
      <Helmet>
        <title>Wezt Tech — Landing Pages que Convertem</title>
        <meta name="description" content="Wezt Tech cria landing pages modernas e otimizadas para empreendedores aumentarem conversões e crescerem seus negócios." />
        <link rel="canonical" href={canonicalUrl} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-border/50">
        <div className="container flex items-center justify-between py-4">
          <motion.a 
            href="#" 
            className="font-display text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            Wezt Tech
          </motion.a>
          <motion.div 
            className="hidden md:flex gap-8 text-sm"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {[
              { href: "#sobre", label: "Sobre" },
              { href: "#servicos", label: "Serviços" },
              { href: "#beneficios", label: "Benefícios" },
              { href: "#portfolio", label: "Portfólio" },
              { href: "#depoimentos", label: "Depoimentos" },
              { href: "#contato", label: "Contato" }
            ].map((item) => (
              <a 
                key={item.href}
                href={item.href} 
                className="text-muted-foreground hover:text-primary transition-all duration-300 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </motion.div>
        </div>
      </nav>

      <div className="pt-20"></div>

      <Hero />
      <About />
      <Services />
      <Benefits />
      <Portfolio />
      <Testimonials />
      <FinalCTA />

      <footer className="container py-10 text-sm text-muted-foreground">
        © {new Date().getFullYear()} Wezt Tech. Todos os direitos reservados.
      </footer>
    </main>
  );
};

export default Index;
