import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Ana Paula Silva",
      role: "Professora de Escola Dominical",
      text: "Os livros são maravilhosos! As crianças adoram e os pais agradecem. Material de excelente qualidade e com mensagens edificantes."
    },
    {
      name: "Pastor João Santos",
      role: "Líder de Célula",
      text: "Utilizamos os livros nas nossas células infantis e o engajamento das crianças aumentou muito. Recomendo para todas as igrejas!"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-accent/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            O que nossos clientes dizem
          </h2>
          <div className="flex items-center justify-center gap-2 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-8 h-8 fill-warning text-warning" />
            ))}
          </div>
          <p className="text-2xl font-semibold text-foreground">
            4.9/5 - 347 avaliações
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, i) => (
            <Card key={i} className="border-2 shadow-lg">
              <CardContent className="p-8 space-y-4">
                <div className="flex gap-1 mb-2">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 fill-warning text-warning" />
                  ))}
                </div>
                <p className="text-foreground italic text-lg leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="pt-4 border-t">
                  <p className="font-bold text-foreground">{testimonial.name}</p>
                  <p className="text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
