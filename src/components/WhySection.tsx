import { BarChart3, Zap, Settings, TrendingUp } from "lucide-react";

const WhySection = () => {
  const reasons = [
    {
      icon: BarChart3,
      title: "Resultados Medibles",
      description: "Estrategias basadas en datos con métricas claras y objetivos alcanzables"
    },
    {
      icon: Zap,
      title: "Implementación Rápida",
      description: "Comenzamos a generar resultados desde la primera semana"
    },
    {
      icon: Settings,
      title: "Automatización Total",
      description: "Libera tiempo para enfocarte en cerrar ventas, no en gestión"
    },
    {
      icon: TrendingUp,
      title: "Crecimiento Sostenible",
      description: "Estrategias escalables que crecen con tu inmobiliaria"
    }
  ];

  return (
    <section className="py-20 bg-card">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            ¿Por qué InmoImpulsa?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Somos especialistas en el sector inmobiliario con años de experiencia 
            transformando agencias tradicionales en empresas digitales
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon;
            return (
              <div 
                key={index}
                className="text-center"
              >
                <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                  <IconComponent className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhySection;
