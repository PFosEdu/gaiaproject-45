
import { CheckCircle } from "lucide-react";

const advantages = [
  "Une équipe d'experts certifiés",
  "Plus de 10 ans d'expérience",
  "Des solutions sur mesure adaptées à vos besoins",
  "Un accompagnement personnalisé",
  "Service client réactif 7j/7",
  "Garantie de satisfaction"
];

const AboutSection = () => {
  return (
    <section id="about" className="section bg-tech-light">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-tech-blue">
              Votre partenaire technologique de confiance
            </h2>
            <p className="text-tech-gray">
              Depuis 2010, TechSolutions accompagne les entreprises dans leur transformation numérique. 
              Notre mission : vous fournir des solutions informatiques innovantes et fiables pour 
              vous aider à relever les défis du monde digital.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {advantages.map((advantage, index) => (
                <div key={index} className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-tech-indigo shrink-0 mt-0.5" />
                  <span className="text-tech-gray">{advantage}</span>
                </div>
              ))}
            </div>
            <div>
              <button className="btn-primary">
                En savoir plus sur nous
              </button>
            </div>
          </div>
          <div className="relative order-1 md:order-2">
            <div className="absolute -top-10 -right-10 h-64 w-64 bg-tech-indigo/10 rounded-full blur-3xl"></div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-square w-full bg-white rounded-lg shadow-lg overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80&w=1200"
                    alt="Équipe TechSolutions"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[4/3] w-full bg-white rounded-lg shadow-lg p-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-tech-blue">200+</h3>
                    <p className="text-sm text-tech-gray">Projets réalisés</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4 pt-6">
                <div className="aspect-[4/3] w-full bg-white rounded-lg shadow-lg p-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-tech-blue">98%</h3>
                    <p className="text-sm text-tech-gray">Clients satisfaits</p>
                  </div>
                </div>
                <div className="aspect-square w-full bg-white rounded-lg shadow-lg overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200"
                    alt="Services TechSolutions"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
