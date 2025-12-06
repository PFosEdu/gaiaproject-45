import { ArrowRight, Play, Database, Cloud, Cpu, Globe, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const floatingIcons = [
    { Icon: Database, delay: 0, x: 10, y: 20 },
    { Icon: Cloud, delay: 1, x: 85, y: 15 },
    { Icon: Cpu, delay: 2, x: 75, y: 70 },
    { Icon: Globe, delay: 0.5, x: 15, y: 75 },
    { Icon: Zap, delay: 1.5, x: 50, y: 85 },
  ];

  return (
    <section 
      ref={heroRef}
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 tech-grid opacity-30" />
      
      {/* Dynamic Gradient Orbs */}
      <div 
        className="absolute w-[600px] h-[600px] rounded-full opacity-30 blur-3xl transition-all duration-1000 ease-out"
        style={{
          background: 'radial-gradient(circle, hsl(45, 93%, 58%, 0.4) 0%, transparent 70%)',
          left: `${mousePosition.x * 30 - 15}%`,
          top: `${mousePosition.y * 30 - 15}%`,
        }}
      />
      <div 
        className="absolute w-[500px] h-[500px] rounded-full opacity-20 blur-3xl transition-all duration-1500 ease-out"
        style={{
          background: 'radial-gradient(circle, hsl(174, 72%, 56%, 0.4) 0%, transparent 70%)',
          right: `${(1 - mousePosition.x) * 20}%`,
          bottom: `${(1 - mousePosition.y) * 20}%`,
        }}
      />
      <div 
        className="absolute w-[400px] h-[400px] rounded-full opacity-20 blur-3xl"
        style={{
          background: 'radial-gradient(circle, hsl(262, 83%, 58%, 0.3) 0%, transparent 70%)',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      />

      {/* Floating Tech Icons */}
      {floatingIcons.map(({ Icon, delay, x, y }, i) => (
        <div
          key={i}
          className="absolute hidden md:flex items-center justify-center w-12 h-12 rounded-xl glass-card text-primary/60 floating-element"
          style={{
            left: `${x}%`,
            top: `${y}%`,
            animationDelay: `${delay}s`,
          }}
        >
          <Icon size={24} />
        </div>
      ))}

      {/* Main Content */}
      <div className="container-custom relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-primary/20 mb-8 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-muted-foreground">
              Leader technologique en Afrique Centrale
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Nous construisons des{' '}
            <span className="gradient-text-gold">systèmes numériques</span>{' '}
            qui transforment{' '}
            <span className="text-secondary">l'éducation</span>,{' '}
            <span className="text-accent">les organisations</span>{' '}
            et les territoires.
          </h1>

          {/* Subtitle Tags */}
          <div className="flex flex-wrap justify-center gap-3 mb-10 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            {['Innovation', 'Data', 'Cloud', 'Orientation', 'Subvention', 'Acquisition', 'IA'].map((tag, i) => (
              <span 
                key={tag}
                className="px-4 py-1.5 text-sm font-medium rounded-full bg-muted/50 text-muted-foreground border border-border/50 hover:border-primary/30 hover:text-primary transition-all cursor-default"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-16 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <Button 
              className="btn-primary group"
              onClick={() => scrollToSection('why-gaia')}
            >
              Découvrir GAIA
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              className="btn-secondary"
              onClick={() => scrollToSection('solutions')}
            >
              Nos Solutions
            </Button>
            <Button 
              className="btn-outline group"
              onClick={() => scrollToSection('contact')}
            >
              <Play className="mr-2 h-4 w-4" />
              Nous Contacter
            </Button>
          </div>

          {/* Stats Preview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            {[
              { value: '47', label: 'Collaborateurs' },
              { value: '220K+', label: 'Utilisateurs' },
              { value: '10+', label: 'Modules Cloud' },
              { value: '35%', label: 'Croissance/an' },
            ].map((stat, i) => (
              <div key={i} className="glass-card p-6 text-center card-hover">
                <div className="text-2xl md:text-3xl font-bold gradient-text-gold mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs text-muted-foreground uppercase tracking-widest">Scroll</span>
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
