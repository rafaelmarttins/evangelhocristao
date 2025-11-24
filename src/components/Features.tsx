import { Card, CardContent } from "@/components/ui/card";
import { Users, Church, Heart, BookOpen } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Users,
      title: "Células e Grupos",
      description: "Atividades interativas para engajar crianças durante reuniões",
      color: "text-primary"
    },
    {
      icon: Church,
      title: "Escola Dominical",
      description: "Material complementar para aulas mais dinâmicas e envolventes",
      color: "text-success"
    },
    {
      icon: Heart,
      title: "Devocional Familiar",
      description: "Momentos especiais de conexão com Deus em família",
      color: "text-destructive"
    },
    {
      icon: BookOpen,
      title: "Uso Pedagógico",
      description: "Ferramenta educativa que desenvolve coordenação e criatividade",
      color: "text-warning"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-accent/30 to-background">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
          Por que escolher nossos livros?
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={i} 
                className="border-2 hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white"
              >
                <CardContent className="p-6 space-y-4 text-center">
                  <div className={`w-16 h-16 mx-auto rounded-full bg-accent flex items-center justify-center ${feature.color}`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
