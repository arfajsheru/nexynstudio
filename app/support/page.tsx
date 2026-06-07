import { Metadata } from "next";
import { Navbar, FooterSection, CTASection } from "@/components/sections";
import { SupportClient } from "./support-client";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Support",
  description:
    "Get help from the Nexyn Studios team. Reach us via email, WhatsApp, or schedule a call. We're here to support your project every step of the way.",
  openGraph: {
    title: `Support | ${SITE_CONFIG.name}`,
    description:
      "Get help from the Nexyn Studios team via email, WhatsApp, or schedule a call.",
    url: `${SITE_CONFIG.url}/support`,
  },
  alternates: {
    canonical: `${SITE_CONFIG.url}/support`,
  },
};

export default function SupportPage() {
  return (
    <>
      <Navbar />
      <main className="bg-background pt-24">
        <SupportClient />
      </main>
      <CTASection />
      <FooterSection />
    </>
  );
}
