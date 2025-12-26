import { useState } from "react";
import { ExternalLink, GraduationCap, Leaf, Wheat, ChevronLeft, ChevronRight, Users, Globe, Shield, BarChart3, MessageSquare, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import screenshotCanopy from "@/assets/screenshot-canopy.png";
import screenshotPfos from "@/assets/screenshot-pfos.png";
import screenshotSnsgs from "@/assets/screenshot-snsgs.png";

const FlagshipProjectsSection = () => {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      id: "pfos",
      name: "PFOS Educareers",
      tagline: "Plateforme d'Orientation et de Formation Scolaire",
      icon: GraduationCap,
      screenshot: screenshotPfos,
      url: "https://educareers.pfos.education/",
      crmUrl: "https://crm.pfos.education",
      description: "Un écosystème numérique complet dédié à l'orientation scolaire et professionnelle, intégrant des outils d'évaluation, un CRM éducatif puissant et des campagnes d'acquisition multi-canales.",
      features: [
        { icon: Users, label: "220K+ utilisateurs actifs" },
        { icon: BarChart3, label: "Tests d'orientation personnalisés" },
        { icon: MessageSquare, label: "Campagnes WhatsApp massives" },
        { icon: Globe, label: "Déploiement multi-pays" },
      ],
      technologies: ["React", "Node.js", "PostgreSQL", "WhatsApp Cloud API", "Power BI"],
      color: "primary",
    },
    {
      id: "canopy",
      name: "Deep Canopy X",
      tagline: "Plateforme d'Intelligence Environnementale",
      icon: Leaf,
      screenshot: screenshotCanopy,
      url: "https://canopyx.gaiasarl.com/",
      description: "Une plateforme IA souveraine pour la surveillance des forêts du Bassin du Congo. Détection d'agroforêts cachées, mesure du carbone, protection de la biodiversité et support RSE.",
      features: [
        { icon: Globe, label: "200M+ hectares surveillés" },
        { icon: Shield, label: "IA souveraine africaine" },
        { icon: MapPin, label: "Cartographie forestière" },
        { icon: BarChart3, label: "Mesure du carbone" },
      ],
      technologies: ["Python", "Machine Learning", "Satellite Imagery", "AWS", "React"],
      color: "secondary",
    },
    {
      id: "snsgs",
      name: "SNSGS",
      tagline: "Système National de Gestion des Subventions",
      icon: Wheat,
      screenshot: screenshotSnsgs,
      url: null,
      description: "Architecture souveraine pour la gestion nationale des subventions agricoles. Enregistrement des bénéficiaires, géolocalisation, système e-bons sécurisé et gouvernance complète des données.",
      features: [
        { icon: Users, label: "500K+ bénéficiaires" },
        { icon: MapPin, label: "Géolocalisation précise" },
        { icon: Shield, label: "E-bons sécurisés" },
        { icon: Globe, label: "Couverture nationale" },
      ],
      technologies: ["PHP/CakePHP", "PostgreSQL", "AWS", "Mobile Apps", "API REST"],
      color: "accent",
    },
  ];

  const activeProjectData = projects[activeProject];

  const nextProject = () => {
    setActiveProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setActiveProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="flagship" className="section bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 text-sm font-medium text-primary bg-primary/10 rounded-full mb-6">
            Projets Phares
          </span>
          <h2 className="section-title">
            Nos réalisations <span className="gradient-text">majeures</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
            Des plateformes à fort impact déployées à grande échelle en Afrique
          </p>
        </div>

        {/* Project Navigation */}
        <div className="flex justify-center gap-3 mb-12">
          {projects.map((project, index) => (
            <button
              key={project.id}
              onClick={() => setActiveProject(index)}
              className={cn(
                "flex items-center gap-2 px-5 py-3 rounded-xl font-medium transition-all duration-300",
                activeProject === index
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                  : "bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80"
              )}
            >
              <project.icon className="w-5 h-5" />
              <span className="hidden sm:inline">{project.name}</span>
            </button>
          ))}
        </div>

        {/* Main Project Display */}
        <div className="glass-card overflow-hidden">
          <div className="grid lg:grid-cols-2">
            {/* Screenshot */}
            <div className="relative overflow-hidden bg-gradient-to-br from-primary/5 to-secondary/5">
              <img
                src={activeProjectData.screenshot}
                alt={`${activeProjectData.name} screenshot`}
                className="w-full h-full object-cover object-top min-h-[300px] lg:min-h-[500px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              
              {/* Navigation Arrows */}
              <div className="absolute bottom-4 left-4 right-4 flex justify-between">
                <button
                  onClick={prevProject}
                  className="p-2 rounded-full bg-background/80 backdrop-blur-sm text-foreground hover:bg-background transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextProject}
                  className="p-2 rounded-full bg-background/80 backdrop-blur-sm text-foreground hover:bg-background transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <div className={cn(
                  "w-12 h-12 rounded-xl flex items-center justify-center",
                  `bg-${activeProjectData.color}/10`
                )}>
                  <activeProjectData.icon className={cn("w-6 h-6", `text-${activeProjectData.color}`)} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">{activeProjectData.name}</h3>
                  <p className="text-sm text-muted-foreground">{activeProjectData.tagline}</p>
                </div>
              </div>

              <p className="text-muted-foreground mb-8 leading-relaxed">
                {activeProjectData.description}
              </p>

              {/* Features Grid */}
              <div className="grid grid-cols-2 gap-3 mb-8">
                {activeProjectData.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 p-3 rounded-lg bg-muted/50"
                  >
                    <feature.icon className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm text-foreground">{feature.label}</span>
                  </div>
                ))}
              </div>

              {/* Technologies */}
              <div className="mb-8">
                <h4 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">
                  Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeProjectData.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-mono bg-primary/10 text-primary rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3">
                {activeProjectData.url && (
                  <a href={activeProjectData.url} target="_blank" rel="noopener noreferrer">
                    <Button className="btn-primary group">
                      Visiter le site
                      <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </Button>
                  </a>
                )}
                {activeProjectData.crmUrl && (
                  <a href={activeProjectData.crmUrl} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="group">
                      Accéder au CRM
                      <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </Button>
                  </a>
                )}
                {!activeProjectData.url && (
                  <Button
                    variant="outline"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    En savoir plus
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Project Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveProject(index)}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-300",
                activeProject === index
                  ? "w-8 bg-primary"
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FlagshipProjectsSection;
