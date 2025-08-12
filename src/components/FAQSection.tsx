import { useState } from "react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "¿Los clientes potenciales son reales?",
      answer: "Sí, son personas reales que han mostrado interés en propiedades como las que ofreces."
    },
    {
      question: "¿Necesito pagar publicidad aparte?",
      answer: "No, nosotros nos encargamos de todo. Tú solo recibes los contactos."
    },
    {
      question: "¿En qué zonas funciona?",
      answer: "Trabajamos en cualquier ciudad de España, ajustando la búsqueda a tu mercado local."
    },
    {
      question: "¿Cuándo recibiré los leads?",
      answer: "En un máximo de 7 días desde que confirmes tu reserva."
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
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