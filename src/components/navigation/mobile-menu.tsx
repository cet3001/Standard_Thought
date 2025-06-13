
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
  console.log('MobileMenu render - isOpen:', isOpen);
  
  return (
    <>
      {/* Mobile Menu Button - shows everywhere, hides ≥ 1024px */}
      <div className="flex lg:hidden">
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => {
              console.log('Mobile menu button clicked, current isOpen:', isOpen);
              onToggle();
            }}
            className="hover:bg-[#247EFF]/10 text-[#0A0A0A] dark:text-brand-cream transition-all duration-300 flex-shrink-0 z-[9999]"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu Content - Show when open, hides ≥ 1024px */}
      {isOpen && (
        <div className="flex lg:hidden fixed inset-x-0 top-[80px] bg-brand-cream/98 dark:bg-brand-black/98 backdrop-blur-md border-t border-[#247EFF]/20 shadow-2xl z-[9999] min-h-[50vh]">
          <div className="container mx-auto px-4 sm:px-6 py-8 w-full">
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
