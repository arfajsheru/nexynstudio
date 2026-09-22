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
  badge: "Bespoke Software Studio",
  status: "Available for new projects",
  headlinePrefix: "Custom Software Development Company",
  headlineAccent: "engineered to scale your business.",
  description:
    "We partner directly with founders and growth-stage companies to build high-performance web applications, CRMs, and internal systems.",
  descriptionSuffix: " 100% source code ownership, zero bloated SaaS subscriptions, and fast 2–4 week sprints.",
  primaryCta: { label: "Start a Project", href: "/contact" },
  secondaryCta: { label: "View Case Studies", href: "/portfolio" },
} as const;

// ─── Trust Row ──────────────────────────────────────────────────────────────

export const TRUST_ROW = [
  "Direct Senior Developer Access",
  "Fast 2–4 Week Sprints",
  "100% Code & IP Ownership",
  "Zero Per-Seat SaaS Tax",
] as const;

// ─── Stats ──────────────────────────────────────────────────────────────────

export const STATS = [
  { value: 10, suffix: "+", label: "Custom Systems Shipped" },
  { value: 99, suffix: ".9%", label: "Architecture Uptime" },
  { value: 100, suffix: "%", label: "Full Code Ownership" },
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
