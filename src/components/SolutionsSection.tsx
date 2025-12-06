import { useState } from "react";
import { 
  GraduationCap, 
  Code, 
  Wheat, 
  Brain, 
  Briefcase,
  ArrowRight,
  MessageSquare,
  BarChart3,
  Users,
  MapPin,
  Shield,
  Cloud,
  Palette,
  Cog,
  Target,
  Layers
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const SolutionsSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const solutions = [
    {
      id: 0,
      icon: GraduationCap,
      title: "Plateformes Éducatives & Acquisition",
      shortTitle: "Éducation",
      color: "text-primary",
      bgColor: "bg-primary/10",
      borderColor: "border-primary/30",
      description: "Systèmes complets d'orientation scolaire, de diagnostic et d'acquisition étudiante à grande échelle.",
      features: [
        { icon: Target, text: "Orientation et diagnostics personnalisés" },
        { icon: Users, text: "CRM éducatif intégré" },
        { icon: MessageSquare, text: "Campagnes WhatsApp massives" },
        { icon: BarChart3, text: "Scoring automatique & BI éducative" },
        { icon: Layers, text: "Modules interconnectés" },
      ],
      stats: { value: "220K+", label: "Utilisateurs actifs" }
    },
    {
      id: 1,
      icon: Code,
      title: "Ingénierie Logicielle & Cloud",
      shortTitle: "Ingénierie",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
      borderColor: "border-secondary/30",
      description: "Développement de plateformes cloud modulaires, APIs complexes et interfaces utilisateur modernes.",
      features: [
        { icon: Cloud, text: "Plateformes cloud modulaires" },
        { icon: Cog, text: "API & intégrations complexes" },
        { icon: Palette, text: "UX/UI moderne et responsive" },
        { icon: BarChart3, text: "Dashboards de pilotage" },
        { icon: Brain, text: "Automatisation intelligente" },
      ],
      stats: { value: "10+", label: "Modules cloud actifs" }
    },
    {
      id: 2,
      icon: Wheat,
      title: "Systèmes de Subvention Agricole",
      shortTitle: "Agriculture",
      color: "text-emerald-400",
      bgColor: "bg-emerald-400/10",
      borderColor: "border-emerald-400/30",
      description: "SNSGS - Système National Numérique de Gestion des Subventions. Architecture souveraine pour la transformation publique.",
      features: [
        { icon: Users, text: "Enregistrement des bénéficiaires" },
        { icon: MapPin, text: "Géolocalisation précise" },
        { icon: Shield, text: "Système e-bons sécurisé" },
        { icon: BarChart3, text: "Contrôle et gouvernance des données" },
        { icon: Layers, text: "Architecture souveraine" },
      ],
      stats: { value: "National", label: "Échelle de déploiement" }
    },
    {
      id: 3,
      icon: Brain,
      title: "Data Intelligence & Automatisation",
      shortTitle: "Data & IA",
      color: "text-accent",
      bgColor: "bg-accent/10",
      borderColor: "border-accent/30",
      description: "Scraping légal, segmentation comportementale, pipelines IA et analyse prédictive avancée.",
      features: [
        { icon: Target, text: "Scraping légal intelligent" },
        { icon: Users, text: "Segmentation comportementale" },
        { icon: Cog, text: "Pipelines IA automatisés" },
        { icon: BarChart3, text: "Analyse prédictive (Power BI)" },
        { icon: Brain, text: "Machine Learning appliqué" },
      ],
      stats: { value: "TB+", label: "Données traitées" }
    },
    {
      id: 4,
      icon: Briefcase,
      title: "Stratégie Numérique & Conseil",
      shortTitle: "Conseil",
      color: "text-amber-400",
      bgColor: "bg-amber-400/10",
      borderColor: "border-amber-400/30",
      description: "Accompagnement stratégique, audit technologique et transformation digitale des organisations.",
      features: [
        { icon: Target, text: "Audit technologique complet" },
        { icon: Cloud, text: "Architecture cloud & données" },
        { icon: Palette, text: "Stratégie UX/produit" },
        { icon: Cog, text: "Transformation digitale" },
        { icon: Users, text: "Formation équipes locales" },
      ],
      stats: { value: "100%", label: "Accompagnement sur mesure" }
    }
  ];

  const activeSolution = solutions[activeTab];

  return (
    <section id="solutions" className="section relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 tech-grid opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 text-sm font-medium text-secondary bg-secondary/10 rounded-full mb-6">
            Nos Solutions
          </span>
          <h2 className="section-title">
            Des solutions <span className="gradient-text">complètes</span>
          </h2>
          <p className="section-subtitle mx-auto mt-6">
            5 grandes catégories de solutions technologiques pour répondre à tous vos défis numériques.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {solutions.map((solution, index) => (
            <button
              key={solution.id}
              onClick={() => setActiveTab(index)}
              className={cn(
                "flex items-center gap-2 px-5 py-3 rounded-xl font-medium transition-all duration-300",
                activeTab === index
                  ? `${solution.bgColor} ${solution.color} ${solution.borderColor} border`
                  : "bg-muted/30 text-muted-foreground hover:bg-muted/50 border border-transparent"
              )}
            >
              <solution.icon className="w-5 h-5" />
              <span className="hidden sm:inline">{solution.shortTitle}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="glass-card p-8 md:p-12 border border-border/50">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left - Info */}
            <div>
              <div className={cn(
                "inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6",
                activeSolution.bgColor
              )}>
                <activeSolution.icon className={cn("w-8 h-8", activeSolution.color)} />
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                {activeSolution.title}
              </h3>
              
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {activeSolution.description}
              </p>

              <div className={cn(
                "inline-flex items-center gap-4 px-6 py-4 rounded-xl",
                activeSolution.bgColor,
                activeSolution.borderColor,
                "border"
              )}>
                <div className={cn("text-3xl font-bold", activeSolution.color)}>
                  {activeSolution.stats.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {activeSolution.stats.label}
                </div>
              </div>
            </div>

            {/* Right - Features */}
            <div className="space-y-4">
              <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-6">
                Fonctionnalités clés
              </h4>
              {activeSolution.features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors group"
                >
                  <div className={cn(
                    "w-10 h-10 rounded-lg flex items-center justify-center",
                    activeSolution.bgColor
                  )}>
                    <feature.icon className={cn("w-5 h-5", activeSolution.color)} />
                  </div>
                  <span className="text-foreground font-medium group-hover:text-primary transition-colors">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button 
            className="btn-primary group"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Discuter de votre projet
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
