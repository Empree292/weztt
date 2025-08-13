import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="sobre" className="container py-16 md:py-24">
      <div className="max-w-3xl">
        <motion.h2
          className="font-display text-3xl md:text-4xl font-bold"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          Sobre a Wezt Tech
        </motion.h2>
        <motion.p
          className="mt-4 text-muted-foreground text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Nossa missão é transformar o potencial de empreendedores em resultados sólidos e duradouros. Criamos landing pages que unem estratégia inteligente, design envolvente e performance de alto nível, pensadas para atrair, converter e fidelizar clientes.

Na Wezt Tech, acreditamos que cada detalhe importa: desde a escolha das cores e tipografia até a arquitetura da informação e otimização para conversão. Trabalhamos com transparência em cada etapa do processo, sempre com o cuidado de entender as necessidades únicas de cada negócio e oferecer soluções sob medida.

Nosso compromisso vai além de entregar um site bonito — buscamos criar experiências digitais que impactam, inspiram e geram crescimento real para quem confia no nosso trabalho.
        </motion.p>
      </div>
    </section>
  );
};

export default About;
