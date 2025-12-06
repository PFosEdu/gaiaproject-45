import { Lightbulb, Rocket, Layers, TrendingUp, Users, Globe, Shield, Zap } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const WhyGaiaSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.2 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const pillars = [
    { icon: Lightbulb, title: "Innovation Pragmatique", description: "Des solutions technologiques avancées, ancrées dans la réalité opérationnelle." },
    { icon: Rocket, title: "Exécution Opérationnelle", description: "Déploiement rapide et maîtrise complète du cycle de vie produit." },
    { icon: Layers, title: "Expertise End-to-End", description: "De la conception UX à l'infrastructure cloud, une couverture complète." },
    { icon: TrendingUp, title: "Impact Mesurable", description: "Des KPIs clairs, des résultats tangibles et une amélioration continue." }
  ];

  const stats = [
    { value: 47, suffix: '', label: 'Collaborateurs experts', icon: Users },
    { value: 220, suffix: 'K+', label: 'Utilisateurs actifs', icon: Globe },
    { value: 35, suffix: '%', label: 'Croissance annuelle', icon: TrendingUp },
    { value: 10, suffix: '+', label: 'Modules cloud', icon: Shield },
  ];

  const AnimatedCounter = ({ value, suffix }: { value: number; suffix: string }) => {
    const [count, setCount] = useState(0);
    useEffect(() => {
      if (isVisible) {
        let start = 0;
        const increment = value / 100;
        const timer = setInterval(() => {
          start += increment;
          if (start >= value) { setCount(value); clearInterval(timer); }
          else { setCount(Math.floor(start)); }
        }, 20);
        return () => clearInterval(timer);
      }
    }, [isVisible, value]);
    return <span>{count}{suffix}</span>;
  };

  return (
    <section ref={sectionRef} id="why-gaia" className="section">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 text-sm font-medium text-primary bg-primary/10 rounded-full mb-6">Notre ADN</span>
          <h2 className="section-title">Pourquoi <span className="gradient-text">GAIA</span> ?</h2>
          <p className="section-subtitle mx-auto mt-6">Une entreprise hybride : tech + data + terrain + marketing + UX.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {pillars.map((pillar, index) => (
            <div key={pillar.title} className={`glass-card p-8 card-hover ${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <pillar.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">{pillar.title}</h3>
              <p className="text-muted-foreground text-sm">{pillar.description}</p>
            </div>
          ))}
        </div>

        <div className="glass-card p-8 md:p-12 border-primary/10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-muted mb-4">
                  <stat.icon className="w-7 h-7 text-primary" />
                </div>
                <div className="stat-counter mb-2"><AnimatedCounter value={stat.value} suffix={stat.suffix} /></div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyGaiaSection;
