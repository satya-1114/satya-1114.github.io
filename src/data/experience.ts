export type EngagementKind =
  | 'Internship'
  | 'Virtual Internship'
  | 'Training'
  | 'Bootcamp'

export interface ExperienceItem {
  role: string
  org: string
  period: string
  kind: EngagementKind
  points: string[]
  verified?: string
}

/** Professional / applied engagements. Certificates and courses live in certifications.ts. */
export const experience: ExperienceItem[] = [
  {
    role: 'AI/ML Intern',
    org: 'Infosys Springboard',
    period: 'Jun 2026 – Aug 2026',
    kind: 'Internship',
    points: [
      'Working on AI-enabled software development projects focused on technical problem solving.',
      'Building practical applications around machine learning workflows.',
    ],
  },
  {
    role: 'AWS Cloud Computing & DevOps Intern',
    org: 'APSSDC Internship Program',
    period: 'May 2026 – Jul 2026',
    kind: 'Internship',
    verified: 'Certificate No. APSSDC/SIP/2026-27/30716 · 04 May 2026 – 03 Jul 2026',
    points: [
      'Hands-on experience with AWS cloud services, application deployment and DevOps workflows.',
      'Applied cloud infrastructure concepts to practical software deployment activities.',
    ],
  },
  {
    role: 'Emerging Technologies Intern',
    org: 'Edunet Foundation · IBM SkillsBuild (AICTE)',
    period: 'Jun 2026 – Jul 2026',
    kind: 'Internship',
    verified: '4-week internship · 12 Jun 2026 – 10 Jul 2026',
    points: [
      'Worked across Agentic AI, cyber security and quantum computing tracks using IBM SkillsBuild and IBM Cloud.',
      'Developed an industry-relevant project in artificial intelligence and cloud computing.',
    ],
  },
  {
    role: 'Artificial Intelligence & Machine Learning Intern',
    org: 'SmartBridge · APSCHE',
    period: '2026 · 2 months (120 hours)',
    kind: 'Virtual Internship',
    verified: 'Certificate ID VIP-AIML-2026-0159 · 27 Jul 2026',
    points: [
      'Completed a short-term virtual internship program on artificial intelligence and machine learning.',
    ],
  },
  {
    role: 'Full Stack Developer — MERN Stack Intern',
    org: 'SmartBridge · APSCHE',
    period: '2026 · 2 months (120 hours)',
    kind: 'Virtual Internship',
    verified: 'Certificate ID VIP-FSD-2026-2569 · 13 Aug 2026',
    points: [
      'Completed a short-term virtual internship program on full stack development with the MERN stack.',
    ],
  },
  {
    role: 'Web Development Intern',
    org: 'VaultofCodes',
    period: 'Jun 2025 – Jul 2025',
    kind: 'Internship',
    verified: '01 Jun 2025 – 01 Jul 2025',
    points: [
      'Developed responsive web applications using HTML, CSS and JavaScript.',
      'Built reusable components and managed project development with Git and GitHub.',
    ],
  },
]

export const research = {
  title:
    'Pre-Publication Cryptographic Verification for Tamper-Proof News Distribution Using Blockchain',
  journal: 'International Journal of Engineering Development and Research (IJEDR)',
  issue: 'Volume 14 · Issue 1 · March 2026',
  publishedOn: '31 March 2026',
  paperId: 'IJEDR26A1262',
  registrationId: '305527',
  coAuthors: [
    'Akula Siva Naga Prasad',
    'Ketha Prabhu Dinesh',
    'Durga Surya Teja',
    'Billa Ganga Bhavani',
  ],
  certificateSlug: 'paper-publication-certificate',
  repo: 'https://github.com/satya-1114/cryptographic-news-verification',
}
