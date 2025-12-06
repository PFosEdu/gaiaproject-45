import { useState } from "react";
import { ArrowRight, GraduationCap, Wheat, Users, MessageSquare, Globe, CheckCircle, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

const CaseStudiesSection = () => {
  const [activeCase, setActiveCase] = useState(0);

  const caseStudies = [
    {
      icon: GraduationCap, category: "Éducation", title: "Transformation Éducative Massive",
      context: "Un réseau d'établissements d'enseignement supérieur cherchait à moderniser son processus d'orientation et de recrutement étudiant.",
      objective: "Créer un écosystème numérique unifié permettant l'orientation personnalisée et le suivi des candidatures.",
      solution: "Plateforme complète intégrant tests d'orientation, CRM éducatif, campagnes WhatsApp et tableaux de bord analytiques.",
      technologies: ["React", "Node.js", "PostgreSQL", "WhatsApp API", "Power BI"],
      results: [{ label: "Utilisateurs actifs", value: "220K+" }, { label: "Taux de conversion", value: "+45%" }, { label: "Temps de traitement", value: "-60%" }],
    },
    {
      icon: Wheat, category: "Agriculture", title: "Plateforme Nationale de Gestion de Subventions",
      context: "Un gouvernement souhaitait digitaliser son système de distribution de subventions agricoles.",
      objective: "Déployer un système national avec traçabilité complète, de l'enregistrement à la distribution des e-bons.",
      solution: "Architecture souveraine incluant enregistrement, géolocalisation, e-bons sécurisés et gouvernance des données.",
      technologies: ["PHP/CakePHP", "AWS", "PostgreSQL", "API REST", "Mobile Apps"],
      results: [{ label: "Bénéficiaires", value: "500K+" }, { label: "Réduction fraude", value: "-85%" }, { label: "Couverture", value: "100%" }],
    },
    {
      icon: Users, category: "Recrutement", title: "Système de Recrutement Data-Driven",
      context: "Un groupe multi-sectoriel avait besoin d'optimiser son processus de recrutement international.",
      objective: "Automatiser le tri des candidatures et améliorer la qualité des recrutements.",
      solution: "Plateforme de recrutement avec scoring IA, segmentation comportementale et workflows personnalisés.",
      technologies: ["Python", "Machine Learning", "React", "Node.js", "ElasticSearch"],
      results: [{ label: "Candidatures/mois", value: "10K+" }, { label: "Gain de temps RH", value: "-70%" }, { label: "Qualité", value: "+55%" }],
    },
    {
      icon: MessageSquare, category: "Support", title: "Automatisation du Support Client",
      context: "Une entreprise avec un volume élevé de demandes cherchait à améliorer sa réactivité.",
      objective: "Déployer un système intelligent capable de traiter automatiquement les demandes courantes.",
      solution: "Chatbot IA multicanal avec intégration CRM et base de connaissances dynamique.",
      technologies: ["Python", "NLP", "WhatsApp API", "CRM Custom", "Analytics"],
      results: [{ label: "Auto-résolues", value: "75%" }, { label: "Temps réponse", value: "-80%" }, { label: "Satisfaction", value: "+40%" }],
    },
    {
      icon: Globe, category: "International", title: "Recrutement International Optimisé",
      context: "Un organisme devait gérer des campagnes de recrutement dans plusieurs pays africains.",
      objective: "Unifier les processus multi-pays tout en respectant les spécificités locales.",
      solution: "Plateforme multi-tenant avec gestion des langues et adaptation réglementaire par pays.",
      technologies: ["React", "Node.js", "Multi-tenant", "i18n", "Power BI"],
      results: [{ label: "Pays couverts", value: "12" }, { label: "Efficacité", value: "+65%" }, { label: "Conformité", value: "100%" }],
    }
  ];

  const activeStudy = caseStudies[activeCase];

  return (
    <section id="cases" className="section">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 text-sm font-medium text-primary bg-primary/10 rounded-full mb-6">Études de Cas</span>
          <h2 className="section-title">Impact <span className="gradient-text">concret</span></h2>
        </div>

        <div className="flex overflow-x-auto gap-2 mb-12 pb-4">
          {caseStudies.map((study, index) => (
            <button key={index} onClick={() => setActiveCase(index)}
              className={cn("flex items-center gap-2 px-4 py-2.5 rounded-lg font-medium transition-all whitespace-nowrap",
                activeCase === index ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:text-foreground"
              )}>
              <study.icon className="w-4 h-4" />
              <span>{study.category}</span>
            </button>
          ))}
        </div>

        <div className="glass-card p-8 md:p-12">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-6">
              <div>
                <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary mb-4">{activeStudy.category}</span>
                <h3 className="text-2xl font-bold text-foreground">{activeStudy.title}</h3>
              </div>
              <div><h4 className="text-sm font-medium text-muted-foreground uppercase mb-2">Contexte</h4><p className="text-foreground/90">{activeStudy.context}</p></div>
              <div><h4 className="text-sm font-medium text-muted-foreground uppercase mb-2">Objectif</h4><p className="text-foreground/90">{activeStudy.objective}</p></div>
              <div><h4 className="text-sm font-medium text-muted-foreground uppercase mb-2">Solution</h4><p className="text-foreground/90">{activeStudy.solution}</p></div>
              <div>
                <h4 className="text-sm font-medium text-muted-foreground uppercase mb-3">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {activeStudy.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1.5 text-sm font-mono bg-muted text-muted-foreground rounded-lg">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="p-6 rounded-2xl bg-primary/5 border border-primary/20">
              <h4 className="text-lg font-bold text-primary mb-6 flex items-center gap-2"><TrendingUp className="w-5 h-5" />Résultats</h4>
              <div className="space-y-6">
                {activeStudy.results.map((result, index) => (
                  <div key={index}><div className="text-3xl font-bold text-primary">{result.value}</div><div className="text-sm text-muted-foreground">{result.label}</div></div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-border/50 flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="w-4 h-4 text-primary" /><span>Projet livré avec succès</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
