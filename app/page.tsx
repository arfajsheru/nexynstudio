import {
  Navbar,
  HeroSection,
  ServicesSection,
  FeaturedProjectSection,
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
  CrowdSection,
} from "@/components/sections";
import { SITE_CONFIG } from "@/lib/constants";
import { Metadata } from "next";

// ─── Schema.org — Organization & WebSite Schemas ───────────────────────────────

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://nexynstudios.com/#organization",
      name: "Nexyn Studios",
      url: "https://nexynstudios.com",
      logo: {
        "@type": "ImageObject",
        url: "https://nexynstudios.com/logo-black.png",
      },
      description:
        "Nexyn Studios is a custom software development company in India specializing in web applications, mobile apps, CRM systems, and AI automation.",
      telephone: "+91 85910 13795",
      email: "nexynstudios@gmail.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "102, A wing, Nehal CHS, Last Mahada, Malwani, Malad West",
        addressLocality: "Mumbai",
        addressRegion: "Maharashtra",
        postalCode: "400095",
        addressCountry: "IN",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+91 85910 13795",
        contactType: "customer service",
        availableLanguage: ["English", "Hindi"],
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://nexynstudios.com/#website",
      url: "https://nexynstudios.com",
      name: "Nexyn Studios",
      description:
        "Custom software development company in India building scalable web applications, mobile solutions, and enterprise CRM platforms.",
      publisher: {
        "@id": "https://nexynstudios.com/#organization",
      },
    },
  ],
};

export const metadata: Metadata = {
  title: {
    absolute: "Software Development Company in India | Nexyn Studios",
  },
  description:
    "Nexyn Studios is a custom software development company in India building high-performance web applications, mobile apps, CRM systems, and business automation solutions.",
  keywords: [
    "software development company in India",
    "custom software development company India",
    "software development services India",
    "custom software development services",
    "software development company",
    "web development company India",
    "mobile app development company India",
    "custom web application development",
    "CRM development company India",
    "SaaS development company India",
    "business automation software",
    "AI automation services India",
    "software development company Mumbai",
    "Nexyn Studios",
  ],
  alternates: {
    canonical: "https://nexynstudios.com",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nexynstudios.com",
    siteName: "Nexyn Studios",
    title: "Software Development Company in India | Nexyn Studios",
    description:
      "Nexyn Studios is a custom software development company in India building high-performance web applications, mobile apps, CRM systems, and business automation solutions.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nexyn Studios — Software Development Company in India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Software Development Company in India | Nexyn Studios",
    description:
      "Nexyn Studios is a custom software development company in India building high-performance web applications, mobile apps, CRM systems, and business automation solutions.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function Page() {
  return (
    <>
      {/* JSON-LD — Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <FeaturedProjectSection />
        {/* <ChallengesSection /> */}
        {/* <SolutionsSection /> */}
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
