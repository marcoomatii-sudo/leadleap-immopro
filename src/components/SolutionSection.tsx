import { Button } from "@/components/ui/enhanced-button";
import { Target, Zap, Briefcase, Calendar } from "lucide-react";

const SolutionSection = () => {
  return (
    <section className="py-20 bg-gradient-primary">
      <div className="max-w-5xl mx-auto px-6 text-center text-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
          <span className="text-primary">Auditoría Exprés por 17€</span><br/>
          que transforma tu presencia online en máquina de leads
        </h2>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-10 border border-white/20">
          <p className="text-xl md:text-2xl leading-relaxed mb-6">
            Te analizamos <strong>al detalle</strong> tu página web, redes sociales y estrategia digital, 
            y te entregamos un <strong>plan de acción específico</strong> para captar más clientes.
          </p>
          <p className="text-lg text-muted-foreground">
            Incluye revisión completa + nueva web si es necesario + PDF con mejoras 
            + estrategia de RRSS personalizada.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-card/50 rounded-xl p-6 border border-border">
            <div className="mb-3">
              <Target className="text-primary" size={48} />
            </div>
            <h3 className="font-semibold mb-2 text-foreground">Análisis Profundo</h3>
            <p className="text-sm text-muted-foreground">Revisión completa de web y RRSS</p>
          </div>
          <div className="bg-card/50 rounded-xl p-6 border border-border">
            <div className="mb-3">
              <Zap className="text-primary" size={48} />
            </div>
            <h3 className="font-semibold mb-2 text-foreground">Resultados Rápidos</h3>
            <p className="text-sm text-muted-foreground">Plan de acción inmediato</p>
          </div>
          <div className="bg-card/50 rounded-xl p-6 border border-border">
            <div className="mb-3">
              <Briefcase className="text-primary" size={48} />
            </div>
            <h3 className="font-semibold mb-2 text-foreground">Todo Incluido</h3>
            <p className="text-sm text-muted-foreground">Desde 17€, sin sorpresas</p>
          </div>
        </div>
        
        <Button 
          variant="success" 
          size="xl" 
          className="text-base md:text-xl font-bold animate-pulse-soft w-full max-w-sm mx-auto px-4 text-center leading-tight flex items-center justify-center gap-2"
          onClick={() => window.open('https://calendly.com/marcoomatii/30min', '_blank')}
        >
          <Calendar className="w-5 h-5" />
          Quiero mi auditoría exprés por 17€
        </Button>
      </div>
    </section>
  );
};

export default SolutionSection;