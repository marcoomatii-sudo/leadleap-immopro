
import { Button } from "@/components/ui/enhanced-button";
import { Home, Key, Building2, Calendar } from "lucide-react";
import heroImage from "@/assets/hero-real-estate.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-60"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
        <div className="animate-float">
          <div className="flex items-center justify-center mb-6">
            <Home className="text-primary mr-4" size={64} />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-foreground">
            ¿Tu página web y redes sociales están 
            <span className="text-primary">perdiendo clientes</span> cada día?
          </h1>
        </div>
        
        <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Descubre exactamente qué está fallando en tu presencia online y cómo <strong className="text-primary">captarás más leads</strong> inmediatamente.
        </p>
        
        <Button 
          variant="success" 
          size="xl" 
          className="animate-pulse-soft text-base md:text-lg w-full max-w-xs mx-auto text-center leading-tight flex items-center justify-center gap-2"
          onClick={() => window.open('https://calendly.com/marcoomatii/30min', '_blank')}
        >
          <Calendar className="w-5 h-5" />
          Quiero mi auditoría por 17€
        </Button>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 animate-float opacity-20">
          <Building2 className="text-primary" size={48} />
        </div>
        <div className="absolute bottom-20 right-10 animate-float opacity-20" style={{ animationDelay: '1s' }}>
          <Key className="text-primary" size={48} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
