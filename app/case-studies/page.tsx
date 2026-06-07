import { Metadata } from "next";
import { Navbar, FooterSection, CTASection } from "@/components/sections";
import { CaseStudiesClient } from "./case-studies-client";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Real results from real projects. See how Nexyn Studios helped businesses in Mumbai and globally build scalable software, CRMs, and digital platforms.",
  openGraph: {
    title: `Case Studies | ${SITE_CONFIG.name}`,
    description:
      "Real results from real projects. See how Nexyn Studios helped businesses build scalable software solutions.",
    url: `${SITE_CONFIG.url}/case-studies`,
  },
  alternates: {
    canonical: `${SITE_CONFIG.url}/case-studies`,
  },
};

export default function CaseStudiesPage() {
  return (
    <>
      <Navbar />
      <main className="bg-background pt-24">
        <CaseStudiesClient />
      </main>
      <CTASection />
      <FooterSection />
    </>
  );
}
