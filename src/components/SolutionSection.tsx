import { Button } from "@/components/ui/enhanced-button";
import { Target, Zap, Briefcase, Calendar } from "lucide-react";

const SolutionSection = () => {
  return (
    <section className="py-20 bg-gradient-primary">
      <div className="max-w-5xl mx-auto px-6 text-center text-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
          <span className="text-primary">15 clientes potenciales reales</span><br/>
          en 7 días, sin gastar en publicidad
        </h2>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-10 border border-white/20">
          <p className="text-xl md:text-2xl leading-relaxed mb-6">
            En <strong>InmoImpulsa</strong> te entregamos 15 contactos reales y cualificados 
            interesados en propiedades como las tuyas.
          </p>
          <p className="text-lg text-muted-foreground">
            No necesitas gastar ni un euro en anuncios: nosotros buscamos, filtramos 
            y te enviamos los clientes listos para hablar contigo.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-card/50 rounded-xl p-6 border border-border">
            <div className="mb-3">
              <Target className="text-primary" size={48} />
            </div>
            <h3 className="font-semibold mb-2 text-foreground">Clientes Cualificados</h3>
            <p className="text-sm text-muted-foreground">Solo personas realmente interesadas</p>
          </div>
          <div className="bg-card/50 rounded-xl p-6 border border-border">
            <div className="mb-3">
              <Zap className="text-primary" size={48} />
            </div>
            <h3 className="font-semibold mb-2 text-foreground">En 7 Días</h3>
            <p className="text-sm text-muted-foreground">Resultados rápidos y garantizados</p>
          </div>
          <div className="bg-card/50 rounded-xl p-6 border border-border">
            <div className="mb-3">
              <Briefcase className="text-primary" size={48} />
            </div>
            <h3 className="font-semibold mb-2 text-foreground">Sin Publicidad</h3>
            <p className="text-sm text-muted-foreground">Nosotros nos encargamos de todo</p>
          </div>
        </div>
        
        <Button 
          variant="success" 
          size="xl" 
          className="text-base md:text-xl font-bold animate-pulse-soft w-full max-w-sm mx-auto px-4 text-center leading-tight flex items-center justify-center gap-2"
          onClick={() => window.open('https://calendly.com/marcoomatii/30min', '_blank')}
        >
          <Calendar className="w-5 h-5" />
          Quiero agendar mi llamada y recibir mis 15 clientes potenciales
        </Button>
      </div>
    </section>
  );
};

export default SolutionSection;