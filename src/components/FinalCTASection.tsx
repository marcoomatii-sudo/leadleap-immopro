import { Button } from "@/components/ui/enhanced-button";
import { Zap, DollarSign, Gift, Calendar } from "lucide-react";

const FinalCTASection = () => {
  return (
    <section className="py-20 bg-gradient-hero">
      <div className="max-w-4xl mx-auto px-6 text-center text-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
          "Deja de perder clientes, <span className="text-primary">optimiza tu presencia online</span>"
        </h2>
        
        <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 mb-10 border border-border">
          <p className="text-xl md:text-2xl leading-relaxed mb-6 text-foreground">
            Cada día sin optimizar tu web y RRSS es <strong className="text-primary">dinero y clientes perdidos</strong>.
          </p>
          <p className="text-lg text-muted-foreground mb-8">
            Con tu auditoría completa sabrás exactamente qué cambiar para convertir tu web en una máquina de leads.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="mb-3">
                <Zap className="text-primary mx-auto" size={48} />
              </div>
              <p className="text-lg font-semibold text-foreground">Resultados en 5 días</p>
            </div>
            <div className="text-center">
              <div className="mb-3">
                <DollarSign className="text-primary mx-auto" size={48} />
              </div>
              <p className="text-lg font-semibold text-foreground">Solo 17€</p>
            </div>
            <div className="text-center">
              <div className="mb-3">
                <Gift className="text-primary mx-auto" size={48} />
              </div>
              <p className="text-lg font-semibold text-foreground">Todo incluido</p>
            </div>
          </div>
        </div>
        
        <Button 
          variant="success" 
          size="xl" 
          className="text-lg md:text-2xl font-bold py-4 md:py-6 px-6 md:px-12 animate-pulse-soft w-full max-w-sm mx-auto text-center leading-tight flex items-center justify-center gap-2"
          onClick={() => window.open('https://calendly.com/marcoomatii/30min', '_blank')}
        >
          <Calendar className="w-6 h-6" />
          Quiero mi auditoría exprés por 17€
        </Button>
        
        <p className="text-sm text-muted-foreground mt-6 flex items-center justify-center">
          <Zap className="mr-2" size={16} />
          Oferta limitada - Solo para los primeros 50 inmobiliarias
        </p>
      </div>
    </section>
  );
};

export default FinalCTASection;