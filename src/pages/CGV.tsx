const CGV = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-16 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-8">
          Conditions Générales de Vente
        </h1>
        
        <div className="prose prose-lg max-w-none text-foreground/80 space-y-6">
          <p className="text-sm text-muted-foreground">Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}</p>
          
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">1. Objet</h2>
            <p>
              Les présentes Conditions Générales de Vente (CGV) régissent les relations contractuelles entre Paola Perruccio, assistante indépendante, et ses clients, pour toute prestation de services d'assistance administrative et organisationnelle.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">2. Services proposés</h2>
            <p>Les prestations proposées incluent notamment :</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Gestion administrative (courriers, emails, classement, archivage)</li>
              <li>Organisation et planification (agendas, réunions, déplacements)</li>
              <li>Saisie et mise en forme de documents</li>
              <li>Gestion de la relation client</li>
              <li>Assistance à la gestion de projets</li>
              <li>Toute autre tâche administrative définie conjointement</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">3. Devis et commandes</h2>
            <p>
              Chaque prestation fait l'objet d'un devis préalable détaillant la nature des services, les délais et les tarifs. Le devis est valable 30 jours à compter de son émission. La commande est considérée comme ferme après acceptation écrite du devis par le client.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">4. Tarifs</h2>
            <p>
              Les tarifs sont exprimés en euros et peuvent être établis à l'heure, au forfait ou au projet selon la nature de la prestation. Les prix sont nets de TVA (TVA non applicable, article 293 B du CGI, si applicable). Les frais annexes (déplacements, fournitures, etc.) sont facturés en sus sur justificatifs.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">5. Modalités de paiement</h2>
            <p>
              Les factures sont payables à réception ou selon les conditions définies dans le devis. Le règlement peut s'effectuer par virement bancaire ou par tout autre moyen convenu. En cas de retard de paiement, des pénalités de retard seront appliquées au taux légal en vigueur.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">6. Exécution des prestations</h2>
            <p>
              Je m'engage à exécuter les prestations avec diligence et professionnalisme. Les délais indiqués sont donnés à titre indicatif. Toute modification de la mission par le client pourra entraîner une révision des délais et des tarifs.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">7. Confidentialité</h2>
            <p>
              Je m'engage à respecter la confidentialité de toutes les informations communiquées par le client dans le cadre de la prestation. Cette obligation de confidentialité perdure après la fin de la mission.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">8. Responsabilité</h2>
            <p>
              Ma responsabilité est limitée aux dommages directs causés par une faute prouvée dans l'exécution de mes services. Je ne saurais être tenue responsable des dommages indirects ou des pertes de données résultant de l'utilisation des documents produits.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">9. Résiliation</h2>
            <p>
              Chaque partie peut mettre fin à la collaboration moyennant un préavis raisonnable. Les prestations réalisées jusqu'à la date de résiliation restent dues.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">10. Litiges</h2>
            <p>
              En cas de litige, les parties s'engagent à rechercher une solution amiable. À défaut, les tribunaux compétents seront ceux du ressort du domicile du prestataire.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">11. Contact</h2>
            <p>
              Pour toute question concernant ces CGV, vous pouvez me contacter via le formulaire de contact du site ou par téléphone.
            </p>
          </section>
        </div>

        <div className="mt-12">
          <a href="/" className="text-gold hover:text-gold/80 transition-colors">
            ← Retour à l'accueil
          </a>
        </div>
      </div>
    </div>
  );
};

export default CGV;
