import { useState } from "react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "¿Qué incluye exactamente la auditoría?",
      answer: "Análisis completo de tu web, revisión de RRSS, nueva web si es necesario, PDF con mejoras detalladas y plan de acción personalizado."
    },
    {
      question: "¿Me hacéis una nueva web si la mía está mal?",
      answer: "Sí, si tu web actual no convierte, te diseñamos una nueva optimizada para captar leads inmobiliarios."
    },
    {
      question: "¿Cuánto tiempo tarda la auditoría?",
      answer: "En máximo 5 días laborables tienes todo: análisis, nueva web (si aplica) y tu plan de acción completo."
    },
    {
      question: "¿Solo por 17€? ¿No hay letra pequeña?",
      answer: "Es una oferta limitada para los primeros 50 clientes. Precio real: 297€. No hay costes ocultos, solo 17€."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
          Preguntas Frecuentes
        </h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl border border-border shadow-soft overflow-hidden"
            >
              <button
                className="w-full text-left p-6 hover:bg-muted/50 transition-colors flex items-center justify-between"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-semibold text-foreground">
                  ❓ {faq.question}
                </span>
                <span className={`text-2xl transition-transform ${openIndex === index ? 'rotate-180' : ''}`}>
                  ⬇️
                </span>
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;