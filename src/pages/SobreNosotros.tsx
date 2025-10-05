import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";

const SobreNosotros = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-foreground mb-12 text-center">
            Sobre Nosotros
          </h1>
          
          <div className="space-y-6 text-lg text-foreground/90 leading-relaxed">
            <p>
              En InmoImpulsa creemos que el marketing inmobiliario debe ir más allá de simples publicaciones o anuncios. Nacimos con una idea clara: transformar la forma en que las inmobiliarias conectan con las personas.
            </p>
            
            <p>
              Sabemos que cada inmueble tiene una historia, un propósito y un potencial único. Por eso, trabajamos para que cada propiedad destaque en el entorno digital y atraiga a quienes realmente están buscando lo que tú ofreces. Nuestra misión es clara: impulsar la presencia online de las inmobiliarias para convertir visibilidad en resultados reales.
            </p>
            
            <p>
              Nos diferenciamos por combinar estrategia, creatividad y tecnología. Analizamos el comportamiento de tus clientes potenciales, diseñamos campañas personalizadas y construimos una identidad digital sólida para tu marca. No creemos en soluciones genéricas; creemos en resultados medibles y estrategias que escalan.
            </p>
            
            <p>
              Nuestro equipo está formado por apasionados por el marketing, la innovación y el crecimiento. Entendemos las tendencias del mercado, los algoritmos y, sobre todo, cómo hacer que tu inmobiliaria destaque entre la competencia.
            </p>
            
            <p>
              En InmoImpulsa, no solo generamos leads, construimos relaciones duraderas entre agencias y clientes, y ayudamos a las marcas inmobiliarias a posicionarse donde realmente importa: en la mente y el corazón de sus futuros compradores.
            </p>
          </div>
          
          <div className="mt-12 text-center">
            <Button 
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <a 
                href="https://calendly.com/inmoimpulsa1/30min"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contáctanos
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SobreNosotros;
