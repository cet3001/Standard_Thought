
import { Link, useLocation } from "react-router-dom";

interface NavItemsProps {
  className?: string;
  showButton?: boolean;
}

const NavItems = ({ className = "hidden lg:flex space-x-8", showButton = false }: NavItemsProps) => {
  const location = useLocation();

  const navItems = [
    { href: "/", label: "Homebase", tagline: "The Movement Begins Here" },
    { href: "/about", label: "About + Mindset Tools", tagline: "Our Story & Your Growth Tools" },
    { href: "/blog", label: "Builder Stories", tagline: "Real People. Real Hustle. Real Results." },
    { href: "/sales", label: "Blueprints & Offers", tagline: "Game Plans, Guides & Opportunities" },
  ];

  return (
    <div className={className}>
      {navItems.map((item) => (
        <Link
          key={item.href}
          to={item.href}
          className={`group flex flex-col transition-colors ${
            location.pathname === item.href
              ? "text-[#247EFF] border-b-2 border-[#247EFF] pb-1"
              : "text-[#0A0A0A] dark:text-brand-cream hover:text-[#247EFF] dark:hover:text-[#247EFF]"
          }`}
        >
          <span className="font-bold text-sm xl:text-base">{item.label}</span>
          <span className="text-xs opacity-70 font-normal">{item.tagline}</span>
        </Link>
      ))}
    </div>
  );
};

export default NavItems;
