
import { Code, Shield, Database, Cloud } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

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
  return (
    <section id="services" className="section bg-white">
      <div className="container-custom">
        <div className="max-w-xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-tech-blue mb-4">
            Nos Services
          </h2>
          <p className="text-tech-gray">
            Des solutions complètes pour répondre à tous vos besoins informatiques
            et vous accompagner dans votre transformation digitale.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="pb-4">
                <div className="h-12 w-12 rounded-lg bg-tech-light flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-tech-indigo" />
                </div>
                <CardTitle className="text-xl text-tech-blue">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-tech-gray">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-tech-gray mb-6">
            Vous ne trouvez pas ce que vous recherchez ? Nous proposons également des solutions personnalisées.
          </p>
          <button className="btn-secondary">
            Découvrir toutes nos offres
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
