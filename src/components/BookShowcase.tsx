import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import bookJonas from "@/assets/book-jonas.png";
import bookDavi from "@/assets/book-davi.png";
import bookArca from "@/assets/book-arca.png";
import bookPedro from "@/assets/book-pedro.jpg";
import bookMoises from "@/assets/book-moises.png";
import bookMaria from "@/assets/book-maria.png";
import bookAdao from "@/assets/book-adao.png";
import bookCriacao from "@/assets/book-criacao.png";

const BookShowcase = () => {
  const scrollToOffers = () => {
    const offersSection = document.getElementById("ofertas");
    offersSection?.scrollIntoView({ behavior: "smooth" });
  };

  const books = [
    { src: bookJonas, title: "Jonas e a Baleia" },
    { src: bookDavi, title: "Davi e Golias" },
    { src: bookArca, title: "A Arca de Noé" },
    { src: bookPedro, title: "Pedro Discípulo" },
    { src: bookMoises, title: "Moisés" },
    { src: bookMaria, title: "Maria Mãe de Jesus" },
    { src: bookAdao, title: "Adão e Eva" },
    { src: bookCriacao, title: "A Criação do Mundo" }
  ];

  return (
    <section className="py-12 md:py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8 md:mb-12 space-y-3 md:space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground px-2">
            Conheça Nossos Livros de Colorir
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground px-4">
            Livros únicos para momentos de fé e relaxamento
          </p>
        </div>

        <Carousel 
          opts={{ align: "start", loop: true }}
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
          className="w-full max-w-5xl mx-auto mb-10"
        >
          <CarouselContent>
            {books.map((book, i) => (
              <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-4">
                  <div className="relative group">
                    <img 
                      src={book.src} 
                      alt={book.title}
                      className="rounded-xl shadow-lg w-full aspect-[4/3] object-cover transform group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex items-end p-4">
                      <p className="text-white font-semibold text-lg">{book.title}</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>

        <div className="text-center px-4">
          <Button 
            onClick={scrollToOffers}
            variant="success" 
            size="lg"
            className="w-full sm:w-auto sm:px-12"
          >
            QUERO VER AS OFERTAS
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BookShowcase;
