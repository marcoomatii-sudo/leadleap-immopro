const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "María López",
      company: "Agencia XYZ",
      text: "La auditoría fue brutal. Me hicieron una web nueva y mi estrategia de RRSS cambió por completo. En 2 semanas ya tenía el triple de consultas.",
      rating: 5
    },
    {
      name: "Javier Ruiz", 
      company: "Inmobiliaria Sol y Mar",
      text: "Por 17€ no esperaba tanto. El PDF con mejoras era súper detallado y la nueva estrategia de contenido me está dando resultados increíbles.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
          Lo que dicen nuestros clientes
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card rounded-2xl p-8 shadow-soft border border-border hover:shadow-elegant transition-all duration-300"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-warning text-xl">⭐</span>
                ))}
              </div>
              
              <p className="text-lg text-foreground mb-6 italic">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-muted-foreground text-sm">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="inline-flex items-center bg-success/10 rounded-full px-6 py-3 border border-success/20">
            <span className="text-2xl mr-2">✅</span>
            <span className="text-success font-semibold">100% Clientes Satisfechos</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;