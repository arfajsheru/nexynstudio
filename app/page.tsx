import { Navbar, HeroSection, ServicesSection, ContactSection, FAQSection } from "@/components/sections";
import { SITE_CONFIG } from "@/lib/constants";

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <FAQSection />
        <ContactSection />
      </main>

      {/* ── JSON-LD Structured Data ──────────────────────────── */}
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
