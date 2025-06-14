import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter, Palette, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const quickLinks = [
    { name: 'Accueil', href: '#' },
    { name: 'Portfolio', href: '#' },
    { name: 'Services', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Contact', href: '#' }
  ];

  const services = [
    { name: 'Design Graphique', href: '#' },
    { name: 'CV & Documents', href: '#' },
    { name: 'Développement Web', href: '#' },
    { name: 'Communication Digitale', href: '#' }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', color: 'hover:text-blue-600' },
    { icon: Instagram, href: '#', color: 'hover:text-pink-600' },
    { icon: Linkedin, href: '#', color: 'hover:text-blue-700' },
    { icon: Twitter, href: '#', color: 'hover:text-blue-400' }
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <Palette className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Elrealisator</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Créateur de solutions numériques sur mesure. Transformons ensemble vos idées 
              en réalisations professionnelles qui marquent les esprits.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center transition-all duration-200 hover:bg-gray-700 ${social.color}`}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Navigation</h3>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-6">Services</h3>
            <ul className="space-y-4">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-6">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                <span className="text-gray-400">divantchuisseu@gmail.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                <span className="text-gray-400">+237 6 56 48 15 31</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
                <span className="text-gray-400">Cameroun, Télétravail</span>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors duration-200 font-medium">
                Demander un devis
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center text-gray-400 text-sm">
              © 2024 Elrealisator. Tous droits réservés. Créé avec
              <Heart className="w-4 h-4 text-red-500 mx-1" />
              et beaucoup de café.
            </div>
            
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Mentions légales
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Politique de confidentialité
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                CGV
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;