const fs = require('fs');
const path = require('path');

const dir = path.join(process.cwd(), 'public', 'blog');

// 1. Website Development Cost in Mumbai
const svgCost = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630" fill="none">
  <rect width="1200" height="630" fill="#090A0F"/>
  <circle cx="600" cy="200" r="300" fill="#4F46E5" opacity="0.15" filter="blur(80px)"/>
  <circle cx="900" cy="450" r="250" fill="#9333EA" opacity="0.12" filter="blur(80px)"/>
  <rect x="100" y="80" width="1000" height="470" rx="24" fill="#12131A" stroke="#27272A" stroke-width="2"/>
  <line x1="100" y1="160" x2="1100" y2="160" stroke="#27272A" stroke-width="2"/>
  <circle cx="140" cy="120" r="8" fill="#EF4444"/>
  <circle cx="170" cy="120" r="8" fill="#F59E0B"/>
  <circle cx="200" cy="120" r="8" fill="#10B981"/>
  <text x="240" y="126" fill="#A1A1AA" font-family="sans-serif" font-size="16" font-weight="600">nexynstudios.com / website-development-cost-mumbai</text>

  <!-- Pricing Cards Grid -->
  <g transform="translate(150, 210)">
    <rect x="0" y="0" width="270" height="280" rx="16" fill="#181825" stroke="#313244" stroke-width="1.5"/>
    <text x="24" y="45" fill="#A6ADC8" font-family="sans-serif" font-size="14" font-weight="700">BASIC SITE</text>
    <text x="24" y="90" fill="#CDD6F4" font-family="sans-serif" font-size="28" font-weight="800">₹25k – ₹60k</text>
    <text x="24" y="130" fill="#BAC2DE" font-family="sans-serif" font-size="14">5-10 Pages</text>
    <text x="24" y="160" fill="#BAC2DE" font-family="sans-serif" font-size="14">Contact Form</text>
    <text x="24" y="190" fill="#BAC2DE" font-family="sans-serif" font-size="14">Fast Load Speed</text>
  </g>

  <g transform="translate(465, 210)">
    <rect x="0" y="0" width="270" height="280" rx="16" fill="#1E1E2E" stroke="#6366F1" stroke-width="2"/>
    <rect x="24" y="20" width="110" height="24" rx="12" fill="#6366F1" opacity="0.2"/>
    <text x="34" y="36" fill="#818CF8" font-family="sans-serif" font-size="11" font-weight="700">POPULAR</text>
    <text x="24" y="75" fill="#818CF8" font-family="sans-serif" font-size="14" font-weight="700">E-COMMERCE</text>
    <text x="24" y="115" fill="#CDD6F4" font-family="sans-serif" font-size="28" font-weight="800">₹75k – ₹2.5L</text>
    <text x="24" y="155" fill="#BAC2DE" font-family="sans-serif" font-size="14">Shopify / Next.js</text>
    <text x="24" y="185" fill="#BAC2DE" font-family="sans-serif" font-size="14">Payment Gateways</text>
    <text x="24" y="215" fill="#BAC2DE" font-family="sans-serif" font-size="14">Product Inventory</text>
  </g>

  <g transform="translate(780, 210)">
    <rect x="0" y="0" width="270" height="280" rx="16" fill="#181825" stroke="#313244" stroke-width="1.5"/>
    <text x="24" y="45" fill="#A6ADC8" font-family="sans-serif" font-size="14" font-weight="700">CUSTOM PORTAL</text>
    <text x="24" y="90" fill="#CDD6F4" font-family="sans-serif" font-size="28" font-weight="800">₹1.5L – ₹5L+</text>
    <text x="24" y="130" fill="#BAC2DE" font-family="sans-serif" font-size="14">Multi-Role Dashboards</text>
    <text x="24" y="160" fill="#BAC2DE" font-family="sans-serif" font-size="14">Custom CRM / ERP</text>
    <text x="24" y="190" fill="#BAC2DE" font-family="sans-serif" font-size="14">PostgreSQL + Next.js</text>
  </g>
