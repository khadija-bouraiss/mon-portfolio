export type Experience = {
    role: string
    company: string
    location?: string
    start: string
    end?: string
    description: string[]
    tags: string[]
}

export const experience: Experience[] = [

    {
        role: ' Inventory Management App',
        company: 'FST Marrakech',
        location: 'Marrakech',
        start: '2026-03',
        end: '2026-03',
        description: [
            'Application web complète de gestion d\'inventaire avec les technologies Java EE modernes',
            'Intégration de JSP, Servlet et Hibernate avec un pattern DAO générique',
            'Deux entités métier avec persistance complète et architecture MVC',
        ],
        tags: ['Jakarta EE', 'JSP', 'Servlet', 'Hibernate', 'DAO', 'Java'],
    },
    {
        role: 'Gestion des Commandes Fournisseurs',
        company: 'FST Marrakech',
        location: 'Marrakech',
        start: '2026-03',
        end: '2026-03',
        description: [
            'Application de bureau développée en Java Swing pour la gestion des commandes fournisseurs',
            'Gestion des fournisseurs, produits et commandes d\'achat avec interface graphique moderne',
            'Suivi rigoureux des achats pour éviter erreurs, pertes de données et manque de visibilité',
        ],
        tags: ['Java', 'Java Swing', 'JDBC', 'MySQL', 'NetBeans'],
    },

    {
        role: 'Enterprise Network Infrastructure',
        company: 'FST Marrakech',
        location: 'Marrakech',
        start: '2025-12',
        end: '2025-12',
        description: [
            "Conception d'une infrastructure réseau complète pour une entreprise simulée",
            'Configuration VLANs, routage inter-VLAN et protocoles de sécurité réseau',
            'Documentation technique et présentation finale',
        ],
        tags: ['Cisco', 'Réseaux', 'VLAN', 'Sécurité'],
    },

    {
        role: "Modélisation BDD — Plateforme Gestion d'Événements",
        company: 'FST Marrakech',
        location: 'Marrakech',
        start: '2025-11',
        end: '2025-11',
        description: [
            "Conception du MCD, MLD et MPD d'une plateforme de gestion d'événements",
            'Utilisation de Merise, PowerDesigner et SQL Developer',
            'Modélisation complète avec contraintes d\'intégrité et relations',
        ],
        tags: ['Merise', 'SQL Developer', 'PowerDesigner', 'MySQL'],
    },
]