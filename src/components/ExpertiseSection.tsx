import { 
  GraduationCap, 
  Wheat, 
  Megaphone, 
  Cloud, 
  Palette, 
  Shield,
  Server,
  Database,
  Code,
  Smartphone,
  Globe,
  Cpu
} from "lucide-react";

const ExpertiseSection = () => {
  const domains = [
    { icon: GraduationCap, name: "Éducation & Orientation", color: "text-primary" },
    { icon: Wheat, name: "Agriculture & Subventions", color: "text-emerald-400" },
    { icon: Megaphone, name: "Marketing Digital & Acquisition", color: "text-rose-400" },
    { icon: Cloud, name: "Plateformes Cloud & IA", color: "text-secondary" },
    { icon: Palette, name: "UX/UI & Product Thinking", color: "text-accent" },
    { icon: Shield, name: "Souveraineté Numérique", color: "text-amber-400" },
  ];

  const technologies = [
    { name: "PHP / CakePHP", category: "Backend" },
    { name: "Node.js", category: "Backend" },
    { name: "Python", category: "Backend" },
    { name: "API REST", category: "Integration" },
    { name: "WhatsApp Cloud API", category: "Communication" },
    { name: "Power BI", category: "Analytics" },
    { name: "CRM Custom", category: "Business" },
    { name: "AWS", category: "Cloud" },
    { name: "DigitalOcean", category: "Cloud" },
    { name: "OVH", category: "Cloud" },
    { name: "Scraping / IA", category: "Data" },
    { name: "Architectures Modulaires", category: "Architecture" },
  ];

  const techIcons = [
    { Icon: Server, label: "Backend", delay: 0 },
    { Icon: Database, label: "Data", delay: 0.1 },
    { Icon: Cloud, label: "Cloud", delay: 0.2 },
    { Icon: Code, label: "API", delay: 0.3 },
    { Icon: Smartphone, label: "Mobile", delay: 0.4 },
    { Icon: Globe, label: "Web", delay: 0.5 },
    { Icon: Cpu, label: "IA", delay: 0.6 },
    { Icon: Shield, label: "Sécurité", delay: 0.7 },
  ];

  return (
    <section id="expertise" className="section relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background" />
      
      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 text-sm font-medium text-accent bg-accent/10 rounded-full mb-6">
            Expertise
          </span>
          <h2 className="section-title">
            Nos domaines <span className="gradient-text">d'expertise</span>
          </h2>
          <p className="section-subtitle mx-auto mt-6">
            Une expertise transversale couvrant l'ensemble de la chaîne de valeur numérique.
          </p>
        </div>

        {/* Domains Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {domains.map((domain, index) => (
            <div
              key={domain.name}
              className="glass-card p-8 card-hover border border-border/50 group"
            >
              <div className="flex items-start gap-4">
                <div className={`w-14 h-14 rounded-xl bg-muted/50 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <domain.icon className={`w-7 h-7 ${domain.color}`} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {domain.name}
                  </h3>
                  <div className={`w-12 h-1 rounded-full ${domain.color.replace('text-', 'bg-')}/50`} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Technologies Section */}
        <div className="glass-card p-8 md:p-12 border border-primary/10">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Stack <span className="gradient-text-gold">Technologique</span>
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Une maîtrise complète des technologies modernes pour des solutions robustes et évolutives.
            </p>
          </div>

          {/* Tech Icons Animation */}
          <div className="flex justify-center gap-6 mb-12 flex-wrap">
            {techIcons.map(({ Icon, label, delay }, index) => (
              <div
                key={label}
                className="flex flex-col items-center gap-2 group"
              >
                <div className="w-16 h-16 rounded-2xl bg-muted/50 border border-border/50 flex items-center justify-center group-hover:border-primary/50 group-hover:bg-primary/10 transition-all duration-300">
                  <Icon className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">
                  {label}
                </span>
              </div>
            ))}
          </div>

          {/* Technologies Tags */}
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <div
                key={tech.name}
                className="group relative"
              >
                <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-muted/50 text-muted-foreground border border-border/50 hover:border-primary/30 hover:text-foreground hover:bg-muted transition-all cursor-default">
                  {tech.name}
                </span>
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 text-xs bg-card border border-border rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {tech.category}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
