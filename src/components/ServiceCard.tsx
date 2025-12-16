import { useState } from "react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  tasks?: string[];
  index: number;
}

const ServiceCard = ({ icon, title, description, tasks, index }: ServiceCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={`group relative bg-card rounded-2xl p-8 shadow-soft hover:shadow-card transition-all duration-500 border border-border/50 hover:border-gold/30 opacity-0 animate-fade-in-up`}
      style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" }}
    >
      {/* Icon */}
      <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors duration-300">
        <div className="text-gold">{icon}</div>
      </div>

      {/* Title */}
      <h3 className="font-serif text-xl md:text-2xl font-medium text-foreground mb-4">
        {title}
      </h3>

      {/* Description */}
      <p className="text-muted-foreground leading-relaxed mb-6">{description}</p>

      {/* Task list */}
      {tasks && tasks.length > 0 && (
        <div className="space-y-4">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-2 text-gold font-medium text-sm hover:text-gold-dark transition-colors"
          >
            <span>{isExpanded ? "Masquer les détails" : "Voir les détails"}</span>
            <svg
              className={`w-4 h-4 transition-transform duration-300 ${
                isExpanded ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          <div
            className={`overflow-hidden transition-all duration-500 ${
              isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <ul className="space-y-3 pt-4 border-t border-border">
              {tasks.map((task, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <svg
                    className="w-5 h-5 text-gold flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>{task}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Decorative corner */}
      <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden rounded-tr-2xl">
        <div className="absolute -top-10 -right-10 w-20 h-20 bg-gold/5 rotate-45 group-hover:bg-gold/10 transition-colors duration-300" />
      </div>
    </div>
  );
};

export default ServiceCard;
