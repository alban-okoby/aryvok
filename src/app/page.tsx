'use client';

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Code, Database, Shield, Building2, X, Menu, ChevronDown, ArrowRight, CheckCircle, Clock, Cloud, Monitor, Play, Smartphone, Users, Lock } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { use, useState, useEffect } from "react";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState({
    hero: false,
    services: false,
    solutions: false,
    projets: false,
    stats: false,
    contact: false
  });

  // Animation observer for sections
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

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
      id: "architecture & Développement",
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

  const solutions = [
    {
      id: 1,
      title: "Plateforme de Gestion Intégrée",
      icon: <Monitor className="h-10 w-10 text-blue-600" />,
      description: "Solution complète pour la gestion des ressources humaines, financières et opérationnelles",
      features: [
        "Interface utilisateur intuitive",
        "Intégration avec systèmes existants",
        "Rapports personnalisables",
        "Accès multi-appareils"
      ]
    },
    {
      id: 2,
      title: "Application Mobile Sécurisée",
      icon: <Smartphone className="h-10 w-10 text-green-500" />,
      description: "Application mobile native avec authentification biométrique et chiffrement de bout en bout",
      features: [
        "Authentification biométrique",
        "Chiffrement AES-256",
        "Synchronisation hors ligne",
        "Notifications push sécurisées"
      ]
    },
    {
      id: 3,
      title: "Infrastructure Cloud Hybride",
      icon: <Cloud className="h-10 w-10 text-purple-500" />,
      description: "Architecture cloud flexible combinant services publics et privés pour optimiser les coûts",
      features: [
        "Déploiement multi-cloud",
        "Auto-scaling intelligent",
        "Récupération après sinistre",
        "Monitoring en temps réel"
      ]
    },
    {
      id: 4,
      title: "Système de Sécurité Avancé",
      icon: <Lock className="h-10 w-10 text-red-500" />,
      description: "Solution de sécurité complète avec détection d'intrusion et protection des données",
      features: [
        "Pare-feu de nouvelle génération",
        "Analyse comportementale AI",
        "Protection DDoS",
        "Conformité réglementaire"
      ]
    }
  ];

  const projects = [
    {
      id: 1,
      title: "Système de gestion hospitalière",
      category: "Architecture",
      description: "Plateforme intégrée pour la gestion des patients et des ressources médicales",
      technologies: ["React", "Node.js", "PostgreSQL"],
      images: [
        "/images/hospital-1.jpg",
        "/images/hospital-2.jpg",
        "/images/hospital-3.jpg"
      ]
    },
    {
      id: 2,
      title: "Application bancaire sécurisée",
      category: "Sécurité",
      description: "Solution de transfert d'argent avec cryptage de bout en bout",
      technologies: ["Java", "Spring Boot", "Oracle"],
      images: [
        "/images/bank-1.jpg",
        "/images/bank-2.jpg"
      ]
    },
    {
      id: 3,
      title: "Plateforme e-learning",
      category: "Formation",
      description: "Système d'apprentissage en ligne avec suivi des compétences",
      technologies: ["Vue.js", "Firebase", "MongoDB"],
      images: [
        "/images/elearning-1.jpg",
        "/images/elearning-2.jpg",
        "/images/elearning-3.jpg"
      ]
    },
    {
      id: 4,
      title: "Dashboard analytique",
      category: "Bases de Données",
      description: "Interface de visualisation de données en temps réel",
      technologies: ["React", "D3.js", "PostgreSQL"],
      images: [
        "/images/dashboard-1.jpg",
        "/images/dashboard-2.jpg",
        "/images/dashboard-3.jpg"
      ]
    }
  ];


  const stats = [
    { value: "9+", label: "Projets réalisés" },
    { value: "50+", label: "Clients satisfaits" },
    { value: "3+", label: "Experts certifiés" },
    { value: "7+", label: "Années d'expérience" }
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
            <div className="bg-gradient-to-r from-blue-600 to-green-500 text-white font-bold text-xl px-3 py-2 rounded">
              ARYVOK
            </div>
            {/* <span className="ml-2 text-gray-700 font-medium">ESN Services</span> */}
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
              Services
            </button>
            <button
              onClick={() => scrollToSection('solutions')}
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Nos Solutions
            </button>
            <button
              onClick={() => scrollToSection('projets')}
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Projets
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
                Services
              </button>
              <button
                onClick={() => scrollToSection('solutions')}
                className="text-left py-2 text-gray-600 hover:text-blue-600 transition-colors"
              >
                Nos Solutions
              </button>
              <button
                onClick={() => scrollToSection('projets')}
                className="text-left py-2 text-gray-600 hover:text-blue-600 transition-colors"
              >
                Projets
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
      <section id="accueil" className="py-20 md:py-28 bg-gradient-to-r from-blue-700 to-green-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxjaXJjbGUgY3g9IjIwIiBjeT0iMjAiIHI9IjAuNSIgZmlsbD0iI2ZmZiIgZmlsbC1vcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjcGF0dGVybikiLz48L3N2Zz4=')] opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Expertise IT & Solutions Numériques
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-blue-100">
              ARYVOK accompagne les entreprises dans leur transformation digitale avec des services spécialisés
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                size="lg"
                className="bg-white text-blue-700 hover:bg-blue-50 text-lg px-8 py-3"
                onClick={() => scrollToSection('solutions')}
              >
                Découvrir nos solutions
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-white text-blue-700 hover:bg-blue-50 text-lg px-8 py-3"
                onClick={() => scrollToSection('projets')}
              >
                <Play className="mr-2 h-5 w-5" />
                Voir nos projets
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible.stats ? 1 : 0, y: isVisible.stats ? 0 : 20 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible.services ? 1 : 0, y: isVisible.services ? 0 : 20 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Nos Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des solutions complètes pour répondre à tous vos besoins informatiques
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: isVisible.services ? 1 : 0,
                  y: isVisible.services ? 0 : 20
                }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  className="border border-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
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
                          className={`h-5 w-5 transition-transform ${activeCategory === service.id ? 'rotate-180' : ''
                            }`}
                        />
                      </Button>
                    </div>
                    <p className="text-gray-600 mt-2">{service.description}</p>
                  </CardHeader>

                  {activeCategory === service.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <CardContent className="pt-4">
                        <ul className="space-y-3">
                          {service.subServices.map((subService, index) => (
                            <li key={index} className="flex items-start">
                              <CheckCircle className="flex-shrink-0 h-5 w-5 mt-0.5 mr-3 text-green-500" />
                              <span className="text-gray-700">{subService}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </motion.div>
                  )}
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible.solutions ? 1 : 0, y: isVisible.solutions ? 0 : 20 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Nos Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des produits innovants conçus pour répondre aux défis technologiques actuels
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: isVisible.solutions ? 1 : 0,
                  y: isVisible.solutions ? 0 : 20
                }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="border border-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                  <CardHeader className="bg-gradient-to-r from-blue-50 to-green-50">
                    <div className="flex items-center space-x-4">
                      {solution.icon}
                      <CardTitle className="text-xl font-bold text-gray-800">
                        {solution.title}
                      </CardTitle>
                    </div>
                    <p className="text-gray-600 mt-2">{solution.description}</p>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <ul className="space-y-2">
                      {solution.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="flex-shrink-0 h-5 w-5 mt-0.5 mr-2 text-green-500" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      variant="outline"
                      className="w-full mt-6 border-blue-600 text-blue-600 hover:bg-blue-50"
                      onClick={() => scrollToSection('contact')}
                    >
                      Demander une démo
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projets" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible.projets ? 1 : 0, y: isVisible.projets ? 0 : 20 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Nos Projets Réalisés
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez quelques-unes de nos réalisations illustrées avec des interfaces réelles
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: isVisible.projets ? 1 : 0,
                  y: isVisible.projets ? 0 : 20
                }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="border border-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                  {/* Galerie d’images */}
                  <div className="grid grid-cols-3 gap-1 h-40 overflow-hidden">
                    {project.images.map((img: any, i: any) => (
                      <div key={i} className="relative w-full h-full">
                        <Image
                          src={img}
                          alt={`${project.title} image ${i + 1}`}
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    ))}
                  </div>

                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-xl font-bold text-gray-800">
                        {project.title}
                      </CardTitle>
                      <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                        {project.category}
                      </span>
                    </div>
                    <p className="text-gray-600 mt-2">{project.description}</p>
                  </CardHeader>

                  <CardContent className="mt-auto">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-r from-blue-700 to-green-600 text-white">
  <div className="container mx-auto px-4">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Ce que disent nos clients
      </h2>
      <p className="text-xl text-blue-100 max-w-3xl mx-auto">
        L'expertise et le professionnalisme de notre équipe font la différence pour les entreprises ivoiriennes
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {/* Témoignage 1 */}
      <Card className="bg-white/10 backdrop-blur-sm border-0 text-white">
        <CardContent className="p-6">
          <div className="flex items-center mb-4">
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 flex items-center justify-center text-gray-400 font-bold text-xl">
              AD
            </div>
            <div className="ml-4">
              <h4 className="font-bold">Aïssata Diabaté</h4>
              <p className="text-blue-200">Gérante, Restaurant Le Baoulé — Abidjan</p>
            </div>
          </div>
          <p className="italic">
            "Grâce à ARYVOK, nous avons mis en place un système de gestion des commandes en ligne. 
            Nos ventes ont augmenté et nos clients adorent la simplicité du service."
          </p>
          <div className="flex mt-4 text-yellow-300">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Témoignage 2 */}
      <Card className="bg-white/10 backdrop-blur-sm border-0 text-white">
        <CardContent className="p-6">
          <div className="flex items-center mb-4">
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 flex items-center justify-center text-gray-400 font-bold text-xl">
              KT
            </div>
            <div className="ml-4">
              <h4 className="font-bold">Koffi Tanoh</h4>
              <p className="text-blue-200">Propriétaire, Boutique Mode Élégance — Bondoukou</p>
            </div>
          </div>
          <p className="italic">
            "L’équipe ARYVOK nous a aidés à créer notre boutique en ligne. 
            Aujourd’hui, nos clients de toute la Côte d’Ivoire peuvent acheter nos vêtements directement depuis le site."
          </p>
          <div className="flex mt-4 text-yellow-300">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Témoignage 3 */}
      <Card className="bg-white/10 backdrop-blur-sm border-0 text-white">
        <CardContent className="p-6">
          <div className="flex items-center mb-4">
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 flex items-center justify-center text-gray-400 font-bold text-xl">
              YM
            </div>
            <div className="ml-4">
              <h4 className="font-bold">Yao Marcel</h4>
              <p className="text-blue-200">Chef du Service Informatique, Mairie de Yamoussoukro</p>
            </div>
          </div>
          <p className="italic">
            "ARYVOK a modernisé notre système de gestion administrative. 
            Nos équipes travaillent désormais plus efficacement grâce à la digitalisation des services."
          </p>
          <div className="flex mt-4 text-yellow-300">
            {[...Array(4)].map((_, i) => (
              <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Témoignage 4 */}
      <Card className="bg-white/10 backdrop-blur-sm border-0 text-white">
        <CardContent className="p-6">
          <div className="flex items-center mb-4">
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 flex items-center justify-center text-gray-400 font-bold text-xl">
              CN
            </div>
            <div className="ml-4">
              <h4 className="font-bold">Clarisse N'Guessan</h4>
              <p className="text-blue-200">Directrice, École Les Pépinières — Abidjan</p>
            </div>
          </div>
          <p className="italic">
            "Nous avons confié à ARYVOK la création d’une plateforme de suivi des élèves. 
            Les parents et enseignants peuvent désormais échanger en ligne, ce qui a renforcé la communication."
          </p>
          <div className="flex mt-4 text-yellow-300">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
</section>


      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible.contact ? 1 : 0, y: isVisible.contact ? 0 : 20 }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="md:flex">
              <div className="md:w-2/5 bg-gradient-to-br from-blue-700 to-green-600 text-white p-10">
                <h3 className="text-2xl font-bold mb-6">Contactez-nous</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Users className="h-6 w-6 mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-lg">Adresse</h4>
                      <p className="text-blue-100">123 Avenue <br />75008 Abidjan, Côte d'Ivoire</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="h-6 w-6 mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-lg">Horaires</h4>
                      <p className="text-blue-100">Lun-Ven: 9h00 - 18h00</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Suivez-nous</h4>
                    <div className="flex space-x-4">
                      <div className="bg-white/20 rounded-full p-2 cursor-pointer hover:bg-white/30 transition">
                        <div className="bg-gray-200 border-2 border-dashed rounded-xl w-6 h-6" />
                      </div>
                      <div className="bg-white/20 rounded-full p-2 cursor-pointer hover:bg-white/30 transition">
                        <div className="bg-gray-200 border-2 border-dashed rounded-xl w-6 h-6" />
                      </div>
                      <div className="bg-white/20 rounded-full p-2 cursor-pointer hover:bg-white/30 transition">
                        <div className="bg-gray-200 border-2 border-dashed rounded-xl w-6 h-6" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:w-3/5 p-10">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Envoyez-nous un message</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-gray-700 mb-2">Sujet</label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Sujet de votre message"
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
                    className="w-full bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 text-white py-3"
                  >
                    Envoyer le message
                  </Button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-r from-blue-600 to-green-500 text-white font-bold text-xl px-3 py-2 rounded">
                  ARYVOK
                </div>
                {/* <span className="ml-2 font-medium">ESN Services</span> */}
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
                    Services
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('solutions')}
                    className="hover:text-white transition-colors"
                  >
                    Nos Solutions
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('projets')}
                    className="hover:text-white transition-colors"
                  >
                    Projets
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
                <p>75008 Abidjan, Côte d'Ivoire</p>
                <p className="mt-2">+225 00 00 00 00 00</p>
                <p>contact@aryvok.com</p>
              </address>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} ARYVOK. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
