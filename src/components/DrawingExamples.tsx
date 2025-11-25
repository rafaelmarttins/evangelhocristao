import { useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import exemplo1 from "@/assets/exemplo-1.webp";
import exemplo2 from "@/assets/exemplo-2.webp";
import exemplo3 from "@/assets/exemplo-3.webp";
import exemplo4 from "@/assets/exemplo-4.webp";
import exemplo5 from "@/assets/exemplo-5.webp";
import exemplo6 from "@/assets/exemplo-6.webp";
import exemplo7 from "@/assets/exemplo-7.webp";
import exemplo8 from "@/assets/exemplo-8.webp";
import exemplo9 from "@/assets/exemplo-9.webp";
import Autoplay from "embla-carousel-autoplay";

const DrawingExamples = () => {
  const examples = [
    { image: exemplo1, alt: "Família orando com a Bíblia" },
    { image: exemplo2, alt: "Crianças compartilhando pão" },
    { image: exemplo3, alt: "José e Maria com Jesus bebê" },
    { image: exemplo4, alt: "Maria com bebê Jesus" },
    { image: exemplo5, alt: "Anjo anunciando aos pastores" },
    { image: exemplo6, alt: "José e Maria com Jesus na manjedoura" },
    { image: exemplo7, alt: "Camelo e ovelha sob estrela de Belém" },
    { image: exemplo8, alt: "Moisés com as tábuas da lei" },
    { image: exemplo9, alt: "Família acampando nas tendas" }
  ];

  return (
    <section className="py-12 md:py-20 px-4 bg-gradient-to-b from-background to-accent/10">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-foreground">
          Exemplos de desenhos que você irá encontrar em nossos livros:
        </h2>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {examples.map((example, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                <div className="bg-white rounded-lg p-3 md:p-4 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-border">
                  <img
                    src={example.image}
                    alt={example.alt}
                    className="w-full h-auto rounded"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default DrawingExamples;
