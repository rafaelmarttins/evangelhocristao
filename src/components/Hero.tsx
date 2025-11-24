import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import heroBookCover from "@/assets/hero-book-cover.png";

const Hero = () => {
  const scrollToOffers = () => {
    const offersSection = document.getElementById("ofertas");
    offersSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary-glow to-primary-dark py-12 md:py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="text-white space-y-4 md:space-y-6 z-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              35 Livros de Colorir Cristãos
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl font-medium text-white/90">
              Transforme momentos especiais com sua família, célula e escola dominical
            </p>
            
            <div className="space-y-2 md:space-y-3 py-3 md:py-4">
              {[
                { icon: "🙏", text: "Células e Grupos" },
                { icon: "⛪", text: "Escola Dominical" },
                { icon: "❤️", text: "Devocional Familiar" },
                { icon: "📚", text: "Uso Pedagógico" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 md:gap-3">
                  <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-success flex-shrink-0" />
                  <span className="text-base md:text-lg font-medium">{item.icon} {item.text}</span>
                </div>
              ))}
            </div>

            <Button 
              onClick={scrollToOffers}
              variant="hero" 
              size="lg"
              className="w-full sm:w-auto text-sm md:text-base"
            >
              QUERO VER AS OFERTAS
            </Button>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-warning/20 to-orange/20 rounded-3xl blur-3xl"></div>
            <img 
              src={heroBookCover} 
              alt="35 Livros de Colorir Cristãos" 
              className="relative rounded-2xl shadow-2xl w-full max-w-md mx-auto transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
