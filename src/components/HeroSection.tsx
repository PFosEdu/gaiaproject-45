import { ArrowRight, Play, Database, Cloud, Cpu, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";

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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
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
