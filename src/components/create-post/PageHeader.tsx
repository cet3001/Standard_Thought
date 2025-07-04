import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

interface PageHeaderProps {
  isEditing: boolean;
  onBackClick: () => void;
}

export const PageHeader = ({ isEditing, onBackClick }: PageHeaderProps) => {
  return (
    <div className="mb-8">
      <Button
        variant="ghost"
        onClick={onBackClick}
        className="text-brand-black/70 dark:text-brand-cream/70 hover:text-brand-black dark:hover:text-brand-cream mb-4 font-ibm-plex-mono"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Stories
      </Button>
      <div className="text-6xl font-permanent-marker transform -rotate-2 drop-shadow-lg mb-4" style={{
        color: 'transparent',
        background: 'linear-gradient(45deg, #f4d03f, #f7dc6f, #fdeaa7, #f8e71c, #ffd700, #ffeb3b, #fff176, #f4d03f)',
        backgroundSize: '400% 400%',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        animation: 'pearlescent 3s ease-in-out infinite'
      }}>
        {isEditing ? "Edit Story" : "Create Story"}
      </div>
      <p className="text-brand-black/70 dark:text-brand-cream/70 text-lg font-ibm-plex-mono">
        {isEditing ? "Update your builder journey" : "Share your builder journey with the community"}
      </p>
    </div>
  );
};