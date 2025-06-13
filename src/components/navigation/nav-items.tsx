
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

interface NavItemsProps {
  className?: string;
  onItemClick?: () => void;
  showButton?: boolean;
}

const NavItems = ({ className = "", onItemClick, showButton = false }: NavItemsProps) => {
  const location = useLocation();

  const scrollToNewsletter = () => {
    const newsletterSection = document.querySelector('[data-section="newsletter"]');
    if (newsletterSection) {
      newsletterSection.scrollIntoView({ behavior: 'smooth' });
    }
    if (onItemClick) {
      onItemClick();
    }
  };

  const handleNavClick = () => {
    if (onItemClick) {
      onItemClick();
    }
  };

  const navItems = [
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Sales", href: "/sales" }
  ];

  return (
    <div className={className}>
      {navItems.map((item) => (
        <Link
          key={item.label}
          to={item.href}
          onClick={handleNavClick}
          className="text-[#0A0A0A] dark:text-brand-cream hover:text-[#247EFF] dark:hover:text-[#247EFF] transition-colors duration-300 font-medium"
        >
          {item.label}
        </Link>
      ))}
      
      {showButton && (
        <Button 
          onClick={scrollToNewsletter}
          className="bg-[#247EFF] hover:bg-[#0057FF] hover:shadow-lg hover:shadow-[#247EFF]/30 text-white font-semibold px-6 py-2 rounded-2xl transition-all duration-300 hover:scale-105"
        >
          Get Free Playbook
        </Button>
      )}
    </div>
  );
};

export default NavItems;
