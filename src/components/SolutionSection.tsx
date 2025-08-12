import { Button } from "@/components/ui/enhanced-button";

const SolutionSection = () => {
  return (
    <section className="py-20 bg-gradient-primary">
      <div className="max-w-5xl mx-auto px-6 text-center text-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          <span className="text-yellow-300">15 clientes potenciales reales</span><br/>
          en 7 días, sin gastar en publicidad
        </h2>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-10 border border-white/20">
          <p className="text-xl md:text-2xl leading-relaxed mb-6">
            En <strong>InmoImpulsa</strong> te entregamos 15 contactos reales y cualificados 
            interesados en propiedades como las tuyas.
          </p>
          <p className="text-lg text-gray-100">
            No necesitas gastar ni un euro en anuncios: nosotros buscamos, filtramos 
            y te enviamos los clientes listos para hablar contigo.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white/10 rounded-xl p-6">
            <div className="text-4xl mb-3">🎯</div>
            <h3 className="font-semibold mb-2">Clientes Cualificados</h3>
            <p className="text-sm text-gray-100">Solo personas realmente interesadas</p>
          </div>
          <div className="bg-white/10 rounded-xl p-6">
            <div className="text-4xl mb-3">⚡</div>
            <h3 className="font-semibold mb-2">En 7 Días</h3>
            <p className="text-sm text-gray-100">Resultados rápidos y garantizados</p>
          </div>
          <div className="bg-white/10 rounded-xl p-6">
            <div className="text-4xl mb-3">💼</div>
            <h3 className="font-semibold mb-2">Sin Publicidad</h3>
            <p className="text-sm text-gray-100">Nosotros nos encargamos de todo</p>
          </div>
        </div>
        
        <Button 
          variant="success" 
          size="xl" 
          className="text-xl font-bold animate-pulse-soft"
          onClick={() => window.open('https://calendly.com', '_blank')}
        >
          📅 Quiero agendar mi llamada y recibir mis 15 clientes potenciales
        </Button>
      </div>
    </section>
  );
};

export default SolutionSection;