import { Users, Code, BarChart3, Palette, MessageSquare, Megaphone, Cloud, GraduationCap, Heart, Rocket, Target, Lightbulb } from "lucide-react";

const TeamSection = () => {
  const expertises = [
    { icon: Code, name: "Développeurs", count: "15+" },
    { icon: BarChart3, name: "Data Analysts", count: "8" },
    { icon: Palette, name: "UX/UI Designers", count: "6" },
    { icon: MessageSquare, name: "Conseillers", count: "5" },
    { icon: Megaphone, name: "Marketing", count: "7" },
    { icon: Cloud, name: "Cloud Engineers", count: "6" },
  ];

  const values = [
    { icon: Lightbulb, title: "Innovation Continue", description: "Nous explorons constamment de nouvelles technologies." },
    { icon: Target, title: "Excellence Opérationnelle", description: "Chaque projet est exécuté avec rigueur et précision." },
    { icon: Heart, title: "Impact Social", description: "La technologie comme levier de transformation positive." },
    { icon: Rocket, title: "Croissance des Talents", description: "Nous formons des talents recherchés sur le marché." },
  ];

  return (
    <section id="team" className="section">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 text-sm font-medium text-primary bg-primary/10 rounded-full mb-6">Notre Équipe</span>
          <h2 className="section-title">47 <span className="gradient-text">Collaborateurs</span></h2>
          <p className="section-subtitle mx-auto mt-6">Un laboratoire d'excellence numérique camerounais.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {expertises.map((expertise) => (
            <div key={expertise.name} className="glass-card p-6 text-center card-hover">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <expertise.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="text-xl font-bold text-foreground mb-1">{expertise.count}</div>
              <div className="text-xs text-muted-foreground">{expertise.name}</div>
            </div>
          ))}
        </div>

        <div className="glass-card p-8 md:p-12 border-primary/10 mb-16 text-center">
          <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <GraduationCap className="w-7 h-7 text-primary" />
          </div>
          <blockquote className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            "Nous formons des <span className="gradient-text">talents recherchés</span> sur le marché"
          </blockquote>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Chaque membre bénéficie d'un programme de développement continu, faisant de GAIA un incubateur de compétences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value) => (
            <div key={value.title} className="glass-card p-6 card-hover">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4">
                <value.icon className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{value.title}</h3>
              <p className="text-muted-foreground text-sm">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
