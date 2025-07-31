import { cn } from '@/lib/utils';
import { typography } from '@/styles/theme';

interface AccentTextProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'pearlescent' | 'highlight' | 'glow';
  as?: 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export const AccentText = ({ 
  children, 
  className, 
  variant = 'pearlescent',
  as: Component = 'span' 
}: AccentTextProps) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'pearlescent':
        return 'pearlescent-text font-bold';
      case 'highlight':
        return 'bg-yellow-200/20 px-2 py-1 rounded font-semibold text-yellow-900 dark:text-yellow-100';
      case 'glow':
        return 'text-yellow-300 font-bold filter drop-shadow-lg glow-text';
      default:
        return typography.accent.className;
    }
  };

  return (
    <Component className={cn(getVariantClasses(), className)}>
      {children}
    </Component>
  );
};