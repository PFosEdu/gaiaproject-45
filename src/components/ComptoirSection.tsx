import { Palette, Music, Users, Calendar, Sparkles, ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const ComptoirSection = () => {
  const features = [
    { icon: Palette, title: "Espace Culturel", description: "Lieu dédié à l'expression artistique" },
    { icon: Music, title: "Centre Créatif", description: "Installations pour artistes et créateurs" },
    { icon: Users, title: "Incubateur Artistique", description: "Accompagnement pour talents émergents" },
    { icon: Calendar, title: "Événements", description: "Expositions, concerts et rencontres" },
  ];

  return (
    <section id="comptoir" className="section">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 text-sm font-medium text-secondary bg-secondary/10 rounded-full mb-6">
              <Sparkles className="w-4 h-4" />Espace Culturel
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Le Comptoir <span className="gradient-text">des Arts</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Plus qu'une entreprise technologique, GAIA est aussi un acteur culturel engagé. Le Comptoir des Arts incarne notre vision d'une technologie au service de la créativité africaine.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature) => (
                <div key={feature.title} className="flex items-start gap-3 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm">{feature.title}</h4>
                    <p className="text-xs text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <a href="https://web.facebook.com/AuComptoirdesArts/" target="_blank" rel="noopener noreferrer">
              <Button className="btn-secondary group">
                Découvrir le Comptoir <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </div>

          <div className="glass-card p-8 border-secondary/20">
            <div className="aspect-square relative overflow-hidden rounded-2xl bg-gradient-to-br from-secondary/10 via-primary/5 to-accent/10 flex flex-col items-center justify-center">
              <Sparkles className="w-16 h-16 text-secondary mb-6" />
              <span className="text-3xl font-bold text-foreground mb-2">Tech & Culture</span>
              <span className="text-muted-foreground">L'innovation au service de l'art</span>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-8">
              {[{ value: "50+", label: "Artistes" }, { value: "20+", label: "Événements/an" }, { value: "∞", label: "Créativité" }].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-xl font-bold text-secondary">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComptoirSection;
