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

export default function FAQPage() {
  return (
    <>
      <Navbar />
      <main className="bg-background pt-24">
        <FAQClient />
      </main>
      <CTASection />
      <FooterSection />
    </>
  );
}
