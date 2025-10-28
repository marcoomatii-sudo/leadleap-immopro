import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Search, MessageSquare, Rocket, Check } from "lucide-react";
import { Link } from "react-router-dom";

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
      link: "https://calendly.com/inmoimpulsa1/30min?month=2025-10",
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
      link: "https://calendly.com/inmoimpulsa1/30min?month=2025-10",
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
                  className="bg-[#1a1a1a] rounded-2xl p-8 border border-[#333] hover:border-primary/30 transition-all duration-300 hover:scale-[1.02] flex flex-col"
                >
                  <div className="mb-4">
                    <span className="inline-block bg-primary text-black px-4 py-2 rounded-full text-sm font-bold">
                      {service.badge}
                    </span>
                  </div>

                  <div className="mb-6">
                    <div className="text-4xl font-bold text-primary mb-1">
                      {service.price}
                    </div>
                    {service.priceDetail && (
                      <div className="text-sm text-gray-400">
                        {service.priceDetail}
                      </div>
                    )}
                    <div className="text-sm text-gray-500 mt-1 flex items-center gap-2">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full"></span>
                      {service.subtitle}
                    </div>
                  </div>

                  <div className="mb-4 flex items-center gap-3">
                    <Icon className="text-primary w-10 h-10" />
                    <h3 className="text-2xl font-bold text-white">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {service.features.length > 0 && (
                    <div className="mb-6">
                      <p className="font-semibold text-primary mb-3">Incluye:</p>
                      <ul className="space-y-3">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-sm text-gray-300">
                            <span className="text-primary mt-0.5">•</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="bg-[#1e3a5f] rounded-lg p-4 mb-6 mt-auto border border-[#2a4a6f]">
                    <p className="text-sm text-gray-200 leading-relaxed">
                      {service.highlight}
                    </p>
                  </div>

                  <Button
                    asChild
                    className="w-full bg-primary text-black font-bold hover:bg-primary/90 transition-all duration-300 h-12 text-base"
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
                      <Link to={service.link}>{service.cta}</Link>
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
