import { 
  Users, 
  Code, 
  BarChart3, 
  Palette, 
  MessageSquare, 
  Megaphone, 
  Cloud,
  GraduationCap,
  Heart,
  Rocket,
  Target,
  Lightbulb
} from "lucide-react";

const TeamSection = () => {
  const expertises = [
    { icon: Code, name: "Développeurs Full-Stack", count: "15+" },
    { icon: BarChart3, name: "Data Analysts", count: "8" },
    { icon: Palette, name: "UX/UI Designers", count: "6" },
    { icon: MessageSquare, name: "Conseillers", count: "5" },
    { icon: Megaphone, name: "Marketing Digital", count: "7" },
    { icon: Cloud, name: "Ingénieurs Cloud", count: "6" },
  ];

  const values = [
    { 
      icon: Lightbulb, 
      title: "Innovation Continue", 
      description: "Nous explorons constamment de nouvelles technologies pour offrir des solutions de pointe." 
    },
    { 
      icon: Target, 
      title: "Excellence Opérationnelle", 
      description: "Chaque projet est exécuté avec rigueur, précision et engagement envers la qualité." 
    },
    { 
      icon: Heart, 
      title: "Impact Social", 
      description: "Nous croyons en la technologie comme levier de transformation positive pour l'Afrique." 
    },
    { 
      icon: Rocket, 
      title: "Croissance des Talents", 
      description: "Nous formons des talents recherchés sur le marché et investissons dans leur développement." 
    },
  ];

  return (
    <section id="team" className="section relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 text-sm font-medium text-primary bg-primary/10 rounded-full mb-6">
            Notre Équipe
          </span>
          <h2 className="section-title">
            47 <span className="gradient-text-gold">Collaborateurs</span>
          </h2>
          <p className="section-subtitle mx-auto mt-6">
            Un laboratoire d'excellence numérique camerounais, composé d'experts passionnés qui transforment les défis en opportunités.
          </p>
        </div>

        {/* Expertises Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-20">
          {expertises.map((expertise, index) => (
            <div
              key={expertise.name}
              className="glass-card p-6 text-center card-hover border border-border/50 group"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <expertise.icon className="w-7 h-7 text-primary" />
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">{expertise.count}</div>
              <div className="text-xs text-muted-foreground">{expertise.name}</div>
            </div>
          ))}
        </div>

        {/* Philosophy Banner */}
        <div className="glass-card p-8 md:p-12 border border-primary/20 mb-20 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6">
              <GraduationCap className="w-8 h-8 text-primary" />
            </div>
            <blockquote className="text-2xl md:text-3xl font-bold text-foreground mb-6 leading-relaxed">
              "Nous formons des <span className="gradient-text-gold">talents recherchés</span> sur le marché"
            </blockquote>
            <p className="text-muted-foreground text-lg">
              Chaque membre de notre équipe bénéficie d'un programme de développement continu, 
              faisant de GAIA un véritable incubateur de compétences technologiques de haut niveau.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="glass-card p-8 card-hover border border-border/50 group"
            >
              <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors">
                <value.icon className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {value.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
