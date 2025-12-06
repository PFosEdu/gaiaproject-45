import { Palette, Music, Users, Calendar, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ComptoirSection = () => {
  const features = [
    { icon: Palette, title: "Espace Culturel", description: "Un lieu dédié à l'expression artistique et à la créativité" },
    { icon: Music, title: "Centre Créatif", description: "Installations modernes pour artistes et créateurs" },
    { icon: Users, title: "Incubateur Artistique", description: "Accompagnement et mentorat pour talents émergents" },
    { icon: Calendar, title: "Événements", description: "Expositions, concerts et rencontres culturelles" },
  ];

  return (
    <section id="comptoir" className="section relative overflow-hidden">
      {/* Unique Background for Cultural Section */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-background to-primary/5" />
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-20">
        <div className="absolute top-20 right-20 w-64 h-64 border border-accent/30 rounded-full" />
        <div className="absolute top-40 right-40 w-48 h-48 border border-primary/30 rounded-full" />
        <div className="absolute top-10 right-60 w-32 h-32 border border-secondary/30 rounded-full" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 text-sm font-medium text-accent bg-accent/10 rounded-full mb-6">
              <Sparkles className="w-4 h-4" />
              Espace Culturel
            </span>
            
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Le Comptoir <span className="gradient-text">des Arts</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Plus qu'une entreprise technologique, GAIA est aussi un acteur culturel engagé. 
              Le Comptoir des Arts incarne notre vision d'une technologie au service de la créativité 
              et de l'expression artistique africaine.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div 
                  key={feature.title}
                  className="flex items-start gap-3 p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm">{feature.title}</h4>
                    <p className="text-xs text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button 
              className="btn-secondary group"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Découvrir le Comptoir
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="relative glass-card p-8 border border-accent/20">
              {/* Abstract Art Pattern */}
              <div className="aspect-square relative overflow-hidden rounded-2xl bg-gradient-to-br from-accent/20 via-primary/10 to-secondary/20">
                {/* Decorative Elements */}
                <div className="absolute top-8 left-8 w-24 h-24 rounded-full border-4 border-accent/40" />
                <div className="absolute top-16 left-20 w-16 h-16 rounded-full bg-primary/30" />
                <div className="absolute bottom-12 right-12 w-32 h-32 rounded-full border-4 border-secondary/40" />
                <div className="absolute bottom-20 right-24 w-20 h-20 rounded-full bg-accent/30" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full border-2 border-primary/30" />
                
                {/* Center Text */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                  <Sparkles className="w-12 h-12 text-accent mb-4" />
                  <span className="text-2xl font-bold text-foreground mb-2">Tech & Culture</span>
                  <span className="text-sm text-muted-foreground">L'innovation au service de l'art</span>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mt-8">
                {[
                  { value: "50+", label: "Artistes" },
                  { value: "20+", label: "Événements/an" },
                  { value: "∞", label: "Créativité" },
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="text-xl font-bold text-accent">{stat.value}</div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center floating-element">
              <Palette className="w-6 h-6 text-primary" />
            </div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center floating-element" style={{ animationDelay: '1s' }}>
              <Music className="w-6 h-6 text-secondary" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComptoirSection;
