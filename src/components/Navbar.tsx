
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleContactButtonClick = () => {
    setIsOpen(false);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: "Accueil", href: "#home", action: () => scrollToTop() },
    { name: "Services", href: "#services", action: () => scrollToSection('services') },
    { name: "À propos", href: "#about", action: () => scrollToSection('about') },
    { name: "Témoignages", href: "#testimonials", action: () => scrollToSection('testimonials') },
    { name: "Contact", href: "#contact", action: () => scrollToSection('contact') },
  ];

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-white shadow-md py-3" : "bg-transparent py-6"
      )}
    >
      <div className="container-custom flex items-center justify-between">
        <a 
          href="#" 
          className="flex items-center gap-3" 
          onClick={(e) => {
            e.preventDefault();
            scrollToTop();
          }}
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

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-gaia-purple hover:text-gaia-pink font-medium transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    link.action();
                  }}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <Button className="btn-primary" onClick={handleContactButtonClick}>Contactez-nous</Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gaia-purple p-2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg animate-fade-in">
          <ul className="flex flex-col py-4">
            {navLinks.map((link) => (
              <li key={link.name} className="px-6 py-3">
                <a
                  href={link.href}
                  className="text-gaia-purple hover:text-gaia-pink font-medium transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    link.action();
                  }}
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li className="px-6 py-4">
              <Button className="btn-primary w-full" onClick={handleContactButtonClick}>Contactez-nous</Button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
