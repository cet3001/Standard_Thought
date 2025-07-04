interface HeaderHierarchyProps {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const HeaderHierarchy = ({ level, children, className = "", style }: HeaderHierarchyProps) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  
  const baseClasses = "font-bold text-black dark:text-brand-cream";
  const sizeClasses = {
    1: "text-4xl lg:text-5xl",
    2: "text-3xl lg:text-4xl", 
    3: "text-2xl lg:text-3xl",
    4: "text-xl lg:text-2xl",
    5: "text-lg lg:text-xl",
    6: "text-base lg:text-lg"
  };
  
  return (
    <Tag className={`${baseClasses} ${sizeClasses[level]} ${className}`} style={style}>
      {children}
    </Tag>
  );
};

export default HeaderHierarchy;