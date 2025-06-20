
import { Book } from "lucide-react";
import LeadMagnetForm from "./lead-magnet-form";

interface LeadMagnetContentProps {
  email: string;
  setEmail: (email: string) => void;
  name: string;
  setName: (name: string) => void;
  isLoading: boolean;
  onSubmit: (e: React.FormEvent) => void;
}

const LeadMagnetContent = ({ 
  email, 
  setEmail, 
  name, 
  setName, 
  isLoading, 
  onSubmit 
}: LeadMagnetContentProps) => {
  return (
    <div className="relative z-10 bg-white/95 dark:bg-brand-black/95 backdrop-blur-sm rounded-2xl">
      {/* Header with playbook icon */}
      <div className="text-center mb-6">
        <div className="w-16 h-16 bg-gradient-to-br from-[#247EFF] to-[#0057FF] rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg">
          <Book className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-xl font-bold text-[#0A0A0A] dark:text-brand-cream mb-2">
          Unlock the Blueprint to Generational Wealth
        </h3>
        <p className="text-[#0A0A0A]/70 dark:text-brand-cream/70 text-sm leading-relaxed">
          Join 500+ hustlers building legacy from nothing. Get the playbook with real strategies—no fluff, just game.
        </p>
      </div>

      {/* Form */}
      <LeadMagnetForm
        email={email}
        setEmail={setEmail}
        name={name}
        setName={setName}
        isLoading={isLoading}
        onSubmit={onSubmit}
      />

      {/* Testimonial */}
      <div className="bg-[#247EFF]/10 rounded-xl p-3 mb-3 border border-[#247EFF]/20">
        <p className="text-xs italic text-[#0A0A0A]/80 dark:text-brand-cream/80 mb-1">
          "This playbook gave me the first steps I needed to level up."
        </p>
        <p className="text-xs font-semibold text-[#247EFF]">
          – Marcus, Atlanta
        </p>
      </div>

      {/* Trust signals */}
      <p className="text-xs text-[#0A0A0A]/60 dark:text-brand-cream/60 text-center">
        ⚡ Instant delivery • 🚫 No spam • ✉️ Unsubscribe anytime
      </p>
    </div>
  );
};

export default LeadMagnetContent;
