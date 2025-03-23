const Header = () => {
  return (
    <header className="fixed w-full bg-gray-900/80 backdrop-blur-md z-50 border-b border-white/10">
      <nav className="container mx-auto px-6 py-4">
        <ul className="flex space-x-8 justify-center text-sm">
          <li>
            <a
              href="#home"
              className="hover:text-blue-400 transition-colors duration-300"
            >
              Accueil
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="hover:text-blue-400 transition-colors duration-300"
            >
              Compétences
            </a>
          </li>
          <li>
            <a
              href="#education"
              className="hover:text-blue-400 transition-colors duration-300"
            >
              Formation
            </a>
          </li>
          <li>
            <a
              href="#stages"
              className="hover:text-blue-400 transition-colors duration-300"
            >
              Stages
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="hover:text-blue-400 transition-colors duration-300"
            >
              Réalisations
            </a>
          </li>
          <li>
            <a
              href="#news"
              className="hover:text-blue-400 transition-colors duration-300"
            >
              Actualités VR
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-blue-400 transition-colors duration-300"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
