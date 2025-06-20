
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Download, Mail } from "lucide-react";

interface LeadMagnetFormProps {
  email: string;
  setEmail: (email: string) => void;
  name: string;
  setName: (name: string) => void;
  isLoading: boolean;
  onSubmit: (e: React.FormEvent) => void;
}

const LeadMagnetForm = ({ 
  email, 
  setEmail, 
  name, 
  setName, 
  isLoading, 
  onSubmit 
}: LeadMagnetFormProps) => {
  return (
    <form onSubmit={onSubmit} className="space-y-4 mb-6">
      <Input
        type="text"
        placeholder="First name (optional)"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full h-12 border-[#247EFF]/20 focus:border-[#247EFF] rounded-xl bg-brand-cream/30 dark:bg-brand-black/30"
      />
      <div className="relative">
        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#0A0A0A]/60 dark:text-brand-cream/60 h-5 w-5" />
        <Input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full h-12 pl-12 border-[#247EFF]/20 focus:border-[#247EFF] rounded-xl bg-brand-cream/30 dark:bg-brand-black/30"
          disabled={isLoading}
        />
      </div>
      <Button 
        type="submit" 
        className="w-full h-12 bg-gradient-to-r from-[#247EFF] to-[#0057FF] hover:from-[#0057FF] hover:to-[#247EFF] text-white font-bold rounded-xl transition-all duration-300 disabled:opacity-70 shadow-lg hover:shadow-xl"
        disabled={isLoading}
      >
        {isLoading ? (
          <div className="flex items-center">
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
            Sending Your Playbook...
          </div>
        ) : (
          <>
            <Download className="w-5 h-5 mr-2" />
            Unlock My Free Playbook
          </>
        )}
      </Button>
    </form>
  );
};

export default LeadMagnetForm;
