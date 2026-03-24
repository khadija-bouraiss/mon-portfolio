export type Education = {
  school: string
  degree: string
  field?: string
  location?: string
  start: string
  end?: string
  gpa?: string
  courses?: string[]
  highlights?: string[]
}

export const education: Education[] = [
  {
    school: 'Faculté des Sciences et Techniques — Marrakech',
    degree: 'Licence',
    field: 'Systèmes Informatiques Répartis (SIR)',
    location: 'Marrakech',
    start: '2025-09',
    courses: [
      'Administration Linux',
      'Développement Web',
      'POO Java',
      'Réseaux et Protocoles',
      'SGBD',
      'SGBD Répartis',
      'IHM — Interface Homme Machine',
    ],
    highlights: ['En cours'],
  },
  {
    school: 'Faculté des Sciences et Techniques — Marrakech',
    degree: 'DEUST',
    field: 'Mathématiques, Informatique, Physique et Chimie',
    location: 'Marrakech',
    start: '2023-09',
    end: '2025-06',
    courses: [
      'Algorithmique et Programmation',
      'Analyse',
      'Algèbre',
      'Structures de données',
      'Physique',
      'Chimie',
    ],
    highlights: ['Diplômée 2025'],
  },
]