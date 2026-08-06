import { Metadata } from "next";
import { Navbar, FooterSection, CTASection } from "@/components/sections";
import { FAQClient } from "./faq-client";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about Nexyn Studios — pricing, process, technology stack, post-launch support, and everything you need to know before starting a project.",
  openGraph: {
    title: `FAQ | ${SITE_CONFIG.name}`,
    description:
      "Frequently asked questions about our software development process, pricing, and support.",
    url: `${SITE_CONFIG.url}/faq`,
  },
  alternates: {
    canonical: `${SITE_CONFIG.url}/faq`,
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What does Nexyn Studios specialize in?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We specialize in custom software development, including bespoke CRM/ERP systems, web applications, mobile apps (iOS & Android), UI/UX design, and cloud architecture. We primarily serve B2B clients in Mumbai and globally who need enterprise-grade solutions."
      }
    },
    {
      "@type": "Question",
      "name": "Where is Nexyn Studios located?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our office is based in Malad, Mumbai, Maharashtra, India. However, we work with clients across India and internationally, offering both on-site and remote collaboration models."
      }
    },
    {
      "@type": "Question",
      "name": "How much does a custom software project cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Project costs vary based on scope, complexity, and requirements. A basic web application starts around ₹1-2L, while enterprise CRM/ERP systems can range from ₹5-15L+. After a free consultation, we provide a detailed proposal with transparent pricing."
      }
    },
    {
      "@type": "Question",
      "name": "What is your development process?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We follow an Agile methodology with 2-week sprints. The process: Discovery & Planning → UI/UX Design → Development → Testing & QA → Deployment → Post-Launch Support. You receive regular updates and demo sessions throughout."
      }
    },
    {
      "@type": "Question",
      "name": "What technology stack do you use?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our primary stack includes React/Next.js for frontends, Node.js/NestJS for backends, PostgreSQL/MongoDB for databases, and AWS/Vercel for cloud infrastructure. We also work with React Native, Python, Java, and PHP depending on project requirements."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide post-launch support?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we offer comprehensive maintenance and support plans. Our standard plan includes bug fixes, security patches, server monitoring, and minor enhancements. Premium plans include priority support with guaranteed response times."
      }
    }
  ]
};

export default function FAQPage() {
  return (
    <>
      {/* JSON-LD FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />
      <main className="bg-background pt-24">
        <FAQClient />
      </main>
      <CTASection />
      <FooterSection />
    </>
  );
}
