import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

const Pricing = () => {
  return (
    <section id="ofertas" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 space-y-4">
          <Badge className="text-base px-6 py-2 bg-destructive text-destructive-foreground font-bold">
            OFERTA LIMITADA - Apenas no dia 24/11/25
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Escolha Sua Oferta Especial
          </h2>
          <p className="text-xl text-muted-foreground">
            Livros de qualidade profissional para enriquecer seus momentos de fé
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Pacote Básico */}
          <Card className="border border-border shadow-lg hover:shadow-xl transition-all duration-300 bg-card">
            <CardHeader className="text-center space-y-3 pb-6">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Pacote Básico</h3>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-2xl text-muted-foreground line-through">R$ 47,00</span>
                  <Badge className="bg-success text-success-foreground text-xs font-bold px-2 py-1">-79%</Badge>
                </div>
                <div className="text-5xl font-extrabold text-success mt-1">R$ 10,00</div>
                <p className="text-sm text-muted-foreground mt-2">Você economiza R$ 37,00</p>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3">
                {[
                  "35 Livros de Colorir em PDF",
                  "Temas Bíblicos Variados",
                  "Acesso Vitalício",
                  "Suporte por WhatsApp",
                  "Garantia de 7 dias"
                ].map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
              <Button 
                size="lg"
                className="w-full animate-pulse hover:animate-none bg-success hover:bg-success/90 text-success-foreground font-bold text-base"
              >
                QUERO O PACOTE BÁSICO
              </Button>
            </CardContent>
          </Card>

          {/* Pacote Premium */}
          <Card className="border-2 border-warning shadow-2xl hover:shadow-3xl transition-all duration-300 relative bg-card">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
              <Badge className="bg-warning text-warning-foreground text-sm px-4 py-1.5 font-bold shadow-md">
                MAIS VENDIDO
              </Badge>
            </div>
            <CardHeader className="text-center space-y-3 pb-6 pt-6">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Pacote Premium</h3>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-2xl text-muted-foreground line-through">R$ 256,00</span>
                  <Badge className="bg-success text-success-foreground text-xs font-bold px-2 py-1">-93%</Badge>
                </div>
                <div className="text-5xl font-extrabold text-success mt-1">R$ 17,00</div>
                <p className="text-sm text-muted-foreground mt-2">Você economiza R$ 239,00</p>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-accent/30 p-3 rounded-lg mb-4">
                <p className="font-bold text-center text-foreground text-sm">TUDO DO PACOTE BÁSICO +</p>
              </div>
              <div className="space-y-3">
                {[
                  { text: "BÔNUS 1: 2 Novos livros/mês", value: "R$ 89/ano" },
                  { text: "BÔNUS 2: Vídeos de Histórias Bíblicas", value: "R$ 27,00" },
                  { text: "BÔNUS 3: 15 Versículos Ilustrados", value: "R$ 19,00" },
                  { text: "BÔNUS 4: Calendário Bíblico Semanal", value: "R$ 35,00" }
                ].map((bonus, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <p className="text-foreground text-sm">
                        <strong>{bonus.text}</strong>{" "}
                        <span className="text-muted-foreground line-through text-xs">{bonus.value}</span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <Button 
                size="lg"
                className="w-full animate-pulse hover:animate-none bg-warning hover:bg-warning/90 text-warning-foreground font-bold text-base"
              >
                QUERO O PACOTE PREMIUM
              </Button>
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
