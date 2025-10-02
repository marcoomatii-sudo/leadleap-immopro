import { useCountUp } from "@/hooks/useCountUp";

const StatsSection = () => {
  const stat1 = useCountUp({ end: 200, duration: 2500, suffix: "+" });
  const stat2 = useCountUp({ end: 48, duration: 2000, suffix: "h" });
  const stat3 = useCountUp({ end: 300, duration: 2500, suffix: "%" });

  const stats = [
    {
      countUp: stat1,
      label: "Leads mensuales garantizados"
    },
    {
      countUp: stat2,
      label: "Tiempo de entrega auditoría"
    },
    {
      countUp: stat3,
      label: "Incremento promedio en leads"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center" ref={stat.countUp.elementRef}>
              <div className="text-5xl md:text-6xl font-bold text-primary mb-3">
                {stat.countUp.displayValue}
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
