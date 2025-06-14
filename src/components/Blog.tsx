import React from 'react';
import { Calendar, User, ArrowRight, TrendingUp, Lightbulb, Target } from 'lucide-react';

const Blog: React.FC = () => {
  const featuredPost = {
    id: 1,
    title: 'Comment créer une identité visuelle forte pour votre entreprise',
    excerpt: 'Découvrez les étapes essentielles pour développer une identité visuelle cohérente qui marque les esprits et renforce votre image de marque.',
    image: 'https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=1200',
    author: 'Elrealisator',
    date: '15 Mars 2024',
    readTime: '8 min',
    category: 'Design',
    tags: ['Branding', 'Design', 'Identité visuelle']
  };

  const posts = [
    {
      id: 2,
      title: 'Les tendances du web design en 2024',
      excerpt: 'Explorez les dernières tendances qui définissent le design web moderne et comment les intégrer dans vos projets.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: 'Elrealisator',
      date: '12 Mars 2024',
      readTime: '6 min',
      category: 'Web Design',
      icon: TrendingUp
    },
    {
      id: 3,
      title: 'Optimiser son CV pour les ATS',
      excerpt: 'Conseils pratiques pour créer un CV qui passe les filtres des systèmes de tracking automatisés.',
      image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpg?auto=compress&cs=tinysrgb&w=800',
      author: 'Elrealisator',
      date: '10 Mars 2024',
      readTime: '5 min',
      category: 'Carrière',
      icon: Target
    },
    {
      id: 4,
      title: 'Psychology of Colors in Marketing',
      excerpt: 'Comment utiliser la psychologie des couleurs pour renforcer votre message marketing et influencer vos clients.',
      image: 'https://images.pexels.com/photos/1188751/pexels-photo-1188751.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: 'Elrealisator',
      date: '8 Mars 2024',
      readTime: '7 min',
      category: 'Marketing',
      icon: Lightbulb
    },
    {
      id: 5,
      title: 'Créer des flyers efficaces',
      excerpt: 'Guide complet pour concevoir des flyers qui captent l\'attention et génèrent des résultats.',
      image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: 'Elrealisator',
      date: '5 Mars 2024',
      readTime: '4 min',
      category: 'Design',
      icon: Target
    }
  ];

  const categories = [
    { name: 'Tous', count: 12, active: true },
    { name: 'Design', count: 5, active: false },
    { name: 'Web Design', count: 3, active: false },
    { name: 'Carrière', count: 2, active: false },
    { name: 'Marketing', count: 2, active: false }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Blog & Actualités
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conseils, astuces et tendances pour réussir vos projets créatifs et digitaux. 
            Restez informé des dernières actualités du design et du développement web.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                category.active
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Image */}
              <div className="relative h-64 lg:h-auto">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Article à la une
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center text-sm text-gray-600 mb-4">
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full font-medium">
                    {featuredPost.category}
                  </span>
                  <span className="mx-2">•</span>
                  <Calendar className="w-4 h-4 mr-1" />
                  {featuredPost.date}
                  <span className="mx-2">•</span>
                  {featuredPost.readTime} de lecture
                </div>

                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                  {featuredPost.title}
                </h2>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mr-3">
                      <User className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium">{featuredPost.author}</span>
                  </div>

                  <button className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors group">
                    Lire l'article
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {featuredPost.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {posts.map((post) => (
            <article key={post.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-600 mb-3">
                  <Calendar className="w-4 h-4 mr-1" />
                  {post.date}
                  <span className="mx-2">•</span>
                  {post.readTime} de lecture
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 leading-tight group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mr-2">
                      <User className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700 text-sm font-medium">{post.author}</span>
                  </div>

                  <button className="text-blue-600 hover:text-blue-700 transition-colors">
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Restez informé des dernières actualités
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Recevez nos conseils exclusifs, astuces créatives et les dernières tendances 
            directement dans votre boîte mail.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Votre adresse email"
              className="flex-1 px-6 py-4 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <button className="bg-white text-blue-600 font-semibold px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center">
              S'abonner
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;