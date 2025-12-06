import { ArrowUpRight, Linkedin, Twitter, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const scrollToSection = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  const footerLinks = [
    { title: "Solutions", links: [{ name: "Éducation", href: "solutions" }, { name: "Cloud", href: "solutions" }, { name: "Agriculture", href: "solutions" }, { name: "Data & IA", href: "solutions" }] },
    { title: "Entreprise", links: [{ name: "Pourquoi GAIA", href: "why-gaia" }, { name: "Équipe", href: "team" }, { name: "Comptoir des Arts", href: "comptoir" }, { name: "Contact", href: "contact" }] },
    { title: "Légal", links: [{ name: "Mentions légales", href: "#" }, { name: "Confidentialité", href: "#" }, { name: "CGU", href: "#" }] },
  ];

  return (
    <footer className="relative pt-20 pb-8 border-t border-border/50">
      <div className="absolute inset-0 bg-gradient-to-t from-muted/20 to-transparent" />
      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 pb-12 border-b border-border/50">
          <div className="lg:col-span-2">
            <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }} className="inline-flex items-center gap-3 mb-6">
              <img src="/lovable-uploads/652f66cd-5f54-4aac-8ddf-ded0203c9571.png" alt="GAIA" className="h-12 w-12 rounded-xl ring-2 ring-primary/20" />
              <div><span className="text-foreground font-heading font-bold text-xl">GAIA<span className="text-primary">.</span></span><span className="block text-[10px] text-muted-foreground tracking-widest uppercase">SARL U</span></div>
            </a>
            <p className="text-muted-foreground max-w-md mb-6">Leader technologique camerounais. Nous construisons des systèmes numériques qui transforment l'éducation, les organisations et les territoires.</p>
            <div className="flex gap-3">
              {[Linkedin, Twitter, Facebook, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-lg bg-muted/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"><Icon className="w-5 h-5" /></a>
              ))}
            </div>
          </div>
          {footerLinks.map((col) => (
            <div key={col.title}>
              <h3 className="font-semibold text-foreground mb-4">{col.title}</h3>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.name}><a href={`#${link.href}`} onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }} className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1 group text-sm">{link.name}<ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">© {currentYear} GAIA SARL U. Tous droits réservés.</p>
          <p className="text-xs text-muted-foreground">Douala, Cameroun • Leader en transformation numérique</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
