'use client';

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Code, Database, Shield, Building2, X, Menu, ChevronDown } from "lucide-react";
import Image from "next/image";

import { use, useState } from "react";

export default function Home() {
   const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleCategory = (category: string) => {
    setActiveCategory(activeCategory === category ? null : category);
  };

  const services = [
    {
      id: "formation",
      title: "Formation",
      icon: <Code className="h-8 w-8 text-blue-600" />,
      description: "Développez vos compétences avec nos formations spécialisées",
      subServices: [
        "Développement d'applications web et mobiles",
        "Création de site web",
        "Formation sur mesure en technologies modernes",
        "Certifications professionnelles"
      ]
    },
    {
      id: "bases-de-donnees",
      title: "Bases de Données",
      icon: <Database className="h-8 w-8 text-blue-600" />,
      description: "Gestion et administration de vos systèmes de données",
      subServices: [
        "Administration Oracle",
        "Administration PostgreSQL",
        "Administration MySQL",
        "Optimisation de performances",
        "Migration de bases de données"
      ]
    },
    {
      id: "securite",
      title: "Sécurité",
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      description: "Protégez vos actifs numériques avec nos solutions",
      subServices: [
        "Sécurité des applications",
        "Sécurité des bases de données",
        "Audit de sécurité",
        "Gestion des vulnérabilités",
        "Conformité RGPD"
      ]
    },
    {
      id: "architecture",
      title: "Architecture",
      icon: <Building2 className="h-8 w-8 text-blue-600" />,
      description: "Concevez des solutions robustes et évolutives",
      subServices: [
        "Architecture logicielle",
        "Développement de solutions sur mesure",
        "Intégration de systèmes",
        "Cloud computing et microservices",
        "Stratégie technique d'entreprise"
      ]
    }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };
  return (
   <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <div className="bg-blue-600 text-white font-bold text-xl px-3 py-2 rounded">
              ARYVOK
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('accueil')} 
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Accueil
            </button>
            <button 
              onClick={() => scrollToSection('services')} 
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Nos Services
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Contact
            </button>
          </nav>
          
          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white py-4 px-4 border-t">
            <div className="flex flex-col space-y-3">
              <button 
                onClick={() => scrollToSection('accueil')} 
                className="text-left py-2 text-gray-600 hover:text-blue-600 transition-colors"
              >
                Accueil
              </button>
              <button 
                onClick={() => scrollToSection('services')} 
                className="text-left py-2 text-gray-600 hover:text-blue-600 transition-colors"
              >
                Nos Services
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="text-left py-2 text-gray-600 hover:text-blue-600 transition-colors"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="accueil" className="py-20 md:py-28 bg-gradient-to-r from-blue-700 to-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Expertise IT & Solutions Numériques
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-10 text-blue-100">
            ARYVOK accompagne les entreprises dans leur transformation digitale avec des services spécialisés
          </p>
          <Button 
            size="lg" 
            className="bg-white text-blue-700 hover:bg-blue-50 text-lg px-8 py-3"
            onClick={() => scrollToSection('services')}
          >
            Découvrir nos services
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Nos Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des solutions complètes pour répondre à tous vos besoins informatiques
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <Card 
                key={service.id} 
                className="border border-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <CardHeader className="bg-gray-50 border-b">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      {service.icon}
                      <CardTitle className="text-xl font-bold text-gray-800">
                        {service.title}
                      </CardTitle>
                    </div>
                    <Button 
                      variant="ghost" 
                      size="icon"
                      onClick={() => toggleCategory(service.id)}
                      className="text-gray-500 hover:text-blue-600"
                    >
                      <ChevronDown 
                        className={`h-5 w-5 transition-transform ${
                          activeCategory === service.id ? 'rotate-180' : ''
                        }`} 
                      />
                    </Button>
                  </div>
                  <p className="text-gray-600 mt-2">{service.description}</p>
                </CardHeader>
                
                {activeCategory === service.id && (
                  <CardContent className="pt-4">
                    <ul className="space-y-3">
                      {service.subServices.map((subService, index) => (
                        <li key={index} className="flex items-start">
                          <div className="flex-shrink-0 h-5 w-5 mt-1 mr-3 text-blue-600">
                            <div className="h-2 w-2 rounded-full bg-blue-600 mt-1.5"></div>
                          </div>
                          <span className="text-gray-700">{subService}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 bg-blue-700 text-white p-10">
                <h3 className="text-2xl font-bold mb-6">Contactez-nous</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-lg">Adresse</h4>
                    <p className="text-blue-100">123 Abidjan<br />Côte d'Ivoire</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Téléphone</h4>
                    <p className="text-blue-100">+225 00 00 00 00 00</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Email</h4>
                    <p className="text-blue-100">contact@aryvok.com</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Horaires</h4>
                    <p className="text-blue-100">Lun-Ven: 9h00 - 18h00</p>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 p-10">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Envoyez-nous un message</h3>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 mb-2">Nom complet</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="votre@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Votre message..."
                    ></textarea>
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3"
                  >
                    Envoyer le message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="bg-blue-600 text-white font-bold text-xl px-3 py-2 rounded">
                  ARYVOK
                </div>
              </div>
              <p className="text-gray-400">
                Expertise IT et solutions numériques pour accompagner votre transformation digitale.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Formation</li>
                <li>Bases de Données</li>
                <li>Sécurité</li>
                <li>Architecture</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Liens Rapides</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <button 
                    onClick={() => scrollToSection('accueil')} 
                    className="hover:text-white transition-colors"
                  >
                    Accueil
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('services')} 
                    className="hover:text-white transition-colors"
                  >
                    Nos Services
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('contact')} 
                    className="hover:text-white transition-colors"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <address className="not-italic text-gray-400">
                <p>123 Avenue </p>
                <p>75008 Abidjan, Côte d'Ivoire</p>
                <p className="mt-2">+225 00 00 00 00 00</p>
                <p>contact@aryvok.com</p>
              </address>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} ARYVOK ESN Services. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
