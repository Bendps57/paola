import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message envoyé !",
      description: "Merci pour votre message. Je vous répondrai dans les plus brefs délais.",
    });

    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="inline-block text-gold font-medium tracking-[0.2em] text-sm uppercase mb-4">
              Contact
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-6">
              Prêt à déléguer ?
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Échangeons sur vos besoins et voyons comment je peux vous aider à avancer sereinement.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact form */}
            <div className="bg-card rounded-2xl p-8 shadow-soft border border-border/50">
              <h3 className="font-serif text-xl font-medium text-foreground mb-6">
                Envoyez-moi un message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Nom
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-background border border-input focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all duration-300 text-foreground"
                    placeholder="Votre nom"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-background border border-input focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all duration-300 text-foreground"
                    placeholder="votre@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-input focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all duration-300 text-foreground resize-none"
                    placeholder="Décrivez votre projet ou vos besoins..."
                  />
                </div>

                <Button
                  type="submit"
                  variant="gold"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Envoi en cours...
                    </>
                  ) : (
                    "Envoyer le message"
                  )}
                </Button>
              </form>
            </div>

            {/* Contact info */}
            <div className="flex flex-col justify-center">
              <div className="space-y-8">
                <div>
                  <h3 className="font-serif text-xl font-medium text-foreground mb-4">
                    Informations de contact
                  </h3>
                  <p className="text-muted-foreground">
                    N'hésitez pas à me contacter directement par téléphone ou via LinkedIn pour discuter de vos besoins.
                  </p>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Téléphone</p>
                    <a
                      href="tel:0760841973"
                      className="text-muted-foreground hover:text-gold transition-colors"
                    >
                      07 60 84 19 73
                    </a>
                  </div>
                </div>

                {/* LinkedIn */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">LinkedIn</p>
                    <a
                      href="https://www.linkedin.com/in/paola-perruccio"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-gold transition-colors"
                    >
                      linkedin.com/in/paola-perruccio
                    </a>
                  </div>
                </div>

                {/* CTA */}
                <div className="pt-4">
                  <a
                    href="https://www.linkedin.com/in/paola-perruccio"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="elegant-outline" size="lg" className="group">
                      Voir mon profil LinkedIn
                      <svg
                        className="w-4 h-4 transition-transform group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
