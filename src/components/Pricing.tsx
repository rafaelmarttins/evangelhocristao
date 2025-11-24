import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

const Pricing = () => {
  return (
    <section id="ofertas" className="py-20 px-4 bg-gradient-to-br from-warning/10 via-orange/10 to-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 space-y-4">
          <Badge className="text-lg px-6 py-2 bg-destructive text-destructive-foreground font-bold">
            ⚡ OFERTA LIMITADA - Apenas no dia 20/07/25
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
          <Card className="border-2 border-primary shadow-xl hover:shadow-2xl transition-all duration-300">
            <CardHeader className="text-center space-y-4 pb-8">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">⭐ Pacote Básico</h3>
                <div className="flex items-center justify-center gap-3">
                  <span className="text-3xl text-muted-foreground line-through">R$ 47,00</span>
                  <Badge className="bg-success text-success-foreground text-sm font-bold">-79%</Badge>
                </div>
                <div className="text-5xl font-extrabold text-primary mt-2">R$ 10,00</div>
                <p className="text-sm text-success font-semibold mt-1">Você economiza R$ 37,00</p>
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
                variant="success" 
                size="xl" 
                className="w-full"
              >
                QUERO O PACOTE BÁSICO
              </Button>
            </CardContent>
          </Card>

          {/* Pacote Premium */}
          <Card className="border-4 border-warning shadow-2xl hover:shadow-3xl transition-all duration-300 relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
              <Badge className="bg-warning text-warning-foreground text-base px-6 py-2 font-bold shadow-lg">
                🔥 MAIS VENDIDO
              </Badge>
            </div>
            <CardHeader className="text-center space-y-4 pb-8 pt-8">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">💎 Pacote Premium</h3>
                <div className="flex items-center justify-center gap-3">
                  <span className="text-3xl text-muted-foreground line-through">R$ 256,00</span>
                  <Badge className="bg-success text-success-foreground text-sm font-bold">-93%</Badge>
                </div>
                <div className="text-5xl font-extrabold text-warning mt-2">R$ 17,00</div>
                <p className="text-sm text-success font-semibold mt-1">Você economiza R$ 239,00</p>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-accent/50 p-4 rounded-lg mb-4">
                <p className="font-bold text-center text-foreground">TUDO DO PACOTE BÁSICO +</p>
              </div>
              <div className="space-y-3">
                {[
                  { text: "BÔNUS 1: 2 Novos livros/mês", value: "R$ 89/ano" },
                  { text: "BÔNUS 2: Vídeos de Histórias Bíblicas", value: "R$ 27,00" },
                  { text: "BÔNUS 3: 15 Versículos Ilustrados", value: "R$ 19,00" },
                  { text: "BÔNUS 4: Calendário Bíblico Semanal", value: "R$ 35,00" }
                ].map((bonus, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <span className="text-foreground font-medium">{bonus.text}</span>
                      <span className="text-muted-foreground line-through text-sm ml-2">{bonus.value}</span>
                    </div>
                  </div>
                ))}
              </div>
              <Button 
                variant="warning" 
                size="xl" 
                className="w-full"
              >
                QUERO O PACOTE PREMIUM
              </Button>
              <p className="text-center text-sm text-muted-foreground">
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
