import realEstateTeam from "@/assets/real-estate-team.jpg";
import propertiesShowcase from "@/assets/properties-showcase.jpg";
import agentClient from "@/assets/agent-client.jpg";

const RealEstateShowcase = () => {
  return (
    <section className="py-20 bg-card">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Especialistas en <span className="text-primary">Marketing Inmobiliario</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Trabajamos con inmobiliarias que quieren destacar en el mercado digital
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="relative overflow-hidden rounded-2xl shadow-elegant group">
            <img 
              src={realEstateTeam} 
              alt="Equipo de agentes inmobiliarios exitosos" 
              className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent flex items-end p-6">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Equipos que Crecen
                </h3>
                <p className="text-muted-foreground">
                  Ayudamos a inmobiliarias a multiplicar sus resultados
                </p>
              </div>
            </div>
          </div>
          
          <div className="relative overflow-hidden rounded-2xl shadow-elegant group">
            <img 
              src={propertiesShowcase} 
              alt="Propiedades inmobiliarias de lujo" 
              className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent flex items-end p-6">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Propiedades que Destacan
                </h3>
                <p className="text-muted-foreground">
                  Hacemos que cada inmueble brille en digital
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="relative overflow-hidden rounded-2xl shadow-elegant">
          <img 
            src={agentClient} 
            alt="Agente inmobiliario con clientes satisfechos" 
            className="w-full h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent flex items-center">
            <div className="max-w-xl p-12">
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Conectamos Agencias con sus Clientes Ideales
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                No solo generamos leads, creamos relaciones duraderas que convierten visitas en ventas
              </p>
              <div className="flex gap-8">
                <div>
                  <div className="text-3xl font-bold text-primary">+300%</div>
                  <div className="text-sm text-muted-foreground">Más leads</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">48h</div>
                  <div className="text-sm text-muted-foreground">Primeros resultados</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">24/7</div>
                  <div className="text-sm text-muted-foreground">Captación activa</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RealEstateShowcase;
