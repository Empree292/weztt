import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";
import styles from "@/styles/landing.module.css";
import heroImg from "@/assets/hero-wezt-tech.jpg";

const Hero = () => {
  const waNumber = "5547999999999"; // TODO: substitua pelo número oficial
  const waLink = `https://wa.me/${waNumber}?text=Ol%C3%A1%20Wezt%20Tech,%20gostaria%20de%20um%20or%C3%A7amento%20para%20uma%20landing%20page.`;

  return (
    <header className={`${styles.heroGradient} relative overflow-hidden`}>
      <div className="container py-16 md:py-24 grid gap-10 md:gap-16 md:grid-cols-2 items-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="mb-3 inline-flex items-center text-xs font-medium text-muted-foreground uppercase tracking-wider">
            Wezt Tech • Landing Pages que Convertem
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            Expanda seu negócio com landing pages modernas e de alta conversão
          </h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-prose">
            Estratégia, design e desenvolvimento focados em performance para transformar cliques em clientes.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Button asChild size="lg">
              <a href="#contato" aria-label="Solicitar orçamento">
                Solicitar Orçamento
                <ArrowRight className="ml-2" />
              </a>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <a href={waLink} target="_blank" rel="noopener" aria-label="Falar no WhatsApp">
                Falar no WhatsApp
                <MessageCircle className="ml-2" />
              </a>
            </Button>
          </div>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        >
          <img
            src={heroImg}
            alt="Ilustração tecnológica mostrando crescimento e painéis de dados"
            loading="eager"
            className={`${styles.heroImage} w-full h-auto`}
          />
        </motion.div>
      </div>
    </header>
  );
};

export default Hero;
