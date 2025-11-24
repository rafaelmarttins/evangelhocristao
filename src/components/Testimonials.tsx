import { Star } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";

const Testimonials = () => {
  const testimonials = [
    { image: testimonial2, alt: "Depoimento cliente Ludyany" },
    { image: testimonial3, alt: "Depoimento cliente satisfeita" },
    { image: testimonial1, alt: "Depoimento cliente feliz" }
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

        <Carousel 
          opts={{ align: "start", loop: true }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, i) => (
              <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-4">
                  <div className="relative group">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.alt}
                      className="rounded-2xl shadow-xl w-full h-auto transform group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
