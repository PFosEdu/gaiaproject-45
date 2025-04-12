
import { ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = [
    {
      title: "Services",
      links: [
        { name: "Développement Logiciel", href: "#services", action: (e: React.MouseEvent) => scrollToSection('services', e) },
        { name: "Cybersécurité", href: "#services", action: (e: React.MouseEvent) => scrollToSection('services', e) },
        { name: "Infrastructure IT", href: "#services", action: (e: React.MouseEvent) => scrollToSection('services', e) },
        { name: "Solutions Cloud", href: "#services", action: (e: React.MouseEvent) => scrollToSection('services', e) },
        { name: "Conseil", href: "#contact", action: (e: React.MouseEvent) => scrollToSection('contact', e) },
      ],
    },
    {
      title: "Entreprise",
      links: [
        { name: "À propos", href: "#about", action: (e: React.MouseEvent) => scrollToSection('about', e) },
        { name: "Équipe", href: "#about", action: (e: React.MouseEvent) => scrollToSection('about', e) },
        { name: "Carrières", href: "#contact", action: (e: React.MouseEvent) => scrollToSection('contact', e) },
        { name: "Blog", href: "#", action: (e: React.MouseEvent) => e.preventDefault() },
        { name: "Partenaires", href: "#about", action: (e: React.MouseEvent) => scrollToSection('about', e) },
      ],
    },
    {
      title: "Légal",
      links: [
        { name: "Mentions légales", href: "#", action: (e: React.MouseEvent) => e.preventDefault() },
        { name: "Politique de confidentialité", href: "#", action: (e: React.MouseEvent) => e.preventDefault() },
        { name: "Conditions d'utilisation", href: "#", action: (e: React.MouseEvent) => e.preventDefault() },
        { name: "Cookies", href: "#", action: (e: React.MouseEvent) => e.preventDefault() },
      ],
    },
  ];

  const socialMediaIcons = [
    { name: "Facebook", href: "#", icon: "f" },
    { name: "Twitter", href: "#", icon: "t" },
    { name: "LinkedIn", href: "#", icon: "in" },
    { name: "Instagram", href: "#", icon: "ig" },
  ];

  return (
    <footer className="bg-gradient-to-br from-gaia-lightblue to-gaia-lightpink pt-16 pb-8">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 pb-12 border-b border-gray-200">
          <div className="lg:col-span-2">
            <div className="space-y-6">
              <a href="#" 
                className="inline-flex items-center gap-3"
                onClick={scrollToTop}
              >
                <img 
                  src="/lovable-uploads/652f66cd-5f54-4aac-8ddf-ded0203c9571.png" 
                  alt="GAIA SARL U Logo" 
                  className="h-12 w-auto rounded-full object-cover" 
                />
                <span className="text-gaia-purple font-heading font-bold text-2xl">
                  GAIA<span className="text-gaia-pink">SARL U</span>
                </span>
              </a>
              <p className="text-tech-gray max-w-md">
                Votre partenaire technologique de confiance. Des solutions 
                informatiques innovantes pour propulser votre entreprise 
                vers le succès.
              </p>
              <div className="flex gap-4">
                {socialMediaIcons.map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    aria-label={social.name}
                    className="h-10 w-10 rounded-full bg-white flex items-center justify-center shadow-sm hover:shadow-md transition-shadow font-medium text-gaia-purple"
                    onClick={(e) => e.preventDefault()}
                  >
                    <span>{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {footerLinks.map((column, i) => (
            <div key={i}>
              <h3 className="font-medium text-gaia-purple mb-6">{column.title}</h3>
              <ul className="space-y-4">
                {column.links.map((link, j) => (
                  <li key={j}>
                    <a
                      href={link.href}
                      className="text-tech-gray hover:text-gaia-pink transition-colors inline-flex items-center gap-1 group"
                      onClick={link.action}
                    >
                      {link.name}
                      <ArrowUpRight className="h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-tech-gray text-sm">
            © {currentYear} GAIA SARL U. Tous droits réservés.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-tech-gray hover:text-gaia-purple text-sm" onClick={(e) => e.preventDefault()}>
              Conditions d'utilisation
            </a>
            <a href="#" className="text-tech-gray hover:text-gaia-purple text-sm" onClick={(e) => e.preventDefault()}>
              Politique de confidentialité
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
