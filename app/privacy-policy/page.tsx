import { Metadata } from "next";
import { Navbar, FooterSection } from "@/components/sections";
import { PrivacyContent } from "./privacy-content";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Nexyn Studios Privacy Policy — how we collect, use, and protect your personal data. Your privacy matters to us.",
  openGraph: {
    title: `Privacy Policy | ${SITE_CONFIG.name}`,
    description:
      "How Nexyn Studios collects, uses, and protects your personal data.",
    url: `${SITE_CONFIG.url}/privacy-policy`,
  },
  alternates: {
    canonical: `${SITE_CONFIG.url}/privacy-policy`,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main className="bg-background pt-24">
        <PrivacyContent />
      </main>
      <FooterSection />
    </>
  );
}
