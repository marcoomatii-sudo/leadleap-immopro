import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Zap } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";
import particlesOverlay from "@/assets/particles-overlay.jpg";

const NewHeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          animation: 'subtle-zoom 20s ease-in-out infinite alternate'
        }}
      />
      <div 
        className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background z-0"
        style={{
          backgroundImage: `url(${particlesOverlay})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.15,
          animation: 'float-particles 15s ease-in-out infinite'
        }}
      />
      
      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        <div className="mb-6 inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm border border-primary/30 text-primary px-4 py-2 rounded-full animate-pulse-soft">
          <Zap className="w-4 h-4" />
          <span className="font-semibold">Resultados en 48 horas</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight drop-shadow-2xl">
          Impulsa tu <span className="text-primary">Inmobiliaria</span><br/>
          al siguiente nivel
        </h1>
        
        <p className="text-xl md:text-2xl text-foreground/80 mb-10 max-w-3xl mx-auto drop-shadow-lg">
          Multiplica tus leads, automatiza procesos y haz crecer tu negocio inmobiliario 
          con nuestras estrategias digitales probadas
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-elegant"
          >
            <a 
              href="https://calendly.com/inmoimpulsa1/30min"
              target="_blank"
              rel="noopener noreferrer"
            >
              Auditoría por 17€
            </a>
          </Button>
          
          <Button 
            asChild
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            <Link to="/servicios">
              Ver Servicios
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewHeroSection;
