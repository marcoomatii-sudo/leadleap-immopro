import { Rocket, Target, Clock, DollarSign, BarChart3 } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Rocket,
      title: "Vende o alquila más rápido",
      description: "Reduce el tiempo de venta de meses a días"
    },
    {
      icon: Target,
      title: "Solo hablas con personas interesadas",
      description: "Clientes prequalificados y listos para comprar"
    },
    {
      icon: Clock,
      title: "Ahorro de tiempo: nada de llamadas en frío",
      description: "Enfócate en cerrar, no en buscar"
    },
    {
      icon: DollarSign,
      title: "Sin gastar en campañas publicitarias",
      description: "Nosotros invertimos, tú recibes los resultados"
    },
    {
      icon: BarChart3,
      title: "Oportunidades reales y medibles",
      description: "Contactos verificados con datos reales"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
          Los beneficios que obtienes desde el primer día
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div 
                key={index}
                className="bg-card rounded-xl p-6 shadow-soft border border-border hover:shadow-elegant transition-all duration-300 hover:scale-105"
              >
                <div className="mb-4">
                  <IconComponent className="text-primary" size={48} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  ✓ {benefit.title}
                </h3>
                <p className="text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;