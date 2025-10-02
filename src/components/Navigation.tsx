import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="text-2xl font-bold text-primary">INMO</div>
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-foreground hover:text-primary transition-colors">
            Inicio
          </Link>
          <Link to="/servicios" className="text-foreground hover:text-primary transition-colors">
            Servicios
          </Link>
          <Link to="/sobre-nosotros" className="text-foreground hover:text-primary transition-colors">
            Sobre Nosotros
          </Link>
          <Link to="/contacto" className="text-foreground hover:text-primary transition-colors">
            Contacto
          </Link>
        </div>
        
        <Button 
          asChild
          className="bg-primary text-primary-foreground hover:bg-primary/90"
        >
          <a 
            href="https://calendly.com/inmoimpulsa1/30min"
            target="_blank"
            rel="noopener noreferrer"
          >
            Comenzar Ahora
          </a>
        </Button>
      </div>
    </nav>
  );
};

export default Navigation;
