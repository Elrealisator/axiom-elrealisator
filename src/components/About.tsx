import React from 'react';
import { Code, Palette, FileText, Monitor, Zap, CheckCircle } from 'lucide-react';

const About: React.FC = () => {
  const skills = [
    {
      icon: Palette,
      title: 'Design Graphique',
      description: 'Création de flyers, logos, identités visuelles et supports de communication',
      color: 'bg-pink-100 text-pink-600'
    },
    {
      icon: FileText,
      title: 'CV Professionnels',
      description: 'Conception de CV modernes et impactants pour valoriser votre profil',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: Code,
      title: 'Développement Web',
      description: 'Sites web responsive, applications et solutions digitales sur mesure',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: Monitor,
      title: 'UI/UX Design',
      description: 'Interfaces utilisateur intuitives et expériences digitales optimisées',
      color: 'bg-purple-100 text-purple-600'
    }
  ];

  const values = [
    'Créativité et innovation',
    'Respect des délais',
    'Communication transparente',
    'Qualité professionnelle',
    'Accompagnement personnalisé',
    'Prix compétitifs'
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Expertise & Passion
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Spécialisé dans la création de solutions visuelles et digitales, 
            je vous accompagne de la conception à la réalisation de vos projets.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {skills.map((skill, index) => (
            <div key={index} className="group">
              <div className="bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className={`w-16 h-16 ${skill.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <skill.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {skill.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {skill.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* About Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div>
            <div className="flex items-center mb-6">
              <Zap className="w-6 h-6 text-orange-500 mr-3" />
              <span className="text-orange-600 font-semibold">À propos d'Elrealisator</span>
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Votre partenaire créatif pour tous vos projets numériques
            </h3>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              Passionné par le design et la technologie, je mets mon expertise au service 
              de votre réussite. Chaque projet est unique et mérite une approche personnalisée 
              pour refléter parfaitement votre identité et vos objectifs.
            </p>
            
            <p className="text-gray-600 mb-8 leading-relaxed">
              De la création d'un simple flyer à la conception d'un site web complet, 
              je vous accompagne avec professionnalisme et créativité pour donner vie 
              à vos idées les plus ambitieuses.
            </p>

            {/* Values */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {values.map((value, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl p-8 relative overflow-hidden">
              {/* Placeholder for image - in real implementation, you'd use an actual image */}
              <div className="aspect-square bg-gradient-to-br from-blue-200 to-purple-200 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Palette className="w-10 h-10 text-blue-600" />
                  </div>
                  <p className="text-gray-700 font-medium">Créativité</p>
                  <p className="text-gray-600 text-sm">& Innovation</p>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute top-4 right-4 w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center animate-pulse">
                <Code className="w-6 h-6 text-green-600" />
              </div>
              
              <div className="absolute bottom-4 left-4 w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center animate-pulse">
                <Monitor className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;