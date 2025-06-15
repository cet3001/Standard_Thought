
import { Link, useLocation } from "react-router-dom";

const NavItems = () => {
  const location = useLocation();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/blog", label: "Stories" },
    { href: "/resources", label: "Resources" },
  ];

  return (
    <div className="hidden lg:flex space-x-8">
      {navItems.map((item) => (
        <Link
          key={item.href}
          to={item.href}
          className={`transition-colors font-medium ${
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
