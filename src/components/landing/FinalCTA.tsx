import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { MessageCircle, Send } from "lucide-react";
import { toast } from "sonner";

const FinalCTA = () => {
  const [loading, setLoading] = useState(false);
  const waNumber = "5531971824188"; // TODO: substitua pelo número oficial
  const waLink = `https://wa.me/${waNumber}?text=Ol%C3%A1%20Wezt%20Tech,%20gostaria%20de%20um%20or%C3%A7amento%20para%20uma%20landing%20page.`;

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      (toast as any)("Recebemos sua mensagem! Em breve entraremos em contato.");
      (e.currentTarget as HTMLFormElement).reset();
    }, 900);
  };

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
        <p className="mt-3 text-muted-foreground">Solicite um orçamento e conte-nos sobre seu projeto.</p>
      </div>

      <motion.form 
        onSubmit={onSubmit} 
        className="mx-auto mt-10 max-w-2xl grid gap-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="relative group">
            <Input 
              name="name" 
              placeholder="Seu nome" 
              required 
              aria-label="Seu nome"
              className="h-12 rounded-xl border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300 focus:border-primary focus:shadow-lg focus:shadow-primary/10"
            />
          </div>
          <div className="relative group">
            <Input 
              name="email" 
              type="email" 
              placeholder="Seu e-mail" 
              required 
              aria-label="Seu e-mail"
              className="h-12 rounded-xl border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300 focus:border-primary focus:shadow-lg focus:shadow-primary/10"
            />
          </div>
        </div>
        <div className="relative group">
          <Textarea 
            name="message" 
            placeholder="Conte um pouco sobre a sua ideia" 
            rows={5} 
            required 
            aria-label="Mensagem"
            className="rounded-xl border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300 focus:border-primary focus:shadow-lg focus:shadow-primary/10 resize-none"
          />
        </div>
        <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
          <Button type="submit" variant="tech" size="lg" disabled={loading} className="group">
            <span className="relative z-10">
              {loading ? "Enviando..." : "Enviar mensagem"}
            </span>
            <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
          <Button asChild variant="outline" size="lg" className="group">
            <a href={waLink} target="_blank" rel="noopener" aria-label="Falar no WhatsApp">
              <span className="relative z-10">WhatsApp direto</span>
              <MessageCircle className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
            </a>
          </Button>
        </div>
      </motion.form>
    </section>
  );
};

export default FinalCTA;
