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

      {/* ── JSON-LD Structured Data ──────────────────────────── */}
      {/* (Spacing updated project-wide) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: SITE_CONFIG.name,
            url: SITE_CONFIG.url,
            description: SITE_CONFIG.description,
            sameAs: [],
            contactPoint: {
              "@type": "ContactPoint",
              contactType: "sales",
              availableLanguage: "English",
            },
          }),
        }}
      />
    </>
  );
}
