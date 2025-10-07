import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const FinalCallToAction = () => {
  return (
    <section className="py-20 bg-gradient-primary">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
          ¿Listo para multiplicar tus leads?
        </h2>
        
        <p className="text-xl text-primary-foreground/90 mb-10">
          Comienza con nuestra auditoría exprés por solo 17€ y descubre el potencial real de tu inmobiliaria
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            asChild
            size="lg"
            className="bg-background text-foreground hover:bg-background/90"
          >
            <a 
              href="https://calendly.com/inmoimpulsa1/30min"
              target="_blank"
              rel="noopener noreferrer"
            >
              Solicitar Auditoría - 17€
            </a>
          </Button>
          
          <Button 
            asChild
            size="lg"
            variant="outline"
            className="border-2 border-primary-foreground/20 text-primary hover:bg-primary-foreground/10 hover:text-primary"
          >
            <Link to="/sobre-nosotros">
              Conocer más sobre nosotros
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FinalCallToAction;
