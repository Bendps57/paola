const MentionsLegales = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-16 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-8">
          Mentions Légales
        </h1>
        
        <div className="prose prose-lg max-w-none text-foreground/80 space-y-6">
          <p className="text-sm text-muted-foreground">Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}</p>
          
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">1. Éditeur du site</h2>
            <p>
              Le présent site est édité par :
            </p>
            <ul className="list-none space-y-2">
              <li><strong>Nom :</strong> Paola Perruccio</li>
              <li><strong>Nom commercial :</strong> PP Assistante indépendante</li>
              <li><strong>Statut :</strong> Entrepreneur individuel / Micro-entreprise</li>
              <li><strong>Activité :</strong> Assistante indépendante</li>
              <li><strong>SIRET :</strong> 999 248 172 00010</li>
              <li><strong>SIREN :</strong> 999 248 172</li>
              <li><strong>Adresse :</strong> 1 Place de Narpange, 57535 Marange-Silvange, France</li>
              <li><strong>Téléphone :</strong> 06 19 36 80 16</li>
              <li><strong>Email :</strong> paola.perruccio.pro@gmail.com</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">2. Hébergeur du site</h2>
            <ul className="list-none space-y-2">
              <li><strong>Nom :</strong> Lovable</li>
              <li><strong>Site web :</strong> https://lovable.dev</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">3. Propriété intellectuelle</h2>
            <p>
              L'ensemble des contenus présents sur ce site (textes, images, graphismes, logo, icônes, etc.) sont la propriété exclusive de Paola Perruccio, sauf mention contraire. Toute reproduction, distribution, modification, adaptation, retransmission ou publication de ces éléments est strictement interdite sans l'accord écrit préalable de Paola Perruccio.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">4. Responsabilité</h2>
            <p>
              Les informations fournies sur ce site le sont à titre informatif. Paola Perruccio s'efforce de fournir des informations aussi précises que possible. Toutefois, elle ne pourra être tenue responsable des omissions, des inexactitudes et des carences dans la mise à jour.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">5. Liens hypertextes</h2>
            <p>
              Ce site peut contenir des liens vers d'autres sites. Paola Perruccio n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">6. Protection des données personnelles</h2>
            <p>
              Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification et de suppression des données vous concernant. Pour plus d'informations, consultez notre <a href="/politique-confidentialite" className="text-gold hover:underline">Politique de Confidentialité</a>.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">7. Droit applicable</h2>
            <p>
              Les présentes mentions légales sont régies par le droit français. En cas de litige, les tribunaux français seront seuls compétents.
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

export default MentionsLegales;
