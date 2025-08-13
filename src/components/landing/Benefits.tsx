import { motion } from "framer-motion";
import { ShieldCheck, Rocket, LineChart, Sparkles } from "lucide-react";

const items = [
  { icon: ShieldCheck, title: "Credibilidade", desc: "Design profissional que transmite confiança." },
  { icon: Rocket, title: "Velocidade", desc: "Pages rápidas e responsivas em qualquer dispositivo." },
  { icon: LineChart, title: "Conversão", desc: "Estratégias para transformar visitas em vendas." },
  { icon: Sparkles, title: "Personalização", desc: "Feita sob medida para o seu negócio." },
];

const Benefits = () => {
  return (
    <section id="beneficios" className="container py-16 md:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <motion.h2
          className="font-display text-3xl md:text-4xl font-bold"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          Por que escolher a Wezt Tech
        </motion.h2>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((b, i) => (
          <motion.div
            key={b.title}
            className="rounded-lg border bg-card p-6 shadow-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >
            <b.icon className="text-primary" />
            <h3 className="mt-4 font-semibold text-lg">{b.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{b.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Benefits;
