const BenefitsSection = () => {
  const benefits = [
    {
      icon: "🚀",
      title: "Vende o alquila más rápido",
      description: "Reduce el tiempo de venta de meses a días"
    },
    {
      icon: "🎯",
      title: "Solo hablas con personas interesadas",
      description: "Clientes prequalificados y listos para comprar"
    },
    {
      icon: "⏰",
      title: "Ahorro de tiempo: nada de llamadas en frío",
      description: "Enfócate en cerrar, no en buscar"
    },
    {
      icon: "💰",
      title: "Sin gastar en campañas publicitarias",
      description: "Nosotros invertimos, tú recibes los resultados"
    },
    {
      icon: "📊",
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
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl p-6 shadow-soft border border-border hover:shadow-elegant transition-all duration-300 hover:scale-105"
            >
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                ✅ {benefit.title}
              </h3>
              <p className="text-muted-foreground">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;