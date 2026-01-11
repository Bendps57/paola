const PolitiqueConfidentialite = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-16 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-8">
          Politique de Confidentialité
        </h1>
        
        <div className="prose prose-lg max-w-none text-foreground/80 space-y-6">
          <p className="text-sm text-muted-foreground">Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}</p>
          
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">1. Collecte des informations</h2>
            <p>
              Dans le cadre de mon activité d'assistante indépendante, je suis amenée à collecter certaines informations personnelles vous concernant lorsque vous utilisez le formulaire de contact ou me contactez directement. Ces informations peuvent inclure :
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Votre nom et prénom</li>
              <li>Votre adresse email</li>
              <li>Votre numéro de téléphone</li>
              <li>Le nom de votre entreprise</li>
              <li>Toute autre information que vous choisissez de partager</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">2. Utilisation des informations</h2>
            <p>Les informations collectées sont utilisées pour :</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Répondre à vos demandes de contact</li>
              <li>Vous fournir les services demandés</li>
              <li>Gérer la relation commerciale</li>
              <li>Établir des devis et factures</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">3. Protection des données</h2>
            <p>
              Je m'engage à protéger vos données personnelles. Aucune information n'est vendue, échangée ou transmise à des tiers sans votre consentement, sauf si la loi l'exige.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">4. Conservation des données</h2>
            <p>
              Vos données personnelles sont conservées pendant la durée nécessaire à la réalisation des finalités pour lesquelles elles ont été collectées, et conformément aux obligations légales en vigueur.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">5. Vos droits</h2>
            <p>Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants :</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Droit d'accès à vos données</li>
              <li>Droit de rectification</li>
              <li>Droit à l'effacement</li>
              <li>Droit à la limitation du traitement</li>
              <li>Droit à la portabilité des données</li>
              <li>Droit d'opposition</li>
            </ul>
            <p>
              Pour exercer ces droits, vous pouvez me contacter à l'adresse email indiquée sur ce site.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">6. Cookies</h2>
            <p>
              Ce site peut utiliser des cookies techniques nécessaires à son bon fonctionnement. Aucun cookie publicitaire ou de tracking n'est utilisé.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">7. Contact</h2>
            <p>
              Pour toute question concernant cette politique de confidentialité, vous pouvez me contacter via le formulaire de contact du site ou par téléphone.
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

export default PolitiqueConfidentialite;
