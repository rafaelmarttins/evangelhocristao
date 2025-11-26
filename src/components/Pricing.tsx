import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Gift } from "lucide-react";

const Pricing = () => {
  return (
    <section id="ofertas" className="py-12 md:py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8 md:mb-12 space-y-3 md:space-y-4">
          <Badge className="text-xs sm:text-sm md:text-base px-4 md:px-6 py-1.5 md:py-2 bg-destructive text-destructive-foreground font-bold">
            OFERTA LIMITADA - Apenas até dia 25/12/2025
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground px-2">
            Escolha Sua Oferta Especial
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground px-4">
            Livros de qualidade profissional para enriquecer seus momentos de fé
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {/* Pacote Básico */}
          <Card className="border border-border shadow-lg hover:shadow-xl transition-all duration-300 bg-card">
            <CardHeader className="text-center space-y-2 md:space-y-3 pb-4 md:pb-6 px-4 md:px-6">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2 md:mb-3">Pacote Básico</h3>
                <div className="flex items-center justify-center gap-2 mb-1 md:mb-2">
                  <span className="text-lg md:text-2xl text-muted-foreground line-through">R$ 47,00</span>
                  <Badge className="bg-success text-success-foreground text-xs font-bold px-2 py-1">-79%</Badge>
                </div>
                <div className="text-4xl md:text-5xl font-extrabold text-success mt-1">R$ 10,00</div>
                <p className="text-xs md:text-sm text-muted-foreground mt-1 md:mt-2">Você economiza R$ 37,00</p>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 md:space-y-6 px-4 md:px-6 pb-4 md:pb-6">
              <div className="space-y-2 md:space-y-3">
                {[
                  "25 Livros de Colorir em PDF",
                  "Temas Bíblicos Variados",
                  "Acesso Vitalício",
                  "Suporte por WhatsApp",
                  "Garantia de 7 dias"
                ].map((feature, i) => (
                  <div key={i} className="flex items-start gap-2 md:gap-3">
                    <Check className="w-4 h-4 md:w-5 md:h-5 text-success flex-shrink-0 mt-0.5" />
                    <span className="text-sm md:text-base text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
              <a href="https://pay.cakto.com.br/38xaox8_664467" target="_blank" rel="noopener noreferrer" className="w-full">
                <Button 
                  size="lg"
                  className="w-full animate-pulse hover:animate-none bg-success hover:bg-success/90 text-success-foreground font-bold text-sm md:text-base"
                >
                  QUERO O PACOTE BÁSICO
                </Button>
              </a>
            </CardContent>
          </Card>

          {/* Pacote Premium */}
          <Card className="border-2 border-warning shadow-2xl hover:shadow-3xl transition-all duration-300 relative bg-card">
            <div className="absolute -top-2 md:-top-3 left-1/2 -translate-x-1/2 z-10">
              <Badge className="bg-warning text-warning-foreground text-xs md:text-sm px-3 md:px-4 py-1 md:py-1.5 font-bold shadow-md">
                🏆 MAIS VENDIDO
              </Badge>
            </div>
            <CardHeader className="text-center space-y-2 md:space-y-3 pb-4 md:pb-6 pt-4 md:pt-6 px-4 md:px-6">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2 md:mb-3">
                  👑 Pacote Premium
                </h3>
                <div className="flex items-center justify-center gap-2 mb-1 md:mb-2">
                  <span className="text-lg md:text-2xl text-muted-foreground line-through">R$ 256,00</span>
                  <Badge className="bg-success text-success-foreground text-xs font-bold px-2 py-1">-93%</Badge>
                </div>
                <div className="text-4xl md:text-5xl font-extrabold text-success mt-1">R$ 17,00</div>
                <p className="text-xs md:text-sm text-muted-foreground mt-1 md:mt-2">Você economiza R$ 239,00</p>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 md:space-y-6 px-4 md:px-6 pb-4 md:pb-6">
              <div className="bg-success/10 p-2 md:p-3 rounded-lg mb-3 md:mb-4 border border-success/20">
                <p className="font-bold text-center text-success text-xs md:text-sm">TUDO DO PACOTE BÁSICO +</p>
              </div>
              <div className="space-y-2 md:space-y-3">
                {[
                  { text: "BÔNUS 1: Novos Livros Mensais Durante 1 Ano", value: "R$ 59,90" },
                  { text: "BÔNUS 2: Meu Primeiro Guia De Orações", value: "R$ 29,90" },
                  { text: "BÔNUS 3: Cartões Bíblicos Para Memorização", value: "R$ 19,90" },
                  { text: "BÔNUS 4: Desafio Bíblico De 7 Dias", value: "R$ 19,90" },
                  { text: "BÔNUS 5: +100 Adesivos Cristãos", value: "R$ 8,90" }
                ].map((bonus, i) => (
                  <div key={i} className="flex items-start gap-3 bg-orange/10 p-3 rounded-lg">
                    <Gift className="w-5 h-5 md:w-6 md:h-6 text-orange flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <p className="text-foreground text-xs md:text-sm">
                        <strong>{bonus.text}</strong>
                      </p>
                      <p className="text-destructive line-through text-xs mt-1">{bonus.value}</p>
                    </div>
                  </div>
                ))}
              </div>
              <a href="https://pay.cakto.com.br/t5brsxw" target="_blank" rel="noopener noreferrer" className="w-full">
                <Button 
                  size="lg"
                  className="w-full animate-pulse hover:animate-none bg-warning hover:bg-warning/90 text-warning-foreground font-bold text-sm md:text-base"
                >
                  QUERO O PACOTE PREMIUM
                </Button>
              </a>
              <p className="text-center text-xs text-muted-foreground">
                +500 pessoas já escolheram este pacote
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
