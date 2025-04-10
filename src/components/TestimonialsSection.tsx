
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    content: "TechSolutions a transformé notre infrastructure IT. Leur équipe a su comprendre nos besoins et proposer des solutions adaptées qui ont boosté notre productivité.",
    author: "Marie Dupont",
    role: "Directrice Générale, ModernShop",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/68.jpg"
  },
  {
    content: "Le développement de notre application mobile a été géré de main de maître. Professionnalisme, réactivité et expertise technique, je recommande vivement !",
    author: "Thomas Laurent",
    role: "CTO, FutureTech",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    content: "La migration de nos services vers le cloud s'est déroulée sans aucun problème grâce à l'expertise de TechSolutions. Un partenaire de confiance pour notre entreprise.",
    author: "Sophie Martin",
    role: "Responsable IT, GlobalService",
    rating: 4,
    image: "https://randomuser.me/api/portraits/women/42.jpg"
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="section bg-white">
      <div className="container-custom">
        <div className="max-w-xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-tech-blue mb-4">
            Ce que nos clients disent
          </h2>
          <p className="text-tech-gray">
            Découvrez les témoignages de nos clients satisfaits
            et pourquoi ils nous font confiance pour leurs projets informatiques.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={cn(
                "bg-white p-6 rounded-xl shadow-lg border border-gray-100",
                index === 1 ? "md:-mt-4" : ""
              )}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={cn(
                      "h-5 w-5",
                      i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                    )}
                  />
                ))}
              </div>
              <p className="text-tech-gray mb-6">"{testimonial.content}"</p>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full overflow-hidden">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium text-tech-blue">{testimonial.author}</p>
                  <p className="text-sm text-tech-gray">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
