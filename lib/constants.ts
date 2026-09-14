// ─── Site Configuration ─────────────────────────────────────────────────────

export const SITE_CONFIG = {
  name: "Nexyn Studios",
  tagline: "Custom Software & Web Development Company in India",
  description:
    "Nexyn Studios is a custom software development company in India building web applications, mobile apps, CRM systems, and AI automation solutions.",
  url: "https://nexynstudios.com",
  ogImage: "/og-image.jpg",
} as const;

// ─── Navigation ─────────────────────────────────────────────────────────────

export const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Resources", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const NAV_CTA = {
  label: "Chat with us",
  href: "https://wa.me/918591013795",
} as const;

// ─── Hero ───────────────────────────────────────────────────────────────────

export const HERO_CONTENT = {
  badge: "Trusted Technology Partner",
  headlinePart1: "Custom Software & Business",
  headlinePart2: "Automation Company in India",
  description:
    "We engineer custom software, scalable web applications, mobile apps, and CRM systems tailored to your business operations. Direct engineer access, clean code, and fast delivery from Mumbai, India.",
  primaryCta: { label: "Get Free Consultation", href: "/contact" },
  secondaryCta: { label: "View Our Work", href: "/portfolio" },
} as const;

// ─── Trust Row ──────────────────────────────────────────────────────────────

export const TRUST_ROW = [
  "Direct Developer Access",
  "Fast 2-4 Week Sprints",
  "Clean Maintainable Code",
  "Ongoing Tech Support",
] as const;

// ─── Stats ──────────────────────────────────────────────────────────────────

export const STATS = [
  { value: 5, suffix: "+", label: "Projects Delivered" },
  { value: 5, suffix: "+", label: "Happy Clients" },
  { value: 5, suffix: "+", label: "Business Solutions" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
] as const;

// ─── Animation Timing ───────────────────────────────────────────────────────

export const ANIMATION = {
  stagger: 0.1,
  duration: {
    fast: 0.3,
    normal: 0.6,
    slow: 0.9,
  },
  ease: [0.25, 0.1, 0.25, 1] as readonly [number, number, number, number],
} as const;

// ─── Layout ─────────────────────────────────────────────────────────────────

export const LAYOUT = {
  maxWidth: "max-w-[1440px]", // Increased max width for broader layout
  paddingX: "px-4 md:px-6", // Reduced horizontal padding
} as const;
