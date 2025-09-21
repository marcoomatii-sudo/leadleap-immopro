import { X, CheckCircle } from "lucide-react";

const AgitationSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
          "Cada día sin optimizar tu presencia online<br/>
          <span className="text-destructive">pierdes clientes potenciales</span>"
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="bg-destructive/10 rounded-2xl p-6 border border-destructive/20">
            <X className="text-destructive mx-auto mb-4" size={48} />
            <h3 className="text-xl font-semibold text-destructive mb-3">Tu presencia online actual</h3>
            <ul className="text-left space-y-2 text-muted-foreground">
              <li>• Web lenta y poco atractiva</li>
              <li>• RRSS sin contenido estratégico</li>
              <li>• Cero optimización para leads</li>
              <li>• Los clientes no te encuentran</li>
            </ul>
          </div>
          
          <div className="bg-success/10 rounded-2xl p-6 border border-success/20">
            <CheckCircle className="text-success mx-auto mb-4" size={48} />
            <h3 className="text-xl font-semibold text-success mb-3">Tu competencia exitosa</h3>
            <ul className="text-left space-y-2 text-muted-foreground">
              <li>• Web optimizada para conversión</li>
              <li>• RRSS que generan confianza</li>
              <li>• Estrategia clara de captación</li>
              <li>• Flujo constante de leads</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 p-6 bg-warning/10 rounded-2xl border border-warning/20">
          <p className="text-lg text-foreground">
            <strong>Los clientes están ahí, buscando propiedades.</strong><br/>
            El problema es que <strong>tu presencia online no los convence</strong> y se van con la competencia.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AgitationSection;