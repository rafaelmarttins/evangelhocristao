import { Star } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
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
    <section className="py-12 md:py-20 px-4 bg-gradient-to-b from-background to-accent/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8 md:mb-12 space-y-3 md:space-y-4 px-2">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
            O que nossos clientes dizem
          </h2>
          <div className="flex items-center justify-center gap-1 md:gap-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 md:w-8 md:h-8 fill-warning text-warning" />
            ))}
          </div>
          <p className="text-xl md:text-2xl font-semibold text-foreground">
            4.9/5 - 347 avaliações
          </p>
          <p className="text-base md:text-lg text-muted-foreground">
            Milhares de famílias já transformaram seus momentos com nossos livros
          </p>
        </div>

        <Carousel 
          opts={{ align: "start", loop: true }}
          plugins={[
            Autoplay({
              delay: 3000,
              stopOnInteraction: true,
            }),
          ]}
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
