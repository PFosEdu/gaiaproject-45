import { GraduationCap, Wheat, Megaphone, Cloud, Palette, Shield, Server, Database, Code, Smartphone, Globe, Cpu } from "lucide-react";

const ExpertiseSection = () => {
  const domains = [
    { icon: GraduationCap, name: "Éducation & Orientation" },
    { icon: Wheat, name: "Agriculture & Subventions" },
    { icon: Megaphone, name: "Marketing Digital & Acquisition" },
    { icon: Cloud, name: "Plateformes Cloud & IA" },
    { icon: Palette, name: "UX/UI & Product Thinking" },
    { icon: Shield, name: "Souveraineté Numérique" },
  ];

  const technologies = [
    "PHP / CakePHP", "Node.js", "Python", "API REST", "WhatsApp Cloud API", "Power BI",
    "CRM Custom", "AWS", "DigitalOcean", "OVH", "Scraping / IA", "Architectures Modulaires",
  ];

  const techIcons = [
    { Icon: Server, label: "Backend" }, { Icon: Database, label: "Data" }, { Icon: Cloud, label: "Cloud" },
    { Icon: Code, label: "API" }, { Icon: Smartphone, label: "Mobile" }, { Icon: Globe, label: "Web" },
    { Icon: Cpu, label: "IA" }, { Icon: Shield, label: "Sécurité" },
  ];

  return (
    <section id="expertise" className="section">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 text-sm font-medium text-primary bg-primary/10 rounded-full mb-6">Expertise</span>
          <h2 className="section-title">Nos domaines <span className="gradient-text">d'expertise</span></h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-20">
          {domains.map((domain) => (
            <div key={domain.name} className="glass-card p-6 card-hover flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <domain.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-foreground font-semibold">{domain.name}</h3>
            </div>
          ))}
        </div>

        <div className="glass-card p-8 md:p-12">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-foreground mb-4">Stack <span className="gradient-text">Technologique</span></h3>
          </div>

          <div className="flex justify-center gap-4 mb-10 flex-wrap">
            {techIcons.map(({ Icon, label }) => (
              <div key={label} className="flex flex-col items-center gap-2 group">
                <div className="w-14 h-14 rounded-xl bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <Icon className="w-7 h-7 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <span className="text-xs text-muted-foreground">{label}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {technologies.map((tech) => (
              <span key={tech} className="px-4 py-2 text-sm font-medium rounded-lg bg-muted text-muted-foreground border border-border hover:text-foreground transition-colors">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
