
import { ReactNode } from "react";

interface HeaderHierarchyProps {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: ReactNode;
  className?: string;
  id?: string;
}

const HeaderHierarchy = ({ level, children, className = "", id }: HeaderHierarchyProps) => {
  const baseClasses = "font-bold leading-tight";
  
  // Use yellow pearlescent color instead of brand-cream/black
  const colorClasses = "text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-400 dark:from-yellow-400 dark:via-yellow-300 dark:to-yellow-200";
  
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
      className={`${baseClasses} ${colorClasses} ${levelClasses[level]} ${className}`}
      id={id}
      style={{
        background: 'linear-gradient(45deg, #f4d03f, #f7dc6f, #fdeaa7, #f8e71c, #ffd700, #ffeb3b, #fff176, #f4d03f)',
        backgroundSize: '400% 400%',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        color: 'transparent',
        animation: 'pearlescent 3s ease-in-out infinite'
      }}
    >
      {children}
      <style>{`
        @keyframes pearlescent {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </Tag>
  );
};

export default HeaderHierarchy;
