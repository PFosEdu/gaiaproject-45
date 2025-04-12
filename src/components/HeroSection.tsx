import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
const HeroSection = () => {
  return <section id="home" className="pt-28 pb-20 md:pt-40 md:pb-32 bg-gradient-to-br from-gaia-lightblue via-white to-gaia-lightpink">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gaia-purple leading-tight">
              Solutions informatiques pour propulser votre entreprise
            </h1>
            <p className="text-lg text-tech-gray max-w-xl">
              Nous offrons des services informatiques sur mesure pour accompagner
              votre transformation numérique et booster votre croissance.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="btn-primary">
                Découvrir nos services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button className="btn-secondary">Prendre rendez-vous</Button>
            </div>
            <div className="pt-4">
              <p className="text-sm text-tech-gray/80 flex items-center gap-4">
                <span className="flex -space-x-2">
                  {[1, 2, 3, 4].map(i => <span key={i} className="inline-block h-8 w-8 rounded-full border-2 border-white bg-gray-200" />)}
                </span>
                <span className="Rejoint par 200+ entreprises dans le monde">
                  Rejoint par <b>200+</b> entreprises en France
                </span>
              </p>
            </div>
          </div>
          <div className="relative animate-fade-in">
            <div className="absolute -top-10 -right-10 h-64 w-64 bg-gaia-blue/30 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 h-64 w-64 bg-gaia-pink/30 rounded-full blur-3xl"></div>
            <div className="relative bg-white p-6 rounded-2xl shadow-xl">
              <div className="aspect-[4/3] w-full bg-gray-200 rounded-lg overflow-hidden">
                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426&h=1728" alt="Solutions informatiques modernes" className="w-full h-full object-cover" />
              </div>
              <div className="flex justify-between items-center mt-4">
                <div className="space-y-1">
                  <p className="text-sm text-tech-gray/80">Nos clients constatent</p>
                  <p className="text-xl font-bold text-gaia-purple">+40% d'efficacité</p>
                </div>
                <div className="bg-gaia-lightblue p-2 rounded-full">
                  <ArrowRight className="h-6 w-6 text-gaia-purple" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;