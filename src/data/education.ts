export interface EducationItem {
  institution: string
  qualification: string
  period: string
  result: string
  meta?: string
}

export const education: EducationItem[] = [
  {
    institution: 'Bonam Venkata Chalamayya Engineering College, Odalarevu',
    qualification: 'B.Tech — Computer Science & Engineering',
    period: '2023 – 2027',
    result: 'CGPA 8.5 / 10',
    meta: 'JNTU Kakinada',
  },
  {
    institution: 'Sri Chaitanya Junior College',
    qualification: 'Intermediate — MPC',
    period: '2021 – 2023',
    result: '67%',
  },
]

export const snapshot = [
  { value: '2027', label: 'Graduation' },
  { value: '8.5/10', label: 'CGPA' },
  { value: 'Full-Stack', label: 'Primary development focus' },
  { value: 'AI / Cloud', label: 'Current exploration' },
]

export const interests = [
  'AI Engineering',
  'Generative AI',
  'LLMs',
  'Backend Architecture',
  'Cloud Computing',
  'DevOps',
  'Full-Stack Development',
]
