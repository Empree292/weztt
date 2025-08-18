import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { MessageCircle, Send } from "lucide-react";
import { toast } from "sonner";

const FinalCTA = () => {
  const waNumber = "5531971824188"; 
  const waLink = `https://wa.me/${waNumber}?text=Ol%C3%A1%20Wezt%20Tech!%20Quero%20impulsionar%20meu%20neg%C3%B3cio%20com%20uma%20landing%20page%20profissional.%20Podem%20me%20ajudar?`;

  return (
    <section id="contato" className="container py-16 md:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <motion.h2
          className="font-display text-3xl md:text-4xl font-bold"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          Pronto para crescer?
        </motion.h2>
        <p className="mt-3 text-muted-foreground">Fale com a gente no WhatsApp e solicite seu orçamento personalizado!</p>
      </div>
      <div className="mx-auto mt-10 max-w-2xl flex flex-col items-center">
        <Button asChild variant="tech" size="lg" className="group">
          <a href={waLink} target="_blank" rel="noopener" aria-label="Falar no WhatsApp">
            <span className="relative z-10">Falar no WhatsApp</span>
            <MessageCircle className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
          </a>
        </Button>
      </div>
    </section>
  );
};

export default FinalCTA;
