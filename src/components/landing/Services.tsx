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
            className="glass-effect rounded-xl p-6 group hover:border-primary/50 transition-all duration-300 relative overflow-hidden"
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ 
              duration: 0.6, 
              delay: i * 0.1,
              ease: [0.16, 1, 0.3, 1]
            }}
            whileHover={{ y: -8, scale: 1.02 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-primary to-secondary p-3 mb-4 group-hover:scale-110 transition-transform duration-300">
                <s.icon className="w-full h-full text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">{s.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Services;
