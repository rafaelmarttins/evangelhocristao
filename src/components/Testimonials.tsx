import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Cliente Satisfeita",
      role: "Mãe e Educadora",
      text: "Muito muito obrigada ❤️❤️❤️ Os livros são maravilhosos! As crianças adoram e estão aprendendo muito sobre a Palavra.",
      image: testimonial1
    },
    {
      name: "Ludyany Guimarães",
      role: "Cliente Verificada",
      text: "Recebido, obrigada <3. Fiz o pagamento e recebi os arquivos rapidinho. Material de excelente qualidade!",
      image: testimonial2
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
                <div className="flex items-center gap-4 mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-primary"
                  />
                  <div className="flex-1">
                    <p className="font-bold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-2">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 fill-warning text-warning" />
                  ))}
                </div>
                <p className="text-foreground italic text-lg leading-relaxed">
                  "{testimonial.text}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
