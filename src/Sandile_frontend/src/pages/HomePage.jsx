import React from 'react';
import HeroSection from "../components/HomePage/HeroSection";
import ServicesOverview from "../components/HomePage/ServicesOverview";
import KeyBenefits from "../components/HomePage/KeyBenefits";
import CaseStudies from "../components/HomePage/CaseStudies";
import HowItWorks from "../components/HomePage/HowItWorks";
import PartnerLogos from "../components/HomePage/PartnerLogos";
import CallToAction from "../components/HomePage/CallToAction";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <CaseStudies />
      <ServicesOverview />
      <HowItWorks />
      <KeyBenefits />
      <PartnerLogos />
      <CallToAction />
    </div>
  );
};

export default HomePage;
