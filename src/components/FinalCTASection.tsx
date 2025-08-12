import { Button } from "@/components/ui/enhanced-button";

const FinalCTASection = () => {
  return (
    <section className="py-20 bg-gradient-hero">
      <div className="max-w-4xl mx-auto px-6 text-center text-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          "Deja de esperar, <span className="text-yellow-300">empieza a vender</span>"
        </h2>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-10 border border-white/20">
          <p className="text-xl md:text-2xl leading-relaxed mb-6">
            Cada día que pasa sin vender o alquilar es <strong className="text-yellow-300">dinero que no recuperas</strong>.
          </p>
          <p className="text-lg text-gray-100 mb-8">
            Con 15 clientes potenciales reales, puedes cerrar más rápido y dejar atrás las propiedades estancadas.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="text-5xl mb-3">⚡</div>
              <p className="text-lg font-semibold">Resultados en 7 días</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-3">💰</div>
              <p className="text-lg font-semibold">Solo 17€</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-3">🎁</div>
              <p className="text-lg font-semibold">5 Bonus GRATIS</p>
            </div>
          </div>
        </div>
        
        <Button 
          variant="success" 
          size="xl" 
          className="text-lg md:text-2xl font-bold py-4 md:py-6 px-6 md:px-12 animate-pulse-soft w-full max-w-2xl mx-auto text-center leading-tight"
          onClick={() => window.open('https://calendly.com', '_blank')}
        >
          📅 Quiero mis 15 clientes potenciales por 17 €
        </Button>
        
        <p className="text-sm text-gray-200 mt-6">
          ⚡ Oferta limitada - Solo para los primeros 50 inmobiliarias
        </p>
      </div>
    </section>
  );
};

export default FinalCTASection;