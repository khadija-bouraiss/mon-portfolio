export type Certification = {
  title: string
  issuer: string
  issueDate: string
  expiryDate?: string
  credentialId?: string
  credentialUrl?: string
  skills?: string[]
  tags?: string[]
  image?: string
  imageAlt?: string
  status?: 'active' | 'expired' | 'revoked'
}

export const certifications: Certification[] = [
  {
    title: 'Certification Professionnelle Hibernate & JPA',
    issuer: 'MLIAEdu',
    issueDate: '2026-03',
    credentialId: '28-c9293c3b-4679-4008-91be-d060c71d80',
    skills: ['Hibernate', 'JPA', 'Java', 'Jakarta EE'],
    tags: ['JEE', 'Backend'],
    status: 'active',
  },
  {
    title: 'Notions de base sur les réseaux',
    issuer: 'Cisco Networking Academy',
    issueDate: '2026-01',
    skills: ['Réseaux', 'TCP/IP', 'Routing', 'Switching'],
    tags: ['Réseaux', 'Cisco'],
    status: 'active',
  },
  {
    title: 'Overview of AI (French)',
    issuer: 'Huawei ICT Academy',
    issueDate: '2026-01',
    credentialId: 'ICT20260116000001',
    skills: ['Intelligence Artificielle', 'Machine Learning'],
    tags: ['IA', 'Cloud'],
    status: 'active',
  },
  {
    title: 'Transformation Digitale au Maroc',
    issuer: 'Academia Raqmya — ADD (#e-TAMKEEN)',
    issueDate: '2026-03',
    credentialId: '6268-2676-2834-2707',
    skills: ['Digital', 'Innovation', 'E-gouvernement'],
    tags: ['Digital', 'Maroc'],
    status: 'active',
  },
  {
    title: 'Développeur Web Fullstack (مطوّر الويب المتكامل)',
    issuer: 'Academia Raqmya — ADD',
    issueDate: '2025-12',
    credentialId: '2149-6078-8724-2762',
    skills: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    tags: ['Web', 'Fullstack'],
    status: 'active',
  },
  {
    title: 'Certificate of Participation — Java Exchange',
    issuer: 'Computer Science Club — FST Marrakech',
    issueDate: '2025-12',
    skills: ['Java', 'JEE', 'Développement'],
    tags: ['Java', 'Formation'],
    status: 'active',
  },
  {
    title: 'Fondamentaux de la Programmation (أساسيات البرمجة)',
    issuer: 'Academia Raqmya — ADD',
    issueDate: '2025-12',
    credentialId: '1387-5330-2881-3300',
    skills: ['Algorithmique', 'Logique de programmation'],
    tags: ['Programmation', 'Débutant'],
    status: 'active',
  },
]