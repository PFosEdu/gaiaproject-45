
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    content: "GAIA SARL U a transformé notre infrastructure IT. Leur équipe a su comprendre nos besoins et proposer des solutions adaptées qui ont boosté notre productivité.",
    author: "Marie Dupont",
    role: "Directrice Générale, ModernShop",
    rating: 5,
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    content: "Le développement de notre application mobile a été géré de main de maître. Professionnalisme, réactivité et expertise technique, je recommande vivement !",
    author: "Thomas Laurent",
    role: "CTO, FutureTech",
    rating: 5,
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    content: "La migration de nos services vers le cloud s'est déroulée sans aucun problème grâce à l'expertise de GAIA SARL U. Un partenaire de confiance pour notre entreprise.",
    author: "Sophie Martin",
    role: "Responsable IT, GlobalService",
    rating: 4,
    image: "https://images.unsplash.com/photo-1589156280159-27698a70f29e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="section bg-gradient-to-br from-white to-gaia-lightblue/30">
      <div className="container-custom">
        <div className="max-w-xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gaia-purple mb-4">
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
                "bg-white p-6 rounded-xl shadow-lg border border-gaia-purple/10",
                index === 1 ? "md:-mt-4" : ""
              )}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={cn(
                      "h-5 w-5",
                      i < testimonial.rating ? "text-gaia-pink fill-gaia-pink" : "text-gray-300"
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
                  <p className="font-medium text-gaia-purple">{testimonial.author}</p>
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
