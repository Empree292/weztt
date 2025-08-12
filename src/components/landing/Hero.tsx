import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, Sparkles, Zap } from "lucide-react";
import styles from "@/styles/landing.module.css";
import heroImg from "@/assets/hero-wezt-tech.jpg";
import { InteractiveBackground, TechShapes } from "@/components/ui/background-effects";

const Hero = () => {
  const waNumber = "5547999999999"; // TODO: substitua pelo número oficial
  const waLink = `https://wa.me/${waNumber}?text=Ol%C3%A1%20Wezt%20Tech,%20gostaria%20de%20um%20or%C3%A7amento%20para%20uma%20landing%20page.`;

  return (
    <header className={`${styles.heroGradient} relative overflow-hidden min-h-screen flex items-center`}>
      <InteractiveBackground />
      <TechShapes />
      
      <div className="container py-20 md:py-32 grid gap-12 md:gap-20 md:grid-cols-2 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div 
            className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 backdrop-blur-sm border border-border/50"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-sm font-medium text-foreground">Wezt Tech • Landing Pages que Convertem</span>
            <Zap className="w-4 h-4 text-secondary animate-pulse" />
          </motion.div>
          
          <motion.h1 
            className="font-display text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight bg-gradient-to-r from-foreground via-primary to-secondary bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Expanda seu negócio com{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent animate-gradient-x">
              landing pages
            </span>{" "}
            modernas e de alta conversão
          </motion.h1>
          
          <motion.p 
            className="mt-6 text-lg md:text-xl text-muted-foreground max-w-prose leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Estratégia, design e desenvolvimento focados em{" "}
            <span className="text-primary font-semibold">performance</span> para transformar{" "}
            <span className="text-secondary font-semibold">cliques em clientes</span>.
          </motion.p>
          
          <motion.div 
            className="mt-10 flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Button asChild variant="tech" size="lg" className="group">
              <a href="#contato" aria-label="Solicitar orçamento">
                <span className="relative z-10">Solicitar Orçamento</span>
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="group">
              <a href={waLink} target="_blank" rel="noopener" aria-label="Falar no WhatsApp">
                <span className="relative z-10">Falar no WhatsApp</span>
                <MessageCircle className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              </a>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          <div className="relative">
            {/* Elementos decorativos */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-r from-primary to-secondary rounded-full opacity-20 animate-float" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-r from-secondary to-accent rounded-full opacity-15 animate-float" style={{ animationDelay: '1s' }} />
            
            <motion.img
              src={heroImg}
              alt="Ilustração tecnológica mostrando crescimento e painéis de dados"
              loading="eager"
              className={`${styles.heroImage} w-full h-auto relative z-10 floating`}
              whileHover={{ scale: 1.02, rotateY: 5 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.div>
      </div>
    </header>
  );
};

export default Hero;
