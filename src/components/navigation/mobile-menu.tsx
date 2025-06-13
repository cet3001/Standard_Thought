
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import NavItems from "./nav-items";
import ThemeToggle from "./theme-toggle";
import AuthSection from "./auth-section";

interface MobileMenuProps {
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onToggle, onClose }: MobileMenuProps) => {
  return (
    <>
      {/* Mobile Menu Button - Show on tablet and phone */}
      <div className="lg:hidden flex items-center space-x-4">
        <ThemeToggle />
        <Button
          variant="ghost"
          size="icon"
          onClick={onToggle}
          className="hover:bg-[#247EFF]/10 text-[#0A0A0A] dark:text-brand-cream transition-all duration-300 flex-shrink-0"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </Button>
      </div>

      {/* Mobile Menu Content */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-brand-cream/95 dark:bg-brand-black/95 backdrop-blur-sm border-t border-[#247EFF]/20 shadow-lg z-50">
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col space-y-8">
              <NavItems
                onItemClick={onClose}
                className="flex flex-col space-y-6"
              />
              <div className="pt-6 border-t border-[#247EFF]/20">
                <AuthSection onAction={onClose} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileMenu;
