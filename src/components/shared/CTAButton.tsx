import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { typography, animations } from '@/styles/theme';
import { LucideIcon } from 'lucide-react';

interface CTAButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  className?: string;
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
}

export const CTAButton = ({
  children,
  onClick,
  href,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconPosition = 'right',
  className,
  disabled = false,
  loading = false,
  fullWidth = false
}: CTAButtonProps) => {
  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'px-4 py-2 text-sm';
      case 'md':
        return 'px-6 py-3 text-base';
      case 'lg':
        return 'px-8 py-4 text-lg';
      case 'xl':
        return 'px-12 py-6 text-xl';
      default:
        return 'px-6 py-3 text-base';
    }
  };

  const getVariantClasses = () => {
    switch (variant) {
      case 'primary':
        return 'bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-bold shadow-lg hover:shadow-xl';
      case 'secondary':
        return 'bg-white/10 hover:bg-white/20 text-brand-cream border border-white/20 hover:border-white/40';
      case 'outline':
        return 'border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black';
      case 'ghost':
        return 'text-brand-cream hover:bg-white/10';
      default:
        return 'bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-bold';
    }
  };

  const buttonContent = (
    <div className={cn(
      'flex items-center justify-center gap-2',
      iconPosition === 'right' ? 'flex-row' : 'flex-row-reverse'
    )}>
      {loading ? (
        <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
      ) : (
        Icon && <Icon size={size === 'xl' ? 24 : size === 'lg' ? 20 : 16} />
      )}
      <span className={cn(
        variant === 'primary' ? typography.buttonPrimary.fontWeight : typography.buttonSecondary.fontWeight,
        typography.buttonPrimary.letterSpacing
      )}>
        {children}
      </span>
    </div>
  );

  const buttonClasses = cn(
    getSizeClasses(),
    getVariantClasses(),
    animations.smooth,
    animations.buttonHover,
    'rounded-xl font-inter',
    fullWidth && 'w-full',
    disabled && 'opacity-50 cursor-not-allowed',
    className
  );

  if (href) {
    return (
      <a 
        href={href}
        className={cn(buttonClasses, 'inline-block text-center no-underline')}
        onClick={onClick}
      >
        {buttonContent}
      </a>
    );
  }

  return (
    <Button
      onClick={onClick}
      disabled={disabled || loading}
      className={buttonClasses}
      variant="ghost"
    >
      {buttonContent}
    </Button>
  );
};