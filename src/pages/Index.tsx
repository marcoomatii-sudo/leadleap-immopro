import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import AgitationSection from "@/components/AgitationSection";
import SolutionSection from "@/components/SolutionSection";
import BenefitsSection from "@/components/BenefitsSection";
import OfferSection from "@/components/OfferSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTASection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProblemSection />
      <AgitationSection />
      <SolutionSection />
      <BenefitsSection />
      <OfferSection />
      <TestimonialsSection />
      <FAQSection />
      <FinalCTASection />
    </div>
  );
};

export default Index;
