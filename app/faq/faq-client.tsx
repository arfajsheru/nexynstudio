"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Plus,
  Minus,
  Search,
  MessageSquare,
  ArrowRight,
} from "lucide-react";
import { LAYOUT } from "@/lib/constants";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { useInView } from "@/hooks/use-interactions";
import { cn } from "@/lib/utils";

// ── FAQ Data ──────────────────────────────────────────────────────────────────

const FAQ_CATEGORIES = ["All", "General", "Pricing", "Process", "Technical", "Support"];

const FAQS = [
  // General
  { category: "General", question: "What does Nexyn Studios specialize in?", answer: "We specialize in custom software development, including bespoke CRM/ERP systems, web applications, mobile apps (iOS & Android), UI/UX design, and cloud architecture. We primarily serve B2B clients in Mumbai and globally who need enterprise-grade solutions." },
  { category: "General", question: "Where is Nexyn Studios located?", answer: "Our office is based in Malad, Mumbai, Maharashtra, India. However, we work with clients across India and internationally, offering both on-site and remote collaboration models." },
  { category: "General", question: "What industries do you work with?", answer: "We work across multiple industries including E-Commerce, Healthcare, Real Estate, FinTech, Education, Logistics, and more. Our focus is on solving complex business problems through technology, regardless of the vertical." },
  { category: "General", question: "Do you sign NDA agreements?", answer: "Yes, absolutely. We take confidentiality very seriously. We are happy to sign a Non-Disclosure Agreement before any initial discussions to protect your intellectual property and business ideas." },

  // Pricing
  { category: "Pricing", question: "How much does a custom software project cost?", answer: "Project costs vary based on scope, complexity, and requirements. A basic web application starts around ₹1-2L, while enterprise CRM/ERP systems can range from ₹5-15L+. After a free consultation, we provide a detailed proposal with transparent pricing." },
  { category: "Pricing", question: "Do you offer flexible payment plans?", answer: "Yes, we offer milestone-based payment plans. Typically, projects are split into 3-4 payment milestones tied to deliverables, so you only pay as value is delivered. We also offer EMI options for larger projects." },
  { category: "Pricing", question: "Is there a free consultation?", answer: "Yes! We offer a completely free initial consultation where we discuss your project requirements, provide technical recommendations, and give you a rough estimate. No strings attached." },
  { category: "Pricing", question: "Are there any hidden fees?", answer: "No, never. Our proposals include a complete cost breakdown covering design, development, testing, deployment, and post-launch support. Any changes in scope are discussed and approved by you before we proceed." },

  // Process
  { category: "Process", question: "What is your development process?", answer: "We follow an Agile methodology with 2-week sprints. The process: Discovery & Planning → UI/UX Design → Development → Testing & QA → Deployment → Post-Launch Support. You receive regular updates and demo sessions throughout." },
  { category: "Process", question: "How long does a typical project take?", answer: "A standard web or mobile application takes 2-4 months. More complex enterprise systems (CRM, ERP, multi-tenant platforms) can take 4-8 months. We provide realistic timelines during the proposal phase." },
  { category: "Process", question: "Will I be involved during development?", answer: "Absolutely. You'll have a dedicated project manager and access to our project board. We hold weekly demo calls where you can see progress, provide feedback, and request changes in real time." },
  { category: "Process", question: "Can you redesign an existing application?", answer: "Yes, we frequently modernize legacy systems. We can audit your current application, redesign the UI for better conversion and UX, and refactor the backend for improved performance, scalability, and security." },

  // Technical
  { category: "Technical", question: "What technology stack do you use?", answer: "Our primary stack includes React/Next.js for frontends, Node.js/NestJS for backends, PostgreSQL/MongoDB for databases, and AWS/Vercel for cloud infrastructure. We also work with React Native, Python, Java, and PHP depending on project requirements." },
  { category: "Technical", question: "Can you integrate with third-party APIs?", answer: "Yes, we routinely integrate with payment gateways (Stripe, Razorpay), CRMs (Salesforce, HubSpot), marketing tools, ERPs, messaging APIs (WhatsApp, Twilio), and custom APIs. We ensure seamless data flow across your business." },
  { category: "Technical", question: "Do you build custom CRM systems?", answer: "Custom CRMs are one of our core specialties. We build systems tailored to your exact sales pipeline, lead management, customer communication, and reporting needs — without the bloat of off-the-shelf software." },
  { category: "Technical", question: "How do you handle data security?", answer: "Security is built into every layer. We use encryption (AES-256) for data at rest, TLS for data in transit, implement role-based access controls, conduct regular security audits, and follow OWASP best practices. We can also ensure compliance with GDPR, HIPAA, or industry-specific regulations." },

  // Support
  { category: "Support", question: "Do you provide post-launch support?", answer: "Yes, we offer comprehensive maintenance and support plans. Our standard plan includes bug fixes, security patches, server monitoring, and minor enhancements. Premium plans include priority support with guaranteed response times." },
  { category: "Support", question: "What are your support hours?", answer: "Our standard support hours are Monday to Saturday, 9 AM to 7 PM IST. For premium support clients, we offer extended hours and emergency response availability." },
  { category: "Support", question: "How do I report issues or request features?", answer: "You can reach us via email (hello@nexynstudios.com), WhatsApp, or through your dedicated project channel. For post-launch support, we provide a ticketing system where you can track the status of your requests." },
  { category: "Support", question: "Do you offer training for the software you build?", answer: "Yes, we provide comprehensive training sessions for your team after deployment. This includes documentation, video walkthroughs, and live training calls to ensure your team is confident using the new system." },
];

