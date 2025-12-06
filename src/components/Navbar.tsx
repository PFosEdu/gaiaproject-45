import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Update active section based on scroll position
      const sections = ["home", "why-gaia", "solutions", "stats", "expertise", "cases", "team", "comptoir", "contact"];
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 200) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: "Accueil", href: "home" },
    { name: "Pourquoi GAIA", href: "why-gaia" },
    { name: "Solutions", href: "solutions" },
    { name: "Expertise", href: "expertise" },
    { name: "Études de cas", href: "cases" },
    { name: "Équipe", href: "team" },
    { name: "Comptoir des Arts", href: "comptoir" },
    { name: "Contact", href: "contact" },
  ];

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled 
          ? "bg-background/80 backdrop-blur-xl border-b border-border/50 py-3" 
          : "bg-transparent py-6"
      )}
    >
      <div className="container-custom flex items-center justify-between">
        <a 
          href="#home" 
          className="flex items-center gap-3 group" 
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('home');
          }}
        >
          <div className="relative">
            <img 
              src="/lovable-uploads/652f66cd-5f54-4aac-8ddf-ded0203c9571.png" 
              alt="GAIA SARL U Logo" 
              className="h-11 w-11 rounded-xl object-cover ring-2 ring-primary/20 group-hover:ring-primary/50 transition-all duration-300" 
            />
            <div className="absolute inset-0 rounded-xl bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
          </div>
          <div className="flex flex-col">
            <span className="text-foreground font-heading font-bold text-xl tracking-tight">
              GAIA<span className="text-primary ml-0.5">.</span>
            </span>
            <span className="text-[10px] text-muted-foreground font-medium tracking-widest uppercase">
              SARL U
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.slice(0, 6).map((link) => (
            <a
              key={link.name}
              href={`#${link.href}`}
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300",
                activeSection === link.href 
                  ? "text-primary bg-primary/10" 
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              )}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.href);
              }}
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href="#comptoir"
            className="text-sm font-medium text-secondary hover:text-secondary/80 transition-colors"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('comptoir');
            }}
          >
            Comptoir des Arts
          </a>
          <Button 
            className="btn-primary text-sm"
            onClick={() => scrollToSection('contact')}
          >
            Nous Contacter
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-foreground p-2 hover:bg-muted rounded-lg transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "lg:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border transition-all duration-300 overflow-hidden",
        isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
      )}>
        <div className="container-custom py-6">
          <ul className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={`#${link.href}`}
                  className={cn(
                    "block px-4 py-3 rounded-lg font-medium transition-all",
                    activeSection === link.href 
                      ? "text-primary bg-primary/10" 
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  )}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li className="pt-4">
              <Button 
                className="btn-primary w-full"
                onClick={() => scrollToSection('contact')}
              >
                Nous Contacter
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
