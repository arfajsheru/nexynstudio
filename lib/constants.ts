// ─── Site Configuration ─────────────────────────────────────────────────────

export const SITE_CONFIG = {
  name: "Nexyn Studios",
  tagline: "Trusted Technology Partner",
  description:
    "We architect and build custom software, web applications, and mobile apps that drive business automation and long-term growth.",
  url: "https://nexynstudios.com",
  ogImage: "/og-image.png",
} as const;

// ─── Navigation ─────────────────────────────────────────────────────────────

export const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
] as const;

export const NAV_CTA = {
  label: "Book a Call",
  href: "#contact",
} as const;

// ─── Hero ───────────────────────────────────────────────────────────────────

export const HERO_CONTENT = {
  badge: "Trusted Technology Partner",
  headlinePart1: "Engineering Digital Products",
  headlinePart2: "Built To Scale",
  description:
    "We architect and build custom software, web applications, and mobile apps. Delivering enterprise-grade business automation designed for long-term growth and reliability.",
  primaryCta: { label: "Get Free Consultation", href: "/#contact" },
  secondaryCta: { label: "View Our Work", href: "/portfolio" },
} as const;

// ─── Trust Row ──────────────────────────────────────────────────────────────

export const TRUST_ROW = [
  "Enterprise Grade Architecture",
  "Fast Delivery",
  "Ongoing Support",
  "Scalable Solutions",
] as const;

// ─── Stats ──────────────────────────────────────────────────────────────────

export const STATS = [
  { value: 50, suffix: "+", label: "Projects Delivered" },
  { value: 25, suffix: "+", label: "Happy Clients" },
  { value: 10, suffix: "+", label: "Business Solutions" },
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
