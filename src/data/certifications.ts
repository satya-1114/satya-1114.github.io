const assetModules = import.meta.glob<{ default: { url: string } }>(
  '../assets/certs/*.pdf.asset.json',
  { eager: true },
)

const assetsBySlug: Record<string, string> = Object.fromEntries(
  Object.entries(assetModules).map(([path, mod]) => [
    path.split('/').pop()!.replace('.pdf.asset.json', ''),
    mod.default.url,
  ]),
)

export type CertCategory =
  | 'Development'
  | 'AI'
  | 'Cloud'
  | 'Internships'
  | 'Academic'
  | 'Achievements'

export type CertKind =
  | 'Certification'
  | 'Course'
  | 'Bootcamp'
  | 'Training'
  | 'Virtual Internship'
  | 'Internship'
  | 'Achievement'
  | 'Publication'

export interface Certification {
  slug: string
  name: string
  issuer: string
  date: string
  category: CertCategory
  kind: CertKind
  credential?: string
}

const raw: Certification[] = [
  // Development
  {
    slug: 'software-engineering-job-simulation-jpmc',
    name: 'Software Engineering Job Simulation',
    issuer: 'JPMorgan Chase & Co. · Forage',
    date: 'February 2026',
    category: 'Development',
    kind: 'Certification',
    credential: 'Enrolment verification 56cbxfkSr95SXqv7d',
  },
  {
    slug: 'full-stack-development-udemy-certificate',
    name: 'Full-Stack Web Development Bootcamp',
    issuer: 'Udemy',
    date: '—',
    category: 'Development',
    kind: 'Bootcamp',
  },
  {
    slug: 'full-stack-mobile-app-development-using-flutter-rest-apis-c-dac-mohali',
    name: 'Full-Stack Mobile App Development using Flutter & REST APIs',
    issuer: 'C-DAC Mohali · FutureSkills PRIME',
    date: '08 Jun – 03 Jul 2026 · issued 31 Jul 2026',
    category: 'Development',
    kind: 'Bootcamp',
    credential: 'FSP/BCMP/C-DAC/MOH/BC22FLUT/2607/132',
  },
  {
    slug: 'mern-stack-internship-smartbridge',
    name: 'Full Stack Developer — MERN Stack',
    issuer: 'SmartBridge · APSCHE',
    date: '13 August 2026',
    category: 'Development',
    kind: 'Virtual Internship',
    credential: 'VIP-FSD-2026-2569',
  },

  // AI / Generative AI
  {
    slug: 'ai-skills-passport',
    name: 'AI Skills Passport',
    issuer: 'EY · Microsoft',
    date: '—',
    category: 'AI',
    kind: 'Course',
  },
  {
    slug: 'apssdc-generative-ai-and-prompt-engineering',
    name: 'Generative AI and Prompt Engineering',
    issuer: 'APSSDC',
    date: '24 June 2026',
    category: 'AI',
    kind: 'Training',
  },
  {
    slug: 'claude-101',
    name: 'Claude 101',
    issuer: 'Anthropic',
    date: '—',
    category: 'AI',
    kind: 'Course',
  },
  {
    slug: 'claude-ai-fluency',
    name: 'Claude AI Fluency',
    issuer: 'Anthropic',
    date: '—',
    category: 'AI',
    kind: 'Course',
  },
  {
    slug: 'critical-thinking-in-the-ai-era-by-hp-certificate',
    name: 'Critical Thinking in the AI Era',
    issuer: 'HP LIFE',
    date: '22 January 2026',
    category: 'AI',
    kind: 'Course',
    credential: 'Serial 3ff2fef5-708e-4b38-80c3-671eadb17648',
  },
  {
    slug: '1m1b-ai-sustainability-virtual-internship',
    name: '1M1B AI + Sustainability Virtual Internship',
    issuer: '1M1B',
    date: '19 June 2026',
    category: 'Internships',
    kind: 'Virtual Internship',
    credential: 'PLAN-5C114CF1ADED',
  },
  {
    slug: '1m1b-bootcamp-certificate',
    name: '1M1B AI + Sustainability Bootcamp',
    issuer: '1M1B',
    date: '—',
    category: 'AI',
    kind: 'Bootcamp',
  },

  // Cloud / DevOps
  {
    slug: 'devops-intern-apssdc',
    name: 'AWS Cloud Computing – DevOps Internship',
    issuer: 'APSSDC · Government of Andhra Pradesh',
    date: '04 May – 03 July 2026',
    category: 'Cloud',
    kind: 'Internship',
    credential: 'APSSDC/SIP/2026-27/30716',
  },
  {
    slug: 'google-developer-code-vipassana-s14-certificate',
    name: 'Code Vipassana Season 14',
    issuer: 'Google Developers',
    date: '—',
    category: 'Cloud',
    kind: 'Training',
  },
  {
    slug: 'google-developer-code-vipassana-s15-certificate',
    name: 'Code Vipassana Season 15',
    issuer: 'Google Developers',
    date: '—',
    category: 'Cloud',
    kind: 'Training',
  },

  // Internships / enterprise technology
  {
    slug: 'aiml-internship-smartbridge',
    name: 'Artificial Intelligence & Machine Learning Internship',
    issuer: 'SmartBridge · APSCHE',
    date: '27 July 2026',
    category: 'Internships',
    kind: 'Virtual Internship',
    credential: 'VIP-AIML-2026-0159',
  },
  {
    slug: 'ibm-internship-edunet-foundation',
    name: 'Emerging Technologies Internship (Agentic AI, Cyber Security, Quantum)',
    issuer: 'Edunet Foundation · IBM SkillsBuild · AICTE',
    date: '12 June – 10 July 2026',
    category: 'Internships',
    kind: 'Internship',
  },
  {
    slug: 'salesforce-internship-smartbridge',
    name: 'Salesforce Administrator with AI Agentforce Specialization',
    issuer: 'SmartBridge · APSCHE',
    date: '31 July 2026',
    category: 'Internships',
    kind: 'Virtual Internship',
    credential: 'VIP-SF-2026-0110',
  },
  {
    slug: 'servicenow-virutal-internship-smartbridge',
    name: 'ServiceNow Virtual Internship',
    issuer: 'ServiceNow · SmartBridge · AICTE',
    date: '19 May 2026',
    category: 'Internships',
    kind: 'Virtual Internship',
    credential: 'SNU2020769',
  },
  {
    slug: 'web-development-intern-at-vaultofcodes-in-certificate',
    name: 'Web Development Internship',
    issuer: 'VaultofCodes',
    date: '01 June – 01 July 2025',
    category: 'Internships',
    kind: 'Internship',
  },

  // Academic / professional
  {
    slug: 'software-project-management-nptel-certificate',
    name: 'Software Project Management',
    issuer: 'NPTEL · 12-week course',
    date: 'Jul – Oct 2025',
    category: 'Academic',
    kind: 'Course',
    credential: 'NPTEL25CS109S551100068 · score 72',
  },
  {
    slug: 'introduction-to-internet-of-things-nptel-certificate',
    name: 'Introduction to Internet of Things',
    issuer: 'NPTEL · 12-week course',
    date: 'Jan – Apr 2026',
    category: 'Academic',
    kind: 'Course',
    credential: 'NPTEL26CS37S750100176 · score 76',
  },
  {
    slug: 'certified-online-fraud-prevention-specialist-cofps-certification',
    name: 'Certified Online Fraud Prevention Specialist (COFPS)',
    issuer: 'Hack & Fix',
    date: '—',
    category: 'Academic',
    kind: 'Certification',
  },
  {
    slug: 's-c-o-a-by-flipkart-certificate',
    name: 'Supply Chain Operations Academy (SCOA)',
    issuer: 'Flipkart',
    date: '—',
    category: 'Academic',
    kind: 'Course',
  },
  {
    slug: 'paper-publication-certificate',
    name: 'Research Paper Publication Certificate',
    issuer: 'IJEDR — International Journal of Engineering Development and Research',
    date: '31 March 2026',
    category: 'Academic',
    kind: 'Publication',
    credential: 'Paper ID IJEDR26A1262',
  },

  // Achievements
  {
    slug: 'national-financial-literacy-quiz-2026-certification',
    name: 'National Financial Literacy Quiz 2026 (College Round)',
    issuer: 'Participation',
    date: '2026',
    category: 'Achievements',
    kind: 'Achievement',
  },
  {
    slug: 'samsung-galaxy-ai-treasure-hunt-2026',
    name: 'Samsung Galaxy AI Treasure Hunt 2026',
    issuer: 'Samsung · Participation',
    date: '25 June 2026',
    category: 'Achievements',
    kind: 'Achievement',
  },
]

export const certifications = raw.map((c) => ({ ...c, file: assetsBySlug[c.slug] }))

export const certificateUrl = (slug: string) => assetsBySlug[slug]

export const certCategories = [
  'All',
  'Development',
  'AI',
  'Cloud',
  'Internships',
  'Academic',
  'Achievements',
] as const
