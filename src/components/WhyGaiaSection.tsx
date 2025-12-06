import { Lightbulb, Rocket, Layers, TrendingUp, Users, Globe, Shield, Zap } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const WhyGaiaSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const pillars = [
    {
      icon: Lightbulb,
      title: "Innovation Pragmatique",
      description: "Des solutions technologiques avancées, ancrées dans la réalité opérationnelle de nos clients.",
      color: "text-primary",
      bgColor: "bg-primary/10",
      borderColor: "border-primary/20"
    },
    {
      icon: Rocket,
      title: "Exécution Opérationnelle",
      description: "Une capacité de déploiement rapide et une maîtrise complète du cycle de vie produit.",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
      borderColor: "border-secondary/20"
    },
    {
      icon: Layers,
      title: "Expertise End-to-End",
      description: "De la conception UX à l'infrastructure cloud, une couverture complète de vos besoins.",
      color: "text-accent",
      bgColor: "bg-accent/10",
      borderColor: "border-accent/20"
    },
    {
      icon: TrendingUp,
      title: "Impact Mesurable",
      description: "Des KPIs clairs, des résultats tangibles et une amélioration continue basée sur les données.",
      color: "text-emerald-400",
      bgColor: "bg-emerald-400/10",
      borderColor: "border-emerald-400/20"
    }
  ];

  const stats = [
    { value: 47, suffix: '', label: 'Collaborateurs experts', icon: Users },
    { value: 220, suffix: 'K+', label: 'Utilisateurs dans nos systèmes', icon: Globe },
    { value: 35, suffix: '%', label: 'Croissance annuelle', icon: TrendingUp },
    { value: 10, suffix: '+', label: 'Modules cloud interconnectés', icon: Shield },
  ];

  const AnimatedCounter = ({ value, suffix }: { value: number; suffix: string }) => {
    const [count, setCount] = useState(0);
    
    useEffect(() => {
      if (isVisible) {
        let start = 0;
        const duration = 2000;
        const increment = value / (duration / 16);
        
        const timer = setInterval(() => {
          start += increment;
          if (start >= value) {
            setCount(value);
            clearInterval(timer);
          } else {
            setCount(Math.floor(start));
          }
        }, 16);

        return () => clearInterval(timer);
      }
    }, [isVisible, value]);

    return <span>{count}{suffix}</span>;
  };

  return (
    <section ref={sectionRef} id="why-gaia" className="section relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 text-sm font-medium text-primary bg-primary/10 rounded-full mb-6">
            Notre ADN
          </span>
          <h2 className="section-title">
            Pourquoi <span className="gradient-text-gold">GAIA</span> ?
          </h2>
          <p className="section-subtitle mx-auto mt-6">
            Une entreprise hybride unique : tech + data + terrain + marketing + UX. 
            Nous ne construisons pas seulement des logiciels, nous créons des systèmes qui transforment.
          </p>
        </div>

        {/* 4 Pillars */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.title}
              className={`glass-card p-8 card-hover border ${pillar.borderColor} ${
                isVisible ? 'animate-fade-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-14 h-14 rounded-xl ${pillar.bgColor} flex items-center justify-center mb-6`}>
                <pillar.icon className={`w-7 h-7 ${pillar.color}`} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{pillar.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>

        {/* Animated Stats */}
        <div className="glass-card p-8 md:p-12 border border-primary/10">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">
              GAIA en <span className="gradient-text-gold">chiffres</span>
            </h3>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={stat.label}
                className={`text-center ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}
                style={{ animationDelay: `${0.4 + index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-muted/50 mb-4">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="stat-counter mb-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-border/50 text-center">
            <p className="text-muted-foreground">
              <span className="text-foreground font-medium">Solutions déployées dans plusieurs régions d'Afrique centrale</span>
              <span className="mx-3">•</span>
              <span className="text-primary">Croissance continue depuis 2018</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyGaiaSection;
