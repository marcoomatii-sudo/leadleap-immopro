import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";

const NewHeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-primary/90 to-primary/70 pt-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="mb-6 inline-flex items-center gap-2 bg-black/20 text-primary-foreground px-4 py-2 rounded-full">
          <Zap className="w-4 h-4" />
          <span className="font-semibold">Resultados en 48 horas</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
          Impulsa tu Inmobiliaria<br/>
          al siguiente nivel
        </h1>
        
        <p className="text-xl md:text-2xl text-primary-foreground/90 mb-10 max-w-3xl mx-auto">
          Multiplica tus leads, automatiza procesos y haz crecer tu negocio inmobiliario 
          con nuestras estrategias digitales probadas
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 border-2 border-primary-foreground/20"
          >
            <a 
              href="https://calendly.com/inmoimpulsa1/30min"
              target="_blank"
              rel="noopener noreferrer"
            >
              Auditoría Gratis
            </a>
          </Button>
          
          <Button 
            asChild
            size="lg"
            variant="outline"
            className="bg-background text-foreground hover:bg-background/90"
          >
            <a href="/servicios">
              Ver Servicios
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewHeroSection;
