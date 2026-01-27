import { Button } from "@/components/ui/button";

const paolaPortrait = "/images/portrait-paola.jpg";

const HeroSection = () => {
  const scrollToServices = () => {
    const element = document.querySelector("#services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-hero flex items-center">
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 py-32 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <div className="mb-6 animate-fade-in">
              <h2 className="font-serif text-2xl md:text-3xl text-foreground font-medium mb-2">
                Paola Perruccio
              </h2>
              <span className="inline-block text-gold font-medium tracking-[0.2em] text-sm uppercase">
                Assistante Indépendante
              </span>
            </div>
            
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-foreground leading-tight mb-6 opacity-0 animate-fade-in-up animation-delay-100">
              Votre partenaire de confiance pour une{" "}
              <span className="italic text-gold">gestion sereine</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0 opacity-0 animate-fade-in-up animation-delay-200">
              J'accompagne les entreprises, entrepreneurs et professionnels en simplifiant leur quotidien administratif et organisationnel.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start opacity-0 animate-fade-in-up animation-delay-300">
              <Button
                variant="gold"
                size="lg"
                onClick={scrollToServices}
                className="group"
              >
                Découvrir mes services
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
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Button>
              
              <Button
                variant="elegant-outline"
                size="lg"
                onClick={scrollToContact}
              >
                Prendre contact
              </Button>
            </div>
          </div>
          
          {/* Image */}
          <div className="order-1 lg:order-2 flex justify-center opacity-0 animate-slide-in-right animation-delay-200">
            <div className="relative">
              {/* Decorative frame */}
              <div className="absolute -inset-4 border border-gold/20 rounded-2xl -rotate-3" />
              <div className="absolute -inset-4 border border-gold/20 rounded-2xl rotate-3" />
              
              {/* Main image container */}
              <div className="relative w-72 md:w-80 lg:w-96 aspect-[3/4] rounded-2xl overflow-hidden shadow-elevated">
                <img
                  src={paolaPortrait}
                  alt="Paola Perruccio - Assistante Indépendante"
                  className="w-full h-full object-cover object-top"
                />
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/10 to-transparent" />
              </div>
              
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-card px-6 py-3 rounded-xl shadow-card">
                <p className="text-sm font-medium text-foreground">+5 ans d'expérience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in animation-delay-500">
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-muted-foreground to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
