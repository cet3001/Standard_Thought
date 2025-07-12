import { ReactNode } from 'react';
import { useHeaderHeight } from '@/hooks/use-header-height';

interface HeroSectionProps {
  children: ReactNode;
  className?: string;
}

const HeroSection = ({ children, className = '' }: HeroSectionProps) => {
  const headerHeight = useHeaderHeight();

  return (
    <section 
      className={`${className}`}
      style={{ 
        marginTop: `${headerHeight}px`,
        minHeight: `calc(100vh - ${headerHeight}px)`
      }}
    >
      {children}
    </section>
  );
};

export default HeroSection;