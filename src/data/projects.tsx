import {
  Server,
  Linkedin,
  Shield,
  Trello,
  Code2,
  FileText,
} from "lucide-react";

export const projects = [
  {
    id: "f1nfos",
    title: "F1nfos",
    description:
      "AP en groupe : Planifier les activités, Réaliser les tests d'intégration et d'acceptation, Déployer un service",
    icon: <Server className="w-6 h-6" />,
    image:
      "https://images.unsplash.com/photo-1541560052-77ec1bbc09f7?auto=format&fit=crop&w=800&q=80",
    details:
      "Projet de groupe axé sur la Formule 1 comprenant:\n- Développement d'une API REST\n- Tests d'intégration complets\n- Déploiement automatisé\n- Gestion de base de données",
    excelFile: "/files/f1nfos-details.xlsx",
  },
  {
    id: "linkedin",
    title: "LinkedIn",
    description: "Gérer son identité professionnelle",
    icon: <Linkedin className="w-6 h-6" />,
    image:
      "https://images.unsplash.com/photo-1611944212129-29977ae1398c?auto=format&fit=crop&w=800&q=80",
    details:
      "Création et maintenance d'un profil professionnel:\n- Optimisation SEO\n- Networking actif\n- Partage de contenu professionnel\n- Veille technologique",
    excelFile: "/files/linkedin-analytics.xlsx",
  },
  {
    id: "cybernews",
    title: "Cybernews et veille perso",
    description:
      "Participer à l'évolution d'un site Web, Veille informationnelle",
    icon: <Shield className="w-6 h-6" />,
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80",
    details:
      "Plateforme de veille en cybersécurité:\n- Agrégation de news\n- Analyse de tendances\n- Reporting hebdomadaire\n- Recommandations de sécurité",
    excelFile: "/files/cybernews-stats.xlsx",
  },
  {
    id: "gsk",
    title: "AP Travail de groupe GSK",
    description: "Planifier les activités, Collecter et suivre des demandes",
    icon: <Trello className="w-6 h-6" />,
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
    details:
      "Gestion de projet en équipe:\n- Organisation des tâches\n- Suivi des demandes\n- Collaboration d'équipe\n- Reporting régulier",
    excelFile: "/files/gsk-project.xlsx",
  },
  {
    id: "portfolio",
    title: "Portfolio",
    description: "Exploiter des référentiels, normes et standards",
    icon: <Code2 className="w-6 h-6" />,
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    details:
      "Création d'un portfolio professionnel:\n- Design moderne\n- Responsive design\n- Animations fluides\n- SEO optimisé",
    excelFile: "/files/portfolio-metrics.xlsx",
  },
  {
    id: "stage",
    title: "Stage ABÉCÉDAIRE",
    description: "Stage avec rapport téléchargeable",
    icon: <FileText className="w-6 h-6" />,
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
    details:
      "Stage en entreprise:\n- Développement web\n- API NodeJS\n- Maquettage Figma\n- Scraping de données",
    excelFile: "/files/stage-report.xlsx",
  },
];
