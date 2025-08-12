import { motion } from "framer-motion";
import { Lightbulb, Palette, Code, Gauge } from "lucide-react";

const steps = [
  {
    icon: Lightbulb,
    title: "Planejamento",
    desc: "Definimos objetivos, público-alvo e proposta de valor para orientar todo o projeto.",
  },
  {
    icon: Palette,
    title: "Design",
    desc: "UI moderna com hierarquia clara, cores estratégicas e foco em conversão.",
  },
  {
    icon: Code,
    title: "Desenvolvimento",
    desc: "Código performático, responsivo e SEO-friendly com as melhores práticas.",
  },
  {
    icon: Gauge,
    title: "Otimização",
    desc: "Testes, análise de métricas e melhorias contínuas para aumentar resultados.",
  },
];

const Services = () => {
  return (
    <section id="servicos" className="container py-16 md:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <motion.h2
          className="font-display text-3xl md:text-4xl font-bold"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
        >
          Nosso Processo de Criação
        </motion.h2>
        <motion.p
          className="mt-3 text-muted-foreground"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, delay: 0.05 }}
        >
          Passo a passo para desenvolver landing pages que performam de verdade.
        </motion.p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, i) => (
          <motion.article
            key={s.title}
            className="rounded-lg border bg-card p-6 shadow-sm"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: i * 0.05 }}
          >
            <s.icon className="text-primary" />
            <h3 className="mt-4 font-semibold text-lg">{s.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Services;