</svg>`;

// 2. How to Choose a Web Development Company
const svgChoose = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630" fill="none">
  <rect width="1200" height="630" fill="#0A0914"/>
  <circle cx="300" cy="300" r="280" fill="#A855F7" opacity="0.15" filter="blur(90px)"/>
  <rect x="100" y="80" width="1000" height="470" rx="24" fill="#131124" stroke="#2E2A4A" stroke-width="2"/>
  <text x="160" y="140" fill="#C084FC" font-family="sans-serif" font-size="14" font-weight="700" letter-spacing="2">PARTNER EVALUATION CHECKLIST</text>
  <text x="160" y="185" fill="#F3E8FF" font-family="sans-serif" font-size="32" font-weight="800">How to Audit &amp; Choose a Software Partner</text>
  
  <g transform="translate(160, 230)">
    <rect x="0" y="0" width="420" height="75" rx="14" fill="#1C1836" stroke="#3B3366" stroke-width="1.5"/>
    <circle cx="35" cy="37" r="14" fill="#10B981"/>
    <path d="M29 37l4 4 8-8" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    <text x="65" y="35" fill="#F3E8FF" font-family="sans-serif" font-size="16" font-weight="700">1. Modern Tech Stack</text>
    <text x="65" y="55" fill="#A78BFA" font-family="sans-serif" font-size="13">Next.js, React, Node.js &amp; PostgreSQL</text>
  </g>

  <g transform="translate(620, 230)">
    <rect x="0" y="0" width="420" height="75" rx="14" fill="#1C1836" stroke="#3B3366" stroke-width="1.5"/>
    <circle cx="35" cy="37" r="14" fill="#10B981"/>
    <path d="M29 37l4 4 8-8" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    <text x="65" y="35" fill="#F3E8FF" font-family="sans-serif" font-size="16" font-weight="700">2. Bi-Weekly Agile Demos</text>
    <text x="65" y="55" fill="#A78BFA" font-family="sans-serif" font-size="13">Transparent progress updates on Slack &amp; Jira</text>
  </g>

  <g transform="translate(160, 325)">
    <rect x="0" y="0" width="420" height="75" rx="14" fill="#1C1836" stroke="#3B3366" stroke-width="1.5"/>
    <circle cx="35" cy="37" r="14" fill="#10B981"/>
    <path d="M29 37l4 4 8-8" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    <text x="65" y="35" fill="#F3E8FF" font-family="sans-serif" font-size="16" font-weight="700">3. 100% Code Ownership</text>
    <text x="65" y="55" fill="#A78BFA" font-family="sans-serif" font-size="13">Complete GitHub repository access</text>
  </g>

  <g transform="translate(620, 325)">
    <rect x="0" y="0" width="420" height="75" rx="14" fill="#1C1836" stroke="#3B3366" stroke-width="1.5"/>
    <circle cx="35" cy="37" r="14" fill="#10B981"/>
    <path d="M29 37l4 4 8-8" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    <text x="65" y="35" fill="#F3E8FF" font-family="sans-serif" font-size="16" font-weight="700">4. Post-Launch SLA Support</text>
    <text x="65" y="55" fill="#A78BFA" font-family="sans-serif" font-size="13">Maintenance, security &amp; monitoring</text>
  </g>
</svg>`;

// 3. Next.js vs React
const svgNextVsReact = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630" fill="none">
  <rect width="1200" height="630" fill="#09090B"/>
  <circle cx="600" cy="300" r="300" fill="#38BDF8" opacity="0.1" filter="blur(90px)"/>
  <rect x="100" y="80" width="1000" height="470" rx="24" fill="#121215" stroke="#27272A" stroke-width="2"/>
  <text x="160" y="140" fill="#38BDF8" font-family="sans-serif" font-size="14" font-weight="700" letter-spacing="2">ARCHITECTURE COMPARISON</text>
  <text x="160" y="185" fill="#FAFAFA" font-family="sans-serif" font-size="32" font-weight="800">Next.js Framework vs. React SPA</text>

  <g transform="translate(160, 230)">
    <rect x="0" y="0" width="420" height="270" rx="16" fill="#18181C" stroke="#3F3F46" stroke-width="1.5"/>
    <text x="30" y="45" fill="#FAFAFA" font-family="sans-serif" font-size="20" font-weight="700">React (Client-Side SPA)</text>
    <text x="30" y="90" fill="#A1A1AA" font-family="sans-serif" font-size="14">• Rendering: Client-Side (CSR)</text>
    <text x="30" y="125" fill="#A1A1AA" font-family="sans-serif" font-size="14">• SEO Crawling: Slower / Difficult</text>
    <text x="30" y="160" fill="#A1A1AA" font-family="sans-serif" font-size="14">• Bundle Size: Large JS download</text>
    <text x="30" y="195" fill="#A1A1AA" font-family="sans-serif" font-size="14">• Best For: Internal SaaS Panels</text>
  </g>

  <g transform="translate(620, 230)">
    <rect x="0" y="0" width="420" height="270" rx="16" fill="#18181C" stroke="#38BDF8" stroke-width="2"/>
    <rect x="30" y="20" width="120" height="22" rx="11" fill="#38BDF8" opacity="0.2"/>
    <text x="42" y="35" fill="#38BDF8" font-family="sans-serif" font-size="10" font-weight="700">RECOMMENDED</text>
    <text x="30" y="75" fill="#FAFAFA" font-family="sans-serif" font-size="20" font-weight="700">Next.js (App Router)</text>
    <text x="30" y="115" fill="#A1A1AA" font-family="sans-serif" font-size="14">• Rendering: Server-Side (SSR &amp; SSG)</text>
    <text x="30" y="150" fill="#A1A1AA" font-family="sans-serif" font-size="14">• SEO Indexing: 100% Instant HTML</text>
    <text x="30" y="185" fill="#A1A1AA" font-family="sans-serif" font-size="14">• Performance: Sub-second load</text>
    <text x="30" y="220" fill="#A1A1AA" font-family="sans-serif" font-size="14">• Best For: E-commerce &amp; Corporate</text>
  </g>
</svg>`;

fs.writeFileSync(path.join(dir, 'website-development-cost-in-mumbai.svg'), svgCost);
fs.writeFileSync(path.join(dir, 'how-to-choose-a-web-development-company.svg'), svgChoose);
fs.writeFileSync(path.join(dir, 'nextjs-vs-react.svg'), svgNextVsReact);

// Also write as svg data png files
fs.writeFileSync(path.join(dir, 'website-development-cost-in-mumbai.png'), svgCost);
fs.writeFileSync(path.join(dir, 'how-to-choose-a-web-development-company.png'), svgChoose);
fs.writeFileSync(path.join(dir, 'nextjs-vs-react.png'), svgNextVsReact);

console.log('Successfully generated custom SVG graphics!');
