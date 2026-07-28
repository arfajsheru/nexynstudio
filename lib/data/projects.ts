export type ProjectDetail = {
  slug: string;
  name: string;
  shortName: string;
  category: "Web App" | "Mobile App" | "Custom Software" | "Website";
  industry: string;
  clientType: string;
  completionYear: string;
  shortDescription: string;
  liveUrl?: string;
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
    slug: "united-welfare-foundation",
    shortName: "UWF",
    accentColor: "#6366f1",
    liveUrl: "https://portal.unitedwelfarefoundation.com/",
    name: "United Welfare Foundation",
    category: "Custom Software",
    industry: "Non-Profit / Education",
    clientType: "NGO / Welfare Organization",
    completionYear: "2026",
    shortDescription:
      "A full-stack scholarship management portal for UWF — enabling students to apply for financial aid, with multi-tier approval workflows, treasury reviews, and real-time disbursement tracking.",
    featuredImage: "/projects/uwf/image1.png",
    galleryImages: [
      "/projects/uwf/ss1.png",
      "/projects/uwf/ss2.png",
      "/projects/uwf/ss3.png",
      "/projects/uwf/ss4.png",
      "/projects/uwf/ss5.png",
      "/projects/uwf/ss6.png",
      "/projects/uwf/ss7.png",
      "/projects/uwf/ss8.png",
      "/projects/uwf/ss9.png",
      "/projects/uwf/ss10.png",
      "/projects/uwf/ss11.png",
      "/projects/uwf/ss12.png",
      "/projects/uwf/ss13.png",
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
      "NextAuth.js",
      "React PDF",
      "Vercel",
    ],
    challenge:
      "United Welfare Foundation was managing scholarship applications entirely through WhatsApp and manual spreadsheets. With hundreds of student requests flowing in, tracking application status, ensuring accurate reviews, and disbursing aid transparently was becoming unmanageable. Documents were getting lost, approvals were delayed, and treasury accountability was nearly impossible.",
    research:
      "We conducted on-site workshops with UWF trustees, coordinators, and student volunteers to map the full lifecycle of an aid request — from initial application to final disbursement. Key pain points identified: no single source of truth for application status, lack of role-based access control, no audit trail, and zero visibility for students on their own cases.",
    solution:
      "We designed and built a role-based CRM portal tailored to UWF's multi-tier workflow. Students submit structured applications, which flow through Evaluation, Treasury Review, Treasury Approval, and finally Aid Disbursement — each stage managed by a different role. The system provides complete audit trails, auto-generated bank info letters, form PDF downloads, and a real-time dashboard for Super Admins to monitor all KPIs at a glance.",
    features: [
      {
        title: "Multi-Role Authentication",
        description:
          "Separate login portals and dashboards for Super Admins, Evaluators, Treasury Officers, and Acknowledgement staff — each with scoped access to their stage of the workflow.",
      },
      {
        title: "Student Application Portal",
        description:
          "Students fill a detailed scholarship request form with personal, academic, and financial data. Every submission receives a unique Form ID and can be tracked end-to-end.",
      },
      {
        title: "Multi-Tier Approval Workflow",
        description:
          "Applications move through Request Evaluation → Treasury Review → Treasury Approval stages. Each reviewer can accept, reject, or flag for more information with comments.",
      },
      {
        title: "Aid Disbursement & Case Management",
        description:
          "Once approved, cases are disbursed with exact amounts logged. Admins can close cases, track totals disbursed per student, and generate disbursement reports.",
      },
      {
        title: "Bank Info Letter Generator",
        description:
          "Auto-generates professionally formatted bank info letters (PDF) for approved students, saving hours of manual document preparation per week.",
      },
      {
        title: "Real-Time Analytics Dashboard",
        description:
          "Super Admin sees live stats: total requests received, accepted, rejected, pending, students aided, cases disbursed & closed, and total amount disbursed — all filterable by date range.",
      },
      {
        title: "Acknowledgement System",
        description:
          "Dedicated acknowledgement module with Pending, Submitted, and Accepted Form views — ensuring no application slips through without proper documentation.",
      },
      {
        title: "Dark Mode & Responsive UI",
        description:
          "Built with a clean, professional UI that works seamlessly on desktop and mobile, with full dark/light mode toggle for comfort in all environments.",
      },
    ],
    developmentProcess:
      "Development followed a structured agile approach over 6 weeks. Week 1-2: Requirements gathering, role mapping, and DB schema design. Week 3-4: Core auth system, student application form, and admin dashboard. Week 5: Approval workflows, treasury modules, and PDF generation. Week 6: End-to-end testing with real UWF data, training sessions, and production deployment on Vercel with PostgreSQL on Supabase.",
    results: [
      { metric: "Students Aided", value: "49+" },
      { metric: "Amount Disbursed", value: "₹6.87L+" },
      { metric: "Requests Processed", value: "77+" },
      { metric: "Processing Time", value: "−70%" },
    ],
  },
  {
    slug: "nexyn-chat-web",
    shortName: "Chat Web",
    accentColor: "#10b981",
    name: "Nexyn Chat Web",
    category: "Web App",
    industry: "Communication & Collaboration",
    clientType: "B2B / SaaS Product",
    completionYear: "2026",
    shortDescription:
      "A modern, real-time messaging web client inspired by WhatsApp — featuring secure chat authentication, end-to-end typing indicators, media transfers, and clean desktop browser integrations.",
    featuredImage: "/projects/nexyn-chat-web/image1.png",
    galleryImages: [],
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Socket.io",
      "Express.js",
      "MongoDB",
      "Zustand",
    ],
    challenge:
      "Building a real-time messaging web application that handles concurrent chat connections, state synchronization, and instant typing indicators without causing rendering bottlenecks in the browser.",
    research:
      "We analyzed common user patterns on WhatsApp Web to design a layout optimized for multi-pane chat lists, quick message search, and media management. Ensuring light/dark mode consistency and robust socket reconnection strategies were key user needs.",
    solution:
      "Developed a high-performance messaging interface utilizing WebSocket connections for instant message transmission, Zustand for global state management, and optimized asset loading for file/image attachments. Reconnections are handled gracefully with offline message caching.",
    features: [
      {
        title: "Real-Time Messaging",
        description:
          "Instant peer-to-peer and group messaging utilizing Socket.io websockets for sub-100ms delivery.",
      },
      {
        title: "Message Read Status & Receipts",
        description:
          "Delivered, read, and typing indicators synchronizing across active client sessions instantly.",
      },
      {
        title: "Media & File Sharing",
        description:
          "Upload and drag-and-drop sharing of documents, images, and voice recordings with auto-compression.",
      },
      {
        title: "Global Message Search",
        description:
          "Indexed message history permitting users to search through chats, links, and shared files instantly.",
      },
      {
        title: "Chat Archive & Pinning",
        description:
          "Organize the chat panel by pinning important threads and archiving older conversations.",
      },
      {
        title: "Responsive Web Interface",
        description:
          "Dual-pane desktop interface transitioning to a focused single-pane layout for tablets and mobile browsers.",
      },
    ],
    developmentProcess:
      "Developed using an agile scrum methodology over 5 weeks. Week 1-2 focused on WebSocket architecture and database design. Week 3-4 implemented chat views, state persistence, and attachments. Week 5 completed integration testing, performance optimization, and Vercel hosting.",
    results: [
      { metric: "Message Delivery", value: "<100ms" },
      { metric: "Active Connections", value: "10k+" },
      { metric: "File Sharing", value: "Instant" },
      { metric: "Browser Compatibility", value: "100%" },
    ],
  },
  {
    slug: "nexyn-chat-mobile",
    shortName: "Chat App",
    accentColor: "#10b981",
    name: "Nexyn Chat Mobile",
    category: "Mobile App",
    industry: "Communication & Collaboration",
    clientType: "B2B / SaaS Product",
    completionYear: "2026",
    shortDescription:
      "A feature-rich React Native mobile app for Nexyn Chat — delivering real-time chat, push notifications, offline syncing, contact directory integrations, and optimized performance for iOS and Android.",
    featuredImage: "/projects/nexyn-chat-mobile/image1.jpg",
    galleryImages: [
      "/projects/nexyn-chat-mobile/ss1.jpg",
      "/projects/nexyn-chat-mobile/ss2.jpg",
      "/projects/nexyn-chat-mobile/ss3.jpg",
      "/projects/nexyn-chat-mobile/ss4.jpg",
      "/projects/nexyn-chat-mobile/ss5.jpg",
    ],
    techStack: [
      "React Native",
      "TypeScript",
      "Expo",
      "SQLite",
      "Socket.io Client",
      "Tailwind CSS",
      "Firebase Cloud Messaging",
    ],
    challenge:
      "Maintaining reliable real-time message syncing when the mobile device goes background, dealing with poor cellular networks, and managing large local databases of chat histories on device.",
    research:
      "Studied mobile messaging workflows, push notification patterns, and local storage database engines. Evaluated database query performance under high load to prevent frame drops in mobile scroll views.",
    solution:
      "Built a cross-platform React Native app with SQLite for local message caching, enabling immediate offline rendering. Leveraged Firebase Cloud Messaging for instant background push alerts and Socket.io for active foreground real-time syncing.",
    features: [
      {
        title: "Push Notifications",
        description:
          "Stay connected with background push notifications for new messages and calls via FCM.",
      },
      {
        title: "Offline Chat Caching",
        description:
          "Access all past messages and media instantly offline with local SQLite database queries.",
      },
      {
        title: "Contact List Integration",
        description:
          "Sync phone address book contacts to automatically identify available chat partners.",
      },
      {
        title: "Real-Time Location Sharing",
        description:
          "Share live coordinates with contacts directly inside the chat window.",
      },
      {
        title: "Image & Video Capture",
        description:
          "Direct in-app camera access to shoot, compress, and send media in real-time.",
      },
      {
        title: "Low Data Mode",
        description:
          "Optimize data usage by dynamically scaling and compressing shared media files.",
      },
    ],
    developmentProcess:
      "Developed over 6 weeks. Week 1-2: Setup Expo environment, database sync adapters, and authentication. Week 3-4: Chat listing, push alerts, address book integrations. Week 5: Offline cache sync, SQLite optimizations. Week 6: Beta testing on TestFlight and Google Play Console.",
    results: [
      { metric: "Push Notification Latency", value: "<1s" },
      { metric: "Offline Load Time", value: "Immediate" },
      { metric: "Network Usage Saved", value: "−40%" },
      { metric: "Crash-free Sessions", value: "99.9%" },
    ],
  },
];
