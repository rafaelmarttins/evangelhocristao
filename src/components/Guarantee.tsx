import { Card, CardContent } from "@/components/ui/card";
import { Shield, Lock } from "lucide-react";

const Guarantee = () => {
  return (
    <section className="py-12 md:py-20 px-4 bg-gradient-to-b from-success/5 to-background">
      <div className="container mx-auto max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <Card className="border-2 border-success shadow-xl">
            <CardContent className="p-6 md:p-8 text-center space-y-3 md:space-y-4">
              <div className="w-16 h-16 md:w-20 md:h-20 mx-auto rounded-full bg-success/10 flex items-center justify-center">
                <Shield className="w-8 h-8 md:w-10 md:h-10 text-success" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground">
                Garantia de 7 dias
              </h3>
              <p className="text-muted-foreground text-base md:text-lg">
                Se não ficar satisfeito, devolvemos seu dinheiro sem perguntas
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-primary shadow-xl">
            <CardContent className="p-6 md:p-8 text-center space-y-3 md:space-y-4">
              <div className="w-16 h-16 md:w-20 md:h-20 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                <Lock className="w-8 h-8 md:w-10 md:h-10 text-primary" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground">
                🔒 Pagamento Seguro
              </h3>
              <p className="text-muted-foreground text-base md:text-lg">
                Compra 100% segura e protegida - SSL Protegido
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;
