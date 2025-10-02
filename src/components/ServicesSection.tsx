import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      badge: "Ideal para empezar",
      price: "17€",
      title: "Auditoría",
      description: "Detectamos fugas de clientes y oportunidades de mejora. Precio especial de 17€ sólo si se cierra en la primera llamada, sino vuelve a su precio normal de 35€.",
      cta: "Solicitar Auditoría",
      link: "https://calendly.com/inmoimpulsa1/30min",
      featured: true
    },
    {
      badge: "Asistente 24/7",
      price: "500€ + 150€/mes",
      title: "Chatbot de Captación",
      description: "Asistente virtual 24/7 que filtra leads. Responde automáticamente y entrega al agente solo clientes cualificados.",
      cta: "Más información",
      link: "/servicios",
      featured: false
    },
    {
      badge: "Solución completa",
      price: "Desde 1000€/mes",
      title: "Sistema Completo de Captación",
      description: "Campañas en Meta/Google Ads, chatbot conectado al CRM y automatizaciones de seguimiento. Todo integrado.",
      cta: "Más información",
      link: "/servicios",
      featured: false
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Servicios que <span className="text-primary">Transforman</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Desde auditorías express hasta automatización completa. Elige el servicio que mejor se adapte a tu inmobiliaria
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`bg-card rounded-2xl p-8 border-2 transition-all duration-300 hover:scale-105 hover:shadow-elegant ${
                service.featured 
                  ? 'border-primary shadow-elegant animate-pulse-soft' 
                  : 'border-border hover:border-primary/50'
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="mb-4">
                <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                  {service.badge}
                </span>
              </div>
              
              <div className="mb-4 relative overflow-hidden">
                <div className="text-4xl font-bold text-primary mb-2 transition-all duration-500 hover:scale-110 inline-block">
                  {service.price}
                </div>
                {service.featured && (
                  <div className="absolute -right-2 -top-2 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse" />
                )}
              </div>
              
              <h3 className="text-2xl font-bold text-foreground mb-4">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <Button 
                asChild
                className={
                  service.featured 
                    ? "w-full bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-elegant animate-pulse-soft" 
                    : "w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                }
                variant={service.featured ? "default" : "outline"}
              >
                {service.link.startsWith('http') ? (
                  <a 
                    href={service.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {service.cta}
                  </a>
                ) : (
                  <a href={service.link}>
                    {service.cta}
                  </a>
                )}
              </Button>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button 
            asChild
            size="lg"
            variant="outline"
            className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            <a href="/servicios">
              Ver Todos los Servicios
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
