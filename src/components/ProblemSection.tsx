const ProblemSection = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
          "La espera te está costando dinero"
        </h2>
        
        <div className="bg-card rounded-2xl p-8 shadow-soft border border-border">
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Cada semana que una propiedad sigue vacía es <strong className="text-destructive">dinero perdido</strong>.<br/>
            Quizás crees que el mercado está lento, pero la verdad es que tu competencia está 
            <strong className="text-success"> cerrando operaciones</strong> mientras tú sigues esperando.
          </p>
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-2">💰</div>
              <div className="text-sm text-muted-foreground">Dinero perdido</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">⏰</div>
              <div className="text-sm text-muted-foreground">Tiempo desperdiciado</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">📉</div>
              <div className="text-sm text-muted-foreground">Oportunidades perdidas</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;