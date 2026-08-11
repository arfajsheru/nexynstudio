export interface FAQItem {
  question: string;
  answer: string;
}

export interface ProcessStep {
  title: string;
  desc: string;
}

export interface BenefitItem {
  title: string;
  desc: string;
}

export interface PageData {
  slug: string;
  title: string;
  metaDescription: string;
  keywords: string[];
  h1: string;
  badge: string;
  headlineAccent: string;
  description: string;
  overviewTitle: string;
  overviewContent: string;
  capabilities: string[];
  technologies: string[];
  processTitle: string;
  process: ProcessStep[];
  benefitsTitle: string;
  benefits: BenefitItem[];
  faqs: FAQItem[];
  internalLinks: { label: string; href: string }[];
}

// ─── SERVICES PAGES ─────────────────────────────────────────────────────────
export const SERVICE_PAGES: Record<string, PageData> = {
  "web-development": {
    slug: "web-development",
    title: "Web Development Services Mumbai | Custom Web Apps & Sites",
    metaDescription: "Nexyn Studios delivers high-performance web development services in Mumbai. We build responsive, SEO-optimised Next.js and React web apps engineered for scale.",
    keywords: ["web development services Mumbai", "Nextjs development company", "React development agency", "custom web applications", "mumbai web studio"],
    h1: "Web Development Services in Mumbai",
    badge: "Scale Your Web Presence",
    headlineAccent: "Built for Performance",
    description: "We architect and engineer lighting-fast, SEO-optimized web applications and corporate websites. Leveraging React and Next.js to deliver top-tier speed and scalability.",
    overviewTitle: "Modern Web Engineering for Enterprise Growth",
    overviewContent: "At Nexyn Studios, we build web solutions that do not just look stunning but are engineered to convert. We focus on modern frameworks, server-side rendering (SSR), and technical SEO from day one. By prioritizing Core Web Vitals, we ensure your web application ranks higher, loads instantly, and handles high volumes of concurrent users effortlessly.",
    capabilities: [
      "Next.js Server-Side Rendering (SSR) & Static Site Generation (SSG)",
      "Headless CMS integration (Sanity, Strapi, Contentful)",
      "Custom E-commerce storefronts and shopping cart workflows",
      "Interactive analytics dashboards and customer portals",
      "Technical SEO configuration and W3C standards compliance",
      "Performance tuning, caching strategies, and secure deployments"
    ],
    technologies: ["Next.js", "React.js", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS"],
    processTitle: "Our Web Development Cycle",
    process: [
      { title: "Architecture & Schema Design", desc: "Map database relations, API schemas, and layout wireframes for maximum efficiency." },
      { title: "Frontend & API Integration", desc: "Build pixel-perfect interfaces with smooth micro-animations connected to robust APIs." },
      { title: "Security & Optimization", desc: "Hardening headers, SSL configurations, image compression, and Core Web Vitals audit." }
    ],
    benefitsTitle: "Why Partner with Nexyn Studios for Web Apps?",
    benefits: [
      { title: "SEO-First Implementation", desc: "We map keywords, structure headings, and bundle dynamic schemas so your site ranks well naturally." },
      { title: "Performance Engineering", desc: "Sub-second load times keep users engaged and decrease bounce rates across mobile and desktop." },
      { title: "Zero Proprietary Lock-in", desc: "Built with standard TypeScript, React, and PostgreSQL so your in-house teams can easily manage it later." }
    ],
    faqs: [
      { question: "What web frameworks do you specialize in?", answer: "We specialize in React and Next.js for front-end rendering, and Node.js or NestJS for server-side business logic." },
      { question: "How do you ensure the website is SEO friendly?", answer: "We implement dynamic metadata, canonical URLs, breadcrumb schemas, proper heading hierarchies (H1/H2), and target sub-second page loads." }
    ],
    internalLinks: [
      { label: "Next.js Development", href: "/technologies/nextjs-development" },
      { label: "React Development", href: "/technologies/react-development" },
      { label: "E-commerce Solutions", href: "/solutions/ecommerce-solutions" },
      { label: "Custom Web Applications", href: "/solutions/custom-web-applications" }
    ]
  },
  "mobile-app-development": {
    slug: "mobile-app-development",
    title: "Mobile App Development Mumbai | Custom iOS & Android Apps",
    metaDescription: "Leading mobile app development company in Mumbai. We build premium, cross-platform iOS & Android apps using React Native for native-grade performance.",
    keywords: ["mobile app development Mumbai", "React Native app development", "iOS app development", "Android app development", "cross platform apps"],
    h1: "Mobile App Development Services in Mumbai",
    badge: "Cross-Platform Mobility",
    headlineAccent: "Engage Users on Every Screen",
    description: "We design and build feature-rich iOS and Android mobile applications using native components. Delivering exceptional performance, gesture interactions, and offline caching.",
    overviewTitle: "High-Performance Cross-Platform Apps",
    overviewContent: "Nexyn Studios is a premier mobile app development studio in Mumbai. We leverage React Native and Expo to build applications that compile directly to native code, sharing a single codebase to cut your development cost and time-to-market in half. We focus on low-data modes, offline synchronization, and seamless backend API integrations.",
    capabilities: [
      "Cross-platform app development using React Native",
      "Local database caching using SQLite for offline access",
      "Firebase Cloud Messaging (FCM) push notifications integration",
      "Camera, geo-location, and biometric sensor hardware integrations",
      "App Store (Apple) and Google Play Store compliance & deployment",
      "ASO (App Store Optimization) and user behavior tracking setup"
    ],
    technologies: ["React Native", "TypeScript", "Expo", "SQLite", "Firebase", "Node.js"],
    processTitle: "Our Mobile Sprints",
    process: [
      { title: "UX Mapping & Prototyping", desc: "Detailed mapping of mobile gesture flows, screen layouts, and offline data sync rules." },
      { title: "Development & Testing", desc: "Iterative sprints with live builds shared via TestFlight and Google Play Console beta." },
      { title: "Store Submission & Launch", desc: "App compliance checks, store description setup, assets packaging, and submission." }
    ],
    benefitsTitle: "Benefits of Cross-Platform Mobile Apps",
    benefits: [
      { title: "One Codebase, Two Platforms", desc: "Build once for both iOS and Android, drastically reducing maintenance and feature release cycles." },
      { title: "Native Response & Speed", desc: "Compiled React Native code guarantees fluid 60fps animations and rapid gesture responses." },
      { title: "Offline-First Synchronization", desc: "Allow users to interact with files and message feeds offline; sync changes once reconnected." }
    ],
    faqs: [
      { question: "Do you build native apps or hybrid apps?", answer: "We focus on React Native, which builds native-like applications by compiling to actual iOS and Android components for high performance." },
      { question: "How do you handle push notifications?", answer: "We integrate Firebase Cloud Messaging (FCM) or Apple Push Notification service (APNs) for real-time background and foreground alerts." }
    ],
    internalLinks: [
      { label: "React Native Development", href: "/technologies/react-native-development" },
      { label: "Node.js Backend", href: "/technologies/nodejs-development" },
      { label: "SaaS Product Development", href: "/solutions/saas-product-development" }
    ]
  },
  "software-development": {
    slug: "software-development",
    title: "Software Development Company Mumbai | Custom ERP & CRM Solutions",
    metaDescription: "Nexyn Studios is a top custom software development company in Mumbai. We design and build bespoke CRM, ERP, and database automation systems for enterprise scaling.",
    keywords: ["software development company Mumbai", "custom software development", "bespoke ERP development", "enterprise software solutions", "custom CRM software"],
    h1: "Custom Software Development in Mumbai",
    badge: "Enterprise Grade Systems",
    headlineAccent: "Eliminate Operational Bottlenecks",
    description: "We architect custom software, relational database architectures, and secure client-partner portals designed to fit your unique operational workflows.",
    overviewTitle: "Bespoke Enterprise Systems Tailored to Your Rules",
    overviewContent: "Off-the-shelf software forces you to change your workflow to fit its limitations. At Nexyn Studios, we build custom software that adapts to *your* business logic. We design secure multi-role dashboards, automated notification triggers, and advanced reporting features that help you save thousands of hours and eliminate manual spreadsheets.",
    capabilities: [
      "Bespoke CRM & ERP platforms tailored entirely to your workflow",
      "Multi-role user authentication with granular permission controls",
      "Database schema design and query execution optimization",
      "Automated PDF document and client report generation",
      "Legacy software modernization and database migrations",
      "Custom third-party integrations (payment, SMS, CRM, Logistics)"
    ],
    technologies: ["Next.js", "TypeScript", "Node.js", "NestJS", "PostgreSQL", "Prisma", "AWS"],
    processTitle: "Enterprise Software Delivery",
    process: [
      { title: "Requirements Blueprinting", desc: "Detailed mapping of database schemas, role scopes, and workflow step rules." },
      { title: "Agile Development Sprints", desc: "Bi-weekly milestone deliveries with feedback collection and continuous integrations." },
      { title: "Deploy & Data Migration", desc: "Secure staging setup, legacy data sanitization, migration script execution, and production launch." }
    ],
    benefitsTitle: "Why Custom Software is the Right Choice",
    benefits: [
      { title: "Unlimited Scalability", desc: "No per-user licensing fees. Scale your user base from 10 to 10,000 without additional software costs." },
      { title: "Control Your Process", desc: "Own your code, data, and workflows. Modify software rules as your business strategies evolve." },
      { title: "Enhanced Access Security", desc: "Deploy on private virtual clouds with rigid firewalls and strict role-based access control." }
    ],
    faqs: [
      { question: "Can you migrate data from our existing excel spreadsheets?", answer: "Yes. We write custom database migration scripts to clean, structure, and import your spreadsheet data into a relational database." },
      { question: "How do you handle security?", answer: "We implement secure session tokens, encryption at rest and in transit, strict database roles, and host on virtual private clouds." }
    ],
    internalLinks: [
      { label: "PostgreSQL Database Services", href: "/technologies/postgresql-development" },
      { label: "Custom CRM Development", href: "/solutions/custom-crm-development" },
      { label: "Business Automation Software", href: "/solutions/business-automation" }
    ]
  },
  "ecommerce-development": {
    slug: "ecommerce-development",
    title: "E-commerce Website Development Mumbai | Headless Commerce Agency",
    metaDescription: "Scale online sales with custom e-commerce website development in Mumbai. We build high-converting storefronts, headless checkout flows, and CRM integrations.",
    keywords: ["ecommerce website development Mumbai", "custom ecommerce solutions", "headless commerce developer", "online store development", "payment gateway integration"],
    h1: "E-commerce Development Services in Mumbai",
    badge: "Drive Online Sales",
    headlineAccent: "Bespoke Shopping Experiences",
    description: "We build fast, secure e-commerce portals, custom shopping cart checkouts, and seamless API integrations with inventory and logistics software.",
    overviewTitle: "Custom & Headless E-commerce for Maximum Conversions",
    overviewContent: "Templates limit your e-commerce growth. We build custom React/Next.js e-commerce storefronts that sync directly with your warehousing, ERP, and payment processing tools. By separating the frontend layout from backend APIs (headless commerce), we enable sub-second page speeds, unique layout controls, and enhanced SEO performance.",
    capabilities: [
      "Headless e-commerce storefront design using Next.js & React",
      "Seamless payment gateway integrations (Razorpay, Stripe, PayPal)",
      "Bespoke shopping cart logic and multi-tier discount engines",
      "Inventory database tracking and automated invoice generator",
      "Logistics API integrations (Shiprocket, Delhivery, custom shipping)",
      "Technical SEO optimization for thousands of product listings"
    ],
    technologies: ["Next.js", "React.js", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS"],
    processTitle: "E-commerce Sprints",
    process: [
      { title: "Checkout Flow Design", desc: "Optimizing layout steps to minimize cart abandonment and secure checkout gates." },
      { title: "Product Inventory Coding", desc: "Relational database setup for categories, products, prices, and stock updates." },
      { title: "Payment & Shipping Sync", desc: "API connections with payment processors and local logistics networks." }
    ],
    benefitsTitle: "Benefits of Custom E-commerce Storefronts",
    benefits: [
      { title: "Blazing Fast Page Load", desc: "NextJS static pre-rendering lets pages load instantly, significantly boosting product conversion rates." },
      { title: "Bespoke Shopping Funnels", desc: "Design any cart layout, upsell strategy, or custom registration form without platform limits." },
      { title: "Direct ERP Integration", desc: "Automate stock changes and invoice creation by linking the store directly to your ERP." }
    ],
    faqs: [
      { question: "Why should I choose custom e-commerce over Shopify?", answer: "Custom e-commerce offers significantly faster speeds, lower processing fees, and complete control over layouts and database syncing." },
      { question: "Is my customers' payment data secure?", answer: "Yes. All transactions are securely routed via tokenized API pathways directly to major PCI-compliant gateways (like Razorpay or Stripe)." }
    ],
    internalLinks: [
      { label: "Web Development Services", href: "/services/web-development" },
      { label: "E-commerce Solutions", href: "/solutions/ecommerce-solutions" },
      { label: "PostgreSQL Databases", href: "/technologies/postgresql-development" }
    ]
  },
  "saas-development": {
    slug: "saas-development",
    title: "SaaS Product & MVP Development Company | Nexyn Studios",
    metaDescription: "Partner with a leading SaaS development company in Mumbai. We build secure multi-tenant architectures, subscription systems, and scalable MVPs.",
    keywords: ["saas development company", "SaaS MVP development", "multi tenant architecture", "subscription software development", "SaaS developers"],
    h1: "SaaS Product & MVP Development Services",
    badge: "Build Your Product",
    headlineAccent: "From MVP to Enterprise Scale",
    description: "We design, code, and deploy cloud-native software-as-a-service products featuring secure tenancy separation, subscription billing, and robust database layers.",
    overviewTitle: "Scalable SaaS Architecture Designed for Long-Term Growth",
    overviewContent: "Launching a SaaS product requires more than basic coding; it demands a solid architecture. We build SaaS platforms with clear multi-tenant isolation, structured API gateways, and subscription systems. Our goal is to help you launch a secure, reliable MVP quickly, while ensuring the architecture can handle millions of events as your product grows.",
    capabilities: [
      "Multi-tenant database architectures (shared DB with schema isolation or isolated DBs)",
      "Secure SaaS user onboarding and invite workflows",
      "Stripe/Razorpay billing subscriptions and webhook event listeners",
      "Interactive data dashboards and drag-and-drop analytics portals",
      "API gateway engineering and rate-limiting configurations",
      "Continuous deployment pipelines on AWS or GCP virtual clouds"
    ],
    technologies: ["Next.js", "TypeScript", "Node.js", "NestJS", "PostgreSQL", "Prisma", "Docker"],
    processTitle: "SaaS Sprints to Launch",
    process: [
      { title: "Data Isolation Design", desc: "Selecting and setting up tenant structures, DB role access, and table constraints." },
      { title: "Billing & Auth Pipelines", desc: "Integrating social logins, invitation tokens, and subscription webhook managers." },
      { title: "Scalability Hardening", desc: "Setting up CDN caches, query caching, API rate limiters, and server alerts." }
    ],
    benefitsTitle: "Why Build Your SaaS with Nexyn Studios?",
    benefits: [
      { title: "Robust Tenant Isolation", desc: "Strict database level checks guarantee that no client can ever access another client's data." },
      { title: "Flexible Billing Integrations", desc: "Support per-seat charges, flat-rate tiers, usage pricing, or custom coupon codes easily." },
      { title: "Rapid MVP Launch Strategy", desc: "We focus on key core features to launch your product to early adopters in weeks, not months." }
    ],
    faqs: [
      { question: "How do you secure data in a multi-tenant SaaS?", answer: "We apply Row-Level Security (RLS) policies in PostgreSQL and verify tenant identifiers on every API call." },
      { question: "Can we modify subscription options later?", answer: "Yes, we build modular billing pipelines linked to Stripe/Razorpay so you can alter tiers dynamically." }
    ],
    internalLinks: [
      { label: "SaaS Product Development", href: "/solutions/saas-product-development" },
      { label: "NestJS Development Services", href: "/technologies/nestjs-development" },
      { label: "Node.js Backend Solutions", href: "/technologies/nodejs-development" }
    ]
  },
  "ui-ux-design": {
    slug: "ui-ux-design",
    title: "UI/UX Design Agency Mumbai | Premium Web & App Interfaces",
    metaDescription: "Top UI/UX design agency in Mumbai. Nexyn Studios creates research-driven interfaces, interactive wireframes, and scalable design systems for websites & apps.",
    keywords: ["ui ux design agency Mumbai", "user experience design company", "wireframes and prototypes", "custom design systems", "conversion optimization design"],
    h1: "UI/UX Design Agency in Mumbai",
    badge: "User Centered Design",
    headlineAccent: "Beautiful, Intuitive Interfaces",
    description: "We conduct user research, wireframe layouts, and build unified design systems that elevate your digital products and optimize customer journeys.",
    overviewTitle: "Research-Driven UI/UX for Higher Conversion Rates",
    overviewContent: "Visuals are only half the battle. Good design is about how your application works, how users navigate, and how easily they complete actions. We create conversion-optimized design systems in Figma that match your brand identity, improve customer engagement, and enable our engineering team to build interfaces quickly.",
    capabilities: [
      "User research, persona creation, and competitor flow audits",
      "Low-fidelity wireframing and interactive clickable prototypes",
      "High-fidelity visual design for complex web & mobile layouts",
      "Scalable Figma design systems (spacing, colors, typography tokens)",
      "Conversion Rate Optimization (CRO) and user-experience audits",
      "Accessibility compliance checks (WCAG guidelines, focus states)"
    ],
    technologies: ["Figma", "Tailwind CSS", "CSS variables", "Framer Motion", "Google Fonts"],
    processTitle: "Our Design Process",
    process: [
      { title: "User Persona Research", desc: "Interview stakeholders, research competitors, and outline primary task priorities." },
      { title: "Wireframes & Prototypes", desc: "Mapping structure in gray-scale, verifying layouts, and refining user flows." },
      { title: "Design System Bundling", desc: "Designing visual UI tokens, buttons, fields, states, and hand-off components." }
    ],
    benefitsTitle: "How Unified UI/UX Benefits Your Business",
    benefits: [
      { title: "Lower Customer Drop-offs", desc: "Clear call-to-actions and clean form structures keep users moving smoothly through your checkout or signup funnel." },
      { title: "Accelerated Frontend Sprints", desc: "A robust design system allows engineers to reuse pre-styled components, reducing frontend coding time by 40%." },
      { title: "Stronger Brand Positioning", desc: "Custom, modern design creates a premium brand impression, building trust with enterprises and customers alike." }
    ],
    faqs: [
      { question: "What design tools do you use?", answer: "We design entirely in Figma, exporting assets and providing live link access to your team." },
      { question: "Do you design for both web and mobile?", answer: "Yes, we design responsive layouts that scale gracefully from desktop monitors to tablets and mobile screens." }
    ],
    internalLinks: [
      { label: "Web Development Services", href: "/services/web-development" },
      { label: "Mobile App Development", href: "/services/mobile-app-development" },
      { label: "TypeScript Web Development", href: "/technologies/typescript-development" }
    ]
  },
  "business-automation": {
    slug: "business-automation",
    title: "Business Automation Software Mumbai | Custom CRM & Workflow Tools",
    metaDescription: "Automate manual tasks with custom business automation software in Mumbai. Nexyn Studios builds bespoke workflow engines, API integrations, and admin portals.",
    keywords: ["business automation software", "workflow automation tools", "custom database integration", "operations management software", "custom API developer"],
    h1: "Business Automation Software in Mumbai",
    badge: "Automate Operations",
    headlineAccent: "Eliminate Manual Overhead",
    description: "We design and build bespoke database dashboards, automated status workflows, and custom email/WhatsApp notifications that streamline your daily operations.",
    overviewTitle: "Transform Bloated Workflows into Lean Systems",
    overviewContent: "If your staff spends hours copy-pasting customer details, chasing approvals, or manual data entry in spreadsheets, you are losing valuable time and money. We build custom business automation tools that connect your systems, trigger notifications, automate PDF report creation, and provide single-source dashboards.",
    capabilities: [
      "Bespoke multi-tier approval workflows and database pipelines",
      "Automated PDF document and invoice generation engines",
      "Custom API integrations (payment, CRM, logistics, WhatsApp alerts)",
      "Multi-role user permission panels and audit trails logs",
      "Database schema synchronization and operations dashboarding",
      "Real-time event logging and status tracking pipelines"
    ],
    technologies: ["Next.js", "Node.js", "TypeScript", "PostgreSQL", "Prisma", "Socket.io"],
    processTitle: "Automation Sprints",
    process: [
      { title: "Process Flow Auditing", desc: "Mapping out each manual task step, system inputs, approval gates, and data outputs." },
      { title: "Database & Pipeline Coding", desc: "Configuring tables, role privileges, dynamic states, and email/SMS webhooks." },
      { title: "Operational Live Trials", desc: "Testing systems with real operational teams and adjusting workflows based on feedback." }
    ],
    benefitsTitle: "Why Choose Bespoke Automation Software?",
    benefits: [
      { title: "Reduce Overhead & Labor", desc: "Automate redundant tasks so your staff can focus on high-value business actions instead of data entry." },
      { title: "Zero Human Errors", desc: "System validations, auto-generated files, and database constraints prevent data duplication and leaks." },
      { title: "Real-Time Tracking Stats", desc: "Super Admins see operational bottlenecks and performance metrics instantly on live dashboards." }
    ],
    faqs: [
      { question: "Can we integrate with third-party software like WhatsApp?", answer: "Yes, we write custom API connectors to send automated status triggers and alerts to WhatsApp, email, or Slack." },
      { question: "What are the hosting requirements for automation software?", answer: "We set up lightweight, cost-effective servers on cloud providers like AWS or Supabase, optimized for low overhead." }
    ],
    internalLinks: [
      { label: "Custom CRM Development", href: "/solutions/custom-crm-development" },
      { label: "Business Automation Solutions", href: "/solutions/business-automation" },
      { label: "Software Development Services", href: "/services/software-development" }
    ]
  }
};

// ─── TECHNOLOGY PAGES ───────────────────────────────────────────────────────
export const TECHNOLOGY_PAGES: Record<string, PageData> = {
  "nextjs-development": {
    slug: "nextjs-development",
    title: "Next.js Development Company | Custom React Web Apps",
    metaDescription: "Partner with a premier Next.js development company to build lightning-fast, SEO-friendly React websites with Server-Side Rendering (SSR).",
    keywords: ["nextjs development company", "nextjs web development", "nextjs developer India", "SSR react developer", "vercel deployment"],
    h1: "Next.js Web Application Development Services",
    badge: "Modern Frontend Engineering",
    headlineAccent: "SEO & Speed by Default",
    description: "We engineer blazing-fast Next.js React applications using Server-Side Rendering (SSR), optimizing performance and Core Web Vitals from day one.",
    overviewTitle: "The Enterprise Choice for High-Performance Web Apps",
    overviewContent: "Next.js is the premier framework for building modern React web applications. As a Next.js development agency, we build websites that load instantly, render on the server for optimal crawler indexation, and support scalable API integrations. This provides your business with the SEO benefit of static sites and the capabilities of dynamic applications.",
    capabilities: [
      "Next.js App Router structure and Server Components (RSC)",
      "Server-Side Rendering (SSR) & Static Site Generation (SSG) deployment",
      "Dynamic meta tag generation and canonical routing configurations",
      "API route handlers and middleware session authentications",
      "Asset loading optimizations, responsive images, and font sub-settings",
      "Production-ready deployment on Vercel or AWS Amplify clouds"
    ],
    technologies: ["Next.js", "React.js", "TypeScript", "Tailwind CSS", "Vercel", "Prisma"],
    processTitle: "Our Next.js Architecture",
    process: [
      { title: "App Routing & Setup", desc: "Setting up folder scopes, local layout files, and global Tailwind themes." },
      { title: "Server Components Coding", desc: "Writing optimized server queries to fetch data before sending HTML to browsers." },
      { title: "Core Web Vitals Audit", desc: "Optimizing LCP and CLS metrics for green Lighthouse scores on desktop/mobile." }
    ],
    benefitsTitle: "Why Build Your Web App with Next.js?",
    benefits: [
      { title: "Superior Technical SEO", desc: "Server-side rendering outputs clean HTML structure, making it easy for search engine bots to parse and index." },
      { title: "Vibrant User Experience", desc: "Immediate transition between pages with instant dynamic content loads creates a fluid app feel." },
      { title: "Fast Vercel Deployments", desc: "Seamless Git integrations ensure code updates are built and deployed globally to Edge networks in seconds." }
    ],
    faqs: [
      { question: "What is the difference between React and Next.js?", answer: "React is a UI library, whereas Next.js is a full framework built on React that provides server-side rendering, routing, and optimization out of the box." },
      { question: "Is Next.js suitable for SEO-focused sites?", answer: "Yes, it is currently one of the best frameworks for SEO due to its native Server-Side Rendering and metadata management capabilities." }
    ],
    internalLinks: [
      { label: "Web Development Services", href: "/services/web-development" },
      { label: "React Development", href: "/technologies/react-development" },
      { label: "Custom Web Applications", href: "/solutions/custom-web-applications" }
    ]
  },
  "react-development": {
    slug: "react-development",
    title: "React JS Development Agency | Custom Frontend Dashboards",
    metaDescription: "Partner with a top React JS development agency. We build dynamic, high-fidelity user interfaces, interactive web systems, and custom SaaS dashboards.",
    keywords: ["react development agency", "react js developer", "custom frontend developer", "single page application development", "react web development"],
    h1: "React JS Frontend Development Services",
    badge: "Interactive UI Engineering",
    headlineAccent: "Dynamic Dashboard Solutions",
    description: "We build highly responsive React user interfaces, state-managed enterprise dashboards, and modular reusable component systems.",
    overviewTitle: "Custom React Frontend Architecture for Complex Software",
    overviewContent: "For complex software dashboards and client portals, React JS provides the flexibility and performance required to build interactive, state-driven interfaces. We build applications with clean state management, modular component files, and lightweight bundles to guarantee sub-second rendering responses.",
    capabilities: [
      "Custom React Single Page Application (SPA) development",
      "State management using Zustand, Redux Toolkit, or Context API",
      "Dynamic interactive charts and operational dashboard UI design",
      "Reusable component systems using Tailwind and Class Variance Authority",
      "Seamless API integrations with third-party web services",
      "Client-side caching and background state synchronizations"
    ],
    technologies: ["React.js", "TypeScript", "Zustand", "Tailwind CSS", "Vite", "Lucide Icons"],
    processTitle: "React Sprints",
    process: [
      { title: "Component Mockup Design", desc: "Deconstructing wireframes into reusable structural components and interactive actions." },
      { title: "State & Store Integration", desc: "Setting up central client state, token handshakes, and route guard logic." },
      { title: "Performance Hardening", desc: "Eliminating redundant re-renders, bundle compression, and assets caching setup." }
    ],
    benefitsTitle: "Why Choose React for Your Frontend?",
    benefits: [
      { title: "Modular Component Base", desc: "Components are built once and used across multiple sections, making layouts easy to update." },
      { title: "Rich Interactive Control", desc: "React's virtual DOM updates layouts instantly without full page reloads, perfect for data grids." },
      { title: "Thriving Developer Ecosystem", desc: "Access to millions of tested libraries for tables, graphs, animations, and forms ensures rapid delivery." }
    ],
    faqs: [
      { question: "Is React good for enterprise applications?", answer: "Yes. Its component architecture and state management systems make it ideal for managing complex dashboards and portals." },
      { question: "Can React apps be converted to mobile?", answer: "Yes, we can leverage React Native to share logic and build native mobile apps based on your React structure." }
    ],
    internalLinks: [
      { label: "Next.js Development", href: "/technologies/nextjs-development" },
      { label: "UI/UX Design services", href: "/services/ui-ux-design" },
      { label: "Custom CRM Development", href: "/solutions/custom-crm-development" }
    ]
  },
  "react-native-development": {
    slug: "react-native-development",
    title: "React Native App Development Services | Cross-Platform Apps",
    metaDescription: "Partner with an expert React Native app development agency. We engineer cross-platform iOS and Android applications with native performance and offline syncing.",
    keywords: ["react native app development", "react native developer", "cross platform mobile apps", "expo app developer", "hybrid mobile app development"],
    h1: "React Native Mobile App Development Services",
    badge: "Cross-Platform Mobility",
    headlineAccent: "One Codebase, Native Performance",
    description: "We build native-grade cross-platform iOS & Android mobile apps using React Native and Expo, with local SQLite storage and Firebase cloud notifications.",
    overviewTitle: "Native iOS & Android Performance from a Single Codebase",
    overviewContent: "Writing separate apps for iOS and Android doubles your development time and maintenance costs. React Native compiles directly to native platform components, offering 60fps animations, native gesture handling, and hardware access. We use Expo to build stable, feature-rich apps ready for store deployment.",
    capabilities: [
      "React Native mobile app engineering and Expo configuration",
      "Native device integration (Camera, GPS coordinates, Biometrics authentication)",
      "Local SQLite caching engines for offline-first message and data feeds",
      "Push Notification relays via FCM and Apple APNs networks",
      "App Store (iTunes) and Google Play Console release management",
      "Performance optimization (list view virtualization, asset compression)"
    ],
    technologies: ["React Native", "TypeScript", "Expo", "SQLite", "Firebase Cloud Messaging", "Tailwind CSS"],
    processTitle: "Mobile Sprints",
    process: [
      { title: "Expo Environment Setup", desc: "Setting up TS configuration, SQLite adapters, and initial navigation pipelines." },
      { title: "Native API Integrations", desc: "Connecting camera plugins, location tags, and background socket syncing modules." },
      { title: "Store Bundling & Deploy", desc: "Configuring App IDs, bundling build credentials, and pushing to TestFlight / Play Store." }
    ],
    benefitsTitle: "Why Choose React Native?",
    benefits: [
      { title: "50% Faster Time to Market", desc: "By using a single TypeScript codebase for both systems, we deliver your app in half the ordinary timeline." },
      { title: "Native Look and Feel", desc: "React Native uses actual platform layout components, ensuring smooth scrolling and native haptic feedback." },
      { title: "Streamlined Upgrades", desc: "Fix a bug or deploy a feature once, and it is instantly pushed to both iOS and Android users." }
    ],
    faqs: [
      { question: "Is React Native as fast as Swift or Kotlin?", answer: "For 95% of business applications, React Native is indistinguishable from fully native apps in terms of speed and responsiveness." },
      { question: "Can we distribute the app through the official app stores?", answer: "Yes, we handle the entire compilation, signing, and submission process for both Apple App Store and Google Play Store." }
    ],
    internalLinks: [
      { label: "Mobile App Development", href: "/services/mobile-app-development" },
      { label: "TypeScript Web Development", href: "/technologies/typescript-development" },
      { label: "SaaS Product Development", href: "/solutions/saas-product-development" }
    ]
  },
  "nodejs-development": {
    slug: "nodejs-development",
    title: "Node.js Backend Development Services | Scalable APIs & Backends",
    metaDescription: "We provide high-performance Node.js backend development services. We design secure, scalable REST/GraphQL APIs, microservices, and real-time database layers.",
    keywords: ["nodejs backend development", "nodejs API development", "custom backend developer", "backend software company", "expressjs development"],
    h1: "Node.js Backend & API Development Services",
    badge: "Scalable Server Engineering",
    headlineAccent: "Robust API Foundations",
    description: "We engineer secure Node.js backend systems, real-time communication servers using Socket.io, and high-throughput Express.js REST APIs.",
    overviewTitle: "The Engine Behind High-Speed Modern Web Applications",
    overviewContent: "A fast frontend is useless without a scalable backend. Node.js leverages asynchronous, event-driven I/O to handle thousands of concurrent queries without memory bottlenecks. We design clean backend systems, optimize relational databases, and build secure API endpoints to ensure your data loads quickly and securely.",
    capabilities: [
      "Express.js & Koa server framework setup and middleware setups",
      "RESTful API design and GraphQL query endpoint developments",
      "Real-time event sync using Socket.io (chat rooms, live updates)",
      "JWT authorization tokens, session controls, and access roles scopes",
      "Third-party webhook endpoints integrations (Stripe, Razorpay, SMS)",
      "Database connection pooling and data sanitization validations"
    ],
    technologies: ["Node.js", "Express.js", "TypeScript", "PostgreSQL", "MongoDB", "Prisma", "Socket.io"],
    processTitle: "API Development Flow",
    process: [
      { title: "Database Schema Mapping", desc: "Setting up relational tables, indexes, constraints, and mock entries." },
      { title: "Controller & Auth Coding", desc: "Writing endpoint routes, JWT token checks, validation schemas, and database controllers." },
      { title: "API Load Testing", desc: "Simulating heavy concurrent traffic to tune connection pooling and query executions." }
    ],
    benefitsTitle: "Benefits of a Node.js Backend",
    benefits: [
      { title: "Sub-100ms Responses", desc: "Asynchronous processing handles DB operations and API routing in parallel, ensuring fast execution." },
      { title: "Unified JavaScript Stack", desc: "Using TypeScript/JavaScript across frontend and backend enables shared types and faster development." },
      { title: "Lightweight Infrastructure", desc: "Node.js servers require fewer resources to handle high traffic, keeping your monthly hosting costs low." }
    ],
    faqs: [
      { question: "Is Node.js scalable for enterprise apps?", answer: "Yes. Major companies like Netflix, PayPal, and Uber rely on Node.js to manage high volumes of concurrent requests." },
      { question: "Do you integrate with SQL and NoSQL databases?", answer: "Yes, we integrate Node.js with PostgreSQL (SQL) and MongoDB (NoSQL) based on your data structure needs." }
    ],
    internalLinks: [
      { label: "NestJS Development Services", href: "/technologies/nestjs-development" },
      { label: "TypeScript Web Development", href: "/technologies/typescript-development" },
      { label: "Software Development Services", href: "/services/software-development" }
    ]
  },
  "nestjs-development": {
    slug: "nestjs-development",
    title: "NestJS Development Services | Enterprise Node.js Architecture",
    metaDescription: "Partner with NestJS development services experts. We build scalable, type-safe enterprise Node.js architectures with clean TypeScript patterns.",
    keywords: ["nestjs development services", "nestjs backend developer", "enterprise nodejs developer", "typescript backend agency", "scalable backend service"],
    h1: "NestJS Enterprise Backend Development Services",
    badge: "Enterprise Node.js Architecture",
    headlineAccent: "Type-Safe, Modular Backends",
    description: "We architect maintainable, enterprise-ready backend systems using NestJS, enforcing dependency injection and clean object-oriented TypeScript design.",
    overviewTitle: "Structured Backend Development for Large-Scale Enterprise Apps",
    overviewContent: "NestJS provides a modular, heavily structured architectural system on top of Node.js. It enforces clean separation of concerns, dependency injection, and strict TypeScript types. This ensures your enterprise backend remains stable, maintainable, and easy to extend as your codebase grows over years.",
    capabilities: [
      "NestJS modular backend design and controllers setup",
      "Dependency injection pattern implementation and services coding",
      "Strict data validation using class-validator and TypeScript types",
      "Prisma / TypeORM object-relational mapping integrations",
      "Microservice routing adapters (RabbitMQ, Redis pub-sub channels)",
      "Unit testing and integration testing using Jest configurations"
    ],
    technologies: ["NestJS", "TypeScript", "Node.js", "Prisma", "PostgreSQL", "Jest", "Docker"],
    processTitle: "NestJS Architecture sprints",
    process: [
      { title: "Module & DB Mapping", desc: "Dividing app logic into separate, reusable modules and mapping ORM entities." },
      { title: "Service & Validation Coding", desc: "Writing type-safe business services, controllers, and strict input validation guards." },
      { title: "Unit Test Writing", desc: "Setting up test suites to run on CI/CD pipelines, preventing code regression issues." }
    ],
    benefitsTitle: "Why Choose NestJS for Enterprise Projects?",
    benefits: [
      { title: "Strict Architectural Pattern", desc: "The codebase is organized in a predictable, modular structure, allowing new developers to onboard quickly." },
      { title: "Self-Documenting Code", desc: "NestJS leverages decorators and TypeScript types to generate interactive OpenAPI/Swagger documentation automatically." },
      { title: "Built-in Microservice Support", desc: "Native support for TCP, gRPC, and message brokers makes it easy to split monolithic servers into microservices later." }
    ],
    faqs: [
      { question: "Why is NestJS better than plain Express.js?", answer: "NestJS provides a built-in architecture, dependency injection, and OOP guidelines, preventing messy code organization in larger team projects." },
      { question: "Does NestJS support OpenAPI/Swagger?", answer: "Yes, we configure Swagger so you can test all API endpoints in an interactive UI sandbox." }
    ],
    internalLinks: [
      { label: "Node.js Backend Solutions", href: "/technologies/nodejs-development" },
      { label: "TypeScript Web Development", href: "/technologies/typescript-development" },
      { label: "SaaS Product Development", href: "/solutions/saas-product-development" }
    ]
  },
  "typescript-development": {
    slug: "typescript-development",
    title: "TypeScript Web Development Services | Type-Safe Engineering",
    metaDescription: "Hire expert TypeScript web development services. We build reliable, type-safe web and mobile apps with clean, self-documenting code.",
    keywords: ["typescript web development", "typescript developer agency", "type safe programming", "typescript nextjs react", "custom web app development"],
    h1: "TypeScript Application Development Services",
    badge: "Type-Safe Engineering",
    headlineAccent: "Write Reliable Code, Eliminate Bugs",
    description: "We utilize TypeScript across our entire stack—from Next.js frontends to NestJS backends—to eliminate runtime bugs and accelerate development.",
    overviewTitle: "Reliable Development with Strict Static Typing",
    overviewContent: "JavaScript is flexible, but lacks type checks, often leading to unexpected errors in production. TypeScript solves this by adding static types, catching syntax and type mismatches during development before they ever reach a user. At Nexyn Studios, we write clean, self-documenting TypeScript code to ensure software stability.",
    capabilities: [
      "Strict compiler configurations and TSConfig setups",
      "Strong type sharing between React frontend and Node backends",
      "API request-response interface definitions and validations",
      "Prisma schema integration with dynamic type generation",
      "Component prop types validation in React and React Native",
      "Continuous linting checks and type-checking builds setup"
    ],
    technologies: ["TypeScript", "Next.js", "React.js", "Node.js", "NestJS", "Prisma", "ESLint"],
    processTitle: "Type-Safety Process",
    process: [
      { title: "Define Data Interfaces", desc: "Creating interfaces for all business objects, APIs, and configuration files." },
      { title: "Strict Compiler Tuning", desc: "Enabling strict null checks and no-implicit-any configurations in tsconfig." },
      { title: "Type Validation Pipelines", desc: "Setting up pre-commit hooks to run type checkers automatically on code commits." }
    ],
    benefitsTitle: "Why TypeScript is Essential for Web Apps",
    benefits: [
      { title: "90% Fewer Runtime Errors", desc: "Catching bugs (like undefined variables or type mismatches) during code writing prevents crashes in production." },
      { title: "Faster Feature Sprints", desc: "Strict IDE auto-complete and refactoring support enable our developers to write and update code quickly." },
      { title: "Maintainable Codebases", desc: "Clear types act as documentation, allowing teams to understand code relationships and dependencies easily." }
    ],
    faqs: [
      { question: "Does TypeScript make the application slower?", answer: "No, TypeScript is compiled into standard JavaScript during the build process, so it has zero impact on runtime performance." },
      { question: "Can we convert our existing JavaScript project to TypeScript?", answer: "Yes, we perform incremental conversions, adding type safety module-by-module without pausing your systems." }
    ],
    internalLinks: [
      { label: "Web Development Services", href: "/services/web-development" },
      { label: "Next.js Development", href: "/technologies/nextjs-development" },
      { label: "React Development", href: "/technologies/react-development" }
    ]
  },
  "postgresql-development": {
    slug: "postgresql-development",
    title: "PostgreSQL Database Development & Tuning Services Mumbai",
    metaDescription: "Professional PostgreSQL database development and query performance tuning services. We design secure, scalable relational database architectures.",
    keywords: ["postgresql development services", "database tuning services", "relational database design", "sql developer Mumbai", "database migration company"],
    h1: "PostgreSQL Database Development & Tuning",
    badge: "Reliable Relational Data",
    headlineAccent: "Secure, High-Throughput Databases",
    description: "We design relational database schemas, write optimized SQL queries, configure database connection pools, and set up Row-Level Security (RLS).",
    overviewTitle: "Relational Database Design Built for Transactions",
    overviewContent: "Your database is the foundation of your application. PostgreSQL is a reliable open-source database engine, supporting ACID compliance and advanced JSON queries. We design clean database schemas, write optimized indexes, and configure connection pools to ensure your data stays safe and loads fast.",
    capabilities: [
      "Relational database schema normalization and indexes optimization",
      "Complex SQL query optimization and EXPLAIN ANALYZE tuning",
      "Prisma / Drizzle / Sequelize ORM database configuration",
      "Row-Level Security (RLS) policies setup (SaaS multi-tenant)",
      "Automated encrypted database backups, migrations, and replica setups",
      "Connection pooling configuration (PgBouncer, Supabase connections)"
    ],
    technologies: ["PostgreSQL", "SQL", "Prisma", "Supabase", "AWS RDS", "PgBouncer", "Docker"],
    processTitle: "Database Lifecycle",
    process: [
      { title: "Schema Normalization", desc: "Designing tables, foreign key relations, constraints, and database index keys." },
      { title: "Security & RLS Setup", desc: "Configuring roles privileges, Row-Level-Security, and connection parameters." },
      { title: "Query Speed Optimization", desc: "Analyzing slow logs, creating indices, and tuning connection pools." }
    ],
    benefitsTitle: "Why PostgreSQL is Our Preferred SQL Database",
    benefits: [
      { title: "ACID Transaction Guarantees", desc: "Guarantees that database transactions are processed reliably, protecting your business from data corruption." },
      { title: "Row-Level Security (RLS)", desc: "Enforce security policies directly at the database level, preventing data leaks in multi-tenant systems." },
      { title: "JSONB Support", desc: "Store structured SQL tables and flexible JSON objects in a single database, providing schema flexibility." }
    ],
    faqs: [
      { question: "Is PostgreSQL scalable for high-traffic apps?", answer: "Yes. By utilizing proper indexing, connection pooling (PgBouncer), and read replicas, PostgreSQL handles millions of active rows easily." },
      { question: "Do you configure automated backups?", answer: "Yes, we set up daily automated, encrypted backups to secure cloud vaults (like AWS S3) with retention rules." }
    ],
    internalLinks: [
      { label: "Software Development Services", href: "/services/software-development" },
      { label: "SaaS Product Development", href: "/solutions/saas-product-development" },
      { label: "Node.js Backend Solutions", href: "/technologies/nodejs-development" }
    ]
  }
};

// ─── INDUSTRY PAGES ─────────────────────────────────────────────────────────
export const INDUSTRY_PAGES: Record<string, PageData> = {
  "ecommerce": {
    slug: "ecommerce",
    title: "E-commerce Software & Portal Development Services",
    metaDescription: "Empower your retail business with custom e-commerce software development. We build headless storefronts, custom checkout flows, and inventory syncing.",
    keywords: ["ecommerce software development", "ecommerce portal developers", "headless ecommerce solution", "custom shopping cart design", "online store software"],
    h1: "Custom E-commerce Software Solutions",
    badge: "Scale Online Retail",
    headlineAccent: "Convert Visitors to Customers",
    description: "We design and build fast, headless e-commerce storefronts, custom shopping cart logic, and integrations with inventory and payment systems.",
    overviewTitle: "Custom E-commerce Software Built for Speed and Security",
    overviewContent: "Generic templates can restrict your e-commerce growth and slow down your site. We build custom Next.js storefronts that connect to secure database layers and inventory management systems. This headless approach provides sub-second page loads, boosting user engagement, conversion rates, and SEO performance.",
    capabilities: [
      "Headless storefront design using Next.js & Tailwind CSS",
      "Seamless integrations with Razorpay, Stripe, and pay gateways",
      "Bespoke checkout funnels, cart logic, and promo codes engines",
      "Real-time database syncing with warehousing and inventory",
      "Automated tax calculations and PDF invoice creation pipelines",
      "Multi-channel inventory management and vendor dashboards"
    ],
    technologies: ["Next.js", "React.js", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS"],
    processTitle: "Our E-commerce Delivery",
    process: [
      { title: "Checkout Architecture", desc: "Designing simple, secure form fields to minimize cart abandonment." },
      { title: "Database & Sync Coding", desc: "Setting up relational tables to manage inventory levels, variants, and orders." },
      { title: "API Integrations", desc: "Connecting payment gateways, SMS tracking status updates, and shipping APIs." }
    ],
    benefitsTitle: "Why Choose Custom E-commerce Software?",
    benefits: [
      { title: "Sub-Second Load Times", desc: "Lightning-fast static product pages keep visitors engaged, reducing bounce rates." },
      { title: "No Subscription Limits", desc: "Avoid per-transaction fees or monthly platform subscriptions by owning your code." },
      { title: "Flexible Layout Control", desc: "Design any shopping flow, checkout layout, or custom bundle strategy without limits." }
    ],
    faqs: [
      { question: "Can you connect the storefront to our existing inventory software?", answer: "Yes, we write custom API connectors to sync stock levels and orders between your store and ERP." },
      { question: "Is my customers' transactional data secure?", answer: "Yes, we route all payments securely through tokenized pathways to PCI-compliant processors like Razorpay." }
    ],
    internalLinks: [
      { label: "E-commerce Development Services", href: "/services/ecommerce-development" },
      { label: "E-commerce Solutions Page", href: "/solutions/ecommerce-solutions" },
      { label: "Web Development Services", href: "/services/web-development" }
    ]
  },
  "real-estate": {
    slug: "real-estate",
    title: "Real Estate CRM & Software Development Services",
    metaDescription: "Custom real estate software development. We build bespoke CRMs, property management portals, and workflow automation for real estate developers & agencies.",
    keywords: ["real estate software development", "real estate CRM developers", "property portal development", "real estate workflow software", "custom lead manager"],
    h1: "Custom Real Estate CRM & Software Solutions",
    badge: "Automate Property Sales",
    headlineAccent: "Streamline Lead to Close Workflows",
    description: "We build custom property management portals, multi-tier lead tracking CRMs, and automated contract generation systems for real estate agencies.",
    overviewTitle: "Bespoke Real Estate CRMs Engineered Around Your Pipelines",
    overviewContent: "Real estate deals involve complex pipelines, document reviews, and agent assignments. Off-the-shelf software can be bloated and difficult to customize. We design and build custom real estate CRMs that manage lead sources, automate agent assignments, and generate documents, helping your team focus on closing sales.",
    capabilities: [
      "Custom real estate lead dashboards and pipeline tracking pipelines",
      "Property listing directories with advanced search filters",
      "Automated document creation (offers, agreements, invoices)",
      "Multi-role access privileges for Admins, Managers, and Agents",
      "Integration with lead capture channels (WhatsApp, Facebook, websites)",
      "Follow-up scheduling calendars and automated SMS reminders triggers"
    ],
    technologies: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Prisma", "Tailwind CSS"],
    processTitle: "Our Real Estate Sprints",
    process: [
      { title: "Pipeline Mapping", desc: "Defining lead statuses, follow-up cycles, and contract approval steps." },
      { title: "CRM & Access Coding", desc: "Building role-scoped dashboards, secure database tables, and document generators." },
      { title: "Channel Integrations", desc: "Connecting lead capture channels like Facebook Ads, WhatsApp APIs, and email alerts." }
    ],
    benefitsTitle: "Why Build a Custom Real Estate CRM?",
    benefits: [
      { title: "Pipeline Transparency", desc: "Track every lead, view agent activity, and monitor sales stages from a single dashboard." },
      { title: "Automated Document Workflows", desc: "Generate contracts and invoice PDFs instantly from client records, eliminating errors." },
      { title: "Own Your Lead Data", desc: "Keep customer data secure on your own servers instead of relying on third-party CRM platforms." }
    ],
    faqs: [
      { question: "Can we track agent performance in the CRM?", answer: "Yes, we design reporting dashboards that display metrics like total leads assigned, calls made, and sales closed per agent." },
      { question: "How do leads import into the CRM?", answer: "We connect lead capture APIs from Facebook Ads, web forms, and WhatsApp to import inquiries automatically." }
    ],
    internalLinks: [
      { label: "Custom CRM Development", href: "/solutions/custom-crm-development" },
      { label: "Business Automation Software", href: "/services/business-automation" },
      { label: "PostgreSQL Database Services", href: "/technologies/postgresql-development" }
    ]
  },
  "healthcare": {
    slug: "healthcare",
    title: "Healthcare Software & Patient Portal Development Services",
    metaDescription: "Secure healthcare software development. We build custom patient portals, workflow engines, and healthcare CRMs with strict data security measures.",
    keywords: ["healthcare software development", "patient portal developer", "healthcare CRM systems", "medical database developer", "secure health software"],
    h1: "Secure Healthcare Software Solutions",
    badge: "Digital Healthcare Solutions",
    headlineAccent: "Patient Portal & Workflow Automation",
    description: "We build secure patient management databases, appointment calendars, and communication portals designed for medical clinics and healthcare providers.",
    overviewTitle: "Secure Database Systems for Modern Healthcare Providers",
    overviewContent: "Healthcare systems require strict data privacy, secure logins, and reliable database architectures. We design and build custom patient management tools, doctor dashboards, and portal access systems. We prioritize security, using encrypted channels, detailed audit logs, and secure database configurations.",
    capabilities: [
      "Secure patient profiles databases with role-based access control",
      "Dynamic doctor directories and appointment booking calendars",
      "Encrypted messaging channels connecting patients and staff",
      "Automated billing generators and receipt PDF email triggers",
      "Strict data logging audit trails tracking every database change",
      "Integrations with external diagnostics databases and APIs"
    ],
    technologies: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Prisma", "AWS RDS"],
    processTitle: "Healthcare Sprints",
    process: [
      { title: "Security Scoping", desc: "Mapping data access rules, schema tables, encryption, and audit logs." },
      { title: "Portal Development", desc: "Building secure doctor dashboards, appointment booking systems, and patient databases." },
      { title: "System Compliance Audit", desc: "Verifying session timeouts, database security settings, and SSL certificate paths." }
    ],
    benefitsTitle: "Why Choose Bespoke Healthcare Software?",
    benefits: [
      { title: "Granular Data Privacy", desc: "Control data access permissions so only authorized medical staff can view patient records." },
      { title: "Frictionless Booking Flow", desc: "Allow patients to book appointments online easily, reducing administrative load." },
      { title: "Complete System Audit Trails", desc: "Log all database access and changes automatically, maintaining accountability." }
    ],
    faqs: [
      { question: "Is patient data encrypted in the database?", answer: "Yes, we implement encryption for sensitive fields and enforce SSL protocols for all database traffic." },
      { question: "Can we integrate appointment reminders?", answer: "Yes, we set up automated SMS and email reminders to help reduce patient no-shows." }
    ],
    internalLinks: [
      { label: "Software Development Services", href: "/services/software-development" },
      { label: "Node.js Backend Solutions", href: "/technologies/nodejs-development" },
      { label: "PostgreSQL Database Services", href: "/technologies/postgresql-development" }
    ]
  },
  "manufacturing": {
    slug: "manufacturing",
    title: "Manufacturing ERP & Custom Software Solutions Mumbai",
    metaDescription: "Streamline operations with custom manufacturing ERP software in Mumbai. We build inventory management, supply chain tracking, and workflow automation systems.",
    keywords: ["manufacturing ERP software", "manufacturing software Mumbai", "inventory management system", "production workflow software", "custom ERP developer"],
    h1: "Custom Manufacturing ERP & Software Solutions",
    badge: "Optimize Production",
    headlineAccent: "Inventory & Supply Chain Control",
    description: "We build custom inventory databases, vendor order tracking portals, and multi-tier production workflow engines for manufacturing businesses.",
    overviewTitle: "Streamline Production Workflows with Custom ERP Software",
    overviewContent: "Manufacturing involves managing inventories, tracking production stages, and coordinating with vendors. Off-the-shelf ERPs can be expensive and difficult to configure for unique workflows. We build custom manufacturing software designed to fit your production stages, track raw materials, and automate approval processes.",
    capabilities: [
      "Custom ERP inventory tracking databases and stock alerts",
      "Multi-tier production stage approvals and task workflows",
      "Vendor directories with purchase order status monitors",
      "Automated bill of materials calculations and invoice generators",
      "Admin dashboards displaying stock levels and dispatch metrics",
      "Integration with logistics and shipping carrier status APIs"
    ],
    technologies: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Prisma", "Tailwind CSS"],
    processTitle: "Manufacturing Sprints",
    process: [
      { title: "Workflow Mapping", desc: "Defining inventory states, approval processes, and production stages." },
      { title: "ERP Database Coding", desc: "Building database structures, role-based controls, and inventory tracking tools." },
      { title: "Deployment & Training", desc: "Launching the system, importing inventory data, and training staff on workflows." }
    ],
    benefitsTitle: "Why Partner with Us for Custom ERP Software?",
    benefits: [
      { title: "Adapted to Your Processes", desc: "We build software around your specific production stages and inventory rules, avoiding bloated features." },
      { title: "Cost-Effective Scaling", desc: "Avoid per-user licensing fees, allowing your entire team to use the platform as you grow." },
      { title: "Real-Time Stock Alerts", desc: "Monitor raw materials and inventory levels, helping prevent production delays." }
    ],
    faqs: [
      { question: "Can we manage multiple warehouse locations?", answer: "Yes, we design database structures that allow you to track and transfer inventory across different warehouse locations." },
      { question: "Does the system support barcode scanning?", answer: "Yes, we can integrate barcode and QR code scanning APIs to help streamline inventory updates." }
    ],
    internalLinks: [
      { label: "Software Development Services", href: "/services/software-development" },
      { label: "Business Automation Software", href: "/services/business-automation" },
      { label: "PostgreSQL Database Services", href: "/technologies/postgresql-development" }
    ]
  },
  "education": {
    slug: "education",
    title: "Education Portal & Scholarship Management Software Mumbai",
    metaDescription: "Custom education portal development in Mumbai. We build student databases, scholarship tracking tools, and approval systems based on real NGO experience.",
    keywords: ["education portal development", "scholarship management software", "student database developer", "school management portal", "NGO education software"],
    h1: "Custom Education Portal & Student Software Solutions",
    badge: "Digital Education Tools",
    headlineAccent: "Scholarship & Student Portal Workflows",
    description: "We build custom student application databases, multi-role approval portals, and document generators based on real project experience.",
    overviewTitle: "Education Portals Built on Real Project Success",
    overviewContent: "Nexyn Studios has experience building education portals. We developed a scholarship management portal for the United Welfare Foundation (UWF) in Mumbai, which processed ₹6.87L+ in disbursements, aided 49+ students, and reduced application processing time by 70%. We use this experience to design student registration portals and workflow systems.",
    capabilities: [
      "Student application forms with file upload capabilities",
      "Multi-role approval workflows (Evaluator, Reviewer, Trustee)",
      "Secure student record databases with role-based access",
      "Automated document generation (approval letters, fee receipts)",
      "Real-time scholarship disbursement trackers and admin reports",
      "Email and SMS notifications for application status updates"
    ],
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "NextAuth.js", "React PDF"],
    processTitle: "Education Portal Sprints",
    process: [
      { title: "Workflow Scoping", desc: "Mapping registration steps, approval stages, and notification triggers." },
      { title: "Portal Development", desc: "Building student interfaces, role-scoped dashboards, and PDF generation engines." },
      { title: "Agile Live Testing", desc: "Testing workflows with staff, verifying permissions, and launching on secure hosting." }
    ],
    benefitsTitle: "Why Choose Our Custom Education Portals?",
    benefits: [
      { title: "Tested Workflow Engine", desc: "We utilize proven structures from our UWF portal to build stable, role-based workflows." },
      { title: "Time-Saving Automation", desc: "Automate document creation and status tracking to help reduce administrative workloads." },
      { title: "Secure Student Data", desc: "Implement role-based access control to protect student information and documentation." }
    ],
    faqs: [
      { question: "Can we generate custom report spreadsheets?", answer: "Yes, we build exporting tools that allow admins to download student lists, application histories, and data." },
      { question: "How does the document upload system work?", answer: "We connect the form to secure cloud storage buckets (like AWS S3) to store student transcripts and IDs safely." }
    ],
    internalLinks: [
      { label: "Software Development Services", href: "/services/software-development" },
      { label: "Custom CRM Development", href: "/solutions/custom-crm-development" },
      { label: "Web Development Services", href: "/services/web-development" }
    ]
  },
  "logistics": {
    slug: "logistics",
    title: "Logistics & Supply Chain Software Development Services",
    metaDescription: "Optimize operations with custom logistics software development. We build courier tracking, driver dispatch portals, and shipment systems.",
    keywords: ["logistics software development", "courier tracking software", "dispatch portal developer", "supply chain systems", "delivery tracking APIs"],
    h1: "Custom Logistics & Dispatch Software Solutions",
    badge: "Optimize Operations",
    headlineAccent: "Dispatch, Route, and Delivery Tracking",
    description: "We build custom courier tracking systems, dispatcher dashboards, driver status portals, and third-party logistics API integrations.",
    overviewTitle: "Bespoke Logistics Software Built for Real-Time Efficiency",
    overviewContent: "Logistics requires coordination between dispatchers, drivers, and customers. Off-the-shelf logistics software can be difficult to integrate with existing operations. We design and build custom dispatch portals, tracking tools, and database systems that help streamline operations and improve delivery tracking.",
    capabilities: [
      "Dispatcher dashboards displaying courier status and orders",
      "Driver portals for managing drop-offs, routes, and status updates",
      "Real-time database tracking for package locations and histories",
      "Integration with logistics APIs (Shiprocket, Delhivery, custom APIs)",
      "Automated proof-of-delivery uploads and signature captures",
      "Customer tracking pages with status check fields"
    ],
    technologies: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Socket.io", "Tailwind CSS"],
    processTitle: "Logistics Sprints",
    process: [
      { title: "Dispatch Mapping", desc: "Defining package states, driver assignment rules, and route tracking." },
      { title: "Dashboard Development", desc: "Building dispatcher views, driver mobile screens, and tracking databases." },
      { title: "API Integration", desc: "Connecting shipping APIs, SMS alerts, and testing status updates." }
    ],
    benefitsTitle: "Why Choose Custom Logistics Software?",
    benefits: [
      { title: "Unified Dispatch Control", desc: "Manage drivers, view delivery statuses, and handle pickups from a single dashboard." },
      { title: "Seamless Carrier Integration", desc: "Connect with shipping APIs to coordinate shipments and track statuses." },
      { title: "Improved Customer Support", desc: "Provide automated tracking pages to help reduce customer support inquiries." }
    ],
    faqs: [
      { question: "Can drivers upload proof of delivery?", answer: "Yes, we build driver portals that support mobile uploads for delivery signatures and photos." },
      { question: "Can we track delivery statuses in real time?", answer: "Yes, we use WebSocket connections to update parcel coordinates and delivery stages dynamically." }
    ],
    internalLinks: [
      { label: "Software Development Services", href: "/services/software-development" },
      { label: "Business Automation Software", href: "/services/business-automation" },
      { label: "Node.js Backend Solutions", href: "/technologies/nodejs-development" }
    ]
  }
};

// ─── SOLUTION PAGES ─────────────────────────────────────────────────────────
export const SOLUTION_PAGES: Record<string, PageData> = {
  "custom-crm-development": {
    slug: "custom-crm-development",
    title: "Custom CRM Development Company | Bespoke Sales Portals",
    metaDescription: "Partner with a premium custom CRM development company in Mumbai. We build bespoke sales portals, lead trackers, and workflow automation systems.",
    keywords: ["custom CRM development company", "custom CRM software", "bespoke sales portal", "lead tracking database", "CRM developer Mumbai"],
    h1: "Custom CRM Software Development Services",
    badge: "Bespoke Sales Portals",
    headlineAccent: "Tailored to Your Sales Process",
    description: "We build custom lead pipelines, multi-role client portals, automated follow-up reminders, and reporting tools that match your exact sales process.",
    overviewTitle: "Custom CRM Development vs. Off-the-Shelf Software",
    overviewContent: "Off-the-shelf CRMs often include features you do not use while charging high monthly per-user licensing fees. We design and build custom CRMs that match your specific sales stages, automate document creation, and secure customer data, helping you scale without added software costs.",
    capabilities: [
      "Custom lead pipelines with drag-and-drop status stages",
      "Granular user permissions for Admins, Managers, and Sales Reps",
      "Automated PDF document creation (quotations, proposals, invoices)",
      "Integration with lead capture channels (WhatsApp, web forms, Facebook Ads)",
      "Dynamic activity timelines tracking calls, emails, and notes",
      "Custom reporting dashboards displaying team performance metrics"
    ],
    technologies: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Prisma", "Tailwind CSS"],
    processTitle: "Our CRM Development Sprints",
    process: [
      { title: "Pipeline Alignment", desc: "Defining sales stages, lead assignment rules, and required document templates." },
      { title: "Database & UI Development", desc: "Building relational databases, permission controls, and pipeline views." },
      { title: "API Integration", desc: "Connecting lead capture channels, SMS alerts, and launching the portal." }
    ],
    benefitsTitle: "Why Build a Custom CRM?",
    benefits: [
      { title: "No Licensing Fees", desc: "Add as many users and leads as you need without incurring monthly per-seat licensing costs." },
      { title: "Control Your Processes", desc: "Customize pipeline stages, fields, and automation rules as your sales strategies change." },
      { title: "Secure Customer Data", desc: "Host customer information on your own secure database server, protecting your business data." }
    ],
    faqs: [
      { question: "Can we import leads from our current CRM?", answer: "Yes, we write database migration scripts to import data from formats like CSV or Excel into your custom CRM." },
      { question: "Does the CRM support automated reminders?", answer: "Yes, we set up email and SMS notifications for scheduled tasks, call follow-ups, and pending deals." }
    ],
    internalLinks: [
      { label: "Software Development Services", href: "/services/software-development" },
      { label: "Business Automation Software", href: "/services/business-automation" },
      { label: "PostgreSQL Database Services", href: "/technologies/postgresql-development" }
    ]
  },
  "saas-product-development": {
    slug: "saas-product-development",
    title: "SaaS Product Development Company | Scale Your MVP",
    metaDescription: "Partner with an expert SaaS product development company. We build multi-tenant databases, Stripe/Razorpay billing integrations, and scalable MVPs.",
    keywords: ["saas product development company", "SaaS MVP developer", "multi tenant database setup", "subscription billing developer", "SaaS product design"],
    h1: "SaaS Product & MVP Development Services",
    badge: "Scale Your Software",
    headlineAccent: "Cloud-Native SaaS Solutions",
    description: "We design and build SaaS products, multi-tenant databases, billing integrations, and administrative dashboards that support product launches.",
    overviewTitle: "Robust SaaS Architecture Built for Product Scaling",
    overviewContent: "SaaS platforms require solid multi-tenant architecture and structured subscription billing systems. We build SaaS software with data isolation, API rate-limiting, and Stripe or Razorpay subscription webhooks. This helps you launch a secure MVP quickly, with an architecture designed to scale.",
    capabilities: [
      "Multi-tenant database architectures and tenant isolation check systems",
      "Stripe / Razorpay subscription billing integrations and webhooks",
      "Secure SaaS user onboarding, invite links, and social logins",
      "Administrative dashboards showing active subscriptions and usage metrics",
      "API gateways with rate-limiting to help protect servers",
      "Continuous integration and deployment pipelines on AWS or GCP"
    ],
    technologies: ["Next.js", "TypeScript", "Node.js", "NestJS", "PostgreSQL", "Prisma", "Docker"],
    processTitle: "Our SaaS Development Cycle",
    process: [
      { title: "Tenancy Structure Design", desc: "Setting up tenant isolation rules and PostgreSQL database privileges." },
      { title: "Billing & Auth Integration", desc: "Configuring user logins, invitation portals, and subscription billing triggers." },
      { title: "Scalability Testing", desc: "Tuning connection pools, setting up caching, and launching on secure hosting." }
    ],
    benefitsTitle: "Why Choose Nexyn Studios for SaaS Development?",
    benefits: [
      { title: "Secure Data Isolation", desc: "We implement database-level controls to help ensure that tenant data remains isolated." },
      { title: "Modular Billing Systems", desc: "Easily update pricing tiers, subscription options, or usage-based pricing." },
      { title: "Quick MVP Launches", desc: "We focus on core features to help you launch your product to users within weeks." }
    ],
    faqs: [
      { question: "How do you handle multi-tenant data security?", answer: "We apply Row-Level Security (RLS) policies in PostgreSQL and verify tenant IDs on every API request." },
      { question: "Can we support monthly and annual subscription plans?", answer: "Yes, we integrate subscription webhooks to handle plans, trials, and invoices dynamically." }
    ],
    internalLinks: [
      { label: "SaaS Development Services", href: "/services/saas-development" },
      { label: "NestJS Development Services", href: "/technologies/nestjs-development" },
      { label: "Node.js Backend Solutions", href: "/technologies/nodejs-development" }
    ]
  },
  "ecommerce-solutions": {
    slug: "ecommerce-solutions",
    title: "Custom E-commerce Solutions | Headless Shopping Portals",
    metaDescription: "Custom e-commerce solutions in Mumbai. We build high-speed headless storefronts, custom checkout funnels, and CRM inventory syncing.",
    keywords: ["custom ecommerce solutions", "headless ecommerce portal", "online store solutions", "custom checkout system", "e-commerce developers Mumbai"],
    h1: "Custom E-commerce Portal & Shopping Solutions",
    badge: "Custom E-commerce Systems",
    headlineAccent: "Bespoke Online Storefronts",
    description: "We build custom Next.js storefronts, bespoke shopping cart checkouts, and database integrations with inventory and logistics software.",
    overviewTitle: "Headless E-commerce Solutions for High Performance",
    overviewContent: "Next.js headless storefronts separate the user interface from backend databases, enabling fast page speeds and unique layout options. We build custom storefronts that connect directly with your payment processors, warehousing, and shipping systems, helping improve conversions and search visibility.",
    capabilities: [
      "Custom Next.js storefronts with fast page load speeds",
      "Seamless integrations with Razorpay, Stripe, and pay gateways",
      "Bespoke checkout steps, shopping carts, and promo codes engines",
      "Real-time database syncing with warehousing and inventory",
      "Automated tax calculations and PDF invoice creation pipelines",
      "Logistics API integrations (Shiprocket, Delhivery, custom shipping)"
    ],
    technologies: ["Next.js", "React.js", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS"],
    processTitle: "Our E-commerce Sprints",
    process: [
      { title: "Checkout Flow Design", desc: "Designing user-friendly steps to minimize cart abandonment." },
      { title: "Inventory Database Coding", desc: "Setting up database tables to manage product variants, stock, and orders." },
      { title: "API Integration", desc: "Connecting payment gateways, shipping APIs, and testing workflows." }
    ],
    benefitsTitle: "Why Choose a Custom E-commerce Solution?",
    benefits: [
      { title: "Sub-Second Page Loads", desc: "Pre-rendered static product pages load quickly, helping improve user retention." },
      { title: "No Subscription Transaction Fees", desc: "Avoid per-transaction fees or monthly subscriptions by owning your code." },
      { title: "Flexible Design Control", desc: "Modify shopping flows, checkout layouts, and product structures without platform limits." }
    ],
    faqs: [
      { question: "Why use headless e-commerce over standard templates?", answer: "Headless e-commerce provides faster load times, better layout control, and easier integrations with custom ERPs." },
      { question: "Is customer checkout data secure?", answer: "Yes, we route all transaction data securely through tokenized pathways to PCI-compliant gateways." }
    ],
    internalLinks: [
      { label: "E-commerce Development", href: "/services/ecommerce-development" },
      { label: "Web Development Services", href: "/services/web-development" },
      { label: "PostgreSQL Database Services", href: "/technologies/postgresql-development" }
    ]
  },
  "business-automation": {
    slug: "business-automation",
    title: "Custom Business Automation Solutions & Workflow Systems",
    metaDescription: "Reduce manual tasks with custom business automation solutions. We build workflow engines, custom API connectors, and administrative dashboards.",
    keywords: ["business automation solutions", "workflow automation systems", "custom API integrations", "operations software developer", "automated database system"],
    h1: "Bespoke Business Automation Solutions",
    badge: "Automate Workflows",
    headlineAccent: "Simplify Operations, Reduce Manual Work",
    description: "We build custom database dashboards, automated approval pipelines, and custom notification systems that streamline operations.",
    overviewTitle: "Custom Automation Solutions Tailored to Your Workflows",
    overviewContent: "Manual data entry and spreadsheet tracking can slow down daily operations. We build custom business automation tools that connect your systems, trigger notifications, automate PDF document creation, and provide single-source dashboards. This helps operations teams reduce manual work and improve data accuracy.",
    capabilities: [
      "Custom multi-tier approval workflows and database pipelines",
      "Automated document creation (invoices, offers, approval letters)",
      "Custom API integrations (WhatsApp, email alerts, payment gates)",
      "Multi-role user permission dashboards and audit logs",
      "Database schema synchronization and operations metrics tracking",
      "Real-time event logging and status tracking workflows"
    ],
    technologies: ["Next.js", "Node.js", "TypeScript", "PostgreSQL", "Prisma", "Socket.io"],
    processTitle: "Automation Sprints",
    process: [
      { title: "Process Flow Auditing", desc: "Mapping manual tasks, system inputs, approval gates, and data outputs." },
      { title: "Database & Pipeline Coding", desc: "Setting up database tables, role privileges, dynamic states, and email/SMS triggers." },
      { title: "Live System Testing", desc: "Testing workflows with operations teams and adjusting parameters." }
    ],
    benefitsTitle: "How Custom Automation Helps Your Business",
    benefits: [
      { title: "Reduce Manual Tasks", desc: "Automate repetitive data tasks to help your team focus on high-value operations." },
      { title: "Improve Data Accuracy", desc: "Use database validations and automated file generators to help prevent data duplicate issues." },
      { title: "Operational Insights", desc: "Admins can view team performance metrics and bottlenecks on real-time dashboards." }
    ],
    faqs: [
      { question: "Can we send automated notifications via WhatsApp?", answer: "Yes, we integrate third-party WhatsApp APIs to send automated status notifications and alerts." },
      { question: "What hosting is required for automation tools?", answer: "We deploy lightweight servers on cloud platforms like AWS or Supabase, optimized for low overhead." }
    ],
    internalLinks: [
      { label: "Business Automation Services", href: "/services/business-automation" },
      { label: "Custom CRM Development", href: "/solutions/custom-crm-development" },
      { label: "Software Development Services", href: "/services/software-development" }
    ]
  },
  "custom-web-applications": {
    slug: "custom-web-applications",
    title: "Custom Web Application Development | Scalable Web Portals",
    metaDescription: "Custom web application development services in Mumbai. We build secure admin portals, interactive dashboards, and scalable database systems.",
    keywords: ["custom web application development", "web portal developer", "custom software dashboard", "mumbai software agency", "nextjs web application"],
    h1: "Custom Web Application Development Services",
    badge: "Scale Online Apps",
    headlineAccent: "High-Performance Web Solutions",
    description: "We design and build secure, type-safe web applications, administrative dashboards, and database portals using modern React & Next.js architectures.",
    overviewTitle: "Custom Web Applications Engineered for Scale",
    overviewContent: "Nexyn Studios builds custom web applications tailored to specific business requirements. We focus on modern frameworks, server-side rendering, and SQL database tuning. This helps ensure that your admin portals, dashboard displays, or customer systems perform well under high user traffic.",
    capabilities: [
      "Custom web application design using Next.js & React",
      "Dynamic interactive dashboards and database analytics views",
      "Multi-role user authentication and access control rules",
      "RESTful API design and database integrations using Prisma ORM",
      "Automated document creation (receipts, logs, summary PDFs)",
      "Technical SEO auditing and green Lighthouse optimization"
    ],
    technologies: ["Next.js", "React.js", "TypeScript", "Node.js", "PostgreSQL", "Prisma", "Tailwind CSS"],
    processTitle: "Our Web App Development Process",
    process: [
      { title: "Database & API Design", desc: "Mapping relational tables, indexing, and routing logic." },
      { title: "Frontend & Flow Development", desc: "Coding interactive interfaces and linking them to secure APIs." },
      { title: "Security & Optimization", desc: "Tuning query execution times, hardening headers, and testing security protocols." }
    ],
    benefitsTitle: "Why Choose Nexyn Studios for Your Web App?",
    benefits: [
      { title: "High Performance", desc: "We use Server-Side Rendering (SSR) to help ensure that web pages load quickly." },
      { title: "No Licensing Fees", desc: "Maintain complete ownership of your code, allowing you to add users as your business scales." },
      { title: "Modern Design Identity", desc: "We create responsive, brand-aligned interfaces that work across mobile and desktop." }
    ],
    faqs: [
      { question: "What technologies do you use for web apps?", answer: "We use TypeScript, Next.js, and React for frontend development, and Node.js or NestJS with PostgreSQL for backend services." },
      { question: "How do you handle application security?", answer: "We implement secure session tokens, encryption protocols, strict role-based access, and deploy on private virtual clouds." }
    ],
    internalLinks: [
      { label: "Web Development Services", href: "/services/web-development" },
      { label: "Next.js Development", href: "/technologies/nextjs-development" },
      { label: "React Development", href: "/technologies/react-development" }
    ]
  }
};

// ─── LOCATION PAGES ─────────────────────────────────────────────────────────
export const LOCATION_PAGES: Record<string, PageData> = {
  "mumbai": {
    slug: "mumbai",
    title: "Custom Software Company in Mumbai | Nexyn Studios Malad",
    metaDescription: "Nexyn Studios is a premier custom software development company in Mumbai. Based in Malad West, we serve enterprises across Mumbai, Thane, and Navi Mumbai.",
    keywords: ["software company in Mumbai", "software development Mumbai", "mumbai software studio", "CRM developer Mumbai", "custom software Malad"],
    h1: "Top Custom Software & CRM Development Company in Mumbai",
    badge: "Mumbai Tech Partner",
    headlineAccent: "Engineering Growth for Mumbai Businesses",
    description: "Located in Malad West, Mumbai, we engineer custom software, bespoke CRM systems, and high-performance web applications that help businesses automate workflows.",
    overviewTitle: "Serving Mumbai's Growing Enterprise Ecosystem",
    overviewContent: "Nexyn Studios is based in Malad, Mumbai, serving businesses across the metropolitan region. We build custom software solutions, ERP portals, and database automation systems designed for local enterprise workflows. Our team works directly with stakeholders to design and launch platforms that help reduce manual tasks and improve data accuracy.",
    capabilities: [
      "Custom software development for local enterprises",
      "Bespoke CRM & ERP portal systems tailored to sales pipelines",
      "High-performance Next.js websites and headless e-commerce storefronts",
      "Cross-platform mobile apps for iOS and Android using React Native",
      "Automated inventory management database software",
      "On-site requirement scoping workshops for Mumbai clients"
    ],
    technologies: ["Next.js", "React.js", "TypeScript", "Node.js", "PostgreSQL", "Prisma", "AWS"],
    processTitle: "Our Scoping Process",
    process: [
      { title: "Requirements Workshop", desc: "Scoping sessions with stakeholders to map database rules and dashboard views." },
      { title: "Agile Development", desc: "Bi-weekly sprint deliveries, allowing client teams to test and review progress." },
      { title: "Launch & Support", desc: "Production deployment, database setup, and team onboarding assistance." }
    ],
    benefitsTitle: "Why Choose a Local Mumbai Software Partner?",
    benefits: [
      { title: "In-Person Scoping Sessions", desc: "We conduct workshops with your team in Mumbai to map workflows and databases." },
      { title: "Proven Local Projects", desc: "We built the scholarship database portal for the United Welfare Foundation (UWF) in Mumbai, aiding 49+ students." },
      { title: "Dedicated Support Team", desc: "Our developers are available for ongoing maintenance and updates during local business hours." }
    ],
    faqs: [
      { question: "Where is your office located in Mumbai?", answer: "Our team is located in Malad West, Mumbai, serving clients across the city." },
      { question: "Do you offer post-launch support?", answer: "Yes, we provide maintenance and support plans to help keep your software secure and updated." }
    ],
    internalLinks: [
      { label: "Software Development Services", href: "/services/software-development" },
      { label: "Custom CRM Development", href: "/solutions/custom-crm-development" },
      { label: "Web Development Services", href: "/services/web-development" }
    ]
  },
  "thane": {
    slug: "thane",
    title: "Custom Software Development Company in Thane | Nexyn Studios",
    metaDescription: "Partner with a leading software development company in Thane. We build bespoke CRM systems, database dashboards, and Next.js web applications.",
    keywords: ["software development company in Thane", "custom software Thane", "CRM developer Thane", "web app developer Thane", "thane software studio"],
    h1: "Custom Software & Web Development Services in Thane",
    badge: "Thane Tech Partner",
    headlineAccent: "Engineering Custom Software Solutions",
    description: "We design and build bespoke CRM portals, inventory databases, and scalable web applications for businesses across Thane and Mumbai.",
    overviewTitle: "Supporting Thane's Expanding Business Hubs",
    overviewContent: "Thane's business landscape has grown, requiring scalable digital systems to manage operations. We build custom database software, client-partner portals, and workflow automation systems that help businesses replace manual spreadsheets. Our team works with clients in Thane to design platforms that match their specific workflows.",
    capabilities: [
      "Custom database portal design for Thane businesses",
      "Bespoke CRM systems to manage lead pipelines and documents",
      "Next.js web applications and headless e-commerce storefronts",
      "React Native mobile apps with offline database syncing",
      "Automated document creation tools (invoices, agreements, PDF letters)",
      "Technical SEO configuration and Core Web Vitals optimization"
    ],
    technologies: ["Next.js", "React.js", "TypeScript", "Node.js", "PostgreSQL", "Prisma", "Tailwind CSS"],
    processTitle: "Our Development Process",
    process: [
      { title: "Operational Auditing", desc: "Reviewing manual steps and defining database permissions." },
      { title: "Database & UI Coding", desc: "Building relational databases, dashboard views, and workflows." },
      { title: "API Integration & Launch", desc: "Connecting payment channels, notifications, and launching the portal." }
    ],
    benefitsTitle: "Why Partner with Nexyn Studios in Thane?",
    benefits: [
      { title: "Operational Automation", desc: "Automate repetitive data tasks to help your team reduce administrative load." },
      { title: "Scalable Database Structures", desc: "We design databases that manage growing data volumes without licensing fees." },
      { title: "Local Collaboration", desc: "Our team collaborates closely with businesses in Thane during development and support." }
    ],
    faqs: [
      { question: "Do you serve clients in Thane?", answer: "Yes, we serve enterprises and startups throughout Thane, coordinating workshops and project reviews." },
      { question: "Can we customize CRM pipelines for our team?", answer: "Yes, we build custom CRMs designed specifically for your sales and operational workflows." }
    ],
    internalLinks: [
      { label: "Software Development Services", href: "/services/software-development" },
      { label: "Custom CRM Development", href: "/solutions/custom-crm-development" },
      { label: "Web Development Services", href: "/services/web-development" }
    ]
  },
  "navi-mumbai": {
    slug: "navi-mumbai",
    title: "Bespoke Software Development Company in Navi Mumbai | Nexyn",
    metaDescription: "Partner with a leading software company in Navi Mumbai. We build custom CRM portals, database dashboards, and cross-platform mobile apps.",
    keywords: ["software company in Navi Mumbai", "custom software Navi Mumbai", "CRM developer Navi Mumbai", "database portal Navi Mumbai", "navi mumbai developers"],
    h1: "Bespoke Software & App Development Services in Navi Mumbai",
    badge: "Navi Mumbai Tech Partner",
    headlineAccent: "Building Scalable Custom Software",
    description: "We build custom ERP databases, bespoke CRM pipelines, and cross-platform iOS & Android mobile applications for businesses in Navi Mumbai.",
    overviewTitle: "Engineering Custom Digital Solutions for Navi Mumbai Businesses",
    overviewContent: "Navi Mumbai is a hub for logistics, manufacturing, and IT businesses. These sectors require scalable database systems and automated workflows to manage growing operations. We design and build custom ERP portals, real-time dispatch systems, and customer databases that help businesses streamline processes.",
    capabilities: [
      "Custom software and ERP databases for logistics and manufacturing",
      "Bespoke CRM systems designed to track sales pipelines",
      "React Native mobile apps with offline database caching",
      "Next.js web applications and headless e-commerce storefronts",
      "Automated document generators (proposals, invoice PDFs)",
      "Technical SEO auditing and Core Web Vitals optimization"
    ],
    technologies: ["Next.js", "React.js", "TypeScript", "Node.js", "PostgreSQL", "Prisma", "Tailwind CSS"],
    processTitle: "Our Sprints",
    process: [
      { title: "Requirements Blueprinting", desc: "Mapping database schemas, permissions, and workflow steps." },
      { title: "Iterative Coding", desc: "Bi-weekly sprint deliveries, allowing team reviews and adjustments." },
      { title: "Deployment & Support", desc: "Launching on secure cloud hosting, importing database records, and onboarding." }
    ],
    benefitsTitle: "Why Choose Nexyn Studios in Navi Mumbai?",
    benefits: [
      { title: "Optimized Workflows", desc: "Replace manual steps with custom business automation software designed for your team." },
      { title: "No Per-User Licensing", desc: "Maintain complete ownership of your code, allowing team scaling without extra fees." },
      { title: "Experienced Tech Team", desc: "Our developers design relational databases and secure interfaces for your business requirements." }
    ],
    faqs: [
      { question: "Do you serve businesses in Navi Mumbai?", answer: "Yes, we serve clients in Navi Mumbai, coordinating project scoping and reviews." },
      { question: "Can the software connect with our inventory systems?", answer: "Yes, we write custom API connectors to sync database records with existing inventory software." }
    ],
    internalLinks: [
      { label: "Software Development Services", href: "/services/software-development" },
      { label: "Custom CRM Development", href: "/solutions/custom-crm-development" },
      { label: "Web Development Services", href: "/services/web-development" }
    ]
  }
};
