
export type Project = {
  title: string
  summary: string
  tags: string[]
  link?: string
  repo?: string
  period?: string
}


export const projects: Project[] = [
  {
    title: 'Blog Laravel',
    period: '2025',
    tags: ['Laravel', 'PHP', 'MySQL', 'Blade'],
    summary:
      'Application blog complète avec authentification, gestion des articles et commentaires.',
  },
  {
    title: 'Plateforme Cours en Ligne',
    period: '2025',
    tags: ['Laravel', 'PHP', 'MySQL'],
    summary:
      'Plateforme e-learning développée avec Laravel et PHP pour la création et gestion de cours en ligne.',
  },
  {
    title: 'Gestion Commandes Fournisseur',
    period: '2026',
    tags: ['Java', 'JDBC', 'MySQL', 'NetBeans'],
    summary:
      'Application desktop de gestion des commandes fournisseurs développée avec Java et JDBC sous NetBeans.',
    repo: 'https://github.com/khadija-bouraiss/GestionCommandesFournisseurs.git',
  },
  {
    title: ' Inventory Management App',
    period: '2026',
    tags: ['Jakarta EE', 'JSP', 'Servlet', 'Hibernate', 'DAO'],
    summary:
      'Application web complète de gestion d\'inventaire développée avec les technologies Java EE modernes. Intégration de JSP, Servlet et Hibernate avec un pattern DAO générique et deux entités métier.',
    repo: 'https://github.com/khadija-bouraiss/tp0_JakartaEE.git',
  },
  {
    title: "Plateforme Gestion d'Événements",
    period: '2025',
    tags: ['SQL Developer', 'MySQL', 'Merise', 'PowerDesigner'],
    summary:
      "Conception et modélisation de la base de données (MCD, MLD, MPD) d'une plateforme de gestion d'événements avec SQL Developer et Merise.",
  },
  {
    title: 'Enterprise Network Infrastructure',
    period: '2025',
    tags: ['Cisco', 'Réseaux', 'VLAN', 'Routing'],
    summary:
      "Conception et configuration d'une infrastructure réseau d'entreprise avec VLANs, routage inter-VLAN et sécurité réseau.",
  },
]