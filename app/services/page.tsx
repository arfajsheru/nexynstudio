import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";
import {
  Navbar,
  ServicesSection,
  CTASection,
  FooterSection,
} from "@/components/sections";
import { PageHero } from "@/components/common/page-hero";
import { SEOImagePlaceholder } from "@/components/ui/seo-image-placeholder";

// ─── Metadata ────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Software Development Services in Mumbai | Custom CRM, Web & Mobile Apps",
  description:
    "Nexyn Studios offers custom software development, CRM & ERP systems, web applications, mobile apps, UI/UX design, Cloud & DevOps, and digital marketing services in Mumbai. Get a free consultation today.",
  keywords: [
    "custom software development Mumbai",
    "CRM development company Mumbai",
    "ERP software development",
    "web application development Mumbai",
    "mobile app development Mumbai",
    "React Next.js development agency",
    "UI UX design services",
    "cloud DevOps solutions",
    "digital marketing agency Mumbai",
    "business automation software",
    "SaaS MVP development",
    "enterprise software company",
    "software development services India",
    "Nexyn Studios services",
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/services`,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${SITE_CONFIG.url}/services`,
    siteName: SITE_CONFIG.name,
    title: "Software Development Services | Nexyn Studios Mumbai",
    description:
      "Custom software, CRM & ERP systems, web apps, mobile apps, Cloud & DevOps — engineered for Mumbai businesses by Nexyn Studios.",
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: "Nexyn Studios — Software Development Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Software Development Services | Nexyn Studios Mumbai",
    description:
      "Custom software, CRM & ERP, web apps, mobile apps, Cloud & DevOps by Nexyn Studios.",
    images: [SITE_CONFIG.ogImage],
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

// ─── Schema.org JSON-LD ───────────────────────────────────────────────────────

const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Software Development Services by Nexyn Studios",
  description:
    "Complete range of custom software development, web, mobile, and digital services offered by Nexyn Studios in Mumbai.",
  url: `${SITE_CONFIG.url}/services`,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Service",
        name: "Custom Software Development",
        description:
          "Bespoke CRM, ERP, portals, and automation tools engineered precisely for your business workflows.",
        provider: { "@type": "Organization", name: SITE_CONFIG.name },
        areaServed: "Mumbai, India",
        serviceType: "Software Development",
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Service",
        name: "UI/UX Design",
        description:
          "Research-driven, high-fidelity interfaces optimised for conversion and user engagement.",
        provider: { "@type": "Organization", name: SITE_CONFIG.name },
        areaServed: "Mumbai, India",
        serviceType: "UI/UX Design",
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "Service",
        name: "Web Development",
        description:
          "Modern, fast Next.js and React web applications built for growth and SEO.",
        provider: { "@type": "Organization", name: SITE_CONFIG.name },
        areaServed: "Mumbai, India",
        serviceType: "Web Development",
      },
    },
    {
      "@type": "ListItem",
      position: 4,
      item: {
        "@type": "Service",
        name: "Mobile App Development",
        description:
          "Cross-platform iOS & Android apps built with React Native for maximum reach.",
        provider: { "@type": "Organization", name: SITE_CONFIG.name },
        areaServed: "Mumbai, India",
        serviceType: "Mobile App Development",
      },
    },
    {
      "@type": "ListItem",
      position: 5,
      item: {
        "@type": "Service",
        name: "Cloud & DevOps",
        description:
          "Reliable AWS/GCP infrastructure, CI/CD pipelines, and 24/7 monitoring.",
        provider: { "@type": "Organization", name: SITE_CONFIG.name },
        areaServed: "Mumbai, India",
        serviceType: "Cloud Infrastructure",
      },
    },
    {
      "@type": "ListItem",
      position: 6,
      item: {
        "@type": "Service",
        name: "Digital Marketing",
        description:
          "Data-driven SEO, PPC, and lead generation campaigns for measurable ROI.",
        provider: { "@type": "Organization", name: SITE_CONFIG.name },
        areaServed: "Mumbai, India",
        serviceType: "Digital Marketing",
      },
    },
  ],
};

// ─── Services Page ────────────────────────────────────────────────────────────

export default function ServicesPage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />

      <Navbar />

      <main>
        {/* Page Hero with breadcrumb */}
        <PageHero
          breadcrumbs={[{ label: "Services" }]}
          badge="What We Build"
          headline="Software Solutions We"
          headlineAccent="Engineer"
          description="From custom CRM & ERP systems to web apps, mobile platforms, and cloud infrastructure — every solution is purpose-built for your specific business challenges and growth goals."
          primaryCta={{ label: "Get Free Consultation", href: "/contact" }}
          secondaryCta={{ label: "View Our Work", href: "/portfolio" }}
        />

        {/* All 6 service cards — click to open detail modal */}
        <ServicesSection />

        {/* Services Capability & Stack Overview Placeholder */}
        <div className="mx-auto w-full max-w-[1440px] px-4 py-12 md:px-6">
          <SEOImagePlaceholder
            width={1200}
            height={500}
            aspectRatio="21:9"
            category="Software Architecture & Cloud Stack"
            title="End-to-End Enterprise Software Engineering & Infrastructure"
            seoAlt="Nexyn Studios Custom Software Development Services Overview and Tech Stack Infrastructure Diagram"
            imageUrl="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80"
            className="w-full shadow-lg"
          />
        </div>

        {/* CTA strip */}
        <CTASection />
      </main>

      <FooterSection />
    </>
  );
}
