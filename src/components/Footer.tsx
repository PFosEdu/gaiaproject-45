
import { ArrowUpRight } from "lucide-react";

const Footer = () => {
  const footerLinks = [
    {
      title: "Services",
      links: [
        { name: "Développement Logiciel", href: "#" },
        { name: "Cybersécurité", href: "#" },
        { name: "Infrastructure IT", href: "#" },
        { name: "Solutions Cloud", href: "#" },
        { name: "Conseil", href: "#" },
      ],
    },
    {
      title: "Entreprise",
      links: [
        { name: "À propos", href: "#" },
        { name: "Équipe", href: "#" },
        { name: "Carrières", href: "#" },
        { name: "Blog", href: "#" },
        { name: "Partenaires", href: "#" },
      ],
    },
    {
      title: "Légal",
      links: [
        { name: "Mentions légales", href: "#" },
        { name: "Politique de confidentialité", href: "#" },
        { name: "Conditions d'utilisation", href: "#" },
        { name: "Cookies", href: "#" },
      ],
    },
  ];

  return (
    <footer className="bg-tech-light pt-16 pb-8">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 pb-12 border-b border-gray-200">
          <div className="lg:col-span-2">
            <div className="space-y-6">
              <a href="#" className="inline-block">
                <span className="text-tech-blue font-heading font-bold text-2xl">
                  GAIA<span className="text-tech-indigo">SARL U</span>
                </span>
              </a>
              <p className="text-tech-gray max-w-md">
                Votre partenaire technologique de confiance. Des solutions 
                informatiques innovantes pour propulser votre entreprise 
                vers le succès.
              </p>
              <div className="flex gap-4">
                {["#", "#", "#", "#"].map((href, i) => (
                  <a
                    key={i}
                    href={href}
                    className="h-10 w-10 rounded-full bg-white flex items-center justify-center shadow-sm hover:shadow-md transition-shadow"
                  >
                    <span className="sr-only">Réseaux sociaux</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {footerLinks.map((column, i) => (
            <div key={i}>
              <h3 className="font-medium text-tech-blue mb-6">{column.title}</h3>
              <ul className="space-y-4">
                {column.links.map((link, j) => (
                  <li key={j}>
                    <a
                      href={link.href}
                      className="text-tech-gray hover:text-tech-indigo transition-colors inline-flex items-center gap-1 group"
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
            © {new Date().getFullYear()} GAIA SARL U. Tous droits réservés.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-tech-gray hover:text-tech-blue text-sm">
              Conditions d'utilisation
            </a>
            <a href="#" className="text-tech-gray hover:text-tech-blue text-sm">
              Politique de confidentialité
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
