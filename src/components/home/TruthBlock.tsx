import { cn } from '@/lib/utils';
import { AccentText } from '@/components/shared/AccentText';
import { typography, spacing, colors, animations } from '@/styles/theme';

interface TruthBlockProps {
  truth: string;
  context?: string;
  className?: string;
  isVisible?: boolean;
}

export const TruthBlock = ({ 
  truth, 
  context, 
  className, 
  isVisible = true 
}: TruthBlockProps) => {
  return (
    <div className={cn(
      spacing.sectionPadding,
      animations.fadeIn,
      isVisible && animations.fadeInVisible,
      className
    )}>
      <div className={cn(
        colors.gradients.card,
        colors.borders.accent,
        'border rounded-xl',
        spacing.cardPadding,
        animations.smooth,
        'hover:scale-105'
      )}>
        <blockquote className={cn(
          getTypographyClasses('h3'),
          'text-center'
        )}>
          <AccentText variant="pearlescent">"</AccentText>
          {truth}
          <AccentText variant="pearlescent">"</AccentText>
        </blockquote>
        
        {context && (
          <p className={cn(
            getTypographyClasses('bodySmall'),
            'mt-4 text-center opacity-80'
          )}>
            {context}
          </p>
        )}
      </div>
    </div>
  );
};

// Helper to get typography classes
const getTypographyClasses = (variant: keyof typeof typography): string => {
  const style = typography[variant];
  return Object.values(style).join(' ');
};

export default TruthBlock;