import { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
}

const SectionWrapper = ({ children, className = "" }: SectionWrapperProps) => {
  return (
    <section className={`relative ${className}`}>
      {/* Full-bleed radial gradient overlay */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle, rgba(10,10,10,0) 0%, rgba(10,10,10,0.85) 100%)`
        }}
      />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;