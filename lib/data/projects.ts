export type ProjectDetail = {
  slug: string;
  name: string;
  category: "Web App" | "Mobile App" | "Custom Software" | "Website";
  industry: string;
  clientType: string;
  completionYear: string;
  shortDescription: string;
  featuredImage: string;
  galleryImages: string[];
  techStack: string[];
  challenge: string;
  research: string;
  solution: string;
  features: { title: string; description: string }[];
  developmentProcess: string;
  results: { metric: string; value: string }[];
  accentColor: string;
};

export const PROJECTS: ProjectDetail[] = [
  {
    slug: "furnix-crm",
    accentColor: "#6366f1", // Indigo
    name: "Furnix CRM",
    category: "Custom Software",
    industry: "Manufacturing & Retail",
    clientType: "Enterprise",
    completionYear: "2025",
    shortDescription: "A comprehensive enterprise resource planning and customer relationship management system tailored for luxury furniture manufacturers.",
    featuredImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000",
    galleryImages: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000",
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=2000"
    ],
    techStack: ["Next.js 14", "TypeScript", "PostgreSQL", "Prisma", "Tailwind CSS"],
    challenge: "The client was struggling with fragmented data across multiple legacy systems, leading to inefficiencies in inventory management, delayed order fulfillment, and poor customer communication. They needed a unified platform to handle everything from lead generation to post-sale support.",
    research: "We conducted extensive interviews with sales representatives, warehouse managers, and customer support agents to map out the entire lifecycle of a furniture order. We identified key bottlenecks in the supply chain visibility and quote generation process.",
    solution: "We architected a unified, cloud-native CRM and ERP system. The platform features an intuitive dashboard for sales tracking, automated quote generation, real-time inventory syncing with the warehouse floor, and a dedicated customer portal for tracking orders.",
    features: [
      { title: "Unified Dashboard", description: "A centralized hub for real-time sales metrics, pending tasks, and lead tracking." },
      { title: "Dynamic Quote Generator", description: "Automated engine to create customized, accurate quotes with dynamic pricing rules." },
      { title: "Inventory Sync", description: "Real-time bidirectional synchronization with warehouse management systems." }
    ],
    developmentProcess: "Following an agile methodology, we delivered the project in iterative sprints over 6 months. We began with the core CRM functionality, followed by inventory integration, and finally the customer portal, ensuring continuous feedback from stakeholders at each stage.",
    results: [
      { metric: "Increase in Sales Efficiency", value: "45%" },
      { metric: "Reduction in Quote Turnaround", value: "60%" },
      { metric: "Improvement in Inventory Accuracy", value: "99.9%" }
    ]
  },
  {
    slug: "scan-and-pack",
    accentColor: "#10b981", // Emerald
    name: "Scan & Pack System",
    category: "Mobile App",
    industry: "Logistics & Fulfillment",
    clientType: "Mid-Market",
    completionYear: "2024",
    shortDescription: "An automated warehouse fulfillment software optimizing the picking, scanning, and packing process with high-speed barcode integration.",
    featuredImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2000",
    galleryImages: [
      "https://images.unsplash.com/photo-1565891741441-64926e441838?auto=format&fit=crop&q=80&w=2000"
    ],
    techStack: ["React Native", "Node.js", "Express", "MongoDB", "Socket.io"],
    challenge: "High error rates in manual packing processes were leading to increased return rates and customer dissatisfaction. The existing software was slow and could not handle high-volume sales events.",
    research: "We analyzed the physical movement of warehouse staff and the latency of the existing barcode scanners. We discovered that network latency and a clunky UI were the main culprits for the slow processing times.",
    solution: "Developed a cross-platform mobile application and backend service optimized for speed. The system uses WebSocket connections for instant validation of scanned items against order manifests, providing immediate visual and auditory feedback to the packers.",
    features: [
      { title: "Instant Barcode Validation", description: "Sub-50ms response time for barcode scanning using WebSockets." },
      { title: "Voice-Assisted Packing", description: "Auditory cues for successful scans and errors to maintain packer focus." },
      { title: "Analytics Engine", description: "Real-time tracking of packer performance and bottleneck identification." }
    ],
    developmentProcess: "We utilized a prototype-driven approach, testing early alpha versions directly on the warehouse floor. This allowed us to iterate rapidly on the UI/UX, optimizing for varying lighting conditions and glove usage.",
    results: [
      { metric: "Reduction in Packing Errors", value: "92%" },
      { metric: "Increase in Packing Speed", value: "35%" },
      { metric: "ROI achieved in", value: "4 Months" }
    ]
  },
  {
    slug: "health-manage-platform",
    accentColor: "#06b6d4", // Cyan
    name: "Healthcare Management Platform",
    category: "Web App",
    industry: "Healthcare",
    clientType: "Enterprise",
    completionYear: "2024",
    shortDescription: "A HIPAA-compliant platform for patient management, telemedicine scheduling, and secure medical record sharing.",
    featuredImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=2000",
    galleryImages: [
      "https://images.unsplash.com/photo-1551076805-e1869043e560?auto=format&fit=crop&q=80&w=2000"
    ],
    techStack: ["React", "Go", "AWS", "PostgreSQL", "WebRTC"],
    challenge: "A network of clinics struggled with coordinating patient care across multiple specialized departments, resulting in long wait times and fragmented medical histories.",
    research: "We mapped the patient journey from initial booking to post-consultation follow-ups, identifying critical data silos between the pediatric, orthopedic, and general practice departments.",
    solution: "A unified, highly secure patient portal and staff dashboard. It features integrated video consultations, seamless EHR (Electronic Health Records) integration, and an automated intelligent scheduling engine to optimize doctor availability.",
    features: [
      { title: "Secure Telemedicine", description: "Integrated WebRTC video calls with end-to-end encryption." },
      { title: "Smart Scheduling", description: "AI-driven appointment booking minimizing calendar gaps." },
      { title: "Unified EHR Access", description: "Single-pane-of-glass view for comprehensive patient history." }
    ],
    developmentProcess: "Security and compliance were prioritized from day one. We implemented a robust microservices architecture, heavily focusing on data encryption at rest and in transit, undergoing multiple third-party security audits prior to launch.",
    results: [
      { metric: "Patient Wait Time Reduced", value: "40%" },
      { metric: "Increase in Telehealth Adoption", value: "300%" },
      { metric: "HIPAA Compliance Audit", value: "100% Passed" }
    ]
  },
  {
    slug: "real-estate-crm",
    accentColor: "#f97316", // Orange
    name: "Real Estate CRM",
    category: "Web App",
    industry: "PropTech",
    clientType: "B2B SaaS",
    completionYear: "2023",
    shortDescription: "A modern platform empowering real estate agents with automated property listings, lead scoring, and virtual tour management.",
    featuredImage: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=2000",
    galleryImages: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=2000"
    ],
    techStack: ["Vue.js", "Nuxt", "Python", "Django", "GraphQL"],
    challenge: "Agents were losing leads due to slow response times and spending too much manual effort updating property listings across various disparate marketing channels.",
    research: "By shadowing top-performing agents, we realized that lead prioritization was the most time-consuming task, often relying on gut feeling rather than data.",
    solution: "We built an intelligent CRM that aggregates leads from all marketing channels, applying a machine learning model to score leads based on engagement. It also features a one-click syndication tool for property listings.",
    features: [
      { title: "Predictive Lead Scoring", description: "ML-powered scoring to prioritize high-intent buyers." },
      { title: "Omnichannel Listing", description: "Publish properties to 50+ platforms with a single click." },
      { title: "Automated Follow-ups", description: "Smart drip campaigns based on client interaction." }
    ],
    developmentProcess: "We focused on a clean, distraction-free interface. The backend was designed to handle massive amounts of incoming lead data concurrently, using asynchronous task queues for processing and syndication.",
    results: [
      { metric: "Increase in Lead Conversion", value: "28%" },
      { metric: "Hours Saved per Agent/Week", value: "12 Hours" },
      { metric: "Platform Uptime", value: "99.99%" }
    ]
  },
  {
    slug: "ecommerce-platform",
    accentColor: "#a855f7", // Purple
    name: "E-Commerce Platform",
    category: "Website",
    industry: "Retail & E-Commerce",
    clientType: "B2C",
    completionYear: "2023",
    shortDescription: "A high-performance headless commerce solution handling thousands of concurrent transactions with sub-second page loads.",
    featuredImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000",
    galleryImages: [
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=2000"
    ],
    techStack: ["Next.js", "Shopify Plus", "Redis", "Vercel", "Tailwind CSS"],
    challenge: "The client's monolithic e-commerce architecture was crashing during seasonal sales spikes, resulting in massive revenue loss and cart abandonment due to slow loading times.",
    research: "Performance audits revealed that database queries for product variations and heavy frontend JavaScript bundles were choking the server and client browser during peak traffic.",
    solution: "We migrated the platform to a headless architecture. By decoupling the frontend from the Shopify backend and utilizing edge caching and static site generation, we ensured the site remains lightning-fast regardless of traffic volume.",
    features: [
      { title: "Headless Architecture", description: "Decoupled frontend for ultimate performance and flexibility." },
      { title: "Edge Caching", description: "Global content delivery ensuring sub-second response times worldwide." },
      { title: "Dynamic Cart Operations", description: "Optimistic UI updates for a seamless checkout experience." }
    ],
    developmentProcess: "The migration was executed in phases to ensure zero downtime. We first migrated the product catalog to the new headless frontend, followed by user accounts, and finally the checkout flow, continuously load-testing at each step.",
    results: [
      { metric: "Page Load Time", value: "< 0.8s" },
      { metric: "Increase in Conversion Rate", value: "15%" },
      { metric: "Server Crashes during BFCM", value: "0" }
    ]
  },
  {
    slug: "logistics-tracking",
    accentColor: "#3b82f6", // Blue
    name: "Logistics Tracking System",
    category: "Custom Software",
    industry: "Supply Chain",
    clientType: "Enterprise",
    completionYear: "2022",
    shortDescription: "A global freight tracking dashboard providing real-time visibility and predictive ETA modeling for international shipping.",
    featuredImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2000",
    galleryImages: [
      "https://images.unsplash.com/photo-1494412519320-ce32d548006b?auto=format&fit=crop&q=80&w=2000"
    ],
    techStack: ["Angular", "Java Spring Boot", "Kafka", "Elasticsearch", "Google Maps API"],
    challenge: "Lack of real-time visibility into global shipments was causing severe supply chain disruptions for the client's enterprise customers, leading to exorbitant demurrage charges.",
    research: "We integrated with dozens of disparate carrier APIs and IoT sensor data streams, identifying a need for a robust data normalization pipeline to make sense of the incoming tracking events.",
    solution: "A scalable, event-driven tracking platform. It ingests millions of data points daily from vessels, ports, and trucks, normalizing the data to provide a unified, map-based interface with predictive delay alerts.",
    features: [
      { title: "Global Map Visualization", description: "Interactive 3D globe plotting thousands of active shipments." },
      { title: "Predictive Delay Alerts", description: "Machine learning models forecasting port congestion." },
      { title: "Automated Document OCR", description: "Extracting customs data from scanned bills of lading." }
    ],
    developmentProcess: "Building the event-streaming architecture using Kafka was the primary focus, ensuring we could handle the massive throughput of IoT data. The frontend was heavily optimized to render complex WebGL maps without dropping frames.",
    results: [
      { metric: "Reduction in Demurrage Costs", value: "$2.4M" },
      { metric: "ETA Prediction Accuracy", value: "94%" },
      { metric: "Daily Data Events Processed", value: "50M+" }
    ]
  }
];
