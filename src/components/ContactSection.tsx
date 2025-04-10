
import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Dans une vraie application, on enverrait les données du formulaire à un backend
    toast({
      title: "Message envoyé !",
      description: "Nous vous répondrons dans les plus brefs délais.",
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Téléphone",
      value: "+33 1 23 45 67 89",
      href: "tel:+33123456789",
    },
    {
      icon: Mail,
      title: "Email",
      value: "contact@techsolutions.fr",
      href: "mailto:contact@techsolutions.fr",
    },
    {
      icon: MapPin,
      title: "Adresse",
      value: "15 Rue de l'Innovation, 75001 Paris",
      href: "https://maps.google.com",
    },
  ];

  return (
    <section id="contact" className="section bg-tech-blue text-white">
      <div className="container-custom">
        <div className="max-w-xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Contactez-nous
          </h2>
          <p className="text-white/80">
            Une question, un projet ? N'hésitez pas à nous contacter.
            Notre équipe est à votre disposition pour vous répondre dans les meilleurs délais.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <div className="space-y-8">
              <p className="text-white/80">
                Discutons de vos besoins informatiques et voyons comment nous pouvons vous aider 
                à atteindre vos objectifs. Remplissez le formulaire ou utilisez nos coordonnées directes.
              </p>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="flex items-start gap-4 hover:opacity-80 transition-opacity"
                  >
                    <div className="h-10 w-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-white/60">{item.title}</p>
                      <p className="font-medium">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 bg-white/10 rounded-xl p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm text-white/80">
                    Nom
                  </label>
                  <Input
                    id="name"
                    placeholder="Votre nom"
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/40"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm text-white/80">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="exemple@entreprise.com"
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/40"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm text-white/80">
                  Sujet
                </label>
                <Input
                  id="subject"
                  placeholder="Objet de votre message"
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/40"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm text-white/80">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Décrivez votre projet ou votre demande..."
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/40 min-h-[150px]"
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-tech-cyan hover:bg-tech-cyan/90 text-tech-blue font-medium"
              >
                Envoyer le message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
