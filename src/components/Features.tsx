import { Heart, Brain, Clock, Palette, Zap, Lock, Phone } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Heart,
      title: "Valores Cristãos Sólidos",
      description: "ensino bíblico seguro e divertido",
      color: "text-red-500"
    },
    {
      icon: Brain,
      title: "Desenvolvimento Completo",
      description: "habilidades cognitivas, motoras e criativas",
      color: "text-pink-500"
    },
    {
      icon: Clock,
      title: "Tempo de Qualidade",
      description: "atividades que aproximam crianças e educadores",
      color: "text-purple-500"
    },
    {
      icon: Palette,
      title: "Qualidade Premium",
      description: "ilustrações detalhadas e prontas para imprimir",
      color: "text-orange-500"
    },
    {
      icon: Zap,
      title: "Acesso Vitalício & Entrega Imediata",
      description: "material sempre disponível",
      color: "text-yellow-500"
    },
    {
      icon: Lock,
      title: "Garantia de 30 dias",
      description: "total segurança na compra",
      color: "text-green-500"
    },
    {
      icon: Phone,
      title: "Suporte via WhatsApp",
      description: "ajuda completa para download e utilização",
      color: "text-blue-500"
    }
  ];

  return (
    <section className="py-12 md:py-20 px-4 bg-gradient-to-b from-accent/10 to-background">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 md:mb-16 text-foreground">
          Benefícios do Evangelho Colorido
        </h2>
        
        <div className="space-y-4 md:space-y-6 max-w-4xl mx-auto">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div 
                key={i} 
                className="flex items-start gap-3 md:gap-4 p-4 md:p-6 rounded-lg bg-card border border-border hover:shadow-lg transition-all duration-300"
              >
                <Icon className={`w-6 h-6 md:w-7 md:h-7 ${feature.color} flex-shrink-0 mt-1`} />
                <div>
                  <h3 className="text-base md:text-lg font-bold text-foreground mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
