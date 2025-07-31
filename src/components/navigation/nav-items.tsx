
import { Link, useLocation } from "react-router-dom";

interface NavItemsProps {
  className?: string;
  showButton?: boolean;
}

const NavItems = ({ className = "hidden lg:flex space-x-8", showButton = false }: NavItemsProps) => {
  const location = useLocation();

  const navItems = [
    { href: "/", label: "The Root" },
    { href: "/about", label: "About + Mindset Tools" },
    { href: "/blog", label: "Builder Stories" },
    { href: "/sales", label: "Blueprints & Offers" },
  ];

  return (
    <div className={className}>
      {navItems.map((item) => (
        <Link
          key={item.href}
          to={item.href}
          className={`transition-colors font-medium text-sm lg:text-base ${
            location.pathname === item.href
              ? "text-[#247EFF] border-b-2 border-[#247EFF] pb-1"
              : "text-[#0A0A0A] dark:text-brand-cream hover:text-[#247EFF] dark:hover:text-[#247EFF]"
          }`}
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
};

export default NavItems;
