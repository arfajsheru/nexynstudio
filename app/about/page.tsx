import type { Metadata } from "next";
import { SITE_CONFIG, STATS } from "@/lib/constants";
import {
  Navbar,
  CTASection,
  FooterSection,
} from "@/components/sections";
import { PageHero } from "@/components/common/page-hero";
import { SEOImagePlaceholder } from "@/components/ui/seo-image-placeholder";
import Link from "next/link";

// ─── Metadata ────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "About Nexyn Studios — Custom Software Development Company in Mumbai",
  description:
    "Learn about Nexyn Studios — a Mumbai-based custom software development company specialising in CRM, ERP, web & mobile apps. Our mission: build technology that actually works for your business.",
  keywords: [
    "about Nexyn Studios",
    "software development company Mumbai",
    "Nexyn Studios team",
    "custom software Mumbai",
    "IT company Malad Mumbai",
    "tech startup Mumbai",
    "business automation company",
    "software engineering company India",
    "CRM ERP company Mumbai",
    "Nexyn Studios founders",
    "enterprise software development",
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/about`,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${SITE_CONFIG.url}/about`,
    siteName: SITE_CONFIG.name,
    title: "About Nexyn Studios — Custom Software Company in Mumbai",
    description:
      "We are a Mumbai-based custom software development company building CRM, ERP, web apps and mobile solutions for businesses that are serious about growth.",
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: "Nexyn Studios — About Us",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Nexyn Studios — Custom Software Company in Mumbai",
    description:
      "Mumbai-based custom software development company building CRM, ERP, and web solutions for growing businesses.",
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

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_CONFIG.name,
  legalName: "Nexyn Studios",
  url: SITE_CONFIG.url,
  logo: `${SITE_CONFIG.url}/logo-black.png`,
  image: `${SITE_CONFIG.url}${SITE_CONFIG.ogImage}`,
  description:
    "Nexyn Studios is a Mumbai-based custom software development company specialising in CRM & ERP systems, web applications, mobile apps, Cloud & DevOps, and digital marketing.",
  foundingDate: "2024",
  address: {
    "@type": "PostalAddress",
    streetAddress: "102, A wing, Nehal CHS, Last Mahada, Malwani",
    addressLocality: "Malad West, Mumbai",
    addressRegion: "Maharashtra",
    postalCode: "400095",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-85910-13795",
    contactType: "customer service",
    email: "nexynstudios@gmail.com",
  },
  sameAs: [
    "https://linkedin.com/company/nexynstudios",
    "https://twitter.com/nexynstudios",
  ],
};

// ─── Stats Strip ─────────────────────────────────────────────────────────────

