import { Card, CardContent } from "@/components/ui/card";
import { Shield, Lock } from "lucide-react";

const Guarantee = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-success/5 to-background">
      <div className="container mx-auto max-w-4xl">
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-2 border-success shadow-xl">
            <CardContent className="p-8 text-center space-y-4">
              <div className="w-20 h-20 mx-auto rounded-full bg-success/10 flex items-center justify-center">
                <Shield className="w-10 h-10 text-success" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">
                Garantia de 7 dias
              </h3>
              <p className="text-muted-foreground text-lg">
                Se não ficar satisfeito, devolvemos seu dinheiro sem perguntas
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-primary shadow-xl">
            <CardContent className="p-8 text-center space-y-4">
              <div className="w-20 h-20 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                <Lock className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">
                🔒 Pagamento Seguro
              </h3>
              <p className="text-muted-foreground text-lg">
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
