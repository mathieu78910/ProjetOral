import React, { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { Github, Linkedin, Code2, Database, Server, Shield, Trello, BookOpen, FileText, Send, Mail, Phone, MapPin, Download, ExternalLink, FileSpreadsheet } from 'lucide-react';
import myPhoto from './assets/my-photo.jpg';
function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [selectedNews, setSelectedNews] = useState<string | null>(null);
  const [selectedStage, setSelectedStage] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const skills = [
    { category: "Langages de programmation", items: ["C#", "Python"] },
    { category: "Langages web", items: ["JavaScript", "PHP", "HTML", "CSS"] },
    { category: "Frameworks et bibliothèques", items: ["React", "Symfony"] },
    { category: "Bases de données", items: ["SQL", "MySQL", "SQL Server", "Transact-SQL"] },
    { category: "Conception", items: ["Merise", "UML"] },
    { category: "CMS", items: ["WordPress", "WIX"] },
    { category: "Cybersécurité", items: ["ANSSI", "RGPD"] },
    { category: "Gestion de projet", items: ["Scrum", "Trello", "Notion"] },
    { category: "Gestion de version", items: ["GitHub"] }
  ];

  const projects = [
    {
      id: "f1nfos",
      title: "F1nfos",
      description: "AP en groupe : Planifier les activités, Réaliser les tests d'intégration et d'acceptation, Déployer un service",
      icon: <Server className="w-6 h-6" />,
      image: "https://images.unsplash.com/photo-1541560052-77ec1bbc09f7?auto=format&fit=crop&w=800&q=80",
      details: "Projet de groupe axé sur la Formule 1 comprenant:\n- Développement d'une API REST\n- Tests d'intégration complets\n- Déploiement automatisé\n- Gestion de base de données",
      excelFile: "/files/f1nfos-details.xlsx"
    },
    {
      id: "linkedin",
      title: "LinkedIn",
      description: "Gérer son identité professionnelle",
      icon: <Linkedin className="w-6 h-6" />,
      image: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?auto=format&fit=crop&w=800&q=80",
      details: "Création et maintenance d'un profil professionnel:\n- Optimisation SEO\n- Networking actif\n- Partage de contenu professionnel\n- Veille technologique",
      excelFile: "/files/linkedin-analytics.xlsx"
    },
    {
      id: "cybernews",
      title: "Cybernews et veille perso",
      description: "Participer à l'évolution d'un site Web, Veille informationnelle",
      icon: <Shield className="w-6 h-6" />,
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80",
      details: "Plateforme de veille en cybersécurité:\n- Agrégation de news\n- Analyse de tendances\n- Reporting hebdomadaire\n- Recommandations de sécurité",
      excelFile: "/files/cybernews-stats.xlsx"
    },
    {
      id: "gsk",
      title: "AP Travail de groupe GSK",
      description: "Planifier les activités, Collecter et suivre des demandes",
      icon: <Trello className="w-6 h-6" />,
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
      details: "Gestion de projet en équipe:\n- Organisation des tâches\n- Suivi des demandes\n- Collaboration d'équipe\n- Reporting régulier",
      excelFile: "/files/gsk-project.xlsx"
    },
    {
      id: "portfolio",
      title: "Portfolio",
      description: "Exploiter des référentiels, normes et standards",
      icon: <Code2 className="w-6 h-6" />,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      details: "Création d'un portfolio professionnel:\n- Design moderne\n- Responsive design\n- Animations fluides\n- SEO optimisé",
      excelFile: "/files/portfolio-metrics.xlsx"
    },
    {
      id: "stage",
      title: "Stage ABÉCÉDAIRE",
      description: "Stage avec rapport téléchargeable",
      icon: <FileText className="w-6 h-6" />,
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
      details: "Stage en entreprise:\n- Développement web\n- API NodeJS\n- Maquettage Figma\n- Scraping de données",
      excelFile: "/files/stage-report.xlsx"
    }
  ];

  const news = [
    { 
      id: "news1",
      title: "Entrainement des unités d'élites", 
      category: "Défense",
      image: "https://images.unsplash.com/photo-1624705002806-5d72df19c3ad?auto=format&fit=crop&w=800&q=80",
      details: "Les unités d'élite utilisent désormais la réalité virtuelle pour s'entraîner dans des environnements simulés ultra-réalistes.",
      downloadUrl: "/files/defense-training.pdf"
    },
    { 
      id: "news2",
      title: "Améliorer la santé", 
      category: "Santé",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",
      details: "La réalité virtuelle révolutionne le domaine de la santé en offrant de nouvelles approches thérapeutiques.",
      downloadUrl: "/files/health-vr.pdf"
    },
    { 
      id: "news3",
      title: "Alzheimer et réalité virtuelle", 
      category: "Santé",
      image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=800&q=80",
      details: "Des chercheurs utilisent la VR pour aider les patients atteints d'Alzheimer à stimuler leur mémoire.",
      downloadUrl: "/files/alzheimer-study.pdf"
    },
    {
      id: "news4",
      title: "Projet \"TARGET\" pour former les policiers",
      category: "Défense",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
      details: "Programme innovant utilisant la VR pour l'entraînement des forces de l'ordre.",
      downloadUrl: "/files/target-project.pdf"
    },
    {
      id: "news5",
      title: "Technologies immersives et Défense",
      category: "Défense",
      image: "https://images.unsplash.com/photo-1580894894513-541e068a3e2b?auto=format&fit=crop&w=800&q=80",
      details: "L'armée adopte massivement les technologies immersives pour la formation.",
      downloadUrl: "/files/defense-tech.pdf"
    },
    {
      id: "news6",
      title: "La réalité virtuelle contre la dépression",
      category: "Santé",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
      details: "Nouvelles thérapies utilisant la VR pour traiter la dépression.",
      downloadUrl: "/files/depression-vr.pdf"
    },
    {
      id: "news7",
      title: "Révolutionner la rééducation",
      category: "Santé",
      image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&w=800&q=80",
      details: "La VR transforme les approches de rééducation physique.",
      downloadUrl: "/files/rehabilitation-vr.pdf"
    },
    {
      id: "news8",
      title: "Projet ORCHESTRAA",
      category: "Défense",
      image: "https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&w=800&q=80",
      details: "Formation militaire avancée utilisant la réalité virtuelle.",
      downloadUrl: "/files/orchestraa.pdf"
    },
    {
      id: "news9",
      title: "VR dans l'armée de Terre",
      category: "Défense",
      image: "https://images.unsplash.com/photo-1547547856-ee82879f9f0d?auto=format&fit=crop&w=800&q=80",
      details: "L'armée de Terre expérimente la VR pour l'entraînement au combat.",
      downloadUrl: "/files/army-vr.pdf"
    },
    {
      id: "news10",
      title: "Innovations pour les seniors",
      category: "Santé",
      image: "https://images.unsplash.com/photo-1574708867932-40b4a76591ca?auto=format&fit=crop&w=800&q=80",
      details: "La VR améliore la qualité de vie des personnes âgées.",
      downloadUrl: "/files/senior-vr.pdf"
    },
    {
      id: "news11",
      title: "VR dans les hôpitaux",
      category: "Santé",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
      details: "Les hôpitaux adoptent la VR pour la formation et les soins.",
      downloadUrl: "/files/hospital-vr.pdf"
    },
    {
      id: "news12",
      title: "VR comme technologie militaire",
      category: "Défense",
      image: "https://images.unsplash.com/photo-1534723452862-4c874018d66d?auto=format&fit=crop&w=800&q=80",
      details: "Potentiel de la VR dans les applications militaires avancées.",
      downloadUrl: "/files/military-vr.pdf"
    }
  ];

  const stages = [
    {
      id: "stage1",
      title: "Stage ABÉCÉDAIRE - 1ère année",
      period: "Mai - Juin 2024",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
      details: "Stage effectué chez ABÉCÉDAIRE:\n- Développement d'une API NodeJS\n- Création de maquettes Figma\n- Mise en place d'un système de scraping\n- Déploiement d'applications web",
      downloadUrl: "/files/src/public/files/MMO_RapportDeStageMathieuFinal3 (2).docx",
      attestationUrl: "/files/src/public/files/attestation-stage.odt"
    },
    {
      id: "stage2",
      title: "Stage GOTO IA - 2ème année",
      period: "Janvier - Février 2025",
      image: "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=800&q=80",
      details: "Stage effectué chez GOTO IA:\n- Développement en Symfony\n- Requête asynchrone en Ajax\n- Ajout de plusieurs formulaire\n- Code React pour afficher l'arborescence des fichiers",
      downloadUrl: "/files/src/public/files/MMO_RapportDeStageMathieuFinal (4).odt",
      attestationUrl: "/filessrc/public/files/AttestationDeStage2.jpg"
    }
  ];

  return (
    <div className="min-h-screen text-white">
      {/* Header */}
      <header className="fixed w-full bg-gray-900/80 backdrop-blur-md z-50 border-b border-white/10">
        <nav className="container mx-auto px-6 py-4">
          <ul className="flex space-x-8 justify-center text-sm">
            <li><a href="#home" className="hover:text-blue-400 transition-colors duration-300">Accueil</a></li>
            <li><a href="#skills" className="hover:text-blue-400 transition-colors duration-300">Compétences</a></li>
            <li><a href="#education" className="hover:text-blue-400 transition-colors duration-300">Formation</a></li>
            <li><a href="#stages" className="hover:text-blue-400 transition-colors duration-300">Stages</a></li>
            <li><a href="#projects" className="hover:text-blue-400 transition-colors duration-300">Réalisations</a></li>
            <li><a href="#news" className="hover:text-blue-400 transition-colors duration-300">Actualités VR</a></li>
            <li><a href="#contact" className="hover:text-blue-400 transition-colors duration-300">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-transparent to-transparent"></div>
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-12">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 title-gradient">
              Bonjour, je suis Mathieu
            </h1>
            <div className="text-xl md:text-2xl text-blue-400 mb-8">
              <span>J'aime pratiquer </span>
              <TypeAnimation
                sequence={[
                  'le football',
                  2000,
                  'la voile',
                  2000,
                  'le judo',
                  2000
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>
          </div>
          <div className="shrink-0">
            <img 
  src={myPhoto} 
  alt="Profile" 
  className="profile-image"
/>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 glass-section my-10">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center title-gradient">Compétences</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="hover-card p-6 animate-fadeInUp" style={{ animationDelay: `${index * 0.1}s` }}>
                <h3 className="text-xl font-semibold mb-4 text-blue-400">{skill.category}</h3>
                <ul className="space-y-2">
                  {skill.items.map((item, idx) => (
                    <li key={idx} className="flex items-center">
                      <Code2 className="w-4 h-4 mr-2 text-blue-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center title-gradient">Formation</h2>
          <div className="space-y-8">
            <div className="hover-card p-6 animate-fadeInUp">
              <h3 className="text-xl font-semibold mb-2">BTS SIO - Option SLAM</h3>
              <p className="text-gray-300">2023-2025 | Lycée La Châtaigneraie, Mesnil-Esnard</p>
            </div>
            <div className="hover-card p-6 animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
              <h3 className="text-xl font-semibold mb-2">ABÉCÉDAIRE</h3>
              <p className="text-gray-300">2024 | Scraping, Portfolio, Déploiement, API NodeJS, Maquette Figma</p>
            </div>
            <div className="hover-card p-6 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-xl font-semibold mb-2">Baccalauréat STI2D - Option ITEC</h3>
              <p className="text-gray-300">2022-2023 | Lycée La Châtaigneraie, Mesnil-Esnard</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stages Section */}
      <section id="stages" className="py-20 glass-section my-10">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center title-gradient">Stages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {stages.map((stage) => (
              <div key={stage.id} className="hover-card overflow-hidden rounded-lg">
                <img 
                  src={stage.image} 
                  alt={stage.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{stage.title}</h3>
                  <p className="text-gray-300 mb-4">Période : {stage.period}</p>
                  <div className={`${selectedStage === stage.id ? 'block' : 'hidden'}`}>
                    <p className="text-gray-300 whitespace-pre-line mb-4">{stage.details}</p>
                  </div>
                  <div className="flex justify-between items-center flex-wrap gap-4">
                    <button 
                      onClick={() => setSelectedStage(selectedStage === stage.id ? null : stage.id)}
                      className="text-blue-400 hover:text-blue-300 transition-colors flex items-center"
                    >
                      {selectedStage === stage.id ? 'Voir moins' : 'Voir plus'}
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </button>
                    <div className="flex gap-2">
                      {stage.downloadUrl && (
                        <a 
                          href={stage.downloadUrl}
                          download
                          className="button-style flex items-center px-4 py-2"
                        >
                          <Download className="w-5 h-5 mr-2" />
                          Rapport
                        </a>
                      )}
                      {stage.attestationUrl && (
                        <a 
                          href={stage.attestationUrl}
                          download
                          className="button-style flex items-center px-4 py-2"
                        >
                          <FileText className="w-5 h-5 mr-2" />
                          Attestation
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center title-gradient">Réalisations professionnelles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div 
                key={project.id}
                className="hover-card overflow-hidden rounded-lg"
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="text-blue-400 mb-4">{project.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className={`${selectedProject === project.id ? 'block' : 'hidden'}`}>
                    <p className="text-gray-300 whitespace-pre-line mb-4">{project.details}</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <button 
                      onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
                      className="text-blue-400 hover:text-blue-300 transition-colors flex items-center"
                    >
                      {selectedProject === project.id ? 'Voir moins' : 'Voir plus'}
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </button>
                    {project.excelFile && (
                      <a 
                        href={project.excelFile}
                        download
                        className="button-style flex items-center px-4 py-2"
                      >
                        <FileSpreadsheet className="w-5 h-5 mr-2" />
                        Excel
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section id="news" className="py-20 glass-section">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center title-gradient">Actualités Réalité Virtuelle</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map((item) => (
              <div 
                key={item.id}
                className="hover-card overflow-hidden rounded-lg"
              >
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <span className={`inline-block px-3 py-1 rounded-full text-sm mb-4 ${
                    item.category === "Défense" ? "bg-red-500/20 text-red-400" : "bg-green-500/20 text-green-400"
                  }`}>
                    {item.category}
                  </span>
                  <h3 className="text-lg font-semibold mb-4">{item.title}</h3>
                  <div className={`${selectedNews === item.id ? 'block' : 'hidden'}`}>
                    <p className="text-gray-300 mb-4">{item.details}</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <button 
                      onClick={() => setSelectedNews(selectedNews === item.id ? null : item.id)}
                      className="text-blue-400 hover:text-blue-300 transition-colors flex items-center"
                    >
                      {selectedNews === item.id ? 'Voir moins' : 'Voir plus'}
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </button>
                    {item.downloadUrl && (
                      <a 
                        href={item.downloadUrl}
                        download
                        className="button-style flex items-center px-4 py-2"
                      >
                        <Download className="w-5 h-5 mr-2" />
                        PDF
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 glass-section">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center title-gradient">Contact</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold mb-6">Restons en contact</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-blue-400" />
                  <span>email@example.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-blue-400" />
                  <span>+33 6 XX XX XX XX</span>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="w-6 h-6 text-blue-400" />
                  <span>Mesnil-Esnard, France</span>
                </div>
              </div>
              
              <div className="flex space-x-6 mt-8">
                <a href="#" className="hover-card p-4 rounded-full hover:text-blue-400 transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="#" className="hover-card p-4 rounded-full hover:text-blue-400 transition-colors">
                  <Github className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Nom</label>
                <input
                  type="text"
                  id="name"
                  className="input-style"
                  placeholder="Votre nom"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="input-style"
                  placeholder="votre@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="input-style"
                  placeholder="Votre message"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="button-style flex items-center justify-center w-full">
                <Send className="w-5 h-5 mr-2" />
                Envoyer le message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;