// ── FAQ Client Component ──────────────────────────────────────────────────────

export function FAQClient() {
  const { ref, isInView } = useInView(0.05);
  const [activeCategory, setActiveCategory] = useState("All");
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFAQs = useMemo(() => {
    return FAQS.filter((faq) => {
      const matchesCategory =
        activeCategory === "All" || faq.category === activeCategory;
      const matchesSearch =
        !searchQuery ||
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
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
          <span className="h-1 w-1 rounded-full bg-foreground/40" />
          Help Center
        </motion.div>
        <motion.h1
          variants={fadeUp}
          className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6"
        >
          Frequently Asked{" "}
          <span className="text-muted-foreground">Questions</span>
        </motion.h1>
        <motion.p
          variants={fadeUp}
          className="text-lg md:text-xl text-muted-foreground leading-relaxed"
        >
          Everything you need to know about our process, pricing, and how we
          build enterprise-grade software for businesses.
        </motion.p>
      </motion.header>

      {/* Search Bar */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="relative mb-8 max-w-2xl"
      >
        <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground/50" />
        <input
          type="text"
          placeholder="Search questions..."
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setOpenIndex(null);
          }}
          className="w-full rounded-xl border border-border/50 bg-background/50 py-3.5 pl-11 pr-4 text-[14px] text-foreground outline-none transition-all placeholder:text-muted-foreground/40 focus:border-foreground/30 focus:bg-background"
        />
      </motion.div>

      {/* Category Tabs */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="flex flex-wrap items-center gap-2 mb-12"
      >
        {FAQ_CATEGORIES.map((category) => (
          <button
            key={category}
            onClick={() => {
              setActiveCategory(category);
              setOpenIndex(null);
            }}
            className={cn(
              "px-5 py-2 text-sm font-medium rounded-full border transition-all duration-200",
              activeCategory === category
                ? "bg-foreground text-background border-foreground"
                : "bg-background text-muted-foreground border-border/40 hover:border-foreground/30 hover:text-foreground",
            )}
          >
            {category}
          </button>
        ))}
      </motion.div>

      {/* FAQ Accordion */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="mx-auto max-w-3xl"
      >
        {filteredFAQs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <motion.div
              key={`${faq.category}-${index}`}
              variants={fadeUp}
              className={cn(
                "border-b border-border/50 last:border-0",
                isOpen
                  ? "bg-muted/10 rounded-lg border-transparent px-4 my-2"
                  : "py-4",
              )}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex w-full items-center justify-between text-left py-2"
              >
                <div className="flex items-center gap-3 pr-8">
                  <span className="hidden sm:inline-flex rounded-md bg-foreground/[0.04] px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-muted-foreground/60">
                    {faq.category}
                  </span>
                  <span className="text-[15px] font-medium text-foreground">
                    {faq.question}
                  </span>
                </div>
                <div
                  className={cn(
                    "flex shrink-0 items-center justify-center h-6 w-6 rounded-full transition-colors",
                    isOpen
                      ? "bg-foreground text-background"
                      : "bg-muted text-muted-foreground",
                  )}
                >
                  {isOpen ? (
                    <Minus className="h-3 w-3" />
                  ) : (
                    <Plus className="h-3 w-3" />
                  )}
                </div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 pr-8 text-[14px] leading-relaxed text-muted-foreground sm:pl-[70px]">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </motion.div>

      {filteredFAQs.length === 0 && (
        <div className="py-16 text-center">
          <p className="text-lg text-muted-foreground">
            No questions found matching your search.
          </p>
        </div>
      )}

      {/* Still Have Questions CTA */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="mx-auto mt-16 max-w-2xl"
      >
        <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-foreground/[0.02] p-8 text-center sm:p-12">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />
          <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-foreground/[0.05]">
            <MessageSquare className="h-5 w-5 text-foreground/60" />
          </div>
          <h3 className="mb-2 text-xl font-bold tracking-tight text-foreground">
            Still have questions?
          </h3>
          <p className="mb-6 text-[14px] text-muted-foreground">
            Can&apos;t find what you&apos;re looking for? Our team is happy to
            help you with any questions.
          </p>
          <a
            href="/#contact"
            className="group inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-foreground px-7 text-sm font-semibold text-background transition-all duration-300 hover:opacity-90 active:scale-[0.98]"
          >
            Get In Touch
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </a>
        </div>
      </motion.div>
    </div>
  );
}
