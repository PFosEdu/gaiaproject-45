
import { useState } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simuler un temps de chargement
    setTimeout(() => {
      // Dans une vraie application, on enverrait les données du formulaire à un backend
      toast.success("Message envoyé !", {
        description: "Nous vous répondrons dans les plus brefs délais."
      });
      
      // Réinitialiser le formulaire
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Téléphone",
      value: "690116809 / 691158251",
      href: "tel:+237690116809",
    },
    {
      icon: MapPin,
      title: "Localisation",
      value: "Bastos - Yaoundé, BP 483 Yaoundé",
      href: "https://maps.google.com/?q=Bastos+Yaoundé+Cameroun",
      isExternal: true,
    },
    {
      icon: Clock,
      title: "Horaires",
      value: "Lun-Ven: 08h-17h, Sam: 09h-12h",
      href: "#",
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
              <h3 className="text-xl font-bold">Informations pratiques</h3>
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
                    target={item.isExternal ? "_blank" : undefined}
                    rel={item.isExternal ? "noopener noreferrer" : undefined}
                    onClick={item.href === "#" ? (e) => e.preventDefault() : undefined}
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
                    value={formData.name}
                    onChange={handleChange}
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
                    value={formData.email}
                    onChange={handleChange}
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
                  value={formData.subject}
                  onChange={handleChange}
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
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-tech-cyan hover:bg-tech-cyan/90 text-tech-blue font-medium"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
