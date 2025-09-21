import { Globe, Users, TrendingDown } from "lucide-react";

const ProblemSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
          "Tu web no convierte y tus RRSS no generan leads"
        </h2>
        
        <div className="bg-card rounded-2xl p-8 shadow-soft border border-border">
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Tu página web parece de los años 2000 y tus redes sociales están <strong className="text-destructive">muertas</strong>.<br/>
            Mientras tanto, tu competencia está <strong className="text-success">captando leads constantemente</strong> 
            con estrategias que tú ni siquiera conoces.
          </p>
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <Globe className="text-destructive mx-auto mb-2" size={48} />
              <div className="text-sm text-muted-foreground">Web obsoleta</div>
            </div>
            <div className="text-center">
              <Users className="text-destructive mx-auto mb-2" size={48} />
              <div className="text-sm text-muted-foreground">RRSS sin estrategia</div>
            </div>
            <div className="text-center">
              <TrendingDown className="text-destructive mx-auto mb-2" size={48} />
              <div className="text-sm text-muted-foreground">Cero leads online</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;