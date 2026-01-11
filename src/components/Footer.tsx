import { Heart } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-primary-foreground py-16 relative overflow-hidden">
      {/* Decorative element */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <div className="mb-8">
            <img
              src={logo}
              alt="Paola Perruccio"
              className="h-24 md:h-28 w-auto object-contain rounded-lg"
            />
          </div>

          {/* Tagline */}
          <p className="text-primary-foreground/70 max-w-md mb-8 font-light">
            Votre partenaire de confiance pour une gestion sereine et une organisation optimisée.
          </p>

          {/* Social links */}
          <div className="flex items-center gap-6 mb-12">
            <a
              href="https://www.linkedin.com/in/paola-perruccio"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-gold flex items-center justify-center transition-all duration-300 group"
              aria-label="LinkedIn"
            >
              <svg
                className="w-5 h-5 text-primary-foreground group-hover:text-foreground transition-colors"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>

            <a
              href="tel:0760841973"
              className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-gold flex items-center justify-center transition-all duration-300 group"
              aria-label="Téléphone"
            >
              <svg
                className="w-5 h-5 text-primary-foreground group-hover:text-foreground transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </a>
          </div>

          {/* Separator */}
          <div className="w-full max-w-xs h-px bg-primary-foreground/20 mb-8" />

          {/* Legal links */}
          <div className="flex flex-wrap justify-center gap-4 mb-6 text-sm">
            <a
              href="/mentions-legales"
              className="text-primary-foreground/60 hover:text-gold transition-colors"
            >
              Mentions légales
            </a>
            <span className="text-primary-foreground/30">|</span>
            <a
              href="/politique-confidentialite"
              className="text-primary-foreground/60 hover:text-gold transition-colors"
            >
              Politique de confidentialité
            </a>
            <span className="text-primary-foreground/30">|</span>
            <a
              href="/cgv"
              className="text-primary-foreground/60 hover:text-gold transition-colors"
            >
              CGV
            </a>
          </div>

          {/* Copyright */}
          <p className="text-primary-foreground/50 text-sm mb-4">
            © {currentYear} Paola Perruccio. Tous droits réservés.
          </p>

          {/* Created by */}
          <a
            href="https://www.elimyt.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-primary-foreground/40 text-xs hover:text-gold transition-colors"
          >
            Créé avec <Heart className="w-3 h-3 text-red-500 fill-red-500" /> par eLimyt
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
