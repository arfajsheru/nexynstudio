import { Metadata } from "next";
import { Navbar, FooterSection, CTASection } from "@/components/sections";
import { PortfolioClient } from "./portfolio-client";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Explore our recent work across web applications, mobile apps, and custom enterprise software.",
  openGraph: {
    title: `Portfolio | ${SITE_CONFIG.name}`,
    description: "Explore our recent work across web applications, mobile apps, and custom enterprise software.",
    url: `${SITE_CONFIG.url}/portfolio`,
  },
  alternates: {
    canonical: "/portfolio",
  },
};

export default function PortfolioPage() {
  return (
    <>
      <Navbar />
      <main className="bg-background pt-24">
        <PortfolioClient />
      </main>
      <CTASection />
      <FooterSection />
    </>
  );
}
