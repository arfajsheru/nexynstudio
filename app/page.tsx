import {
  Navbar,
  HeroSection,
  ServicesSection,
  ChallengesSection,
  SolutionsSection,
  IndustriesSection,
  WhyChooseUsSection,
  ProcessSection,
  TechStackSection,
  AfterLaunchSection,
  FAQSection,
  ContactSection,
  CTASection,
  FooterSection,
} from "@/components/sections";
import { SITE_CONFIG } from "@/lib/constants";
import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: SITE_CONFIG.url,
  },
};

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <ChallengesSection />
        <SolutionsSection />
        <IndustriesSection />
        <WhyChooseUsSection />
        <ProcessSection />
        <TechStackSection />
        <AfterLaunchSection />
        <FAQSection />
        <CTASection />
        <ContactSection />
      </main>
      <FooterSection />
    </>
  );
}
