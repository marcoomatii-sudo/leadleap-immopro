import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";

const Servicios = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-foreground mb-6">
            Nuestros Servicios
          </h1>
          <p className="text-xl text-muted-foreground mb-10">
            Soluciones completas para impulsar tu inmobiliaria
          </p>
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
              Agendar Consulta
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Servicios;
