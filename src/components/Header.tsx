import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; // 'Palette' n'est plus nécessaire si vous utilisez une image
import AxiomLogo from '../images/logo.png'; // **ADAPTEZ CE CHEMIN** : Assurez-vous que 'logo.png' est bien dans le dossier 'src/images' ou ajustez si votre structure est différente.

interface HeaderProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Accueil' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'services', label: 'Services' },
    { id: 'blog', label: 'Blog' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (page: string) => {
    setCurrentPage(page);
    setIsMenuOpen(false); // Ferme le menu mobile après la sélection
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo : Axiom Elrealisator avec image */}
          <div
            className="flex items-center space-x-2 cursor-pointer group"
            onClick={() => handleNavClick('home')}
            aria-label="Aller à l'accueil" // Amélioration d'accessibilité
            role="button" // Indique que c'est cliquable
          >
            <img
              src={AxiomLogo} // Utilise l'image importée
              alt="Axiom Elrealisator Logo" // Texte alternatif pour l'accessibilité
              className="h-10 w-auto" // Ajustez la hauteur (h-10 ici) selon vos besoins. w-auto pour garder les proportions.
            />
            {/* Garder ce span si votre image de logo n'inclut PAS le texte "Axiom Elrealisator"
                Si l'image inclut le texte, vous pouvez supprimer ce span ou lui ajouter la classe 'sr-only' pour l'accessibilité:
                <span className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent sr-only">
                    Axiom Elrealisator
                </span>
            */}
            <span className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Axiom Elrealisator
            </span>
          </div>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-sm font-medium transition-all duration-200 hover:text-blue-600 relative ${
                  currentPage === item.id
                    ? 'text-blue-600'
                    : 'text-gray-700 hover:text-blue-600'
                }`}
                aria-current={currentPage === item.id ? "page" : undefined} // Amélioration d'accessibilité
              >
                {item.label}
                {currentPage === item.id && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-600 rounded-full"></div>
                )}
              </button>
            ))}
          </nav>

          {/* Bouton Menu Mobile */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            aria-expanded={isMenuOpen} // Amélioration d'accessibilité
            aria-controls="mobile-menu" // Lien avec le menu mobile
            aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"} // Amélioration d'accessibilité
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Navigation Mobile avec transition fluide */}
        <div
          id="mobile-menu" // ID pour aria-controls
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-screen py-4 border-t border-gray-100' : 'max-h-0'
          }`}
        >
          <nav className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left px-4 py-2 rounded-lg transition-all duration-200 ${
                  currentPage === item.id
                    ? 'bg-blue-50 text-blue-600 font-medium'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
                aria-current={currentPage === item.id ? "page" : undefined} // Amélioration d'accessibilité
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;