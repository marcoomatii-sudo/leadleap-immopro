import { Button } from "@/components/ui/enhanced-button";
import { CheckCircle, Gift, Zap } from "lucide-react";

const OfferSection = () => {
  const auditComponents = [
    "Análisis completo de tu página web actual",
    "Diseño de nueva web optimizada para leads (si es necesario)", 
    "Auditoría de tus redes sociales y estrategia de contenido",
    "PDF detallado con puntos de mejora y oportunidades",
    "Plan de acción personalizado para captar más clientes"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
          Tu <span className="text-primary">Auditoría Exprés Completa</span> por solo
          <br/><span className="text-accent">17€</span> incluye todo esto:
        </h2>
        
        <div className="bg-card rounded-2xl p-8 shadow-elegant border border-border mb-8">
          <p className="text-lg text-muted-foreground mb-6">
            No es solo una revisión superficial. Es un <strong>análisis profundo</strong> de todo lo que puede 
            estar impidiendo que tu inmobiliaria capte más leads online:
          </p>
          
          <div className="space-y-4 mb-8">
            {auditComponents.map((component, index) => (
              <div 
                key={index}
                className="text-left p-4 bg-primary/5 rounded-lg border border-primary/20 hover:bg-primary/10 transition-colors flex items-center"
              >
                <CheckCircle className="text-primary mr-3 flex-shrink-0" size={20} />
                <p className="text-foreground font-medium">{component}</p>
              </div>
            ))}
          </div>
          
          <div className="bg-background rounded-xl p-6 border border-primary/30 mb-8">
            <p className="text-lg font-bold text-foreground flex items-center justify-center gap-2">
              <Zap className="text-primary" size={20} />
              Valor total: <span className="text-primary">100 €</span> – 
              Hoy por solo <span className="text-accent">17 €</span>
              <br/><span className="text-sm text-muted-foreground">(Oferta limitada)</span>
            </p>
          </div>
          
          <Button 
            variant="premium" 
            size="xl" 
            className="text-base md:text-xl font-bold w-full max-w-xs mx-auto px-4 text-center leading-tight flex items-center justify-center gap-2"
            onClick={() => window.open('https://calendly.com/marcoomatii/30min', '_blank')}
          >
            <Gift className="w-5 h-5" />
            Quiero mi auditoría completa por 17€
          </Button>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;