import { Button } from "@/components/ui/button";
import { Lock, RefreshCw, Download, Shield, CreditCard } from "lucide-react";
import logoColorido from "@/assets/logo-colorido.png";
import produtosMockup from "@/assets/produtos-mockup.webp";
import exemplo1 from "@/assets/exemplo-1.webp";
import exemplo2 from "@/assets/exemplo-2.webp";
import exemplo3 from "@/assets/exemplo-3.webp";
import exemplo4 from "@/assets/exemplo-4.webp";

const Hero = () => {
  const scrollToOffers = () => {
    const offersSection = document.getElementById("ofertas");
    offersSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden bg-background py-8 md:py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-4 md:space-y-6 z-10">
            <img 
              src={logoColorido} 
              alt="Evangelho Colorido" 
              className="w-64 md:w-80 lg:w-96 mb-4 md:mb-6"
            />
            
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-foreground">
              Transforme o estudo da Bíblia em momentos inesquecíveis de alegria e cor.
            </h1>
            
            <p className="text-base md:text-lg text-muted-foreground">
              Com o kit de atividades para impressão Evangelho Colorido, suas crianças aprendem valores cristãos enquanto se divertem! E você ganha mais tempo em família.
            </p>

            <Button 
              onClick={scrollToOffers}
              className="w-full sm:w-auto text-base md:text-lg font-bold bg-success hover:bg-success/90 text-white py-6 md:py-7 px-8 md:px-12 rounded-lg"
            >
              QUERO MEU KIT AGORA
            </Button>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4 pt-4">
              {[
                { icon: CreditCard, text: "Pagamento único" },
                { icon: RefreshCw, text: "Atualizações mensais incluídas" },
                { icon: Download, text: "Acesso imediato" },
                { icon: Shield, text: "Garantia de 30 dias" },
                { icon: Lock, text: "Compra 100% Segura" }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center gap-1 md:gap-2">
                  <item.icon className="w-5 h-5 md:w-6 md:h-6 text-foreground" />
                  <span className="text-xs md:text-sm text-muted-foreground">{item.text}</span>
                </div>
              ))}
            </div>

            {/* Exemplos de Desenhos */}
            <div className="pt-6 md:pt-8">
              <h3 className="text-lg md:text-xl font-bold text-center mb-4 md:mb-6 text-foreground">
                Exemplos de desenhos que você irá encontrar em nossos livros:
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4">
                {[exemplo1, exemplo2, exemplo3, exemplo4].map((exemplo, i) => (
                  <div 
                    key={i} 
                    className="bg-white rounded-lg p-2 shadow-md hover:shadow-lg transition-all duration-300 border-2 border-border"
                  >
                    <img 
                      src={exemplo} 
                      alt={`Exemplo de desenho ${i + 1}`} 
                      className="w-full h-auto rounded"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative">
            <img 
              src={produtosMockup} 
              alt="Kit Evangelho Colorido" 
              className="w-full max-w-lg mx-auto transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
