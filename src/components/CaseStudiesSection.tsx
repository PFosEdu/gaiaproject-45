import { useState } from "react";
import { 
  ArrowRight, 
  GraduationCap, 
  Wheat, 
  Users, 
  MessageSquare, 
  Globe,
  CheckCircle,
  TrendingUp
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const CaseStudiesSection = () => {
  const [activeCase, setActiveCase] = useState(0);

  const caseStudies = [
    {
      id: 0,
      icon: GraduationCap,
      category: "Éducation",
      title: "Transformation Éducative Massive",
      context: "Un réseau d'établissements d'enseignement supérieur cherchait à moderniser son processus d'orientation et de recrutement étudiant à l'échelle nationale.",
      objective: "Créer un écosystème numérique unifié permettant l'orientation personnalisée, le recrutement optimisé et le suivi des candidatures en temps réel.",
      solution: "Développement d'une plateforme complète intégrant tests d'orientation, CRM éducatif, campagnes automatisées WhatsApp et tableaux de bord analytiques.",
      technologies: ["React", "Node.js", "PostgreSQL", "WhatsApp Cloud API", "Power BI"],
      results: [
        { label: "Utilisateurs actifs", value: "220K+" },
        { label: "Taux de conversion", value: "+45%" },
        { label: "Temps de traitement", value: "-60%" },
      ],
      color: "primary"
    },
    {
      id: 1,
      icon: Wheat,
      category: "Agriculture",
      title: "Plateforme Nationale de Gestion de Subventions",
      context: "Un gouvernement souhaitait digitaliser entièrement son système de distribution de subventions agricoles pour améliorer la transparence et l'efficacité.",
      objective: "Concevoir et déployer un système national de gestion des subventions avec traçabilité complète, de l'enregistrement des bénéficiaires à la distribution des e-bons.",
      solution: "Architecture souveraine incluant enregistrement biométrique, géolocalisation, système d'e-bons sécurisé et gouvernance des données intégrée.",
      technologies: ["PHP/CakePHP", "AWS", "PostgreSQL", "API REST", "Mobile Apps"],
      results: [
        { label: "Bénéficiaires enregistrés", value: "500K+" },
        { label: "Réduction fraude", value: "-85%" },
        { label: "Couverture territoriale", value: "100%" },
      ],
      color: "emerald"
    },
    {
      id: 2,
      icon: Users,
      category: "Recrutement",
      title: "Système de Recrutement Data-Driven",
      context: "Un groupe multi-sectoriel avait besoin d'optimiser son processus de recrutement international avec des milliers de candidatures mensuelles.",
      objective: "Automatiser le tri des candidatures, améliorer la qualité des recrutements et réduire le temps de traitement des dossiers.",
      solution: "Plateforme de recrutement avec scoring automatique IA, segmentation comportementale et workflows de validation personnalisés.",
      technologies: ["Python", "Machine Learning", "React", "Node.js", "ElasticSearch"],
      results: [
        { label: "Candidatures traitées/mois", value: "10K+" },
        { label: "Gain de temps RH", value: "-70%" },
        { label: "Qualité recrutements", value: "+55%" },
      ],
      color: "secondary"
    },
    {
      id: 3,
      icon: MessageSquare,
      category: "Support Client",
      title: "Automatisation du Support & Chat Intelligent",
      context: "Une entreprise de services avec un volume élevé de demandes client cherchait à améliorer la réactivité tout en optimisant les coûts.",
      objective: "Déployer un système de support intelligent capable de traiter automatiquement les demandes courantes et d'escalader les cas complexes.",
      solution: "Chatbot IA multicanal avec intégration CRM, base de connaissances dynamique et routing intelligent vers les équipes humaines.",
      technologies: ["Python", "NLP", "WhatsApp API", "CRM Custom", "Analytics"],
      results: [
        { label: "Requêtes auto-résolues", value: "75%" },
        { label: "Temps de réponse", value: "-80%" },
        { label: "Satisfaction client", value: "+40%" },
      ],
      color: "accent"
    },
    {
      id: 4,
      icon: Globe,
      category: "International",
      title: "Recrutement International Optimisé",
      context: "Un organisme international devait gérer des campagnes de recrutement dans plusieurs pays africains avec des contraintes réglementaires variées.",
      objective: "Unifier les processus de recrutement multi-pays tout en respectant les spécificités locales et réglementaires de chaque territoire.",
      solution: "Plateforme multi-tenant avec gestion des langues, adaptation réglementaire par pays et reporting consolidé.",
      technologies: ["React", "Node.js", "Multi-tenant Architecture", "i18n", "Power BI"],
      results: [
        { label: "Pays couverts", value: "12" },
        { label: "Efficacité opérationnelle", value: "+65%" },
        { label: "Conformité réglementaire", value: "100%" },
      ],
      color: "amber"
    }
  ];

  const activeStudy = caseStudies[activeCase];
  
  const colorClasses = {
    primary: { bg: "bg-primary/10", text: "text-primary", border: "border-primary/30" },
    emerald: { bg: "bg-emerald-400/10", text: "text-emerald-400", border: "border-emerald-400/30" },
    secondary: { bg: "bg-secondary/10", text: "text-secondary", border: "border-secondary/30" },
    accent: { bg: "bg-accent/10", text: "text-accent", border: "border-accent/30" },
    amber: { bg: "bg-amber-400/10", text: "text-amber-400", border: "border-amber-400/30" },
  };

  const currentColor = colorClasses[activeStudy.color as keyof typeof colorClasses];

  return (
    <section id="cases" className="section relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 tech-grid opacity-20" />
      
      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 text-sm font-medium text-emerald-400 bg-emerald-400/10 rounded-full mb-6">
            Études de Cas
          </span>
          <h2 className="section-title">
            Impact <span className="gradient-text">concret</span>
          </h2>
          <p className="section-subtitle mx-auto mt-6">
            Des projets transformationnels livrés avec excellence. Résultats anonymisés pour confidentialité.
          </p>
        </div>

        {/* Case Navigation */}
        <div className="flex overflow-x-auto gap-3 mb-12 pb-4 scrollbar-hide">
          {caseStudies.map((study, index) => (
            <button
              key={study.id}
              onClick={() => setActiveCase(index)}
              className={cn(
                "flex items-center gap-2 px-5 py-3 rounded-xl font-medium transition-all duration-300 whitespace-nowrap",
                activeCase === index
                  ? `${colorClasses[study.color as keyof typeof colorClasses].bg} ${colorClasses[study.color as keyof typeof colorClasses].text} ${colorClasses[study.color as keyof typeof colorClasses].border} border`
                  : "bg-muted/30 text-muted-foreground hover:bg-muted/50 border border-transparent"
              )}
            >
              <study.icon className="w-5 h-5" />
              <span>{study.category}</span>
            </button>
          ))}
        </div>

        {/* Case Content */}
        <div className="glass-card p-8 md:p-12 border border-border/50">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <span className={cn("inline-block px-3 py-1 text-sm font-medium rounded-full mb-4", currentColor.bg, currentColor.text)}>
                  {activeStudy.category}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                  {activeStudy.title}
                </h3>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-3">Contexte</h4>
                  <p className="text-foreground/90 leading-relaxed">{activeStudy.context}</p>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-3">Objectif</h4>
                  <p className="text-foreground/90 leading-relaxed">{activeStudy.objective}</p>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-3">Solution</h4>
                  <p className="text-foreground/90 leading-relaxed">{activeStudy.solution}</p>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {activeStudy.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1.5 text-sm font-mono bg-muted/50 text-muted-foreground rounded-lg border border-border/50">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Results Sidebar */}
            <div className={cn("p-6 rounded-2xl border", currentColor.bg, currentColor.border)}>
              <h4 className={cn("text-lg font-bold mb-6 flex items-center gap-2", currentColor.text)}>
                <TrendingUp className="w-5 h-5" />
                Résultats
              </h4>
              
              <div className="space-y-6">
                {activeStudy.results.map((result, index) => (
                  <div key={index} className="space-y-2">
                    <div className={cn("text-3xl font-bold", currentColor.text)}>
                      {result.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {result.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-border/50">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className={cn("w-4 h-4", currentColor.text)} />
                  <span>Projet livré avec succès</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
