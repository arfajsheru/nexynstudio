import { Metadata } from "next";
import { Navbar, FooterSection, CTASection } from "@/components/sections";
import { BlogClient } from "./blog-client";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights on custom software development, UI/UX design, business automation, and modern technology — by the Nexyn Studios engineering team.",
  openGraph: {
    title: `Blog | ${SITE_CONFIG.name}`,
    description:
      "Insights on custom software development, UI/UX design, business automation, and modern technology.",
    url: `${SITE_CONFIG.url}/blog`,
  },
  alternates: {
    canonical: `${SITE_CONFIG.url}/blog`,
  },
};

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="bg-background pt-24">
        <BlogClient />
      </main>
      <CTASection />
      <FooterSection />
    </>
  );
}
