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

export interface FeatureOffering {
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
  heroImage?: string;
  heroImageAlt?: string;
  overviewTitle: string;
  overviewContent: string;
  whatWeOfferTitle?: string;
  whatWeOffer?: FeatureOffering[];
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
  "custom-development": {
    slug: "custom-development",
    title: "Custom Software Development Services | Enterprise CRM & ERP Solutions",
    metaDescription: "Nexyn Studios provides bespoke custom software development services in Mumbai. We build enterprise CRM, ERP, client portals, and custom workflow software.",
    keywords: [
      "custom software development",
      "custom software development services",
      "custom CRM development",
      "ERP software development",
      "enterprise software company",
      "workflow automation software",
      "custom portal development",
      "software development company Mumbai"
    ],
    h1: "Custom Software Development Services",
    badge: "Enterprise-Grade Architecture",
    headlineAccent: "Engineered Around Your Business",
    description: "Software engineered around the way your business actually works. We build custom CRMs, ERP platforms, bespoke portals, and enterprise workflow engines to eliminate manual overhead.",
    heroImage: "/images/services/custom-development.png",
    heroImageAlt: "Custom Software Development Dashboard and Architecture",
    overviewTitle: "Bespoke Enterprise Systems Tailored to Your Rules",
    overviewContent: "Off-the-shelf software forces your business to compromise its operational workflows to fit rigid vendor limitations. At Nexyn Studios, we reverse that paradigm. We architect custom software platforms designed specifically around your proprietary processes, data structures, and multi-tier team permissions. From custom CRMs and ERP engines to high-security client portals, our custom software solutions help organizations eliminate spreadsheet fragmentation, increase data integrity, and scale operations seamlessly.",
    whatWeOfferTitle: "What We Build in Custom Software",
    whatWeOffer: [
      {
        title: "Custom CRM Systems",
        desc: "Bespoke lead management, sales pipeline tracking, automated client communications, and deal analytics built for your exact sales funnel."
      },
      {
        title: "ERP Platforms",
        desc: "Centralized inventory tracking, multi-branch supply chain operations, order processing, and automated financial auditing tools."
      },
      {
        title: "Client & Partner Portals",
        desc: "High-security client dashboards featuring role-based access control, real-time status reporting, document sharing, and client onboarding."
      },
      {
        title: "Workflow Automation Engines",
        desc: "Rule-based event triggers that eliminate manual data copy-pasting, generate automated reports, and connect disconnected software."
      },
      {
        title: "Internal Admin Tools",
        desc: "Custom operational dashboards for team activity management, staff permissions, compliance tracking, and administrative controls."
      },
      {
        title: "Legacy Software Modernization",
        desc: "Seamless upgrade of legacy monolithic databases and legacy applications to cloud-native microservices with zero downtime."
      }
    ],
    capabilities: [
      "Bespoke CRM & ERP platforms tailored entirely to your sales pipelines and inventory rules",
      "End-to-end workflow automation to streamline operations and eliminate human errors",
      "High-security multi-tenant Admin Portals and Client dashboards with role-based access",
      "Seamless integration with third-party APIs (payment gateways, logistics, SMS, WhatsApp)",
      "Legacy application migration and database modernization with zero business downtime",
      "Database schema design, index tuning, and high-concurrency query execution optimization"
    ],
    technologies: ["Next.js", "TypeScript", "Node.js", "NestJS", "PostgreSQL", "Prisma", "Docker", "AWS"],
    processTitle: "Our Custom Development Process",
    process: [
      { title: "01 — Discovery & Requirements", desc: "Comprehensive mapping of your business rules, operational bottlenecks, database structures, and security scopes." },
      { title: "02 — Architecture & Database Design", desc: "Designing relational database schemas, API contracts, permission hierarchies, and system interfaces." },
      { title: "03 — Wireframing & UX Design", desc: "Creating high-fidelity clickable mockups to validate operational flows with key stakeholders before coding." },
      { title: "04 — Agile Engineering", desc: "Iterative bi-weekly development sprints with continuous integrations and regular demo feedback sessions." },
      { title: "05 — Quality & Security Audit", desc: "Rigorous automated testing, role privilege verification, SQL injection protection, and performance load testing." },
      { title: "06 — Deployment & Data Migration", desc: "Staged deployment to private virtual clouds, legacy data sanitization, migration scripts, and production launch." },
      { title: "07 — Support & SLA Maintenance", desc: "Dedicated ongoing technical support, proactive monitoring, security updates, and continuous feature updates." }
    ],
    benefitsTitle: "Business Impact & Key Benefits",
    benefits: [
      { title: "Zero Subscription Fees", desc: "Own your source code with zero per-user monthly software licensing fees as your headcount grows." },
      { title: "Perfect Operational Fit", desc: "Software adapts precisely to your internal workflow rules rather than forcing staff to adapt to rigid tools." },
      { title: "Higher Team Velocity", desc: "Automate manual data entry and repetitive tasks to increase operational output by over 40%." },
      { title: "Enterprise Data Security", desc: "Deploy in private cloud environments with role-based access control, encrypted databases, and audit logs." },
      { title: "Seamless Interoperability", desc: "Unify your databases, payment pathways, logistics APIs, and communication tools into a single platform." },
      { title: "Long-Term Scalability", desc: "Modular cloud architecture designed to handle millions of records and high user concurrency without performance degradation." }
    ],
    faqs: [
      { question: "Why choose custom software development over off-the-shelf SaaS?", answer: "Custom software gives you full ownership of source code, zero per-seat subscription fees, total security control, and a platform built exactly around your proprietary business workflows." },
      { question: "Can you migrate data from our existing Excel spreadsheets or legacy database?", answer: "Yes. We write custom database migration scripts to extract, sanitize, format, and import legacy data into a structured relational database with full data integrity checks." },
      { question: "Who owns the intellectual property (IP) and source code?", answer: "You retain 100% ownership of all source code, database architecture, assets, and intellectual property developed during the project." },
      { question: "How do you ensure data security and role permissions?", answer: "We enforce strict Role-Based Access Control (RBAC), session token authentication, database encryption at rest and in transit, and host on isolated virtual private clouds." },
      { question: "How long does a custom software development project take?", answer: "Timeline depends on feature scope. Typical MVP solutions take 6–10 weeks, while large enterprise ERPs are delivered in phased milestones over 12–16 weeks." },
      { question: "What post-launch support and maintenance do you provide?", answer: "We provide SLA-backed maintenance packages including server monitoring, automated database backups, security patching, and ongoing feature updates." }
    ],
    internalLinks: [
      { label: "AI & Automation Services", href: "/services/ai-automation" },
      { label: "Web Development Services", href: "/services/web-development" },
      { label: "Cloud & DevOps Infrastructure", href: "/services/cloud-devops" },
      { label: "UI/UX Product Design", href: "/services/ui-ux-design" }
    ]
  },
  "ui-ux-design": {
    slug: "ui-ux-design",
    title: "UI/UX Design Services | Modern SaaS & Product Design Agency",
    metaDescription: "Nexyn Studios delivers research-driven UI/UX design services. We create modern product interfaces, clickable wireframes, design systems, and conversion funnels.",
    keywords: [
      "UI UX design services",
      "UI UX design agency Mumbai",
      "SaaS product design",
      "design system agency",
      "user experience design",
      "wireframes and prototypes",
      "conversion rate optimization",
      "Figma design system"
    ],
    h1: "UI/UX Design Services",
    badge: "User-Centered Aesthetics",
    headlineAccent: "Intuitive & High-Converting Interfaces",
    description: "Conversion-optimized, modern user interfaces designed after extensive research to match your company branding, improve retention, and create a premium product experience.",
    heroImage: "/images/services/ui-ux-design.png",
    heroImageAlt: "Modern UI/UX Design System Workspace and SaaS Interface",
    overviewTitle: "Research-Driven Product Design for High Conversion",
    overviewContent: "Visuals are only half the battle. Exceptional product design is about how your application works, how effortlessly users navigate, and how seamlessly they accomplish key actions. At Nexyn Studios, our UI/UX design process begins with deep user persona research, user journey mapping, and competitor flow audits. We create unified Figma design systems that maintain brand identity across all screens, increase product retention, and accelerate engineering handoffs.",
    whatWeOfferTitle: "Our UI/UX Design Offerings",
    whatWeOffer: [
      {
        title: "User Research & Persona Mapping",
        desc: "In-depth user journey analysis, stakeholder interviews, user persona mapping, and usability friction audits."
      },
      {
        title: "Wireframing & Interactive Prototypes",
        desc: "Low-fidelity structural blueprints and interactive clickable prototypes to test user flows before writing code."
      },
      {
        title: "SaaS Dashboard & Interface Design",
        desc: "Sleek, modern UI design for complex web applications, analytics dashboards, and enterprise portals."
      },
      {
        title: "Scalable Design Systems",
        desc: "Comprehensive UI component libraries in Figma with standardized color tokens, spacing rules, and typography scales."
      },
      {
        title: "Mobile App UX Design",
        desc: "Native iOS & Android screen designs with touch-target optimization, haptic feedback rules, and fluid gesture navigation."
      },
      {
        title: "Conversion Rate Optimization (CRO)",
        desc: "Targeted redesigns of landing pages, checkout flows, and user onboarding steps to maximize registrations and sales."
      }
    ],
    capabilities: [
      "User research, user personas mapping, and detailed competitor analysis",
      "Interactive wireframing, high-fidelity mockups, and clickable prototypes",
      "Modern, responsive UI design tailored to your global brand identity",
      "Scalable, production-ready Design Systems & Component Sheets for fast engineering",
      "Conversion Rate Optimization (CRO) to maximize customer registrations and sales",
      "A/B testing guidelines, user flow audits, and accessibility compliance checks"
    ],
    technologies: ["Figma", "Tailwind CSS", "CSS Variables", "Framer Motion", "Google Fonts", "Design Systems"],
    processTitle: "Our Design Methodology",
    process: [
      { title: "01 — Discovery & User Research", desc: "Interviewing stakeholders, reviewing current analytics, and mapping target user personas and pain points." },
      { title: "02 — Information Architecture", desc: "Structuring content hierarchy, navigation trees, and core user task flows." },
      { title: "03 — Wireframing & Layout Blueprint", desc: "Drafting gray-scale wireframes to establish structural layout and element placement without visual distraction." },
      { title: "04 — Visual UI Design", desc: "Applying brand visual identity, modern color palettes, typography scales, and glassmorphic card elements." },
      { title: "05 — Design System Creation", desc: "Bundling atomic UI components, button states, form fields, and token variables in Figma." },
      { title: "06 — Interactive Prototype Testing", desc: "Building clickable prototypes to conduct usability walkthroughs and gather real user feedback." },
      { title: "07 — Developer Handoff", desc: "Delivering pixel-perfect Figma specs, asset exports, design tokens, and CSS guidelines to engineering teams." }
    ],
    benefitsTitle: "Measurable Business Outcomes",
    benefits: [
      { title: "Lower Customer Churn", desc: "Intuitive user flows remove friction, resulting in higher product adoption and customer retention." },
      { title: "Accelerated Frontend Sprints", desc: "Production-ready design systems allow developers to reuse component specs, reducing coding time by 40%." },
      { title: "Higher Conversion Rates", desc: "Optimizing landing pages and onboarding steps directly converts more site visitors into paying clients." },
      { title: "Premium Brand Impression", desc: "State-of-the-art SaaS aesthetics build immediate trust and credibility with enterprise buyers." },
      { title: "Accessibility Compliance", desc: "WCAG-compliant contrast ratios and focus states ensure your app is accessible on all screens." },
      { title: "Reduced Support Tickets", desc: "Clear interface hierarchy and self-explanatory navigation reduce user confusion and support requests." }
    ],
    faqs: [
      { question: "What design tools do you use for UI/UX projects?", answer: "We design exclusively in Figma, providing live link access, interactive prototypes, and organized component libraries for your team." },
      { question: "Do you design for both web and mobile platforms?", answer: "Yes. We create responsive UI designs that scale seamlessly from ultra-wide desktop monitors to tablets and native mobile viewports." },
      { question: "What is included in a design system handoff?", answer: "Our design systems include typography tokens, color schemes, component variants (hover, active, disabled states), icon sets, spacing rules, and responsive specs." },
      { question: "Can you audit and redesign our existing digital product?", answer: "Yes. We conduct UX audits to identify drop-off points, accessibility flaws, and visual inconsistencies, followed by a targeted redesign plan." },
      { question: "How do you ensure developers implement the design accurately?", answer: "We provide Figma inspect specs, CSS token values, asset exports, and conduct visual QA checks with developers before launch." },
      { question: "How long does a full UI/UX design project take?", answer: "Initial wireframes and core screen designs take 2–4 weeks. Complete product design systems take 4–6 weeks depending on screen count." }
    ],
    internalLinks: [
      { label: "Web Development Services", href: "/services/web-development" },
      { label: "Mobile App Development", href: "/services/mobile-app-development" },
      { label: "Custom Software Development", href: "/services/custom-development" }
    ]
  },
  "web-development": {
    slug: "web-development",
    title: "Web Development Services | Next.js & React Web Applications",
    metaDescription: "Nexyn Studios provides high-performance web development services in Mumbai. We build responsive Next.js & React web applications engineered for speed, SEO, and scale.",
    keywords: [
      "web development services",
      "web development company Mumbai",
      "Nextjs development company",
      "React web application developer",
      "custom web apps",
      "SEO web development",
      "headless CMS development",
      "frontend engineering agency"
    ],
    h1: "Web Development Services",
    badge: "Performance & SEO Focused",
    headlineAccent: "Lighting-Fast Web Applications",
    description: "SEO-optimized, lightning-fast websites and custom web applications powered by modern frontend frameworks to deliver seamless performance on all devices.",
    heroImage: "/images/services/web-development.png",
    heroImageAlt: "High-Performance Next.js Web Development Architecture",
    overviewTitle: "Modern Web Engineering for Business Growth",
    overviewContent: "Your web application is often the primary touchpoint for acquiring new clients and showcasing your software solutions. Slow loading speeds, broken mobile layouts, or poor search engine indexation directly destroy growth opportunities. At Nexyn Studios, we build high-performance web applications using React, Next.js, and TypeScript. By leveraging Server-Side Rendering (SSR) and edge-network caching, we ensure sub-second page loads, top Core Web Vitals metrics, and immediate search engine indexing.",
    whatWeOfferTitle: "Our Web Development Solutions",
    whatWeOffer: [
      {
        title: "Next.js Web Applications",
        desc: "Server-Side Rendered (SSR) & Static Site Generated (SSG) web applications designed for blazing speed and search rank domination."
      },
      {
        title: "Headless CMS Platforms",
        desc: "Decoupled web platforms integrated with Sanity, Strapi, or Contentful for real-time marketing content management."
      },
      {
        title: "Custom E-Commerce Storefronts",
        desc: "High-converting online store layouts, custom shopping cart logic, secure checkout flows, and payment gateway sync."
      },
      {
        title: "Enterprise Web Portals",
        desc: "Interactive analytics dashboards, multi-user customer portals, and real-time operations web applications."
      },
      {
        title: "Progressive Web Apps (PWAs)",
        desc: "Web applications featuring offline support, native-like mobile installability, and push notification triggers."
      },
      {
        title: "API & Database Integrations",
        desc: "Robust RESTful and GraphQL API connections linking your web app to core backend databases and third-party tools."
      }
    ],
    capabilities: [
      "High-performance React & Next.js applications with Server-Side Rendering (SSR)",
      "Headless CMS integration (Sanity, Strapi) for easy, real-time content management",
      "Fully responsive mobile-first layouts with smooth, physics-based micro-animations",
      "Robust e-commerce storefronts, secure payment processors, and custom cart flows",
      "Advanced Technical SEO configuration to rank higher on search engines from day one",
      "W3C standards compliance, security hardening, and Vercel/AWS cloud optimization"
    ],
    technologies: ["Next.js", "React.js", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS", "Vercel", "GraphQL"],
    processTitle: "Our Web Development Process",
    process: [
      { title: "01 — Technical Discovery", desc: "Analyzing project goals, SEO target keywords, user journeys, and technical stack requirements." },
      { title: "02 — Architecture & Database Schema", desc: "Mapping dynamic route structures, database relations, state management rules, and API endpoints." },
      { title: "03 — Frontend Development", desc: "Building responsive, component-driven interfaces using Next.js, React, TypeScript, and Tailwind CSS." },
      { title: "04 — Backend & API Connectivity", desc: "Integrating database query pipelines, authentication handlers, payment gateways, and CMS hooks." },
      { title: "05 — Core Web Vitals Optimization", desc: "Optimizing Largest Contentful Paint (LCP), Cumulative Layout Shift (CLS), images, and JavaScript bundle sizes." },
      { title: "06 — Cross-Browser & Mobile QA", desc: "Testing layouts across Chrome, Safari, Firefox, Edge, iOS, and Android screens for flawless responsiveness." },
      { title: "07 — Edge Deployment & Launch", desc: "Deploying to Vercel/AWS global Edge CDNs with SSL security, domain mapping, and analytics setup." }
    ],
    benefitsTitle: "Why Partner with Nexyn Studios",
    benefits: [
      { title: "SEO-First Architecture", desc: "Server-rendered HTML, dynamic metadata, canonical tags, and structured schemas maximize search engine rankings." },
      { title: "Sub-Second Page Loads", desc: "Optimized bundle splitting and edge caching keep load times under 1 second, drastically reducing bounce rates." },
      { title: "Mobile-First Responsiveness", desc: "Pixel-perfect rendering on desktop monitors, tablets, and smartphones ensures zero user drop-off." },
      { title: "Zero Proprietary Lock-In", desc: "Built with standard TypeScript, Next.js, and PostgreSQL so your internal teams can easily maintain it." },
      { title: "Enterprise Grade Security", desc: "Protection against OWASP top 10 threats, XSS attacks, CSRF exploits, and automated spam bots." },
      { title: "Infinite Cloud Scalability", desc: "Serverless and edge deployments automatically scale during high traffic spikes without server downtime." }
    ],
    faqs: [
      { question: "Why do you recommend Next.js over plain React for web applications?", answer: "Next.js provides Server-Side Rendering (SSR) and Static Site Generation (SSG), which deliver instant page loads and allow search engines to crawl clean HTML for vastly superior SEO compared to client-only React." },
      { question: "How do you ensure the website ranks well on Google?", answer: "We implement dynamic metadata tags, Open Graph tags, canonical URLs, breadcrumb schemas, proper H1/H2 heading hierarchy, XML sitemaps, and optimize Core Web Vitals for green Lighthouse scores." },
      { question: "Can we manage website content ourselves after launch?", answer: "Yes. We integrate headless Content Management Systems (like Sanity or Strapi) that allow non-technical team members to edit text, upload blog posts, and update media without writing code." },
      { question: "Is my web application mobile responsive?", answer: "Every web app we build is designed mobile-first and tested across all major smartphones, tablets, and desktop resolutions." },
      { question: "Do you integrate payment gateways like Razorpay or Stripe?", answer: "Yes, we build secure PCI-compliant payment integrations supporting credit cards, UPI, net banking, subscriptions, and webhooks." },
      { question: "What is your web development delivery timeline?", answer: "Standard corporate web apps are delivered in 4–6 weeks. Complex enterprise web portals or e-commerce platforms take 6–10 weeks." }
    ],
    internalLinks: [
      { label: "UI/UX Design Services", href: "/services/ui-ux-design" },
      { label: "Cloud & DevOps Infrastructure", href: "/services/cloud-devops" },
      { label: "Custom Software Development", href: "/services/custom-development" },
      { label: "AI & Automation Services", href: "/services/ai-automation" }
    ]
  },
  "mobile-app-development": {
    slug: "mobile-app-development",
    title: "Mobile App Development Services | Custom iOS & Android Apps",
    metaDescription: "Nexyn Studios is a top mobile app development company. We engineer premium cross-platform iOS & Android mobile apps using React Native with native speed & offline sync.",
    keywords: [
      "mobile app development services",
      "mobile app development Mumbai",
      "React Native app development",
      "iOS app development agency",
      "Android app development",
      "cross platform mobile apps",
      "mobile product engineering",
      "App Store deployment"
    ],
    h1: "Mobile App Development Services",
    badge: "Cross-Platform Mobility",
    headlineAccent: "Native Performance on iOS & Android",
    description: "Premium iOS and Android mobile applications engineered with native components to deliver exceptional performance, high-speed interactions, and offline capability.",
    heroImage: "/images/services/mobile-app-development.png",
    heroImageAlt: "iOS and Android Mobile Application Development Ecosystem",
    overviewTitle: "High-Performance Mobile Product Engineering",
    overviewContent: "Mobile users expect instant app launches, 60fps gesture interactions, and reliable offline data availability. Building separate native apps for Apple iOS and Google Android doubles your development costs, delays launch timelines, and fragments feature updates. At Nexyn Studios, we specialize in cross-platform mobile development using React Native and Expo. We write compiled TypeScript code that renders native platform UI components on both iOS and Android, sharing a single codebase to cut time-to-market in half while maintaining native responsiveness.",
    whatWeOfferTitle: "Our Mobile App Capabilities",
    whatWeOffer: [
      {
        title: "Cross-Platform Mobile Apps",
        desc: "Feature-rich iOS and Android mobile apps engineered with single-codebase efficiency and zero performance compromise."
      },
      {
        title: "Native Hardware Integration",
        desc: "Direct hardware access for camera features, biometric authentication (FaceID/Fingerprint), GPS location, and Bluetooth."
      },
      {
        title: "Offline-First Synchronization",
        desc: "Local SQLite database caching enabling users to work uninterrupted without active internet connectivity."
      },
      {
        title: "Push Notification Engines",
        desc: "Firebase Cloud Messaging (FCM) integration for automated transactional alerts, background notifications, and user re-engagement."
      },
      {
        title: "Mobile App UI/UX Redesign",
        desc: "Modernizing legacy mobile applications with modern gesture navigation, haptic feedback, and fluid micro-animations."
      },
      {
        title: "App Store Publishing & ASO",
        desc: "Complete release management for Apple App Store and Google Play Console compliance, assets packaging, and ASO."
      }
    ],
    capabilities: [
      "Cross-platform mobile application development using React Native framework",
      "Native iOS (Swift/Objective-C) and Android (Kotlin/Java) app engineering",
      "Mobile-first UX design, haptic feedback integration, and modern gesture controls",
      "Secure server-side API development, offline synchronization, and caching",
      "App Store (Apple) and Google Play Store submission, compliance guidelines, and ASO",
      "Real-time push notifications, chat relay integration, and geo-location tracking"
    ],
    technologies: ["React Native", "TypeScript", "Expo", "SQLite", "Firebase", "Node.js", "iOS Swift", "Android Kotlin"],
    processTitle: "Our Mobile App Development Sprint",
    process: [
      { title: "01 — Mobile Product Blueprinting", desc: "Defining user stories, mobile hardware requirements, offline data rules, and screen flow architecture." },
      { title: "02 — Mobile UI/UX Prototyping", desc: "Designing touch-optimized mobile screens, gesture patterns, and interactive clickable prototypes." },
      { title: "03 — React Native Core Development", desc: "Writing clean, modular TypeScript code and configuring navigation flows and state stores." },
      { title: "04 — Native Device Integration", desc: "Connecting device sensors, camera plugins, push notification tokens, and local SQLite caches." },
      { title: "05 — TestFlight & Beta Distribution", desc: "Distributing preview builds to stakeholders via Apple TestFlight and Google Play Beta." },
      { title: "06 — Store Compliance & Auditing", desc: "Verifying privacy policies, app permissions, assets requirements, and store guidelines." },
      { title: "07 — Store Publishing & Monitoring", desc: "Submitting to the App Store & Play Store with live crash reporting and analytics monitoring." }
    ],
    benefitsTitle: "Why Choose Cross-Platform Mobile Apps",
    benefits: [
      { title: "50% Faster Time to Market", desc: "Ship simultaneously to Apple App Store and Google Play Store from a single TypeScript codebase." },
      { title: "Native 60fps Performance", desc: "Compiled React Native UI components deliver fluid 60fps animations and rapid gesture responses." },
      { title: "Lower Maintenance Costs", desc: "A single engineering team manages app updates, eliminating the cost of separate iOS and Android teams." },
      { title: "Offline Data Access", desc: "Local database persistence allows users to interact with content offline and sync automatically when online." },
      { title: "Instant OTA Updates", desc: "Deploy over-the-air bug fixes directly to user devices without waiting for app store review delays." },
      { title: "Higher App Store Ratings", desc: "Polished UI/UX, fast launch speeds, and crash-free stability drive higher ratings and organic downloads." }
    ],
    faqs: [
      { question: "Do you build native mobile apps or cross-platform apps?", answer: "We specialize in React Native, which compiles directly to native iOS (Swift) and Android (Kotlin) components. This gives you native performance while keeping a single maintainable codebase." },
      { question: "Can the mobile app work offline without internet?", answer: "Yes! We implement offline-first architectures using local SQLite database caching. Data saved offline automatically syncs with server APIs once connectivity is restored." },
      { question: "Do you handle App Store and Google Play Store submissions?", answer: "Yes. We handle the entire submission workflow including developer account setup, build signing, privacy policy declarations, app store screenshots, and guideline compliance." },
      { question: "How do push notifications work in your mobile apps?", answer: "We integrate Firebase Cloud Messaging (FCM) and Apple APNs to send real-time transactional alerts, marketing notifications, and automated triggers." },
      { question: "Can you integrate mobile payments like Apple Pay and Google Pay?", answer: "Yes. We integrate Stripe, Razorpay, Apple Pay, and Google Pay SDKs for secure one-touch checkout flows." },
      { question: "How long does it take to develop a custom mobile app?", answer: "Standard mobile MVP applications take 6–10 weeks from initial design to store submission. Complex apps with multi-role portals take 10–14 weeks." }
    ],
    internalLinks: [
      { label: "Web Development Services", href: "/services/web-development" },
      { label: "UI/UX Product Design", href: "/services/ui-ux-design" },
      { label: "Custom Software Development", href: "/services/custom-development" }
    ]
  },
  "cloud-devops": {
    slug: "cloud-devops",
    title: "Cloud & DevOps Services | AWS Infrastructure & CI/CD Pipelines",
    metaDescription: "Nexyn Studios provides high-availability Cloud & DevOps services. We configure AWS/GCP infrastructure, automated CI/CD pipelines, Docker, Kubernetes & 24/7 monitoring.",
    keywords: [
      "cloud devops services",
      "AWS cloud consulting",
      "DevOps agency",
      "CI CD pipeline automation",
      "Kubernetes containerization",
      "Docker cloud infrastructure",
      "cloud security and monitoring",
      "Vercel AWS hosting"
    ],
    h1: "Cloud & DevOps Services",
    badge: "High-Availability Infrastructure",
    headlineAccent: "Zero-Downtime Cloud Operations",
    description: "High-availability, enterprise-grade cloud systems configured with automated pipelines, continuous monitoring, and container security to prevent any downtime.",
    heroImage: "/images/services/cloud-devops.png",
    heroImageAlt: "Cloud & DevOps Infrastructure Monitoring Dashboard",
    overviewTitle: "Enterprise Cloud Systems Built for Uptime & Scale",
    overviewContent: "Unplanned downtime, slow deployment cycles, and unmonitored cloud servers erode customer trust and destroy revenue. Modern software applications demand infrastructure that automatically scales with user traffic while remaining secure against cyber threats. At Nexyn Studios, our DevOps engineers build automated cloud environments on AWS, Google Cloud (GCP), and Vercel. We containerize applications with Docker, orchestrate microservices with Kubernetes, and establish automated CI/CD pipelines so your engineering team can release features with total confidence.",
    whatWeOfferTitle: "Our Cloud & DevOps Solutions",
    whatWeOffer: [
      {
        title: "Cloud Infrastructure Provisioning",
        desc: "Designing and deploying secure AWS, GCP, and Azure cloud networks using Infrastructure as Code (Terraform)."
      },
      {
        title: "Automated CI/CD Pipelines",
        desc: "Building automated testing, container build, and zero-downtime deployment pipelines in GitHub Actions and GitLab."
      },
      {
        title: "Docker & Kubernetes Orchestration",
        desc: "Containerizing microservices and managing Kubernetes clusters for maximum server resource efficiency and auto-scaling."
      },
      {
        title: "24/7 Monitoring & Incident Response",
        desc: "Real-time telemetry monitoring with Prometheus, Grafana, and ELK stack for instant crash alerts and automated recovery."
      },
      {
        title: "Cloud Migration & Cost Optimization",
        desc: "Seamlessly migrating legacy on-premise servers to the cloud while eliminating idle server overhead to reduce monthly cloud bills."
      },
      {
        title: "Security Hardening & Data Backups",
        desc: "Configuring VPC firewalls, SSL management, IAM security roles, automated encrypted backups, and disaster recovery drills."
      }
    ],
    capabilities: [
      "AWS, Google Cloud (GCP), and Azure cloud infrastructure provisioning & security",
      "Fully automated CI/CD pipelines (GitHub Actions) for fast, risk-free code deployments",
      "Microservices containerization using Docker engines and Kubernetes orchestration",
      "24/7 server health monitoring, automatic failover setups, and CPU load balancing",
      "Automated encrypted database backups, cloud migration, and recovery drills",
      "SSL/TLS management, firewall configurations, and server security hardening"
    ],
    technologies: ["AWS", "Google Cloud", "Docker", "Kubernetes", "Terraform", "GitHub Actions", "Nginx", "PostgreSQL"],
    processTitle: "Our DevOps Implementation Cycle",
    process: [
      { title: "01 — Infrastructure Assessment", desc: "Auditing your current server environment, deployment bottlenecks, security risks, and monthly hosting costs." },
      { title: "02 — Cloud Architecture Design", desc: "Designing virtual private clouds (VPCs), load balancers, auto-scaling groups, and database clusters." },
      { title: "03 — Infrastructure as Code (IaC)", desc: "Writing automated Terraform scripts to ensure reproducible, version-controlled cloud environments." },
      { title: "04 — CI/CD Pipeline Automation", desc: "Configuring automated test runs, Docker container builds, and zero-downtime production deployment gates." },
      { title: "05 — Cloud Security Hardening", desc: "Enforcing least-privilege IAM roles, security group firewalls, SSL encryption, and secret key vaults." },
      { title: "06 — Migration & Stress Testing", desc: "Executing data migration scripts, load testing concurrent traffic spikes, and verifying failover procedures." },
      { title: "07 — 24/7 Telemetry Monitoring", desc: "Setting up real-time server health dashboards, alert notifications, and continuous cloud cost optimization." }
    ],
    benefitsTitle: "Business Impact & Reliability",
    benefits: [
      { title: "99.99% Guaranteed Uptime", desc: "High-availability multi-region cluster setups prevent server crashes during high traffic surges." },
      { title: "Zero-Downtime Deployments", desc: "Deploy new code updates seamlessly multiple times a day without causing service disruptions for active users." },
      { title: "Lower Monthly Hosting Bills", desc: "Infrastructure right-sizing and auto-scaling eliminate idle server waste, cutting cloud costs by up to 35%." },
      { title: "Automated Data Protection", desc: "Encrypted daily backups and automated failover guarantees your databases can be restored in minutes." },
      { title: "Enterprise Security Compliance", desc: "Strict VPC network isolation, firewall rules, and encrypted storage protect against cyber attacks." },
      { title: "Accelerated Developer Velocity", desc: "Automated deployment pipelines remove server configuration burden, letting engineers focus on code." }
    ],
    faqs: [
      { question: "What cloud providers do you support?", answer: "We specialize in Amazon Web Services (AWS), Google Cloud Platform (GCP), Vercel, Supabase, and DigitalOcean cloud infrastructure." },
      { question: "How does an automated CI/CD pipeline benefit our software team?", answer: "Automated CI/CD pipelines run automated code tests, build Docker containers, and deploy updates to production automatically whenever code is pushed to Git. This eliminates manual server uploads and human error." },
      { question: "Can you help lower our monthly AWS/GCP cloud bill?", answer: "Yes. We audit your resource utilization, right-size database instances, configure auto-scaling policies, and eliminate unattached storage volumes to reduce hosting costs." },
      { question: "How do you handle zero-downtime deployments?", answer: "We use rolling deployment strategies, green/blue deployments, and Kubernetes pod replacement so new code versions deploy while old versions handle active user traffic." },
      { question: "What happens if a server crashes?", answer: "Our high-availability setups utilize automated health checks and CPU load balancers to immediately reroute traffic to healthy server instances and trigger automated restarts." },
      { question: "Do you configure automated database backups?", answer: "Yes, we set up daily automated, encrypted backups to secure cloud storage vaults (like AWS S3) with point-in-time recovery rules." }
    ],
    internalLinks: [
      { label: "Custom Software Development", href: "/services/custom-development" },
      { label: "Web Development Services", href: "/services/web-development" },
      { label: "AI & Automation Services", href: "/services/ai-automation" }
    ]
  },
  "ai-automation": {
    slug: "ai-automation",
    title: "AI & Automation Services | Intelligent Workflows & AI Integrations",
    metaDescription: "Nexyn Studios provides AI & Automation services. We build custom AI workflow automation, intelligent agents, AI document parsing, and business process automation.",
    keywords: [
      "AI automation services",
      "business process automation",
      "custom AI integrations",
      "intelligent workflow automation",
      "AI agent development",
      "LLM integration agency",
      "document parsing AI",
      "productivity automation software"
    ],
    h1: "AI & Automation Services",
    badge: "Intelligent Workflows",
    headlineAccent: "AI-Powered Business Automation",
    description: "AI-powered business automation, intelligent workflows, custom AI integrations, and productivity systems designed to reduce repetitive work and improve operational efficiency.",
    heroImage: "/images/services/ai-automation.png",
    heroImageAlt: "AI Workflow Automation Platform and Intelligent Agent Network",
    overviewTitle: "Transform Complex Manual Tasks into Intelligent Systems",
    overviewContent: "Manual repetitive tasks, delayed document processing, and disconnected software applications create operational bottlenecks that slow business expansion. Recent breakthroughs in artificial intelligence enable organizations to automate complex decisions, unstructured data parsing, and multi-step workflows that previously required hours of human labor. At Nexyn Studios, we design custom AI & Automation solutions that integrate directly into your existing enterprise software stack. From autonomous AI agents and automated PDF data extraction to multi-app trigger workflows, we build systems that save thousands of work hours while eliminating human error.",
    whatWeOfferTitle: "What We Build in AI & Automation",
    whatWeOffer: [
      {
        title: "Custom AI Agent Integrations",
        desc: "Deploying autonomous AI agents powered by OpenAI, Claude, or custom LLMs to execute complex multi-step business tasks."
      },
      {
        title: "Intelligent Workflow Automation",
        desc: "Connecting disconnected apps (CRM, ERP, Databases, Slack, WhatsApp) into event-driven trigger pathways that eliminate manual entry."
      },
      {
        title: "AI Document & Data Parsing",
        desc: "Automated extraction, classification, and validation of unstructured text from PDFs, invoices, receipts, and contracts."
      },
      {
        title: "Predictive Analytics & ML Models",
        desc: "Custom machine learning algorithms for lead scoring, customer churn prediction, inventory forecasting, and financial trends."
      },
      {
        title: "Customer Support AI Automation",
        desc: "Intelligent AI assistants trained on your internal knowledge base to handle client support inquiries and lead qualification."
      },
      {
        title: "Operations Process Auditing",
        desc: "Comprehensive auditing of your company's operational bottlenecks followed by custom automated software implementation."
      }
    ],
    capabilities: [
      "Custom AI agent architecture tailored to domain-specific business rules",
      "Multi-app workflow automation connecting internal databases, CRMs, and APIs",
      "Automated unstructured data extraction from invoices, contracts, and receipts",
      "Custom LLM fine-tuning, RAG (Retrieval-Augmented Generation), and vector store setups",
      "Event-driven trigger systems for instant SMS, Email, and WhatsApp notifications",
      "Real-time AI processing audit logs, latency optimization, and cost management"
    ],
    technologies: ["Python", "TypeScript", "OpenAI API", "LangChain", "Pinecone Vector DB", "Node.js", "FastAPI", "PostgreSQL"],
    processTitle: "Our AI Implementation Process",
    process: [
      { title: "01 — Process & Bottleneck Audit", desc: "Analyzing your team's daily repetitive tasks to identify highest ROI automation opportunities." },
      { title: "02 — AI & Workflow Architecture Plan", desc: "Designing system triggers, AI model selection, database data schemas, and API integration paths." },
      { title: "03 — Model Selection & Prompt Tuning", desc: "Selecting optimal AI models (GPT-4, Claude, Llama), configuring RAG vector knowledge bases, and prompt rules." },
      { title: "04 — API & Integration Development", desc: "Coding secure backend event listeners, webhook pathways, and database synchronization logic." },
      { title: "05 — Accuracy & Safety Audit", desc: "Rigorous testing of AI output accuracy, edge case handling, response speed, and data privacy safeguards." },
      { title: "06 — Team Deployment & Training", desc: "Deploying automation engines into production with live monitoring and staff operational training." },
      { title: "07 — Telemetry & Continuous Learning", desc: "Monitoring automation logs, refining model prompts based on usage stats, and expanding capability scopes." }
    ],
    benefitsTitle: "Measurable Business Outcomes",
    benefits: [
      { title: "70%+ Reduction in Manual Hours", desc: "Automate repetitive data entry, email processing, and manual spreadsheet maintenance." },
      { title: "Zero Data Entry Error Rate", desc: "Automated validation rules prevent costly human mistakes in invoicing, customer records, and order routing." },
      { title: "24/7 Uninterrupted Operation", desc: "AI workflows run non-stop around the clock without delays, weekend downtime, or queue backlogs." },
      { title: "Instant Response Speed", desc: "Process client requests, document parsing, and lead assignments in seconds instead of business days." },
      { title: "Seamless Software Sync", desc: "Keep your internal CRM, ERP, finance, and communication tools synchronized automatically in real time." },
      { title: "Rapid ROI Within Weeks", desc: "Immediate reductions in operational labor overhead deliver a fast return on software investment." }
    ],
    faqs: [
      { question: "How can AI & Automation help my business?", answer: "AI and automation eliminate repetitive manual tasks like copying data between systems, parsing PDF invoices, routing client emails, and qualifying leads. This allows your team to focus on high-value business growth." },
      { question: "Is our company data kept private and secure when using AI?", answer: "Yes! We implement private API configurations and enterprise data controls ensuring your sensitive business data is never used to train public AI models." },
      { question: "Can you automate workflows between our custom internal software and third-party tools?", answer: "Yes. We build custom API bridges and webhooks connecting your internal CRM, ERP, or database to external apps like WhatsApp, Email, Slack, Razorpay, or Google Workspace." },
      { question: "What is an AI Agent and how does it work?", answer: "An AI Agent is an autonomous system that understands context, evaluates rules, executes multi-step workflows, and retrieves database information to complete complex tasks without manual intervention." },
      { question: "How accurate is AI document parsing for invoices and contracts?", answer: "Our AI document parsing pipelines achieve 98%+ data extraction accuracy using OCR, vision models, and strict validation checks to catch discrepancies before saving to your database." },
      { question: "How long does it take to deploy a custom AI automation workflow?", answer: "Initial workflow automations are deployed in 2–4 weeks. Complex enterprise AI agents with multi-system integrations take 4–8 weeks." }
    ],
    internalLinks: [
      { label: "Custom Software Development", href: "/services/custom-development" },
      { label: "Cloud & DevOps Infrastructure", href: "/services/cloud-devops" },
      { label: "Web Development Services", href: "/services/web-development" }
    ]
  },
  // Backward compatibility alias for software-development
  "software-development": {
    slug: "custom-development",
    title: "Custom Software Development Services | Enterprise CRM & ERP Solutions",
    metaDescription: "Nexyn Studios provides bespoke custom software development services. We build enterprise CRM, ERP, client portals, and custom workflow software.",
    keywords: ["custom software development", "CRM development", "ERP software"],
    h1: "Custom Software Development Services",
    badge: "Enterprise-Grade Architecture",
    headlineAccent: "Engineered Around Your Business",
    description: "Software engineered around the way your business actually works.",
    heroImage: "/images/services/custom-development.png",
    heroImageAlt: "Custom Software Development Dashboard",
    overviewTitle: "Bespoke Enterprise Systems Tailored to Your Rules",
    overviewContent: "Off-the-shelf software forces your business to compromise its operational workflows. At Nexyn Studios, we build custom software platforms designed specifically around your proprietary processes.",
    capabilities: ["Custom CRM & ERP", "Workflow Automation", "Enterprise Portals"],
    technologies: ["Next.js", "TypeScript", "Node.js", "PostgreSQL"],
    processTitle: "Development Process",
    process: [{ title: "Discovery", desc: "Requirements gathering." }],
    benefitsTitle: "Business Benefits",
    benefits: [{ title: "Zero Subscription Fees", desc: "Full ownership." }],
    faqs: [{ question: "Why custom software?", answer: "Full control and ownership." }],
    internalLinks: [{ label: "Custom Software", href: "/services/custom-development" }]
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
