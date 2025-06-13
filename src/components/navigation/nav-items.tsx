
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Start Here", path: "/" },
  { label: "Builder Stories", path: "/blog" },
  { label: "Mindset Tools", path: "/about" },
  { label: "Success Strategies", path: "/sales" },
];

interface NavItemsProps {
  onItemClick?: () => void;
  className?: string;
}

const NavItems = ({ onItemClick, className }: NavItemsProps) => {
  const location = useLocation();

  const scrollToNewsletter = () => {
    const newsletterSection = document.querySelector('[data-section="newsletter"]');
    if (newsletterSection) {
      newsletterSection.scrollIntoView({ behavior: 'smooth' });
    }
    if (onItemClick) onItemClick();
  };

  return (
    <div className={className}>
      {navItems.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          onClick={onItemClick}
          className={cn(
            "text-sm font-medium transition-all duration-300 hover:text-[#247EFF] relative group px-2 py-1",
            location.pathname === item.path
              ? "text-[#247EFF]"
              : "text-[#0A0A0A] dark:text-brand-cream"
          )}
        >
          {item.label}
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#247EFF] transition-all duration-300 group-hover:w-full"></span>
        </Link>
      ))}
      <button
        onClick={scrollToNewsletter}
        className="bg-[#247EFF] hover:bg-[#0057FF] text-white font-semibold px-6 py-2 rounded-xl text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#247EFF]/30 ml-4"
      >
        Get Free Playbook
      </button>
    </div>
  );
};

export default NavItems;
