import ServiceCard from "./ServiceCard";

const ServicesSection = () => {
  const services = [
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: "Gestion Administrative",
      description: "Besoin de gagner du temps et d'alléger votre charge administrative ? J'assure pour vous l'ensemble des tâches essentielles à la bonne organisation de votre activité.",
      tasks: [
        "La gestion complète de votre agenda : rendez-vous, réunions, planification",
        "Le suivi de vos e-mails et courriers : tri, réponses, organisation",
        "L'organisation de vos documents et bases de données : classement, mise à jour, structuration",
        "La rédaction et la mise en forme de vos contenus : courriers, rapports, présentations",
        "Le suivi de vos dossiers et tâches quotidiennes pour garantir une gestion fluide"
      ]
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      ),
      title: "Gestion Commerciale",
      description: "Vous souhaitez déléguer pour gagner du temps et fluidifier votre organisation ? Je vous apporte une assistance complète en gestion commerciale afin de centraliser vos opérations et d'améliorer votre organisation.",
      tasks: [
        "La gestion de vos clients : suivi, relances, coordination",
        "La gestion de vos fournisseurs : demandes, commandes, organisation",
        "L'organisation de vos événements : préparation, logistique, coordination",
        "Et toutes les tâches administratives qui vous éloignent de l'essentiel"
      ]
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      title: "Communication",
      description: "Vous souhaitez renforcer votre visibilité et votre impact en ligne ? Je prends en charge la gestion de vos réseaux sociaux et la création de supports percutants, afin de vous libérer des contraintes opérationnelles. Que vous vouliez développer votre audience ou attirer de nouveaux clients, je vous accompagne pour concrétiser vos projets rapidement et efficacement."
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
        </svg>
      ),
      title: "Demande Personnalisée",
      description: "Vous avez besoin d'un soutien flexible et sur-mesure ? Je prends en charge tout type de missions administratives ou opérationnelles, adaptées à vos besoins : suivi de projets, organisation d'événements, gestion quotidienne ou tâches ponctuelles. Ma polyvalence vous permet de déléguer sereinement, en gardant la certitude que chaque détail est traité avec soin."
    }
  ];

  return (
    <section id="services" className="py-24 md:py-32 bg-secondary/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute top-40 -right-20 w-80 h-80 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-40 -left-20 w-80 h-80 bg-gold/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative">
        {/* Section header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="inline-block text-gold font-medium tracking-[0.2em] text-sm uppercase mb-4">
            Expertise
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-6">
            Comment je peux vous aider
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-justify">
            Des services sur mesure pour vous permettre de vous concentrer sur l'essentiel : votre cœur de métier.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              tasks={service.tasks}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
