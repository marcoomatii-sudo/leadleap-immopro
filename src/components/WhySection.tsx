import { BarChart3, Zap, Settings, TrendingUp } from "lucide-react";
import marketingDashboard from "@/assets/marketing-dashboard.jpg";

const WhySection = () => {
  const reasons = [
    {
      icon: BarChart3,
      title: "Resultados Medibles",
      description: "Estrategias basadas en datos con métricas claras y objetivos alcanzables para tu inmobiliaria"
    },
    {
      icon: Zap,
      title: "Implementación Rápida",
      description: "Comenzamos a generar leads cualificados desde la primera semana de trabajo"
    },
    {
      icon: Settings,
      title: "Automatización Total",
      description: "Libera tiempo para enfocarte en cerrar ventas de propiedades, no en gestión digital"
    },
    {
      icon: TrendingUp,
      title: "Crecimiento Sostenible",
      description: "Estrategias escalables diseñadas específicamente para el mercado inmobiliario"
    }
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url(${marketingDashboard})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            ¿Por qué <span className="text-primary">InmoImpulsa</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Somos especialistas en el sector inmobiliario con años de experiencia 
            transformando agencias tradicionales en potencias digitales
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon;
            return (
              <div 
                key={index}
                className="text-center bg-card/80 backdrop-blur-sm p-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-elegant"
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
