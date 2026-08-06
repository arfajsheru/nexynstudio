import { Metadata } from "next";
import { Navbar, FooterSection, CTASection } from "@/components/sections";
import { BlogClient } from "./blog-client";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights on custom software development, UI/UX design, business automation, and modern technology — by the Nexyn Studios engineering team.",
  openGraph: {
    title: `Blog | ${SITE_CONFIG.name}`,
    description:
      "Insights on custom software development, UI/UX design, business automation, and modern technology.",
    url: `${SITE_CONFIG.url}/blog`,
  },
  alternates: {
    canonical: `${SITE_CONFIG.url}/blog`,
  },
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "name": "Nexyn Studios Blog",
  "description": "Insights on custom software development, UI/UX design, business automation, and modern technology — by the Nexyn Studios engineering team.",
  "url": `${SITE_CONFIG.url}/blog`,
  "publisher": {
    "@type": "Organization",
    "name": SITE_CONFIG.name,
    "logo": {
      "@type": "ImageObject",
      "url": `${SITE_CONFIG.url}/logo-black.png`
    }
  },
  "blogPost": [
    {
      "@type": "BlogPosting",
      "headline": "Why a Custom CRM Beats Off-the-Shelf Software Every Time",
      "description": "Off-the-shelf CRMs come with bloated features you'll never use and lack the ones you actually need. Here's why building custom is the smarter long-term investment.",
      "datePublished": "2025-05-28",
      "url": `${SITE_CONFIG.url}/blog`,
      "author": {
        "@type": "Organization",
        "name": SITE_CONFIG.name
      }
    },
    {
      "@type": "BlogPosting",
      "headline": "Next.js vs React SPA: Which Is Better for Enterprise Apps?",
      "description": "We break down the performance, SEO, and developer experience trade-offs between Next.js and traditional React SPAs for large-scale applications.",
      "datePublished": "2025-05-15",
      "url": `${SITE_CONFIG.url}/blog`,
      "author": {
        "@type": "Organization",
        "name": SITE_CONFIG.name
      }
    },
    {
      "@type": "BlogPosting",
      "headline": "How a Design System Can Cut Your Development Time by 40%",
      "description": "A well-structured design system isn't just for designers. Here's how it accelerates development, reduces bugs, and maintains consistency across products.",
      "datePublished": "2025-05-03",
      "url": `${SITE_CONFIG.url}/blog`,
      "author": {
        "@type": "Organization",
        "name": SITE_CONFIG.name
      }
    },
    {
      "@type": "BlogPosting",
      "headline": "Setting Up CI/CD Pipelines for Startups: A Practical Guide",
      "description": "You don't need a DevOps team to set up reliable CI/CD. We walk through our battle-tested pipeline setup using GitHub Actions and Vercel.",
      "datePublished": "2025-04-22",
      "url": `${SITE_CONFIG.url}/blog`,
      "author": {
        "@type": "Organization",
        "name": SITE_CONFIG.name
      }
    },
    {
      "@type": "BlogPosting",
      "headline": "5 Business Automation Mistakes That Cost Companies Lakhs",
      "description": "Automation is powerful, but only when done right. We've seen these costly mistakes repeatedly and here's how to avoid them.",
      "datePublished": "2025-04-10",
      "url": `${SITE_CONFIG.url}/blog`,
      "author": {
        "@type": "Organization",
        "name": SITE_CONFIG.name
      }
    },
    {
      "@type": "BlogPosting",
      "headline": "Mobile-First UX: 8 Principles We Follow on Every Project",
      "description": "With over 70% of traffic coming from mobile, designing desktop-first is a recipe for failure. Here are the principles our design team lives by.",
      "datePublished": "2025-03-28",
      "url": `${SITE_CONFIG.url}/blog`,
      "author": {
        "@type": "Organization",
        "name": SITE_CONFIG.name
      }
    },
    {
      "@type": "BlogPosting",
      "headline": "API-First Development: Why We Design API Specs Before Writing Code",
      "description": "Designing your API specifications before writing any backend logic accelerates development, improves frontend integration speed, and reduces refactoring cycles.",
      "datePublished": "2025-03-20",
      "url": `${SITE_CONFIG.url}/blog`,
      "author": {
        "@type": "Organization",
        "name": SITE_CONFIG.name
      }
    }
  ]
};

export default function BlogPage() {
  return (
    <>
      {/* JSON-LD Blog Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <Navbar />
      <main className="bg-background pt-24">
        <BlogClient />
      </main>
      <CTASection />
      <FooterSection />
    </>
  );
}
