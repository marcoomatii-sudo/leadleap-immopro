import { Mail, Instagram } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-16 bg-background border-t border-border">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
          ¿Tienes alguna pregunta? <span className="text-primary">Contáctanos</span>
        </h2>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <a 
            href="mailto:inmoimpulsa1@gmail.com"
            className="flex items-center gap-3 text-foreground hover:text-primary transition-colors group"
          >
            <Mail className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
            <span className="text-lg font-medium">inmoimpulsa1@gmail.com</span>
          </a>
          
          <a 
            href="https://instagram.com/inmoimpulsa_"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-foreground hover:text-primary transition-colors group"
          >
            <Instagram className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
            <span className="text-lg font-medium">@inmoimpulsa_</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;