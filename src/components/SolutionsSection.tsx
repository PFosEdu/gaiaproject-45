import { useState } from "react";
import { GraduationCap, Code, Wheat, Brain, Briefcase, ArrowRight, MessageSquare, BarChart3, Users, MapPin, Shield, Cloud, Palette, Cog, Target, Layers, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logoCanopy from "@/assets/logo-canopy.ico";

const SolutionsSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const solutions = [
    {
      icon: GraduationCap, title: "Plateformes Éducatives & Acquisition", shortTitle: "Éducation",
      description: "Systèmes complets d'orientation scolaire, de diagnostic et d'acquisition étudiante à grande échelle.",
      features: [
        { icon: Target, text: "Orientation et diagnostics personnalisés" },
        { icon: Users, text: "CRM éducatif intégré" },
        { icon: MessageSquare, text: "Campagnes WhatsApp massives" },
        { icon: BarChart3, text: "Scoring automatique & BI éducative" },
      ],
      stats: { value: "220K+", label: "Utilisateurs actifs" },
      links: [
        { label: "PFOS Educareers", url: "https://educareers.pfos.education/", logo: "/lovable-uploads/652f66cd-5f54-4aac-8ddf-ded0203c9571.png" },
        { label: "CRM PFOS", url: "https://crm.pfos.education", logo: "/lovable-uploads/652f66cd-5f54-4aac-8ddf-ded0203c9571.png" },
      ]
    },
    {
      icon: Code, title: "Ingénierie Logicielle & Cloud", shortTitle: "Ingénierie",
      description: "Développement de plateformes cloud modulaires, APIs complexes et interfaces utilisateur modernes.",
      features: [
        { icon: Cloud, text: "Plateformes cloud modulaires" },
        { icon: Cog, text: "API & intégrations complexes" },
        { icon: Palette, text: "UX/UI moderne et responsive" },
        { icon: BarChart3, text: "Dashboards de pilotage" },
      ],
      stats: { value: "10+", label: "Modules cloud actifs" },
      links: [
        { label: "Deep Canopy X", url: "https://canopyx.gaiasarl.com/", logo: logoCanopy },
      ]
    },
    {
      icon: Wheat, title: "Systèmes de Subvention Agricole", shortTitle: "Agriculture",
      description: "SNSGS - Système National Numérique de Gestion des Subventions. Architecture souveraine.",
      features: [
        { icon: Users, text: "Enregistrement des bénéficiaires" },
        { icon: MapPin, text: "Géolocalisation précise" },
        { icon: Shield, text: "Système e-bons sécurisé" },
        { icon: Layers, text: "Architecture souveraine" },
      ],
      stats: { value: "National", label: "Échelle de déploiement" },
      links: []
    },
    {
      icon: Brain, title: "Data Intelligence & Automatisation", shortTitle: "Data & IA",
      description: "Scraping légal, segmentation comportementale, pipelines IA et analyse prédictive.",
      features: [
        { icon: Target, text: "Scraping légal intelligent" },
        { icon: Users, text: "Segmentation comportementale" },
        { icon: Cog, text: "Pipelines IA automatisés" },
        { icon: BarChart3, text: "Analyse prédictive" },
      ],
      stats: { value: "TB+", label: "Données traitées" },
      links: []
    },
    {
      icon: Briefcase, title: "Stratégie Numérique & Conseil", shortTitle: "Conseil",
      description: "Accompagnement stratégique, audit technologique et transformation digitale.",
      features: [
        { icon: Target, text: "Audit technologique complet" },
        { icon: Cloud, text: "Architecture cloud & données" },
        { icon: Palette, text: "Stratégie UX/produit" },
        { icon: Users, text: "Formation équipes locales" },
      ],
      stats: { value: "100%", label: "Sur mesure" },
      links: []
    }
  ];

  const activeSolution = solutions[activeTab];

  return (
    <section id="solutions" className="section">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 text-sm font-medium text-primary bg-primary/10 rounded-full mb-6">Nos Solutions</span>
          <h2 className="section-title">Des solutions <span className="gradient-text">complètes</span></h2>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {solutions.map((solution, index) => (
            <button key={index} onClick={() => setActiveTab(index)}
              className={cn("flex items-center gap-2 px-4 py-2.5 rounded-lg font-medium transition-all",
                activeTab === index ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:text-foreground"
              )}>
              <solution.icon className="w-4 h-4" />
              <span className="hidden sm:inline">{solution.shortTitle}</span>
            </button>
          ))}
        </div>

        <div className="glass-card p-8 md:p-12">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <activeSolution.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">{activeSolution.title}</h3>
              <p className="text-muted-foreground mb-8">{activeSolution.description}</p>
              <div className="inline-flex items-center gap-4 px-6 py-4 rounded-xl bg-primary/10 border border-primary/20 mb-6">
                <div className="text-3xl font-bold text-primary">{activeSolution.stats.value}</div>
                <div className="text-sm text-muted-foreground">{activeSolution.stats.label}</div>
              </div>
              {activeSolution.links && activeSolution.links.length > 0 && (
                <div className="flex flex-wrap gap-3">
                  {activeSolution.links.map((link, index) => (
                    <a key={index} href={link.url} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 px-4 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-colors">
                      <img src={link.logo} alt={link.label} className="w-5 h-5 rounded object-contain" />
                      {link.label} <ExternalLink className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              )}
            </div>
            <div className="space-y-3">
              {activeSolution.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-foreground font-medium">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button className="btn-primary group" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            Discuter de votre projet <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
