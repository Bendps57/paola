const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Decorative element */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="inline-block text-gold font-medium tracking-[0.2em] text-sm uppercase mb-4">
              Qui suis-je
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground">
              À propos de moi
            </h2>
          </div>
          
          {/* Content */}
          <div className="grid md:grid-cols-5 gap-12 items-start">
            {/* Quote sidebar */}
            <div className="md:col-span-2 md:sticky md:top-32">
              <blockquote className="relative">
                <div className="absolute -top-4 -left-4 text-8xl text-gold/20 font-serif leading-none">
                  "
                </div>
                <p className="font-serif text-xl md:text-2xl text-foreground italic leading-relaxed pl-6 border-l-2 border-gold">
                  Vous simplifier la vie, alléger votre charge de travail et vous aider à avancer sereinement.
                </p>
              </blockquote>
              
              {/* Key highlights */}
              <div className="mt-12 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Engagée & Rigoureuse</p>
                    <p className="text-sm text-muted-foreground">Suivi complet des missions</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Proactive</p>
                    <p className="text-sm text-muted-foreground">Anticipation des besoins</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Polyvalente</p>
                    <p className="text-sm text-muted-foreground">Adaptation à vos besoins</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Main text */}
            <div className="md:col-span-3 space-y-6 text-muted-foreground leading-relaxed text-lg text-justify">
              <p>
                Assistante indépendante, j'accompagne les entreprises, entrepreneurs et professionnels dans la gestion de leurs tâches administratives et organisationnelles.
              </p>
              
              <p>
                Forte de <span className="text-foreground font-medium">plus de 5 années d'expérience</span> en tant qu'assistante administrative salariée et titulaire d'un <span className="text-foreground font-medium">BTS Gestion de la PME</span> ainsi que d'une <span className="text-foreground font-medium">Licence Management et Gestion des Organisations</span>, spécialité Assistant Manager, j'ai développé une réelle polyvalence et une excellente capacité d'adaptation aux besoins de chaque structure.
              </p>
              
              <p>
                Engagée, rigoureuse et proactive, j'assure la fluidité de l'information, la gestion efficace des priorités et le suivi complet des missions qui me sont confiées.
              </p>
              
              <p>
                Habituée à soutenir différents services, je sais apporter un appui fiable pour alléger votre charge de travail et optimiser votre organisation.
              </p>
              
              <p className="text-foreground font-medium pt-4">
                Aujourd'hui free-lance, je mets mon expertise au service de votre entreprise avec comme objectif : vous simplifier la vie, alléger votre charge de travail et vous aider à avancer sereinement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
