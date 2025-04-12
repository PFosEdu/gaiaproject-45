
import { Code, Shield, Database, Cloud, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const services = [
  {
    icon: Code,
    title: "Développement Logiciel",
    description: "Applications web et mobiles sur mesure pour optimiser vos processus métier et améliorer l'expérience de vos clients.",
  },
  {
    icon: Shield,
    title: "Cybersécurité",
    description: "Protection de vos données sensibles et mise en conformité avec les réglementations en vigueur (RGPD, etc.).",
  },
  {
    icon: Database,
    title: "Infrastructure IT",
    description: "Conception, déploiement et maintenance d'infrastructures informatiques robustes adaptées à vos besoins.",
  },
  {
    icon: Cloud,
    title: "Solutions Cloud",
    description: "Migration et gestion de vos services dans le cloud pour plus de flexibilité et d'économies.",
  },
];

const ServicesSection = () => {
  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="section bg-white">
      <div className="container-custom">
        <div className="max-w-xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gaia-purple mb-4">
            Nos Services
          </h2>
          <p className="text-tech-gray">
            Des solutions complètes pour répondre à tous vos besoins informatiques
            et vous accompagner dans votre transformation digitale.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                  <CardHeader className="pb-4">
                    <div className="h-12 w-12 rounded-lg bg-gaia-lightblue flex items-center justify-center mb-4">
                      <service.icon className="h-6 w-6 text-gaia-purple" />
                    </div>
                    <CardTitle className="text-xl text-gaia-purple">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-tech-gray">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>{service.title}</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <p className="text-tech-gray">{service.description}</p>
                  <p className="text-tech-gray">
                    Nous proposons des solutions adaptées à votre entreprise et à votre secteur d'activité.
                    Contactez-nous pour en savoir plus sur nos offres.
                  </p>
                  <Button className="w-full" onClick={handleContactClick}>Nous contacter</Button>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-tech-gray mb-6">
            Vous ne trouvez pas ce que vous recherchez ? Nous proposons également des solutions personnalisées.
          </p>
          <Button className="btn-secondary" onClick={handleContactClick}>
            Découvrir toutes nos offres
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
