import guaranteeSeal from "@/assets/guarantee-30-days.png";

const Guarantee = () => {
  return (
    <section className="py-12 md:py-20 px-4 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="flex justify-center lg:justify-start">
            <img 
              src={guaranteeSeal} 
              alt="Selo de Garantia de 30 Dias" 
              className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-contain"
            />
          </div>
          <div className="space-y-4 md:space-y-6 text-center lg:text-right">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Garantia incondicional de 30 dias!
            </h2>
            <p className="text-base md:text-lg text-muted-foreground">
              Nós acreditamos tanto na qualidade do <span className="font-semibold text-foreground">Evangelho Colorido</span> que você terá <span className="font-semibold text-foreground">30 dias completos para testar sem riscos</span>.
            </p>
            <p className="text-base md:text-lg text-muted-foreground">
              Se por qualquer motivo você não ficar satisfeito com seu material, devolvemos <span className="font-semibold text-foreground">100% do seu investimento</span>, sem perguntas ou burocracias.
            </p>
            <p className="text-base md:text-lg text-muted-foreground flex items-start justify-center lg:justify-end gap-2">
              <span className="text-xl">💡</span>
              <span>É a nossa forma de mostrar que sua confiança e tranquilidade estão em primeiro lugar.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;
