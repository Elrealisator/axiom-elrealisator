import React, { useState } from 'react';
import { ExternalLink, Eye, Filter } from 'lucide-react';

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'Tous les projets' },
    { id: 'web', label: 'Sites Web' },
    { id: 'design', label: 'Design Graphique' },
    { id: 'cv', label: 'CV & Documents' },
    { id: 'branding', label: 'Identité Visuelle' }
  ];

  const projects = [
    {
      id: 1,
      title: 'Site E-commerce Mode',
      category: 'web',
      description: 'Boutique en ligne complète avec système de paiement et gestion des stocks',
      image: 'https://images.pexels.com/photos/4050297/pexels-photo-4050297.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'E-commerce', 'Responsive'],
      link: '#'
    },
    {
      id: 2,
      title: 'Identité Visuelle Restaurant',
      category: 'branding',
      description: 'Logo, carte de visite et supports de communication pour un restaurant gastronomique',
      image: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Logo', 'Print', 'Branding'],
      link: '#'
    },
    {
      id: 3,
      title: 'CV Créatif Marketing',
      category: 'cv',
      description: 'CV moderne et impactant pour un professionnel du marketing digital',
      image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpg?auto=compress&cs=tinysrgb&w=800',
      tags: ['CV', 'Design', 'Marketing'],
      link: '#'
    },
    {
      id: 4,
      title: 'Flyer Événement Musical',
      category: 'design',
      description: 'Design dynamique et coloré pour la promotion d\'un festival de musique',
      image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Flyer', 'Événement', 'Print'],
      link: '#'
    },
    {
      id: 5,
      title: 'Site Vitrine Architecture',
      category: 'web',
      description: 'Site web élégant pour un cabinet d\'architecture avec galerie photo',
      image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Architecture', 'Portfolio', 'Responsive'],
      link: '#'
    },
    {
      id: 6,
      title: 'Packaging Produit Bio',
      category: 'design',
      description: 'Design d\'emballage écologique pour une gamme de produits cosmétiques bio',
      image: 'https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Packaging', 'Bio', 'Eco-friendly'],
      link: '#'
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Portfolio
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez une sélection de mes réalisations récentes. Chaque projet reflète 
            mon engagement envers la qualité et l'innovation.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <div className="flex items-center text-gray-600 mr-4">
            <Filter className="w-5 h-5 mr-2" />
            <span className="font-medium">Filtrer par :</span>
          </div>
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                activeFilter === filter.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex space-x-4">
                      <button className="p-3 bg-white rounded-full text-gray-900 hover:bg-gray-100 transition-colors">
                        <Eye className="w-5 h-5" />
                      </button>
                      <button className="p-3 bg-white rounded-full text-gray-900 hover:bg-gray-100 transition-colors">
                        <ExternalLink className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">
            Intéressé par mes services ? Discutons de votre projet !
          </p>
          <button className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl">
            Commencer un projet
            <ExternalLink className="w-5 h-5 ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;