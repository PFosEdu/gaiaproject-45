import { ArrowRight, Leaf, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import screenshotCanopy from "@/assets/screenshot-canopy.png";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Subtle Background */}
      <div className="absolute inset-0 tech-grid opacity-30" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />

      {/* Main Content */}
      <div className="container-custom relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-sm font-medium text-muted-foreground">Leader technologique en Afrique Centrale</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
            Nous construisons des{' '}
            <span className="gradient-text">systèmes numériques</span>{' '}
            qui transforment.
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
            Éducation • Organisations • Territoires
          </p>

          {/* Tags */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {['Innovation', 'Data', 'Cloud', 'Orientation', 'Subvention', 'Acquisition', 'IA'].map((tag) => (
              <span key={tag} className="px-4 py-1.5 text-sm font-medium rounded-full bg-muted text-muted-foreground border border-border">
                {tag}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <Button className="btn-primary group" onClick={() => scrollToSection('why-gaia')}>
              Découvrir GAIA
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button className="btn-secondary" onClick={() => scrollToSection('solutions')}>
              Nos Solutions
            </Button>
            <Button className="btn-outline" onClick={() => scrollToSection('contact')}>
              Nous Contacter
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {[
              { value: '47', label: 'Collaborateurs' },
              { value: '220K+', label: 'Utilisateurs' },
              { value: '10+', label: 'Modules Cloud' },
              { value: '35%', label: 'Croissance/an' },
            ].map((stat, i) => (
              <div key={i} className="glass-card p-6 text-center card-hover">
                <div className="text-2xl md:text-3xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Canopy X Featured Project */}
          <div className="glass-card p-1 overflow-hidden border-2 border-secondary/30 hover:border-secondary/50 transition-colors">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Screenshot */}
              <div className="relative overflow-hidden">
                <img 
                  src={screenshotCanopy} 
                  alt="Deep Canopy X Platform" 
                  className="w-full h-full object-cover object-top min-h-[250px] lg:min-h-[300px]"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-semibold">
                    <Leaf className="w-4 h-4" />
                    Projet Innovant
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 lg:p-8 flex flex-col justify-center text-left bg-gradient-to-br from-secondary/5 to-transparent">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center">
                    <Leaf className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-xl lg:text-2xl font-bold text-foreground">Deep Canopy X</h3>
                    <p className="text-sm text-secondary font-medium">Intelligence Environnementale</p>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6 text-sm lg:text-base">
                  Plateforme IA souveraine pour surveiller 200M+ hectares de forêts du Bassin du Congo. Détection d'agroforêts, mesure carbone et protection de la biodiversité.
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {['IA', 'Satellite', 'Carbone', 'Biodiversité'].map((tag) => (
                    <span key={tag} className="px-3 py-1 text-xs font-medium rounded-full bg-secondary/10 text-secondary">
                      {tag}
                    </span>
                  ))}
                </div>

                <a 
                  href="https://canopyx.gaiasarl.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold text-base px-8 py-6 group shadow-lg shadow-secondary/25">
                    <Leaf className="mr-2 w-5 h-5" />
                    Explorer Deep Canopy X
                    <ExternalLink className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
