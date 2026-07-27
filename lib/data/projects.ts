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
];
