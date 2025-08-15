import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TaglineSection from "@/pages/Home/components/TaglineSection";
import ComparisonTable from "@/pages/Home/components/ComparisonTable";
import WhatDoesSection from "@/pages/Home/components/WhatDoesSection";
import BenefitsSection from "@/pages/Home/components/BenefitsSection";
import CTASection from "@/pages/Home/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <TaglineSection />
      <ComparisonTable />
      <WhatDoesSection />
      <BenefitsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
