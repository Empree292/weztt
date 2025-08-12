import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="sobre" className="container py-16 md:py-24">
      <div className="max-w-3xl">
        <motion.h2
          className="font-display text-3xl md:text-4xl font-bold"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
        >
          Sobre a Wezt Tech
        </motion.h2>
        <motion.p
          className="mt-4 text-muted-foreground text-lg"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, delay: 0.05 }}
        >
          Nossa missão é impulsionar empreendedores com landing pages que unem estratégia, estética e performance. Valorizamos a transparência, o cuidado com cada detalhe e a busca constante por resultados reais.
        </motion.p>
      </div>
    </section>
  );
};

export default About;
