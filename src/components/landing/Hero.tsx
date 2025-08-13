import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";
import heroImg from "@/assets/logoSfundoWz.jpg";

const Hero = () => {
  console.log("Hero component is rendering");
  
  // Teste simples para garantir que está renderizando
  if (typeof window !== "undefined") {
    console.log("Window está disponível");
  }
  
  const waNumber = "5531971824188"; // Número de WhatsApp sem o +55
  const waLink = `https://wa.me/${waNumber}?text=Ol%C3%A1%20Wezt%20Tech,%20gostaria%20de%20um%20or%C3%A7amento%20para%20uma%20landing%20page.`;

  return (
   <header className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-950 to-blue-800 dark:from-blue-950 dark:to-blue-900">
  <div className="container mx-auto px-6 py-20">
    <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Conteúdo Principal */}
            <div className="text-center lg:text-left space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white dark:text-white drop-shadow-lg">
                  Landing pages que{" "}
                  <span className="text-blue-600 dark:text-blue-400">
                    funcionam
                  </span>
                </h1>
                
                <p className="text-xl md:text-2xl text-slate-100 dark:text-white max-w-2xl mx-auto lg:mx-0">
                  Desenvolvemos páginas focadas em conversão para empreendedores que querem resultados reais.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <a href="#contato">
                    Solicitar Orçamento
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                </Button>
                <Button 
                  asChild 
                  variant="outline" 
                  size="lg" 
                  className="border-2 border-slate-300 dark:border-slate-600 px-8 py-4 text-lg font-semibold rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-300"
                >
                  <a href={waLink} target="_blank" rel="noopener">
                    <MessageCircle className="mr-2 w-5 h-5" />
                    WhatsApp
                  </a>
                </Button>
              </div>
            </div>
            
            {/* Imagem */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={heroImg}
                  alt="Dashboard de analytics mostrando métricas de conversão"
                  className="w-full h-auto"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
