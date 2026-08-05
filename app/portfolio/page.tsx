import { Metadata } from "next";
import { Navbar, FooterSection, CTASection } from "@/components/sections";
import { PortfolioClient } from "./portfolio-client";
import { SITE_CONFIG } from "@/lib/constants";
import { PROJECTS } from "@/lib/data/projects";
import { PageHero } from "@/components/common/page-hero";

// ─── Schema.org JSON-LD ───────────────────────────────────────────────────────

const portfolioSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Portfolio — Nexyn Studios Case Studies",
  description:
    "A showcase of custom software projects delivered by Nexyn Studios — including CRM portals, real-time chat apps, and enterprise web platforms.",
  url: `${SITE_CONFIG.url}/portfolio`,
  creator: {
    "@type": "Organization",
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
  },
  hasPart: PROJECTS.map((project) => ({
    "@type": "CreativeWork",
    name: project.name,
    description: project.shortDescription,
    url: `${SITE_CONFIG.url}/projects/${project.slug}`,
    dateCreated: project.completionYear,
    genre: project.category,
    about: project.industry,
  })),
};

export const metadata: Metadata = {
  title: "Portfolio — Case Studies & Recent Work",
  description:
    "Explore Nexyn Studios' portfolio of custom software projects — scholarship management portals, real-time chat apps, and enterprise web platforms built for real clients across Mumbai and India.",
  keywords: [
    "Nexyn Studios portfolio",
    "software development case studies",
    "custom software projects Mumbai",
    "web app portfolio India",
    "mobile app case study",
    "CRM development portfolio",
    "React Next.js projects",
    "enterprise software examples",
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/portfolio`,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${SITE_CONFIG.url}/portfolio`,
    siteName: SITE_CONFIG.name,
    title: "Portfolio — Case Studies & Recent Work | Nexyn Studios",
    description:
      "Explore our recent work — scholarship management portals, real-time chat platforms, and custom enterprise software built for clients across India.",
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: "Nexyn Studios Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio — Case Studies & Recent Work | Nexyn Studios",
    description:
      "Explore our recent work — custom software, web apps, and mobile platforms built by Nexyn Studios.",
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
        {/* Page Hero with breadcrumb */}
        <PageHero
          breadcrumbs={[{ label: "Portfolio" }]}
          badge="Our Work"
          headline="Projects We've"
          headlineAccent="Shipped"
          description="Real-world software solutions delivered for clients across India — from NGO scholarship portals to real-time chat platforms and enterprise dashboards."
          primaryCta={{ label: "Start a Project", href: "/contact" }}
          secondaryCta={{ label: "View Services", href: "/services" }}
        />

        {/* All portfolio projects */}
        <PortfolioClient />

        {/* CTA */}
        <CTASection />
      </main>

      <FooterSection />
    </>
  );
}
