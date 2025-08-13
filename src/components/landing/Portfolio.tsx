import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import { motion } from "framer-motion";

const items = [
  { src: portfolio1, alt: "Exemplo de landing page com gráficos e CTA" },
  { src: portfolio2, alt: "Landing page mobile-first com headline forte" },
  { src: portfolio3, alt: "Landing page com cards de preço e depoimentos" },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="container py-16 md:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <motion.h2
          className="font-display text-3xl md:text-4xl font-bold"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          Portfólio
        </motion.h2>
        <p className="mt-3 text-muted-foreground">Alguns conceitos visuais e estruturas que desenvolvemos.</p>
      </div>

      <div className="relative mt-10">
        <Carousel className="mx-auto max-w-4xl">
          <CarouselContent>
            {items.map((it, idx) => (
              <CarouselItem key={idx}>
                <div className="p-2">
                  <img
                    src={it.src}
                    alt={it.alt}
                    loading="lazy"
                    className="w-full h-auto rounded-lg border bg-card"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default Portfolio;
