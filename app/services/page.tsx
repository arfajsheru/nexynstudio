import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { SITE_CONFIG } from "@/lib/constants";
import {
  Navbar,
  ServicesSection,
  SolutionsSection,
  ProcessSection,
  TechStackSection,
  IndustriesSection,
  WhyChooseUsSection,
  FAQSection,
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
        {/* Page Hero with breadcrumb (schema suppressed here to keep unified @graph) */}
        <PageHero
          breadcrumbs={[{ label: "Services" }]}
          renderBreadcrumbSchema={false}
          badge="Service Capabilities & Architecture"
          headline="Software Development"
          headlineAccent="Services"
          description="Comprehensive software development services for growing businesses and modern enterprises in India and worldwide. We build custom software, scalable web applications, mobile platforms, and automated business systems tailored to your operational workflows."
          primaryCta={{ label: "Discuss Your Project", href: "/contact" }}
          secondaryCta={{ label: "View Case Studies", href: "/portfolio" }}
        />

        {/* 1. Core Services Catalog (6 service cards linking to /services/*) */}
        <ServicesSection showAllLink={false} />

        {/* 2. Tailored Business Solutions (CRM, ERP, Lead Mgmt, Inventory, Manufacturing, Dashboards linking to /solutions/*) */}
        <SolutionsSection />

        {/* 3. Engineering Delivery Methodology (7-stage agile lifecycle) */}
        <ProcessSection />

        {/* 4. Technology Stack & Frameworks (linking to /technologies/*) */}
        <TechStackSection />

        {/* 5. Industries We Engineer For (linking to /industries/*) */}
        <IndustriesSection />

        {/* 6. Why Companies Choose Nexyn Studios (IP ownership, high performance, direct engineering) */}
        <WhyChooseUsSection />

        {/* 7. Comprehensive Services FAQs (matched 1:1 with FAQPage schema) */}
        <FAQSection />

        {/* 8. Conversion CTA */}
        <CTASection />
      </main>

      <FooterSection />
    </>
  );
}

// ─── Metadata ────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: {
    absolute: "Software Development Services in India | Nexyn Studios",
  },
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
    "enterprise software development services",
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
      "@type": "CollectionPage",
      "@id": `${SITE_CONFIG.url}/services/#webpage`,
      url: `${SITE_CONFIG.url}/services`,
      name: "Software Development Services in India | Nexyn Studios",
      description:
        "Comprehensive custom software development, web applications, mobile apps, UI/UX design, Cloud & DevOps, and AI automation services in India.",
      isPartOf: {
        "@id": `${SITE_CONFIG.url}/#website`,
      },
      about: {
        "@id": `${SITE_CONFIG.url}/#organization`,
      },
      breadcrumb: {
        "@id": `${SITE_CONFIG.url}/services/#breadcrumb`,
      },
    },
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
            "@id": `${SITE_CONFIG.url}/services/custom-development/#service`,
            name: "Custom Software Development",
            url: `${SITE_CONFIG.url}/services/custom-development`,
            description:
              "Bespoke CRM, ERP, admin portals, and internal tools engineered precisely around business workflows.",
            provider: {
              "@type": "Organization",
              "@id": `${SITE_CONFIG.url}/#organization`,
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
            "@id": `${SITE_CONFIG.url}/services/ui-ux-design/#service`,
            name: "UI/UX Design",
            url: `${SITE_CONFIG.url}/services/ui-ux-design`,
            description:
              "Conversion-optimized user interfaces, wireframes, and design systems for web and mobile platforms.",
            provider: {
              "@type": "Organization",
              "@id": `${SITE_CONFIG.url}/#organization`,
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
            "@id": `${SITE_CONFIG.url}/services/web-development/#service`,
            name: "Web Development",
            url: `${SITE_CONFIG.url}/services/web-development`,
            description:
              "Fast, SEO-optimized web applications and corporate platforms powered by modern frontend frameworks.",
            provider: {
              "@type": "Organization",
              "@id": `${SITE_CONFIG.url}/#organization`,
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
            "@id": `${SITE_CONFIG.url}/services/mobile-app-development/#service`,
            name: "Mobile App Development",
            url: `${SITE_CONFIG.url}/services/mobile-app-development`,
            description:
              "Cross-platform iOS and Android mobile applications engineered with native performance and offline capability.",
            provider: {
              "@type": "Organization",
              "@id": `${SITE_CONFIG.url}/#organization`,
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
            "@id": `${SITE_CONFIG.url}/services/cloud-devops/#service`,
            name: "Cloud & DevOps",
            url: `${SITE_CONFIG.url}/services/cloud-devops`,
            description:
              "Enterprise-grade AWS and GCP cloud infrastructure, CI/CD pipelines, containerization, and continuous monitoring.",
            provider: {
              "@type": "Organization",
              "@id": `${SITE_CONFIG.url}/#organization`,
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
            "@id": `${SITE_CONFIG.url}/services/ai-automation/#service`,
            name: "AI & Automation",
            url: `${SITE_CONFIG.url}/services/ai-automation`,
            description:
              "AI-powered business workflows, intelligent automation systems, and custom AI integrations.",
            provider: {
              "@type": "Organization",
              "@id": `${SITE_CONFIG.url}/#organization`,
              name: SITE_CONFIG.name,
              url: SITE_CONFIG.url,
            },
            areaServed: ["India", "Worldwide"],
            serviceType: "AI & Automation",
          },
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_CONFIG.url}/services/#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "How much does software development cost?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The cost depends on the scope, complexity, and specific requirements of your project. After an initial consultation to understand your needs, we provide a detailed proposal with transparent pricing and timelines.",
          },
        },
        {
          "@type": "Question",
          name: "How long does a project usually take?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A standard web or mobile application typically takes 2 to 4 months to launch. More complex enterprise systems can take 4 to 8 months. We follow agile methodologies to deliver functional components early and often.",
          },
        },
        {
          "@type": "Question",
          name: "Do you provide post-launch support?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, we offer comprehensive maintenance and support plans to ensure your application remains secure, up-to-date, and performs optimally as your user base grows.",
          },
        },
        {
          "@type": "Question",
          name: "Can you redesign an existing application?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. We can audit your current application, redesign the user interface for better conversion and UX, and refactor the underlying code to improve performance and scalability.",
          },
        },
        {
          "@type": "Question",
          name: "Do you sign NDA agreements?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, we take confidentiality seriously. We are happy to sign a Non-Disclosure Agreement before any initial discussions to protect your intellectual property.",
          },
        },
        {
          "@type": "Question",
          name: "Do you build custom CRM systems?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, custom CRMs are one of our specialties. We build scalable systems tailored exactly to your unique business processes, eliminating the bloat and limitations of off-the-shelf software.",
          },
        },
        {
          "@type": "Question",
          name: "Can you integrate third-party services and APIs?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, we routinely integrate with payment gateways (Stripe, Razorpay), marketing tools, ERPs, existing databases, and custom APIs to ensure seamless data flow across your business operations.",
          },
        },
        {
          "@type": "Question",
          name: "What industries do you work with?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We work across various industries including E-commerce, Healthcare, Real Estate, Finance, and Education. Our focus is on solving business problems through technology, regardless of the vertical.",
          },
        },
      ],
    },
  ],
};
