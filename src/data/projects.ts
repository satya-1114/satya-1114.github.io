export type ProjectVisual = 'flow' | 'grid' | 'layers' | 'nodes' | 'radial'

export interface Project {
  id: string
  index: string
  name: string
  tagline: string
  summary: string
  problem: string
  solution: string
  features: string[]
  stack: string[]
  architecture: string[]
  contribution: string
  github: string
  demo?: string
  visual: ProjectVisual
  featured: boolean
}

export const projects: Project[] = [
  {
    id: 'foodlink',
    index: '01',
    name: 'FoodLink',
    tagline: 'Smart Food Donation & Distribution Platform',
    summary:
      'A cloud-based full-stack platform connecting food donors with NGOs through role-based workflows and donation tracking.',
    problem:
      'Surplus food and the organisations that can distribute it rarely meet in time. Donations are coordinated informally, with no shared record of what was offered, accepted or collected.',
    solution:
      'A full-stack platform where donors publish available food and NGOs claim it, backed by REST APIs, role-based workflows and AWS services for storage, deployment and notifications.',
    features: [
      'Role-based workflows separating donor and NGO responsibilities',
      'Donation lifecycle tracking from listing to collection',
      'RESTful APIs built with Node.js and Express.js',
      'Structured application data in PostgreSQL',
      'File and media handling through Amazon S3',
      'Notification delivery via Amazon SNS',
    ],
    stack: ['Node.js', 'Express.js', 'PostgreSQL', 'AWS EC2', 'Amazon S3', 'DynamoDB', 'Amazon SNS', 'Docker'],
    architecture: ['Donor', 'FoodLink API', 'PostgreSQL / DynamoDB', 'NGO'],
    contribution:
      'Designed and implemented the REST API layer, the PostgreSQL data model and the AWS integration for deployment, storage, file management and notifications.',
    github: 'https://github.com/satya-1114/FoodLink',
    visual: 'flow',
    featured: true,
  },
  {
    id: 'parkshare',
    index: '02',
    name: 'ParkShare',
    tagline: 'AI-Enhanced Community Parking Marketplace',
    summary:
      'A marketplace for discovering and booking verified parking spaces, with AI-assisted recommendations and a deterministic fallback.',
    problem:
      'Drivers waste time searching for parking while private spaces sit unused, and there is no trusted way to list, verify and book them.',
    solution:
      'A React and TypeScript marketplace over a FastAPI backend, with JWT-secured booking workflows and IBM Granite models providing intelligent recommendations.',
    features: [
      'Discovery and booking of verified parking spaces',
      'Secure workflows with JWT authentication',
      'REST APIs built with FastAPI and SQLAlchemy',
      'AI recommendations powered by IBM Granite models',
      'Deterministic fallback so recommendations never block the booking flow',
    ],
    stack: ['React.js', 'TypeScript', 'FastAPI', 'PostgreSQL', 'SQLAlchemy', 'JWT', 'IBM watsonx.ai'],
    architecture: ['Driver / Owner', 'React client', 'FastAPI + SQLAlchemy', 'Granite recommendations'],
    contribution:
      'Built the full-stack marketplace: the React and TypeScript interface, the FastAPI service layer with PostgreSQL and SQLAlchemy, authentication, and the recommendation integration with its fallback path.',
    github: 'https://github.com/satya-1114/ParkShare',
    visual: 'radial',
    featured: true,
  },
  {
    id: 'finance-backend',
    index: '03',
    name: 'Finance Backend',
    tagline: 'Finance Data Processing & Access Control API',
    summary:
      'A backend REST API for managing financial records with JWT authentication and role-based access control.',
    problem:
      'Financial records need to be readable by many people but editable by very few, and a single permission mistake exposes sensitive data.',
    solution:
      'A Node.js and Express API with Prisma over PostgreSQL, exposing validated endpoints guarded by JWT authentication and Viewer / Analyst / Admin roles.',
    features: [
      'Create, manage and analyse income and expense records',
      'JWT-based authentication on protected endpoints',
      'Role-based access control for Viewer, Analyst and Admin users',
      'Request validation across the API surface',
      'Dashboard-oriented aggregate insights',
    ],
    stack: ['Node.js', 'Express.js', 'PostgreSQL', 'Prisma ORM', 'JWT'],
    architecture: ['Users & Roles', 'Express API', 'Prisma ORM', 'PostgreSQL'],
    contribution:
      'Developed the API end to end — data model, Prisma schema, authentication middleware and the role-based authorisation layer.',
    github: 'https://github.com/satya-1114/finance-backend',
    visual: 'layers',
    featured: true,
  },
  {
    id: 'ai-financial-risk-detection',
    index: '04',
    name: 'AI Financial Risk Detection',
    tagline: 'Behaviour-based transaction risk & audit assistant',
    summary:
      'Identifies anomalous transactions using behaviour analysis, risk scoring and explainable audit insights.',
    problem:
      'Rule-based checks miss transactions that are unusual only relative to a specific account’s own behaviour.',
    solution:
      'A Streamlit application that learns normal transaction behaviour from uploaded data, scores deviations and explains why each transaction was flagged.',
    features: [
      'CSV upload of transaction data',
      'Behaviour analysis over amount, vendor familiarity and timing',
      'Risk scoring with high / moderate / normal classification',
      'Explanations for each detected risk',
      'Transaction and risk visualisations',
      'Downloadable audit reports and an overall risk summary',
    ],
    stack: ['Python', 'Streamlit', 'Pandas', 'Data analysis'],
    architecture: ['Transaction CSV', 'Behaviour agent', 'Detection agent', 'Audit report'],
    contribution: 'Built the analysis pipeline, risk scoring logic and the Streamlit dashboard.',
    github: 'https://github.com/satya-1114/ai-financial-risk-detection',
    visual: 'nodes',
    featured: false,
  },
  {
    id: 'ai-audit-system',
    index: '05',
    name: 'AI Audit System',
    tagline: 'Behaviour-based intelligent audit assistant',
    summary:
      'An explainable, agent-structured system that detects anomalous financial transactions and generates audit insights.',
    problem:
      'Traditional rule-based audit tooling cannot adapt to changing transaction behaviour and offers little reasoning for its alerts.',
    solution:
      'A modular pipeline that preprocesses transaction data, learns behavioural patterns and produces classified, explainable audit findings.',
    features: [
      'Real-time anomaly detection',
      'Risk classification into high, moderate and normal',
      'Automated audit insight generation',
      'Explainable reasoning for flagged transactions',
    ],
    stack: ['Python', 'Streamlit', 'Machine learning'],
    architecture: ['Preprocessing', 'Behaviour modelling', 'Anomaly detection', 'Audit insights'],
    contribution: 'Designed the modular agent architecture and the deployed prototype.',
    github: 'https://github.com/satya-1114/ai-audit-system',
    demo: 'https://ai-audit-system-b3wmhejrdndqozwekyvcxe.streamlit.app/',
    visual: 'layers',
    featured: false,
  },
  {
    id: 'hdi-insight',
    index: '06',
    name: 'HDI Insight',
    tagline: 'Machine learning platform for Human Development Index prediction',
    summary:
      'Predicts a country’s Human Development Index from key socioeconomic indicators through a Flask API and a React frontend.',
    problem:
      'Development is usually reduced to economic growth alone, while health, education and standard of living are harder to combine into one readable measure.',
    solution:
      'A full machine learning workflow — preprocessing, feature selection, model training and evaluation — served by a Flask REST API and visualised in a React interface.',
    features: [
      'HDI prediction from socioeconomic indicators',
      'Human development level classification',
      'Linear regression model with evaluation metrics',
      'Flask REST API consumed by a React frontend',
    ],
    stack: ['Python', 'Flask', 'Scikit-learn', 'React', 'Vite'],
    architecture: ['Indicators', 'Model service', 'Flask REST API', 'React visualisation'],
    contribution: 'Implemented the end-to-end workflow from data preprocessing to the frontend visualisation.',
    github: 'https://github.com/satya-1114/hdi-insight',
    visual: 'grid',
    featured: false,
  },
  {
    id: 'admission-system',
    index: '07',
    name: 'AI-Enabled Student Admission System',
    tagline: 'Salesforce admission management with Agentforce',
    summary:
      'A Salesforce-based admission management system using Flow Builder, Agentforce and Prompt Builder for evaluation, guidance and analytics.',
    problem:
      'Admission teams spend most of their time on repetitive completeness checks and document verification instead of decisions.',
    solution:
      'A Salesforce application that automates application evaluation and document verification while keeping final admission decisions with the officer.',
    features: [
      'Admission application management and status tracking',
      'Automated completeness and eligibility evaluation',
      'Document verification tracking',
      'AI-assisted admission guidance',
      'Reports and dashboards for admission analytics',
    ],
    stack: ['Salesforce', 'Agentforce', 'Prompt Builder', 'Flow Builder', 'Reports & Dashboards'],
    architecture: ['Application intake', 'Automated evaluation', 'AI guidance', 'Officer decision'],
    contribution: 'Built the object model, automation flows, validation rules and AI guidance configuration.',
    github: 'https://github.com/satya-1114/ai-enabled-student-admission-system',
    visual: 'flow',
    featured: false,
  },
  {
    id: 'ai-tool-recommendation',
    index: '08',
    name: 'AI Tool Recommendation Platform',
    tagline: 'Suggests AI tools based on use case and intent',
    summary:
      'A lightweight web application that recommends free and paid AI tools for a described use case.',
    problem: 'Choosing between the growing number of AI tools is mostly guesswork for a first-time user.',
    solution: 'A browser-based recommender that maps a described use case and intent to relevant free and paid tools.',
    features: [
      'Recommendations by use case and intent',
      'Coverage of both free and paid tools',
      'Static deployment on GitHub Pages',
    ],
    stack: ['HTML', 'CSS', 'JavaScript', 'GitHub Pages'],
    architecture: ['Use case input', 'Matching logic', 'Ranked tool list'],
    contribution: 'Built and deployed the full application.',
    github: 'https://github.com/satya-1114/AI-Tool-Recommendation-Platform',
    demo: 'https://satya-1114.github.io/AI-Tool-Recommendation-Platform/',
    visual: 'grid',
    featured: false,
  },
  {
    id: 'jpmc',
    index: '09',
    name: 'JPMC Software Engineering Simulation',
    tagline: 'Advanced software engineering program project',
    summary:
      'Project repository for the JPMorgan Chase & Co. software engineering job simulation on Forage.',
    problem: 'The simulation covers a realistic service integration task rather than an isolated exercise.',
    solution:
      'Worked through project setup, Kafka integration, H2 integration and REST API integration and controller tasks.',
    features: [
      'Project setup',
      'Kafka integration',
      'H2 database integration',
      'REST API integration and controller',
    ],
    stack: ['Java', 'Spring', 'Kafka', 'H2'],
    architecture: ['Kafka stream', 'Service layer', 'H2 store', 'REST controller'],
    contribution: 'Completed all practical tasks in the simulation (verified February 2026).',
    github: 'https://github.com/satya-1114/JPMC',
    visual: 'nodes',
    featured: false,
  },
]

export const featuredProjects = projects.filter((p) => p.featured)
export const moreProjects = projects.filter((p) => !p.featured)
