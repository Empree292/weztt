import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Mariana Alves",
    role: "Fundadora, Studio MA",
    quote:
      "A Wezt Tech elevou nosso posicionamento. A landing ficou linda e nossas conversões subiram em poucas semanas.",
  },
  {
    name: "Carlos Pereira",
    role: "CEO, FitExpress",
    quote:
      "Processo muito claro e rápido. O foco em performance fez toda a diferença no resultado final.",
  },
  {
    name: "Bianca Rocha",
    role: "CMO, EduNova",
    quote:
      "Excelente experiência. Entregaram exatamente o que precisávamos para rodar campanhas com ROI sólido.",
  },
];

const Testimonials = () => {
  return (
    <section id="depoimentos" className="container py-16 md:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <motion.h2
          className="font-display text-3xl md:text-4xl font-bold"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          Depoimentos
        </motion.h2>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <motion.blockquote
            key={t.name}
            className="rounded-lg border bg-card p-6 shadow-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >
            <p className="text-sm text-muted-foreground">“{t.quote}”</p>
            <footer className="mt-4 text-sm font-medium">
              {t.name} • <span className="text-muted-foreground">{t.role}</span>
            </footer>
          </motion.blockquote>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
