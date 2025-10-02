const StatsSection = () => {
  const stats = [
    {
      number: "200+",
      label: "Leads mensuales garantizados"
    },
    {
      number: "48h",
      label: "Tiempo de entrega auditoría"
    },
    {
      number: "300%",
      label: "Incremento promedio en leads"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-primary mb-3">
                {stat.number}
              </div>
              <div className="text-lg text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