function StatsStrip() {
  return (
    <section className="border-t border-b border-border/30 bg-foreground/[0.01] py-12">
      <div className="mx-auto grid max-w-[1440px] grid-cols-2 gap-6 px-4 sm:grid-cols-4 md:px-6">
        {STATS.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col items-center gap-1.5 text-center"
          >
            <span className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              {stat.value}
              <span className="text-foreground/50">{stat.suffix}</span>
            </span>
            <span className="text-[12px] font-medium uppercase tracking-wider text-muted-foreground">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── Mission & Vision ─────────────────────────────────────────────────────────

function MissionVision() {
  return (
    <section className="relative overflow-hidden py-16 lg:py-20">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.018]"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
        aria-hidden="true"
      />
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-4 md:px-6">
        <div className="mb-12 text-center">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/80 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-foreground/40" />
            Our Story
          </div>
          <h2 className="mx-auto max-w-3xl text-3xl font-bold leading-[1.15] tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Built to Solve{" "}
            <span className="font-serif italic text-foreground/50">
              Real Problems
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[14px] leading-relaxed text-muted-foreground sm:text-[15px]">
            Nexyn Studios was founded with one conviction: most software fails because
            it is built for demos, not for the daily grind of running a real business.
            We exist to change that.
          </p>
        </div>

        {/* Mission + Vision cards */}
        <div className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-border/40 bg-foreground/[0.01] p-6 sm:p-8 transition-all duration-300 hover:border-foreground/20 hover:bg-foreground/[0.03]">
            <div className="mb-3 text-[10px] font-bold uppercase tracking-[0.15em] text-muted-foreground">
              Our Mission
            </div>
            <h3 className="mb-4 text-xl font-bold text-foreground sm:text-2xl">
              Software That Works For You
            </h3>
            <p className="text-[14px] leading-relaxed text-muted-foreground">
              To eliminate operational inefficiency for businesses by building precise,
              powerful, and beautifully crafted custom software — technology that is
              designed around how your team actually works.
            </p>
          </div>
          <div className="rounded-2xl border border-border/40 bg-foreground/[0.01] p-6 sm:p-8 transition-all duration-300 hover:border-foreground/20 hover:bg-foreground/[0.03]">
            <div className="mb-3 text-[10px] font-bold uppercase tracking-[0.15em] text-muted-foreground">
              Our Vision
            </div>
            <h3 className="mb-4 text-xl font-bold text-foreground sm:text-2xl">
              India&apos;s Most Trusted Tech Partner
            </h3>
            <p className="text-[14px] leading-relaxed text-muted-foreground">
              To become the most trusted technology partner for growth-stage businesses
              across India — one where every line of code we ship directly contributes
              to our clients&apos; revenue and competitive advantage.
            </p>
          </div>
        </div>

        {/* Team & Studio Media Showcase Placeholder */}
        <div className="mb-16 w-full">
          <SEOImagePlaceholder
            width={1200}
            height={550}
            aspectRatio="16:7"
            category="Company Culture & Engineering Team"
            title="Nexyn Studios Engineering Team & Software Architects"
            seoAlt="Nexyn Studios Leadership Team and Senior Software Engineers Collaboration in Mumbai Studio"
            imageUrl="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80"
            className="w-full shadow-lg"
          />
        </div>

        {/* Core Values */}
        <div className="mb-6 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Core{" "}
            <span className="font-serif italic text-foreground/50">Values</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              num: "01",
              title: "Precision Over Templates",
              desc: "We refuse generic solutions. Every product is architected from scratch around your specific business logic and operational DNA.",
            },
            {
              num: "02",
              title: "Radical Transparency",
              desc: "No black boxes. You'll always know what we're building, why, and exactly what you're getting — before we write a single line.",
            },
            {
              num: "03",
              title: "Outcomes Over Outputs",
              desc: "We measure success by your business results — revenue generated, time saved, costs reduced — not by tickets closed.",
            },
            {
              num: "04",
              title: "Long-Term Partnership",
              desc: "Our best relationships span years, not projects. We build software that scales with you and stay engaged as your business evolves.",
            },
          ].map((value) => (
            <div
              key={value.num}
              className="group relative overflow-hidden rounded-2xl border border-border/40 bg-foreground/[0.01] p-6 transition-all duration-300 hover:border-foreground/20 hover:bg-foreground/[0.03]"
            >
              <span className="absolute right-5 top-4 select-none text-5xl font-bold text-foreground/[0.05] transition-colors duration-500 group-hover:text-foreground/10">
                {value.num}
              </span>
              <h3 className="relative mb-3 text-base font-bold text-foreground">
                {value.title}
              </h3>
              <p className="text-[13px] leading-relaxed text-muted-foreground">
                {value.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Office & Studio Environment Showcase Placeholder */}
        <div className="mt-16 w-full">
          <SEOImagePlaceholder
            width={1200}
            height={400}
            aspectRatio="3:1"
            category="Mumbai Headquarters Studio"
            title="Nexyn Studios Malad West Engineering Workspace"
            seoAlt="Nexyn Studios Custom Software Engineering Workstation and Modern Tech Office Setup in Mumbai"
            imageUrl="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80"
            className="w-full shadow-md"
          />
        </div>

        {/* Internal links */}
        <div className="mt-14 flex flex-col items-center gap-3 border-t border-border/30 pt-10 text-center sm:flex-row sm:justify-center">
          <span className="text-[13px] text-muted-foreground">
            Want to know more?
          </span>
          <Link
            href="/services"
            className="text-[13px] font-semibold text-foreground underline-offset-4 hover:underline"
          >
            Our Services →
          </Link>
          <Link
            href="/portfolio"
            className="text-[13px] font-semibold text-foreground underline-offset-4 hover:underline"
          >
            View Portfolio →
          </Link>
          <Link
            href="/contact"
            className="text-[13px] font-semibold text-foreground underline-offset-4 hover:underline"
          >
            Get In Touch →
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── About Page ───────────────────────────────────────────────────────────────

export default function AboutPage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      <Navbar />

      <main>
        {/* Page Hero */}
        <PageHero
          breadcrumbs={[{ label: "About" }]}
          badge="Who We Are"
          headline="A Technology Partner Built for"
          headlineAccent="Real Business"
          description="We are Nexyn Studios — a team of engineers and strategists in Mumbai building custom software that solves the exact operational challenges holding your business back."
          primaryCta={{ label: "Start a Conversation", href: "/contact" }}
          secondaryCta={{ label: "View Our Work", href: "/portfolio" }}
        />

        {/* Stats strip */}
        <StatsStrip />

        {/* Company story, mission, vision, values */}
        <MissionVision />

        {/* CTA */}
        <CTASection />
      </main>

      <FooterSection />
    </>
  );
}
