export interface BlogFaq {
  question: string;
  answer: string;
}

export const BLOG_HUB_FAQS: BlogFaq[] = [
  {
    question: "What topics does the Nexyn Studios engineering blog cover?",
    answer:
      "Our articles focus on custom software architecture, Next.js and React frontend engineering, cross-platform mobile development (React Native), custom CRM and ERP data modeling, SaaS MVP budgeting, and cloud DevOps.",
  },
  {
    question: "Who writes the articles on this blog?",
    answer:
      "All articles are authored by the active engineering, product, and design team at Nexyn Studios in Mumbai. Content reflects real architecture patterns and challenges encountered across our production software builds.",
  },
  {
    question: "Are the cost estimates and pricing guides realistic for Indian and international businesses?",
    answer:
      "Yes. Our pricing breakdowns reflect realistic market rates for professional engineering services, infrastructure costs, and third-party integrations as of 2026, avoiding both low-quality template shortcuts and inflated agency overhead.",
  },
  {
    question: "How frequently do you publish new technical guides?",
    answer:
      "We publish detailed, practical engineering breakdowns and architectural retrospectives on an ongoing basis as new technical milestones and system benchmarks are achieved.",
  },
  {
    question: "Can I consult with the Nexyn Studios team regarding an architecture discussed in a blog post?",
    answer:
      "Yes. If you are evaluating an architecture discussed in our articles—such as Next.js SSR, custom CRM pipelines, or multi-tenant SaaS databases—you can reach out directly via our Contact page to schedule a technical consultation.",
  },
];
