
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
    <div className="p-8 relative z-10 bg-white/95 dark:bg-brand-black/95 backdrop-blur-sm rounded-3xl">
      {/* Header with playbook icon */}
      <div className="text-center mb-6">
        <div className="w-20 h-20 bg-gradient-to-br from-[#247EFF] to-[#0057FF] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
          <Book className="w-10 h-10 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-[#0A0A0A] dark:text-brand-cream mb-3">
          Unlock the Blueprint to Generational Wealth
        </h3>
        <p className="text-[#0A0A0A]/70 dark:text-brand-cream/70 text-lg leading-relaxed">
          Join 500+ hustlers who started with nothing and are now building legacy. Drop your email below and get the playbook that's helping our community level up—no fluff, just real strategies.
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
      <div className="bg-[#247EFF]/10 rounded-2xl p-4 mb-4 border border-[#247EFF]/20">
        <p className="text-sm italic text-[#0A0A0A]/80 dark:text-brand-cream/80 mb-2">
          "This playbook gave me the first steps I needed to level up."
        </p>
        <p className="text-xs font-semibold text-[#247EFF]">
          – Marcus, Atlanta
        </p>
      </div>

      {/* Trust signals */}
      <p className="text-xs text-[#0A0A0A]/60 dark:text-brand-cream/60 text-center">
        ⚡ Instant delivery • 🚫 No spam, no games—just real value • ✉️ Unsubscribe anytime
      </p>
    </div>
  );
};

export default LeadMagnetContent;
