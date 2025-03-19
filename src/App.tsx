import React, { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { Github, Linkedin, Code2, Database, Server, Shield, Trello, BookOpen, FileText, Send, Mail, Phone, MapPin, Download } from 'lucide-react';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [flippedCards, setFlippedCards] = useState<{ [key: string]: boolean }>({});

  const handleFlip = (id: string) => {
    setFlippedCards(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

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
      details: "Projet de groupe axé sur la Formule 1 comprenant:\n- Développement d'une API REST\n- Tests d'intégration complets\n- Déploiement automatisé\n- Gestion de base de données"
    },
    {
      id: "linkedin",
      title: "LinkedIn",
      description: "Gérer son identité professionnelle",
      icon: <Linkedin className="w-6 h-6" />,
      image: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?auto=format&fit=crop&w=800&q=80",
      details: "Création et maintenance d'un profil professionnel:\n- Optimisation SEO\n- Networking actif\n- Partage de contenu professionnel\n- Veille technologique"
    },
    {
      id: "cybernews",
      title: "Cybernews et veille perso",
      description: "Participer à l'évolution d'un site Web, Veille informationnelle",
      icon: <Shield className="w-6 h-6" />,
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80",
      details: "Plateforme de veille en cybersécurité:\n- Agrégation de news\n- Analyse de tendances\n- Reporting hebdomadaire\n- Recommandations de sécurité"
    },
    {
      id: "gsk",
      title: "AP Travail de groupe GSK",
      description: "Planifier les activités, Collecter et suivre des demandes",
      icon: <Trello className="w-6 h-6" />,
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
      details: "Gestion de projet en équipe:\n- Organisation des tâches\n- Suivi des demandes\n- Collaboration d'équipe\n- Reporting régulier"
    },
    {
      id: "portfolio",
      title: "Portfolio",
      description: "Exploiter des référentiels, normes et standards",
      icon: <Code2 className="w-6 h-6" />,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      details: "Création d'un portfolio professionnel:\n- Design moderne\n- Responsive design\n- Animations fluides\n- SEO optimisé"
    },
    {
      id: "stage",
      title: "Stage ABECEDAIRE",
      description: "Stage avec rapport téléchargeable",
      icon: <FileText className="w-6 h-6" />,
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
      details: "Stage en entreprise:\n- Développement web\n- API NodeJS\n- Maquettage Figma\n- Scraping de données"
    }
  ];

  const news = [
    { title: "Entrainement des unités d'élites", category: "Défense" },
    { title: "Améliorer la santé", category: "Santé" },
    { title: "Alzheimer et réalité virtuelle", category: "Santé" },
    { title: "Projet \"TARGET\" pour former les policiers", category: "Défense" },
    { title: "Technologies immersives et Défense", category: "Défense" },
    { title: "La réalité virtuelle contre la dépression", category: "Santé" },
    { title: "Révolutionner la rééducation par la réalité virtuelle", category: "Santé" },
    { title: "Projet ORCHESTRAA : formation militaire via VR", category: "Défense" },
    { title: "Expérimentation de la VR par l'armée de Terre", category: "Défense" },
    { title: "Innovations pour améliorer la vie des seniors", category: "Santé" },
    { title: "Utilisation de la VR dans les hôpitaux", category: "Santé" },
    { title: "La VR comme arme de guerre potentielle", category: "Défense" }
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
            <li><a href="#projects" className="hover:text-blue-400 transition-colors duration-300">Réalisations</a></li>
            <li><a href="#certificates" className="hover:text-blue-400 transition-colors duration-300">Attestations</a></li>
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
                  'La voile',
                  2000,
                  'le football',
                  2000,
                  'Le judo',
                  
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
              src="https://mail.google.com/mail/u/0?ui=2&ik=7573d135ef&attid=0.1&permmsgid=msg-a:r-4486465471538410222&th=195af8f4deaa2811&view=att&disp=safe&realattid=195af8f40ac50f1d7f01&zw"
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
              <h3 className="text-xl font-semibold mb-2">GOTO IA</h3>
              <p className="text-gray-300">202 | Symfony, React, JavaScript, AJAX, Maquette Figma</p>
            </div>
            <div className="hover-card p-6 animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
              <h3 className="text-xl font-semibold mb-2">ABECEDAIRE</h3>
              <p className="text-gray-300">2024 | Scraping, Portfolio, Déploiement, API NodeJS, Maquette Figma</p>
            </div>
            <div className="hover-card p-6 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-xl font-semibold mb-2">Baccalauréat STI2D - Option ITEC</h3>
              <p className="text-gray-300">2022-2023 | Lycée La Châtaigneraie, Mesnil-Esnard</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section with Flip Cards */}
      <section id="projects" className="py-20 glass-section my-10">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center title-gradient">Réalisations professionnelles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`flip-card ${flippedCards[project.id] ? 'flipped' : ''}`}
                onClick={() => handleFlip(project.id)}
              >
                <div className="flip-card-inner">
                  <div className="flip-card-front hover-card">
                    <img src={project.image} alt={project.title} className="flip-card-image" />
                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <div className="text-blue-400 mb-4">{project.icon}</div>
                        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                        <p className="text-gray-300">{project.description}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flip-card-back hover-card p-6">
                    <h3 className="text-xl font-semibold mb-4 text-blue-400">Détails du projet</h3>
                    <p className="text-gray-300 whitespace-pre-line flex-1">{project.details}</p>
                    <button className="button-style mt-4">
                      En savoir plus
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center title-gradient">Attestations de Stage</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="certificate-card">
              <h3 className="text-xl font-semibold mb-4">Stage ABECEDAIRE - 1ère année</h3>
              <p className="text-gray-300 mb-4">Période : Mai - Juin 2024</p>
              <button className="button-style flex items-center justify-center">
                <Download className="w-5 h-5 mr-2" />
                Télécharger l'attestation
              </button>
            </div>
            <div className="certificate-card">
              <h3 className="text-xl font-semibold mb-4">Stage Goto IA - 2ème année</h3>
              <p className="text-gray-300 mb-4">Période : Janvier - Février 2025</p>
              <button className="button-style flex items-center justify-center" disabled>
                <Download className="w-5 h-5 mr-2" />
                Attestation à venir
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section id="news" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center title-gradient">Actualités Réalité Virtuelle</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map((item, index) => (
              <div
                key={index}
                className="hover-card p-6 animate-fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className={`inline-block px-3 py-1 rounded-full text-sm mb-4 ${item.category === "Défense" ? "bg-red-500/20 text-red-400" : "bg-green-500/20 text-green-400"
                  }`}>
                  {item.category}
                </span>
                <h3 className="text-lg font-semibold">{item.title}</h3>
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
                  <span>mathieu.monnie7@gmail.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="w-6 h-6 text-blue-400" />
                  <span>Rouen, France</span>
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
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
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