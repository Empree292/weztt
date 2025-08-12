import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { MessageCircle, Send } from "lucide-react";
import { toast } from "sonner";

const FinalCTA = () => {
  const [loading, setLoading] = useState(false);
  const waNumber = "5547999999999"; // TODO: substitua pelo número oficial
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
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
        >
          Pronto para crescer?
        </motion.h2>
        <p className="mt-3 text-muted-foreground">Solicite um orçamento e conte-nos sobre seu projeto.</p>
      </div>

      <form onSubmit={onSubmit} className="mx-auto mt-8 max-w-2xl grid gap-4">
        <div className="grid gap-2 sm:grid-cols-2">
          <Input name="name" placeholder="Seu nome" required aria-label="Seu nome" />
          <Input name="email" type="email" placeholder="Seu e-mail" required aria-label="Seu e-mail" />
        </div>
        <Textarea name="message" placeholder="Conte um pouco sobre a sua ideia" rows={5} required aria-label="Mensagem" />
        <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
          <Button type="submit" size="lg" disabled={loading}>
            Enviar mensagem
            <Send className="ml-2" />
          </Button>
          <Button asChild variant="secondary" size="lg">
            <a href={waLink} target="_blank" rel="noopener" aria-label="Falar no WhatsApp">
              WhatsApp direto
              <MessageCircle className="ml-2" />
            </a>
          </Button>
        </div>
      </form>
    </section>
  );
};

export default FinalCTA;
