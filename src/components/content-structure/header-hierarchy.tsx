
import { ReactNode } from "react";

interface HeaderHierarchyProps {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: ReactNode;
  className?: string;
  id?: string;
}

const HeaderHierarchy = ({ level, children, className = "", id }: HeaderHierarchyProps) => {
  const baseClasses = "font-bold text-[#0A0A0A] dark:text-brand-cream leading-tight";
  
  const levelClasses = {
    1: "text-4xl md:text-5xl mb-8",
    2: "text-3xl md:text-4xl mb-6",
    3: "text-2xl md:text-3xl mb-4",
    4: "text-xl md:text-2xl mb-3",
    5: "text-lg md:text-xl mb-2",
    6: "text-base md:text-lg mb-2"
  };

  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  
  return (
    <Tag 
      className={`${baseClasses} ${levelClasses[level]} ${className}`}
      id={id}
    >
      {children}
    </Tag>
  );
};

export default HeaderHierarchy;
