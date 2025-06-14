import React from 'react';
import { Palette, FileText, Code, Megaphone, CheckCircle, ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Palette,
      title: 'Design Graphique',
      description: 'Création de supports visuels impactants pour votre communication',
      features: [
        'Flyers et affiches',
        'Logos et identité visuelle',
        'Cartes de visite',
        'Brochures et catalogues',
        'Packaging et étiquettes',
        'Bannières web et réseaux sociaux'
      ],
      pricing: 'À partir de 50€',
      popular: false,
      color: 'bg-pink-50 border-pink-200',
      iconColor: 'bg-pink-100 text-pink-600'
    },
    {
      icon: FileText,
      title: 'CV & Documents',
      description: 'CV professionnels et documents personnalisés pour votre carrière',
      features: [
        'CV modernes et ATS-friendly',
        'Lettres de motivation',
        'Portfolios professionnels',
        'Présentations PowerPoint',
        'Rapports et documents',
        'Templates personnalisés'
      ],
      pricing: 'À partir de 30€',
      popular: true,
      color: 'bg-blue-50 border-blue-200',
      iconColor: 'bg-blue-100 text-blue-600'
    },
    {
      icon: Code,
      title: 'Développement Web',
      description: 'Sites web modernes et applications sur mesure',
      features: [
        'Sites vitrine responsive',
        'E-commerce et boutiques',
        'Applications web',
        'Landing pages',
        'Refonte et optimisation',
        'Maintenance et support'
      ],
      pricing: 'À partir de 500€',
      popular: false,
      color: 'bg-green-50 border-green-200',
      iconColor: 'bg-green-100 text-green-600'
    },
    {
      icon: Megaphone,
      title: 'Communication Digitale',
      description: 'Stratégie et contenus pour votre présence en ligne',
      features: [
        'Stratégie de contenu',
        'Visuels réseaux sociaux',
        'Campagnes publicitaires',
        'Emailing et newsletters',
        'Audit et conseils',
        'Formation et accompagnement'
      ],
      pricing: 'À partir de 200€',
      popular: false,
      color: 'bg-purple-50 border-purple-200',
      iconColor: 'bg-purple-100 text-purple-600'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Consultation',
      description: 'Échange pour comprendre vos besoins et objectifs'
    },
    {
      step: '02',
      title: 'Proposition',
      description: 'Devis détaillé et planification du projet'
    },
    {
      step: '03',
      title: 'Création',
      description: 'Développement et suivi régulier des avancées'
    },
    {
      step: '04',
      title: 'Livraison',
      description: 'Finalisation, tests et remise des livrables'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Mes Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Des solutions créatives et professionnelles adaptées à vos besoins. 
            Chaque service est personnalisé pour garantir votre satisfaction.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => (
            <div key={index} className="relative">
              {service.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <span className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                    ⭐ Populaire
                  </span>
                </div>
              )}
              
              <div className={`${service.color} border-2 rounded-3xl p-8 h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}>
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-16 h-16 ${service.iconColor} rounded-2xl flex items-center justify-center`}>
                    <service.icon className="w-8 h-8" />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-gray-900">{service.pricing}</div>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <button className="w-full bg-white text-gray-900 font-semibold py-4 px-6 rounded-xl hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center group">
                  Demander un devis
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Process */}
        <div className="bg-gray-50 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Comment ça marche ?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Un processus simple et transparent pour mener à bien votre projet
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Prêt à démarrer votre projet ?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Contactez-moi dès aujourd'hui pour discuter de vos besoins et obtenir un devis personnalisé.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl">
              Demander un devis gratuit
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="inline-flex items-center px-8 py-4 bg-white text-gray-700 font-medium rounded-xl border-2 border-gray-200 hover:border-blue-300 hover:text-blue-600 transition-all duration-200">
              Voir le portfolio
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;