import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { SITE_CONFIG } from "@/lib/constants";
import {
  Navbar,
  ServicesSection,
  CTASection,
  FooterSection,
} from "@/components/sections";
import { PageHero } from "@/components/common/page-hero";

const QUERY_PARAM_SLUG_MAP: Record<string, string> = {
  software: "custom-development",
  "custom-development": "custom-development",
  design: "ui-ux-design",
  "ui-ux-design": "ui-ux-design",
  web: "web-development",
  "web-development": "web-development",
  mobile: "mobile-app-development",
  "mobile-app-development": "mobile-app-development",
  cloud: "cloud-devops",
  "cloud-devops": "cloud-devops",
  marketing: "ai-automation",
  "ai-automation": "ai-automation",
  ai: "ai-automation",
};

interface ServicesPageProps {
  searchParams?: Promise<{ service?: string }>;
}

export default async function ServicesPage({ searchParams }: ServicesPageProps) {
  const resolvedParams = searchParams ? await searchParams : undefined;
  const serviceParam = resolvedParams?.service?.toLowerCase();

  if (serviceParam && QUERY_PARAM_SLUG_MAP[serviceParam]) {
    redirect(`/services/${QUERY_PARAM_SLUG_MAP[serviceParam]}`);
  }

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
          badge="Our Capabilities"
          headline="Software Development"
          headlineAccent="Services"
          description="Comprehensive software development services for growing businesses and modern enterprises in India and worldwide. We build custom software, scalable web applications, mobile platforms, and automated business systems tailored to your operational workflows."
          primaryCta={{ label: "Discuss Your Project", href: "/contact" }}
          secondaryCta={{ label: "View Case Studies", href: "/portfolio" }}
        />

        {/* All 6 service cards — click to navigate to dedicated service pages */}
        <ServicesSection />

        {/* CTA strip */}
        <CTASection />
      </main>

      <FooterSection />
    </>
  );
}

// ─── Metadata ────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Software Development Services in India | Nexyn Studios",
  description:
    "Nexyn Studios provides end-to-end software development services in India, including custom software, web applications, mobile apps, and business solutions.",
  keywords: [
    "software development services",
    "software development services in India",
    "software development services India",
    "custom software development services",
    "web development services",
    "mobile app development services",
    "UI UX design services",
    "cloud and DevOps services",
    "AI automation services",
    "CRM development services",
    "SaaS development services",
    "custom web application development",
    "business automation solutions",
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
    title: "Software Development Services in India | Nexyn Studios",
    description:
      "Nexyn Studios provides end-to-end software development services in India, including custom software, web applications, mobile apps, and business solutions.",
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: "Nexyn Studios — Software Development Services in India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Software Development Services in India | Nexyn Studios",
    description:
      "Nexyn Studios provides end-to-end software development services in India, including custom software, web applications, mobile apps, and business solutions.",
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
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "@id": `${SITE_CONFIG.url}/services/#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: SITE_CONFIG.url,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Services",
          item: `${SITE_CONFIG.url}/services`,
        },
      ],
    },
    {
      "@type": "ItemList",
      "@id": `${SITE_CONFIG.url}/services/#itemlist`,
      name: "Software Development Services by Nexyn Studios",
      description:
        "Comprehensive custom software development, web applications, mobile apps, UI/UX design, Cloud & DevOps, and AI automation services in India.",
      url: `${SITE_CONFIG.url}/services`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "Service",
            name: "Custom Software Development",
            url: `${SITE_CONFIG.url}/services/custom-development`,
            description:
              "Bespoke CRM, ERP, admin portals, and internal tools engineered precisely around business workflows.",
            provider: {
              "@type": "Organization",
              name: SITE_CONFIG.name,
              url: SITE_CONFIG.url,
            },
            areaServed: ["India", "Worldwide"],
            serviceType: "Custom Software Development",
          },
        },
        {
          "@type": "ListItem",
          position: 2,
          item: {
            "@type": "Service",
            name: "UI/UX Design",
            url: `${SITE_CONFIG.url}/services/ui-ux-design`,
            description:
              "Conversion-optimized user interfaces, wireframes, and design systems for web and mobile platforms.",
            provider: {
              "@type": "Organization",
              name: SITE_CONFIG.name,
              url: SITE_CONFIG.url,
            },
            areaServed: ["India", "Worldwide"],
            serviceType: "UI/UX Design",
          },
        },
        {
          "@type": "ListItem",
          position: 3,
          item: {
            "@type": "Service",
            name: "Web Development",
            url: `${SITE_CONFIG.url}/services/web-development`,
            description:
              "Fast, SEO-optimized web applications and corporate platforms powered by modern frontend frameworks.",
            provider: {
              "@type": "Organization",
              name: SITE_CONFIG.name,
              url: SITE_CONFIG.url,
            },
            areaServed: ["India", "Worldwide"],
            serviceType: "Web Development",
          },
        },
        {
          "@type": "ListItem",
          position: 4,
          item: {
            "@type": "Service",
            name: "Mobile App Development",
            url: `${SITE_CONFIG.url}/services/mobile-app-development`,
            description:
              "Cross-platform iOS and Android mobile applications engineered with native performance and offline capability.",
            provider: {
              "@type": "Organization",
              name: SITE_CONFIG.name,
              url: SITE_CONFIG.url,
            },
            areaServed: ["India", "Worldwide"],
            serviceType: "Mobile App Development",
          },
        },
        {
          "@type": "ListItem",
          position: 5,
          item: {
            "@type": "Service",
            name: "Cloud & DevOps",
            url: `${SITE_CONFIG.url}/services/cloud-devops`,
            description:
              "Enterprise-grade AWS and GCP cloud infrastructure, CI/CD pipelines, containerization, and continuous monitoring.",
            provider: {
              "@type": "Organization",
              name: SITE_CONFIG.name,
              url: SITE_CONFIG.url,
            },
            areaServed: ["India", "Worldwide"],
            serviceType: "Cloud & DevOps",
          },
        },
        {
          "@type": "ListItem",
          position: 6,
          item: {
            "@type": "Service",
            name: "AI & Automation",
            url: `${SITE_CONFIG.url}/services/ai-automation`,
            description:
              "AI-powered business workflows, intelligent automation systems, and custom AI integrations.",
            provider: {
              "@type": "Organization",
              name: SITE_CONFIG.name,
              url: SITE_CONFIG.url,
            },
            areaServed: ["India", "Worldwide"],
            serviceType: "AI & Automation",
          },
        },
      ],
    },
  ],
};


