import Navigation from "@/components/Navigation";
import NewHeroSection from "@/components/NewHeroSection";
import StatsSection from "@/components/StatsSection";
import RealEstateShowcase from "@/components/RealEstateShowcase";
import ServicesSection from "@/components/ServicesSection";
import WhySection from "@/components/WhySection";
import FinalCallToAction from "@/components/FinalCallToAction";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <NewHeroSection />
      <StatsSection />
      <RealEstateShowcase />
      <ServicesSection />
      <WhySection />
      <FinalCallToAction />
    </div>
  );
};

export default Index;
