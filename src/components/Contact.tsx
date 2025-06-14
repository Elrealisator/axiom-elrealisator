import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Clock, MessageSquare, AlertCircle, MessageSquareText } from 'lucide-react';

// --- URL DE VOTRE API STRAPI ---
const STRAPI_URL = 'http://localhost:1337/api';

// Définition des types pour les données du formulaire
interface FormData {
  name: string;
  email: string;
  projectType: string;
  message: string;
  budget: string;
  timeline: string;
  whatsappNumber: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    projectType: '',
    message: '',
    budget: '',
    timeline: '',
    whatsappNumber: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState<string | null>(null);
  const [lastSubmittedData, setLastSubmittedData] = useState<FormData | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    if (e.target) {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
      setSubmissionError(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionError(null);

    // Validation côté client (ajustez si whatsappNumber est obligatoire)
    if (!formData.name || !formData.email || !formData.projectType || !formData.message) {
      setSubmissionError("Veuillez remplir tous les champs obligatoires marqués d'un *.");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch(`${STRAPI_URL}/message-de-conctacts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          data: {
            fullname: formData.name,
            email: formData.email,
            projectType: formData.projectType,
            estimatedBudget: formData.budget,
            desiredDeadline: formData.timeline,
            message: formData.message,
            whatsappNumber: formData.whatsappNumber,
          },
        }),
      });

      if (response.ok) {
        setLastSubmittedData(formData);
        setIsSubmitted(true);
        setFormData({ name: '', email: '', projectType: '', message: '', budget: '', timeline: '', whatsappNumber: '' });
        setTimeout(() => setIsSubmitted(false), 8000);
      } else {
        const errorData = await response.json();
        console.error("Erreur Strapi :", response.status, errorData);
        setSubmissionError(errorData.error?.message || "Une erreur est survenue lors de l'envoi à Strapi. Veuillez réessayer plus tard.");
      }
    } catch (error) {
      console.error("Erreur réseau ou de serveur :", error);
      setSubmissionError("Problème de connexion au serveur Strapi. Veuillez vérifier votre réseau.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Fonction pour générer le lien WhatsApp
  const generateWhatsAppLink = (data: FormData) => {
    // VOTRE NUMÉRO WHATSAPP ICI (sans le signe '+')
    const myWhatsAppNumber = '237678875895'; 

    let messageText = `Bonjour, je viens de remplir le formulaire de contact sur votre site Axiom avec les informations suivantes :\n\n`;
    messageText += `Nom : ${data.name}\n`;
    messageText += `Email : ${data.email}\n`;
    if (data.whatsappNumber) {
      messageText += `Mon numéro WhatsApp : ${data.whatsappNumber}\n`;
    }
    messageText += `Type de projet : ${data.projectType.replace(/_/g, ' ').replace(/&/g, '&')}\n`;
    if (data.budget) {
      messageText += `Budget estimé : ${data.budget.replace(/_/g, ' ').replace(/E/g, '€')}\n`;
    }
    if (data.timeline) {
      messageText += `Délai souhaité : ${data.timeline.replace(/_/g, ' ').replace(/moins 1 semaine/g, '< 1 semaine').replace(/1 4 semaines/g, '1-4 semaines').replace(/1 3 mois/g, '1-3 mois')}\n`;
    }
    messageText += `Description du projet : ${data.message}\n\n`;
    messageText += `Merci !`;

    const encodedMessage = encodeURIComponent(messageText);

    return `https://wa.me/${myWhatsAppNumber}?text=${encodedMessage}`;
  };


  const contactInfo = [
    { icon: Mail, title: 'Email', value: 'divantchuisseu@gmail.com', description: 'Réponse sous 24h', color: 'bg-blue-100 text-blue-600' },
    { icon: Phone, title: 'Téléphone', value: '+237 6 56 48 15 31', description: 'Lun-Ven 9h-18h', color: 'bg-green-100 text-green-600' },
    { icon: MapPin, title: 'Localisation', value: 'Cameroun, Télétravail', description: 'Projets à distance', color: 'bg-purple-100 text-purple-600' }
  ];

  const faqs = [
    { question: 'Quels sont vos délais de réalisation ?', answer: 'Les délais varient selon le projet : 2-5 jours pour un CV, 1-2 semaines pour du design graphique, 2-6 semaines pour un site web.' },
    { question: 'Proposez-vous des révisions ?', answer: 'Oui, chaque projet inclut 2-3 révisions gratuites selon le service. Des modifications supplémentaires peuvent être facturées.' },
    { question: 'Travaillez-vous avec des clients internationaux ?', answer: 'Absolument ! Je travaille avec des clients du monde entier, principalement en français et en anglais.' }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Contactez-moi
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Vous avez un projet en tête ? Discutons-en ! Je suis là pour vous accompagner
            et transformer vos idées en réalité.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Démarrons votre projet
              </h2>

              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Message envoyé !
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Merci pour votre message. Je vous répondrai dans les plus brefs délais.
                  </p>

                  {lastSubmittedData && (
                    <a
                      href={generateWhatsAppLink(lastSubmittedData)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-500 hover:bg-green-600 transition-colors duration-200"
                    >
                      <MessageSquareText className="w-5 h-5 mr-2" />
                      Me contacter sur WhatsApp avec mes infos
                    </a>
                  )}
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="Votre nom"
                        aria-required="true"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="votre@email.com"
                        aria-required="true"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="whatsappNumber" className="block text-sm font-medium text-gray-700 mb-2">
                      Numéro WhatsApp (avec code pays)
                    </label>
                    <input
                      type="tel"
                      id="whatsappNumber"
                      name="whatsappNumber"
                      value={formData.whatsappNumber}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="+237 6XXXXXXXX"
                    />
                  </div>

                  <div>
                    <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">
                      Type de projet *
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      required
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      aria-required="true"
                    >
                      <option value="Sélectionnez_un_service">Sélectionnez un service</option>
                      <option value="Design_Graphique">Design Graphique</option>
                      <option value="CV _&_Documents">CV & Documents</option>
                      <option value="Developpement_Web">Développement Web</option>
                      <option value="Communication_Digitale">Communication Digitale</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                        Budget estimé
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      >
                        <option value="">Sélectionnez une fourchette</option>
                        <option value="Moins_de_500E">Moins de 500€</option>
                        <option value="Entre_500E_1000E">500€ - 1000€</option>
                        <option value="Entre_1000E_2500E">1000€ - 2500€</option>
                        <option value="Plus_de_2500E">Plus de 2500€</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
                        Délai souhaité
                      </label>
                      <select
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      >
                        <option value="">Sélectionnez un délai</option>
                        <option value="Urgent_moins_1_semaine">Urgent (&lt; 1 semaine)</option>
                        <option value="Normal_1_4_semaines">Normal (1-4 semaines)</option>
                        <option value="Flexible_1_3_mois">Flexible (1-3 mois)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Description du projet *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                      placeholder="Décrivez votre projet en détail..."
                      aria-required="true"
                    ></textarea>
                  </div>

                  {submissionError && (
                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg flex items-center">
                      <AlertCircle className="w-5 h-5 mr-2" />
                      {submissionError}
                    </div>
                  )}

                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white font-semibold py-4 px-6 rounded-xl hover:bg-blue-700 transition-all duration-200 flex items-center justify-center group shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        Envoi en cours...
                        <svg className="animate-spin h-5 w-5 text-white ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                      </>
                    ) : (
                      <>
                        Envoyer le message
                        <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Informations de contact</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start">
                    <div className={`w-12 h-12 ${info.color} rounded-xl flex items-center justify-center mr-4 flex-shrink-0`}>
                      <info.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{info.title}</h4>
                      <p className="text-gray-900 font-medium">{info.value}</p>
                      <p className="text-sm text-gray-600">{info.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Questions fréquentes</h3>
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index}>
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-start">
                      <MessageSquare className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      {faq.question}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed ml-7">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 border border-blue-100">
              <div className="flex items-center mb-4">
                <Clock className="w-6 h-6 text-blue-600 mr-2" />
                <h3 className="text-lg font-semibold text-gray-900">Temps de réponse</h3>
              </div>
              <p className="text-gray-600">
                Je m'engage à répondre à tous les messages dans les
                <span className="font-semibold text-blue-600"> 24 heures</span> suivant leur réception.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;