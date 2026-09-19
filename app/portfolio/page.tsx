import { Metadata } from "next";
import { Navbar, FooterSection, CTASection } from "@/components/sections";
import { PortfolioClient } from "./portfolio-client";
import { SITE_CONFIG } from "@/lib/constants";
import { PageHero } from "@/components/common/page-hero";

// ─── Metadata ────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: {
    absolute: "Software Development Portfolio — Delivered Projects | Nexyn Studios",
  },
  description:
    "Explore Nexyn Studios' software development portfolio. View delivered custom software, web platforms, and mobile apps built with Next.js, React Native, and PostgreSQL.",
  keywords: [
    "software development portfolio",
    "software development company portfolio",
    "custom software development portfolio",
    "software development projects",
    "web development portfolio",
    "mobile app development portfolio",
    "custom CRM software projects",
    "SaaS product development showcase",
    "software development case studies",
    "Next.js projects India",
    "React Native mobile apps",
    "Nexyn Studios portfolio",
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/portfolio`,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${SITE_CONFIG.url}/portfolio`,
    siteName: SITE_CONFIG.name,
    title: "Software Development Portfolio — Delivered Projects | Nexyn Studios",
    description:
      "Explore Nexyn Studios' software development portfolio. View delivered custom software, web platforms, and mobile apps built with Next.js, React Native, and PostgreSQL.",
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: "Nexyn Studios — Software Development Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Software Development Portfolio — Delivered Projects | Nexyn Studios",
    description:
      "Explore Nexyn Studios' software development portfolio. View delivered custom software, web platforms, and mobile apps built with Next.js, React Native, and PostgreSQL.",
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

const portfolioSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": `${SITE_CONFIG.url}/portfolio/#webpage`,
      url: `${SITE_CONFIG.url}/portfolio`,
      name: "Software Development Portfolio — Delivered Projects | Nexyn Studios",
      description:
        "Explore Nexyn Studios' software development portfolio. View delivered custom software, web platforms, and mobile apps built with Next.js, React Native, and PostgreSQL.",
      isPartOf: {
        "@id": `${SITE_CONFIG.url}/#website`,
      },
      about: {
        "@id": `${SITE_CONFIG.url}/#organization`,
      },
      breadcrumb: {
        "@id": `${SITE_CONFIG.url}/portfolio/#breadcrumb`,
      },
      mainEntity: {
        "@id": `${SITE_CONFIG.url}/portfolio/#itemlist`,
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${SITE_CONFIG.url}/portfolio/#breadcrumb`,
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
          name: "Portfolio",
          item: `${SITE_CONFIG.url}/portfolio`,
        },
      ],
    },
    {
      "@type": "ItemList",
      "@id": `${SITE_CONFIG.url}/portfolio/#itemlist`,
      name: "Delivered Software Development Projects by Nexyn Studios",
      description:
        "Production software systems, web applications, and mobile apps engineered by Nexyn Studios.",
      numberOfItems: 3,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "SoftwareApplication",
            name: "United Welfare Foundation Scholarship Management Portal",
            description:
              "A full-stack scholarship management portal enabling students to apply for financial aid, with multi-tier approval workflows, treasury reviews, and real-time disbursement tracking.",
            url: `${SITE_CONFIG.url}/projects/united-welfare-foundation`,
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web browser",
            creator: {
              "@id": `${SITE_CONFIG.url}/#organization`,
            },
            sameAs: "https://portal.unitedwelfarefoundation.com/",
          },
        },
        {
          "@type": "ListItem",
          position: 2,
          item: {
            "@type": "SoftwareApplication",
            name: "Nexyn Chat Web",
            description:
              "A modern, real-time messaging web client featuring secure chat authentication, end-to-end typing indicators, media transfers, and clean desktop browser integrations.",
            url: `${SITE_CONFIG.url}/projects/nexyn-chat-web`,
            applicationCategory: "CommunicationApplication",
            operatingSystem: "Web browser",
            creator: {
              "@id": `${SITE_CONFIG.url}/#organization`,
            },
          },
        },
        {
          "@type": "ListItem",
          position: 3,
          item: {
            "@type": "SoftwareApplication",
            name: "Nexyn Chat Mobile",
            description:
              "A feature-rich React Native mobile app delivering real-time chat, push notifications, offline syncing, and contact directory integrations.",
            url: `${SITE_CONFIG.url}/projects/nexyn-chat-mobile`,
            applicationCategory: "CommunicationApplication",
            operatingSystem: "iOS, Android",
            creator: {
              "@id": `${SITE_CONFIG.url}/#organization`,
            },
          },
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_CONFIG.url}/portfolio/#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "What types of software projects does Nexyn Studios build?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Nexyn Studios engineers custom software applications, role-based enterprise portals, CRM platforms, real-time web applications, and cross-platform mobile apps for iOS and Android. Every project is custom-architected around the client's operational rules, security requirements, and data structures.",
          },
        },
        {
          "@type": "Question",
          name: "Are the projects in this portfolio live in production?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Our portfolio highlights real-world systems delivered to organizations and businesses, such as the United Welfare Foundation scholarship management portal (processing over 77 requests and ₹6.87L+ in disbursements) and Nexyn Chat real-time messaging clients supporting sub-100ms WebSocket delivery.",
          },
        },
        {
          "@type": "Question",
          name: "Do clients retain full ownership of the source code and intellectual property?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Upon completion and handover, our clients retain 100% ownership of all source code, database schemas, API architecture, and intellectual property. We build without per-seat licensing fees or proprietary vendor lock-in.",
          },
        },
        {
          "@type": "Question",
          name: "Can Nexyn Studios develop both web platforms and mobile applications?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Our engineering capabilities span full-stack web applications built with Next.js, TypeScript, and PostgreSQL, as well as cross-platform mobile applications built with React Native, SQLite offline caching, and Firebase push notifications.",
          },
        },
        {
          "@type": "Question",
          name: "How can prospective clients evaluate case studies and start a project?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can explore in-depth architectural breakdowns, challenges, and results on our individual project case study pages or contact our engineering team directly to schedule a technical discovery call.",
          },
        },
      ],
    },
  ],
};

export default function PortfolioPage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioSchema) }}
      />

      <Navbar />

      <main>
        {/* Page Hero with single H1 and breadcrumb */}
        <PageHero
          breadcrumbs={[{ label: "Portfolio" }]}
          renderBreadcrumbSchema={false}
          badge="Delivered Work & Production Systems"
          headline="Software Development"
          headlineAccent="Portfolio"
          description="Explore our portfolio of custom software, enterprise portals, web platforms, and mobile apps engineered for growing businesses and organizations across India and worldwide."
          primaryCta={{ label: "Start a Project", href: "/contact" }}
          secondaryCta={{ label: "View Case Studies", href: "/case-studies" }}
        />

        {/* All portfolio projects and structured sections */}
        <PortfolioClient />

        {/* Conversion CTA */}
        <CTASection />
      </main>

      <FooterSection />
    </>
  );
}
