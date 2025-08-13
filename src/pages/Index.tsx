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
  console.log("Index page is rendering");
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
