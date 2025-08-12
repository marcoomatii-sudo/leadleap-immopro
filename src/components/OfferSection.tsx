import { Button } from "@/components/ui/enhanced-button";

const OfferSection = () => {
  const bonuses = [
    "✅ Guía Rápida para Vender o Alquilar en Tiempo Récord",
    "✅ Cómo Cerrar Tratos con Clientes Difíciles", 
    "✅ Copywriting Inmobiliario: Palabras que Venden",
    "✅ Checklist de Fotografía Inmobiliaria que Aumenta un 300% las Visitas",
    "✅ Calendario de Publicaciones para Inmobiliarias en Redes Sociales"
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
          Si reservas hoy, te llevas <span className="text-success">GRATIS</span> estos 
          <br/>5 bonus exclusivos (valorados en <span className="text-warning">49 €</span>)
        </h2>
        
        <div className="bg-card rounded-2xl p-8 shadow-elegant border border-border mb-8">
          <p className="text-lg text-muted-foreground mb-6">
            Además de tus 15 clientes potenciales, recibirás acceso inmediato a estas guías 
            y herramientas que harán que cierres operaciones más rápido que tu competencia:
          </p>
          
          <div className="space-y-4 mb-8">
            {bonuses.map((bonus, index) => (
              <div 
                key={index}
                className="text-left p-4 bg-success/5 rounded-lg border border-success/20 hover:bg-success/10 transition-colors"
              >
                <p className="text-foreground font-medium">{bonus}</p>
              </div>
            ))}
          </div>
          
          <div className="bg-warning/10 rounded-xl p-6 border border-warning/30 mb-8">
            <p className="text-lg font-bold text-foreground">
              📌 Valor total: <span className="text-warning">49 €</span> – 
              Hoy <span className="text-success">GRATIS</span> con tu pack de leads por solo 
              <span className="text-real-estate-blue"> 17 €</span>
            </p>
          </div>
          
          <Button 
            variant="premium" 
            size="xl" 
            className="text-xl font-bold"
            onClick={() => window.open('https://calendly.com', '_blank')}
          >
            🎁 Quiero mis bonus GRATIS + 15 leads por 17€
          </Button>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;