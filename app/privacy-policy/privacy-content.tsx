"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Shield, ArrowUp } from "lucide-react";
import { LAYOUT } from "@/lib/constants";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { useInView } from "@/hooks/use-interactions";
import { cn } from "@/lib/utils";

// ── Privacy Sections ──────────────────────────────────────────────────────────

const SECTIONS = [
  {
    id: "introduction",
    title: "Introduction",
    content: `Welcome to Nexyn Studios ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website nexynstudios.com, use our services, or engage with us in any way.

By accessing our website or using our services, you agree to the terms of this Privacy Policy. If you do not agree with the terms of this policy, please do not access our website or use our services.`,
  },
  {
    id: "data-collection",
    title: "Information We Collect",
    content: `We collect information that you voluntarily provide to us when you:

• **Contact us** through our website forms, email, or phone — including your name, email address, phone number, company name, and project details.
• **Subscribe** to our newsletter or blog updates.
• **Request a consultation** or proposal for our services.
• **Engage with us** on social media platforms.

We also automatically collect certain information when you visit our website:

• **Log Data**: IP address, browser type, operating system, referring URLs, pages viewed, and timestamps.
• **Device Information**: Device type, screen resolution, and language preferences.
• **Cookies & Analytics**: We use cookies and similar tracking technologies to collect information about your browsing activity. See the Cookies section below for more details.`,
  },
  {
    id: "data-usage",
    title: "How We Use Your Information",
    content: `We use the information we collect for the following purposes:

• **To provide our services**: Processing your inquiries, preparing project proposals, and delivering custom software solutions.
• **To communicate with you**: Responding to your questions, sending project updates, and sharing relevant information about our services.
• **To improve our website**: Analyzing usage patterns to enhance user experience, content, and functionality.
• **To send marketing communications**: With your consent, we may send you newsletters, blog updates, and information about our services. You can opt out at any time.
• **To comply with legal obligations**: Meeting our legal, regulatory, and compliance requirements.
• **To protect our business**: Preventing fraud, enforcing our terms, and protecting the rights of our users.`,
  },
  {
    id: "cookies",
    title: "Cookies & Tracking Technologies",
    content: `We use cookies and similar technologies to enhance your browsing experience:

• **Essential Cookies**: Required for the website to function properly (e.g., session management, security).
• **Analytics Cookies**: Help us understand how visitors interact with our website (e.g., Google Analytics). These cookies collect anonymous data about page views, traffic sources, and user behavior.
• **Preference Cookies**: Remember your settings and preferences (e.g., dark mode, language).

**Managing Cookies**: You can control cookies through your browser settings. Most browsers allow you to block or delete cookies. However, blocking essential cookies may affect the functionality of our website.

We do not use advertising or retargeting cookies.`,
  },
  {
    id: "third-party",
    title: "Third-Party Services",
    content: `We may share your information with trusted third-party service providers who assist us in operating our business:

• **Hosting**: Vercel (website hosting and deployment)
• **Analytics**: Google Analytics (anonymous usage data)
• **Communication**: Google Workspace (email), WhatsApp Business (messaging)
• **Payment Processing**: Razorpay (for processing payments — we do not store your payment card details)

These third parties are contractually obligated to protect your information and may only use it for the specific purposes we have engaged them for. We do not sell, trade, or rent your personal information to third parties.`,
  },
  {
    id: "data-security",
    title: "Data Security",
    content: `We implement appropriate technical and organizational measures to protect your personal information:

• **Encryption**: All data transmitted between your browser and our servers is encrypted using TLS/SSL.
• **Access Controls**: Access to personal data is restricted to authorized personnel only.
• **Secure Infrastructure**: Our applications are hosted on enterprise-grade cloud infrastructure with regular security updates.
• **Regular Audits**: We conduct periodic security reviews and vulnerability assessments.

While we strive to protect your personal information, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security but are committed to continuously improving our security practices.`,
  },
  {
    id: "your-rights",
    title: "Your Rights",
    content: `Depending on your location, you may have the following rights regarding your personal data:

• **Access**: Request a copy of the personal data we hold about you.
• **Correction**: Request correction of any inaccurate or incomplete data.
• **Deletion**: Request deletion of your personal data, subject to certain exceptions.
• **Opt-Out**: Unsubscribe from marketing communications at any time using the link in our emails.
• **Data Portability**: Request your data in a structured, commonly used format.
• **Objection**: Object to the processing of your personal data for certain purposes.

To exercise any of these rights, please contact us at hello@nexynstudios.com. We will respond to your request within 30 business days.`,
  },
  {
    id: "data-retention",
    title: "Data Retention",
    content: `We retain your personal information only for as long as necessary to fulfill the purposes for which it was collected:

• **Contact form submissions**: Retained for up to 2 years after the last interaction.
• **Project-related data**: Retained for the duration of the project and 3 years after completion for reference and support purposes.
• **Analytics data**: Aggregated and anonymized data may be retained indefinitely.
• **Newsletter subscriptions**: Until you unsubscribe.

When data is no longer needed, it is securely deleted or anonymized.`,
  },
  {
    id: "changes",
    title: "Changes to This Policy",
    content: `We may update this Privacy Policy from time to time to reflect changes in our practices, technologies, legal requirements, or other factors. When we make material changes, we will:

• Update the "Last Updated" date at the top of this page.
• Post a notice on our website if the changes are significant.

We encourage you to review this Privacy Policy periodically to stay informed about how we protect your information.`,
  },
  {
    id: "contact",
    title: "Contact Information",
    content: `If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:

• **Email**: hello@nexynstudios.com
• **WhatsApp**: +91 99136 90041
• **Address**: Malad, Mumbai, Maharashtra, India

**Nexyn Studios**
Malad, Mumbai, Maharashtra 400064
India`,
  },
];

