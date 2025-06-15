
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

interface MobileMenuProps {
  isOpen?: boolean;
  onToggle?: () => void;
  onClose?: () => void;
}

const MobileMenu = ({ isOpen, onToggle, onClose }: MobileMenuProps) => {
  const navItems = [
    { href: "/", label: "Start Here" },
    { href: "/about", label: "Mindset Tools" },
    { href: "/blog", label: "Builder Stories" },
    { href: "/resources", label: "Success Strategies" },
  ];

  return (
    <Sheet>
      <SheetTrigger asChild className="lg:hidden">
        <Button variant="ghost" size="icon">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <nav className="flex flex-col space-y-4 mt-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="text-lg font-medium text-[#0A0A0A] dark:text-brand-cream hover:text-[#247EFF] dark:hover:text-[#247EFF] transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
