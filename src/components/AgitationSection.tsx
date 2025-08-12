const AgitationSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
          "Tus clientes no están esperando… <br/>
          <span className="text-destructive">están yendo a otra agencia</span>"
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="bg-destructive/10 rounded-2xl p-6 border border-destructive/20">
            <div className="text-5xl mb-4">❌</div>
            <h3 className="text-xl font-semibold text-destructive mb-3">Tu estrategia actual</h3>
            <ul className="text-left space-y-2 text-muted-foreground">
              <li>• Publicas y esperas</li>
              <li>• Dependes del "boca a boca"</li>
              <li>• Esperas que lleguen solos</li>
              <li>• Pierdes clientes cada día</li>
            </ul>
          </div>
          
          <div className="bg-success/10 rounded-2xl p-6 border border-success/20">
            <div className="text-5xl mb-4">✅</div>
            <h3 className="text-xl font-semibold text-success mb-3">Tu competencia</h3>
            <ul className="text-left space-y-2 text-muted-foreground">
              <li>• Busca clientes activamente</li>
              <li>• Llega a personas interesadas</li>
              <li>• Habla con compradores reales</li>
              <li>• Firma contratos mientras tú esperas</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 p-6 bg-warning/10 rounded-2xl border border-warning/20">
          <p className="text-lg text-foreground">
            <strong>No es que no haya demanda.</strong><br/>
            El problema es que <strong>no estás llegando a las personas correctas</strong>, en el momento correcto.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AgitationSection;