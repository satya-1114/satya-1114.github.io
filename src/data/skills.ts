export interface SkillGroup {
  id: string
  title: string
  note: string
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    id: 'programming',
    title: 'Programming',
    note: 'Languages used across coursework, internships and project work.',
    items: ['Java', 'Python', 'JavaScript', 'SQL'],
  },
  {
    id: 'cs',
    title: 'Computer Science',
    note: 'Academic foundation applied to real application design.',
    items: [
      'Object-Oriented Programming',
      'Data Structures',
      'Algorithms',
      'Complexity Analysis',
      'DBMS',
      'Operating Systems',
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    note: 'REST services, authentication and application logic.',
    items: ['Node.js', 'Express.js', 'FastAPI', 'REST APIs', 'JWT Authentication'],
  },
  {
    id: 'databases',
    title: 'Databases',
    note: 'Relational modelling, ORMs and managed NoSQL storage.',
    items: ['PostgreSQL', 'Amazon DynamoDB', 'SQLAlchemy', 'Prisma ORM'],
  },
  {
    id: 'cloud',
    title: 'Cloud & DevOps',
    note: 'Deployment, hosting and process management.',
    items: ['AWS EC2', 'Amazon S3', 'Amazon SNS', 'Render', 'Nginx', 'PM2'],
  },
  {
    id: 'web',
    title: 'Web',
    note: 'Interfaces built on top of the services above.',
    items: ['HTML5', 'CSS3', 'React.js', 'TypeScript'],
  },
  {
    id: 'tools',
    title: 'Tools',
    note: 'Daily development workflow.',
    items: ['Git', 'GitHub', 'VS Code'],
  },
]