// ── Privacy Content Component ─────────────────────────────────────────────────

export function PrivacyContent() {
  const { ref, isInView } = useInView(0.02);
  const [activeSection, setActiveSection] = useState("introduction");

  // Track scroll position for active nav highlight
  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = SECTIONS.map((s) =>
        document.getElementById(s.id),
      ).filter(Boolean);

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const el = sectionElements[i];
        if (el && el.getBoundingClientRect().top <= 150) {
          setActiveSection(SECTIONS[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      ref={ref}
      className={cn("mx-auto w-full pb-24", LAYOUT.maxWidth, LAYOUT.paddingX)}
    >
      {/* Header */}
      <motion.header
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="py-16 md:py-24 max-w-3xl"
      >
        <motion.div
          variants={fadeUp}
          className="mb-5 inline-flex items-center gap-2 rounded-full border border-border/40 bg-foreground/[0.02] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground"
        >
          <Shield className="h-3 w-3" />
          Legal
        </motion.div>
        <motion.h1
          variants={fadeUp}
          className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6"
        >
          Privacy <span className="text-muted-foreground">Policy</span>
        </motion.h1>
        <motion.p
          variants={fadeUp}
          className="text-lg text-muted-foreground leading-relaxed"
        >
          Last updated: June 1, 2025 — This policy describes how Nexyn Studios
          collects, uses, and protects your personal information.
        </motion.p>
      </motion.header>

      {/* Content Grid */}
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Sidebar Navigation (Desktop) */}
        <motion.nav
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="hidden lg:block lg:col-span-3"
        >
          <div className="sticky top-28">
            <div className="mb-4 text-[11px] font-bold uppercase tracking-[0.15em] text-muted-foreground/60">
              On this page
            </div>
            <ul className="flex flex-col gap-1">
              {SECTIONS.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .getElementById(section.id)
                        ?.scrollIntoView({ behavior: "smooth", block: "start" });
                    }}
                    className={cn(
                      "block rounded-md px-3 py-2 text-[13px] font-medium transition-all duration-200",
                      activeSection === section.id
                        ? "bg-foreground/[0.05] text-foreground"
                        : "text-muted-foreground hover:text-foreground hover:bg-foreground/[0.02]",
                    )}
                  >
                    {section.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </motion.nav>

        {/* Main Content */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="lg:col-span-9"
        >
          {SECTIONS.map((section) => (
            <motion.section
              key={section.id}
              id={section.id}
              variants={fadeUp}
              className="mb-12 scroll-mt-28 last:mb-0"
            >
              <h2 className="mb-4 text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                {section.title}
              </h2>
              <div className="prose-sm max-w-none">
                {section.content.split("\n\n").map((paragraph, pIndex) => (
                  <p
                    key={pIndex}
                    className="mb-4 text-[14px] leading-[1.8] text-muted-foreground last:mb-0"
                    dangerouslySetInnerHTML={{
                      __html: paragraph
                        .replace(
                          /\*\*(.*?)\*\*/g,
                          '<strong class="font-semibold text-foreground">$1</strong>',
                        )
                        .replace(/\n•/g, "<br />•"),
                    }}
                  />
                ))}
              </div>
              <div className="mt-8 border-b border-border/30" />
            </motion.section>
          ))}
        </motion.div>
      </div>

      {/* Back to Top */}
      <div className="mt-12 flex justify-center">
        <button
          onClick={scrollToTop}
          className="group inline-flex items-center gap-2 rounded-full border border-border/50 bg-background px-5 py-2.5 text-[12px] font-semibold text-muted-foreground transition-all duration-200 hover:border-foreground/30 hover:text-foreground"
        >
          <ArrowUp className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5" />
          Back to Top
        </button>
      </div>
    </div>
  );
}
