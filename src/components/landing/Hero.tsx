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
      
      <div className="container py-24 md:py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm tracking-wider text-muted-foreground uppercase mb-6">
              Wezt Tech
            </p>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8">
              Landing pages que
              <br />
              <span className="text-primary">funcionam</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
              Desenvolvemos páginas focadas em conversão para empreendedores que querem resultados reais.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" className="min-w-[200px]">
                <a href="#contato">
                  Ver nosso trabalho
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
              <Button asChild variant="ghost" size="lg" className="min-w-[200px]">
                <a href={waLink} target="_blank" rel="noopener">
                  <MessageCircle className="mr-2 w-4 h-4" />
                  WhatsApp
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="mt-20 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="relative rounded-2xl overflow-hidden border border-border/50">
            <img
              src={heroImg}
              alt="Dashboard de analytics mostrando métricas de conversão"
              className="w-full h-auto"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
          </div>
        </motion.div>
      </div>
    </header>
  );
};

export default Hero;
