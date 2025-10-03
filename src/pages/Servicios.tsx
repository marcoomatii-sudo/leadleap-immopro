import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Search, MessageSquare, Rocket, Check } from "lucide-react";

const Servicios = () => {
  const services = [
    {
      icon: Search,
      badge: "Ideal para empezar",
      price: "17€",
      priceDetail: "(35€ sin cierre)",
      subtitle: "Gratuita o Low Ticket",
      title: "Auditoría",
      description: "Detectamos fugas de clientes y oportunidades de mejora. Precio especial de 17€ sólo si se cierra en la primera llamada, sino vuelve a su precio normal de 35€.",
      highlight: "✅ Ideal para probar nuestro sistema con poca inversión y resultados inmediatos.",
      cta: "Solicitar Auditoría",
      link: "https://calendly.com/inmoimpulsa1/30min",
      features: []
    },
    {
      icon: MessageSquare,
      badge: "Asistente 24/7",
      price: "500€ + 150€/mes",
      priceDetail: "",
      subtitle: "Primer paso práctico",
      title: "Chatbot de Captación y Filtrado",
      description: "Asistente virtual 24/7 que filtra leads",
      highlight: "📱 Para inmobiliarias que quieren automatizar la captación inicial de leads.",
      cta: "Más información",
      link: "/contacto",
      features: [
        "Responde automáticamente en WhatsApp/Web",
        "Pregunta presupuesto, zona, nº habitaciones",
        "Entrega al agente solo clientes cualificados"
      ]
    },
    {
      icon: Rocket,
      badge: "Solución completa",
      price: "Desde 1000€/mes",
      priceDetail: "",
      subtitle: "Sistema integral",
      title: "Sistema Completo de Captación + CRM + Publicidad",
      description: "Escalamos la captación de clientes con un sistema integral",
      highlight: "📊 Para inmobiliarias que quieren escalar su negocio de forma completa.",
      cta: "Más información",
      link: "/contacto",
      features: [
        "Campañas en Meta/Google Ads para generar leads constantes",
        "Chatbot conectado al CRM: cada lead entra con datos completos",
        "Automatizaciones de emails/WhatsApps de seguimiento sin esfuerzo"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Nuestros <span className="text-primary">Servicios</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Soluciones completas para impulsar tu inmobiliaria. Desde auditorías express hasta automatización completa.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-card rounded-2xl p-8 border-2 border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-elegant flex flex-col"
                >
                  <div className="mb-4">
                    <span className="inline-block bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-semibold">
                      {service.badge}
                    </span>
                  </div>

                  <div className="mb-4">
                    <div className="text-3xl font-bold text-primary mb-1">
                      {service.price}
                    </div>
                    {service.priceDetail && (
                      <div className="text-sm text-muted-foreground">
                        {service.priceDetail}
                      </div>
                    )}
                    <div className="text-sm text-muted-foreground mt-1">
                      {service.subtitle}
                    </div>
                  </div>

                  <div className="mb-4">
                    <Icon className="text-primary w-12 h-12 mb-3" />
                  </div>

                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    {service.title}
                  </h3>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {service.features.length > 0 && (
                    <div className="mb-6">
                      <p className="font-semibold text-foreground mb-3">Incluye:</p>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="bg-primary/10 rounded-lg p-4 mb-6 mt-auto">
                    <p className="text-sm text-foreground">
                      {service.highlight}
                    </p>
                  </div>

                  <Button
                    asChild
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-elegant"
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
                      <a href={service.link}>{service.cta}</a>
                    )}
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servicios;
