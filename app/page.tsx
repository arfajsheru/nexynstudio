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

// ─── Schema.org — Comprehensive Homepage Schema Graph ─────────────────────────

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://nexynstudios.com/#organization",
      name: "Nexyn Studios",
      legalName: "Nexyn Studios",
      url: "https://nexynstudios.com",
      logo: {
        "@type": "ImageObject",
        url: "https://nexynstudios.com/logo-black.png",
      },
      image: "https://nexynstudios.com/og-image.jpg",
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
      sameAs: [
        "https://linkedin.com/company/nexynstudios",
        "https://twitter.com/nexynstudios",
      ],
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
    {
      "@type": "ProfessionalService",
      "@id": "https://nexynstudios.com/#service",
      name: "Nexyn Studios — Custom Software Development Company",
      url: "https://nexynstudios.com",
      image: "https://nexynstudios.com/og-image.jpg",
      telephone: "+91 85910 13795",
      email: "nexynstudios@gmail.com",
      priceRange: "₹₹₹",
      address: {
        "@type": "PostalAddress",
        streetAddress: "102, A wing, Nehal CHS, Last Mahada, Malwani, Malad West",
        addressLocality: "Mumbai",
        addressRegion: "Maharashtra",
        postalCode: "400095",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 19.1828,
        longitude: 72.8402,
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "19:00",
      },
      areaServed: [
        { "@type": "Country", "name": "India" },
        { "@type": "AdministrativeArea", "name": "Global" },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Software Development Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Custom Software Development",
              url: "https://nexynstudios.com/services/custom-development",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Custom CRM Development",
              url: "https://nexynstudios.com/solutions/custom-crm-development",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Web Application Development",
              url: "https://nexynstudios.com/services/web-development",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Mobile App Development",
              url: "https://nexynstudios.com/services/mobile-app-development",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "AI & Business Automation",
              url: "https://nexynstudios.com/services/ai-automation",
            },
          },
        ],
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://nexynstudios.com/#faq",
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

export const metadata: Metadata = {
  title: {
    absolute: "Custom Software Development Company in India | Nexyn Studios",
  },
  description:
    "Nexyn Studios is a custom software development company in India. We engineer scalable web applications, mobile apps, CRM systems, and business automations.",
  keywords: [
    "custom software development company",
    "custom software development company India",
    "custom software development services",
    "software development company in India",
    "software development company Mumbai",
    "custom CRM development",
    "custom web application development",
    "SaaS product development",
    "business automation solutions",
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
    title: "Custom Software Development Company in India | Nexyn Studios",
    description:
      "Nexyn Studios is a custom software development company in India. We engineer scalable web applications, mobile apps, CRM systems, and business automations.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nexyn Studios — Custom Software Development Company in India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Software Development Company in India | Nexyn Studios",
    description:
      "Nexyn Studios is a custom software development company in India. We engineer scalable web applications, mobile apps, CRM systems, and business automations.",
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
