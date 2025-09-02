
import { Button } from "@/components/ui/enhanced-button";
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
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            🏠 ¿Cansado de que tus pisos tarden semanas 
            <span className="text-yellow-400"> (o meses)</span> en venderse o alquilarse?
          </h1>
        </div>
        
        <p className="text-xl md:text-2xl mb-8 text-gray-100 max-w-3xl mx-auto leading-relaxed">
          Esto es lo que estás haciendo mal… y cómo puedes solucionarlo en solo <strong>7 días</strong>.
        </p>
        
        <Button 
          variant="success" 
          size="xl" 
          className="animate-pulse-soft text-base md:text-lg w-full max-w-xs mx-auto text-center leading-tight"
          onClick={() => window.open('https://calendly.com/marcoomatii/30min', '_blank')}
        >
          📅 Quiero vender/alquilar más rápido
        </Button>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 text-6xl animate-float opacity-20">🏢</div>
        <div className="absolute bottom-20 right-10 text-6xl animate-float opacity-20" style={{ animationDelay: '1s' }}>🔑</div>
      </div>
    </section>
  );
};

export default HeroSection;
