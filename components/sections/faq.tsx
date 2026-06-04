"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { LAYOUT } from "@/lib/constants";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { useInView } from "@/hooks/use-interactions";
import { cn } from "@/lib/utils";

const FAQS = [
  {
    question: "How much does software development cost?",
    answer: "The cost depends on the scope, complexity, and specific requirements of your project. After an initial consultation to understand your needs, we provide a detailed proposal with transparent pricing and timelines.",
  },
  {
    question: "How long does a project usually take?",
    answer: "A standard web or mobile application typically takes 2 to 4 months to launch. More complex enterprise systems can take 4 to 8 months. We follow agile methodologies to deliver functional components early and often.",
  },
  {
    question: "Do you provide post-launch support?",
    answer: "Yes, we offer comprehensive maintenance and support plans to ensure your application remains secure, up-to-date, and performs optimally as your user base grows.",
  },
  {
    question: "Can you redesign an existing application?",
    answer: "Absolutely. We can audit your current application, redesign the user interface for better conversion and UX, and refactor the underlying code to improve performance and scalability.",
  },
  {
    question: "Do you sign NDA agreements?",
    answer: "Yes, we take confidentiality seriously. We are happy to sign a Non-Disclosure Agreement before any initial discussions to protect your intellectual property.",
  },
  {
    question: "Do you build custom CRM systems?",
    answer: "Yes, custom CRMs are one of our specialties. We build scalable systems tailored exactly to your unique business processes, eliminating the bloat and limitations of off-the-shelf software.",
  },
  {
    question: "Can you integrate third-party services and APIs?",
    answer: "Yes, we routinely integrate with payment gateways (Stripe, Razorpay), marketing tools, ERPs, existing databases, and custom APIs to ensure seamless data flow across your business operations.",
  },
  {
    question: "What industries do you work with?",
    answer: "We work across various industries including E-commerce, Healthcare, Real Estate, Finance, and Education. Our focus is on solving business problems through technology, regardless of the vertical.",
  },
];

export function FAQSection() {
  const { ref, isInView } = useInView(0.05);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" ref={ref} className="relative py-24 lg:py-32 border-t border-border/40">
      <div className={cn("relative z-10 mx-auto w-full", LAYOUT.maxWidth, LAYOUT.paddingX)}>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mx-auto max-w-3xl text-center mb-16"
        >
          <motion.div
            variants={fadeUp}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-border/60 bg-background px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-muted-foreground"
          >
            <span className="h-1 w-1 rounded-full bg-foreground/40" />
            Frequently Asked Questions
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="mb-4 text-3xl font-bold leading-[1.15] tracking-tight text-foreground sm:text-4xl"
          >
            Questions We Often Receive
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-[14px] leading-relaxed text-muted-foreground max-w-xl mx-auto"
          >
            Everything you need to know about our process, pricing, and how we build enterprise-grade software.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mx-auto max-w-3xl"
        >
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                variants={fadeUp}
                className={cn(
                  "border-b border-border/50 last:border-0",
                  isOpen ? "bg-muted/10 rounded-lg border-transparent px-4 my-2" : "py-4"
                )}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between text-left py-2"
                >
                  <span className="text-[15px] font-medium text-foreground pr-8">
                    {faq.question}
                  </span>
                  <div className={cn(
                    "flex shrink-0 items-center justify-center h-6 w-6 rounded-full transition-colors",
                    isOpen ? "bg-foreground text-background" : "bg-muted text-muted-foreground"
                  )}>
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
                      <p className="pb-6 pr-8 text-[14px] leading-relaxed text-muted-foreground">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
