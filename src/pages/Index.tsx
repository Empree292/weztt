import { Helmet } from "react-helmet";
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
    <main>
      <Helmet>
        <title>Wezt Tech — Landing Pages que Convertem</title>
        <meta name="description" content="Wezt Tech cria landing pages modernas e otimizadas para empreendedores aumentarem conversões e crescerem seus negócios." />
        <link rel="canonical" href={canonicalUrl} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <nav className="container flex items-center justify-between py-4">
        <a href="#" className="font-display text-xl font-bold">Wezt Tech</a>
        <div className="hidden md:flex gap-6 text-sm text-muted-foreground">
          <a href="#sobre" className="hover:text-foreground transition">Sobre</a>
          <a href="#servicos" className="hover:text-foreground transition">Serviços</a>
          <a href="#beneficios" className="hover:text-foreground transition">Benefícios</a>
          <a href="#portfolio" className="hover:text-foreground transition">Portfólio</a>
          <a href="#depoimentos" className="hover:text-foreground transition">Depoimentos</a>
          <a href="#contato" className="hover:text-foreground transition">Contato</a>
        </div>
      </nav>

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
