import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  const scrollToOffers = () => {
    const offersSection = document.getElementById("ofertas");
    offersSection?.scrollIntoView({ behavior: "smooth" });
  };

  const faqs = [
    {
      question: "Como recebo os livros?",
      answer: "Após a confirmação do pagamento, você receberá imediatamente um email com o link para download de todos os 35 livros em formato PDF. Você pode baixar quantas vezes quiser."
    },
    {
      question: "Posso imprimir quantas vezes quiser?",
      answer: "Sim! Você tem licença para uso pessoal ilimitado. Pode imprimir quantas cópias quiser para uso próprio, da sua família, célula ou escola dominical."
    },
    {
      question: "Qual a faixa etária recomendada?",
      answer: "Os livros são adequados para crianças de 3 a 12 anos. Cada livro tem diferentes níveis de complexidade, permitindo uso em diversas faixas etárias."
    },
    {
      question: "Como funciona o bônus mensal?",
      answer: "No Pacote Premium, você recebe 2 novos livros de colorir todo mês diretamente no seu email. São livros exclusivos com temas bíblicos diferentes, garantindo sempre conteúdo novo e envolvente."
    }
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">
          Perguntas Frequentes
        </h2>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, i) => (
            <AccordionItem 
              key={i} 
              value={`item-${i}`}
              className="border-2 rounded-lg px-6 bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <AccordionTrigger className="text-lg font-semibold text-foreground hover:no-underline py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center mt-12">
          <Button 
            onClick={scrollToOffers}
            variant="success" 
            size="xl"
            className="px-12"
          >
            TIREI MINHAS DÚVIDAS, QUERO COMPRAR
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
