import { cn } from '@/lib/utils';
import { OptimizedImage } from './OptimizedImage';
import { colors, animations, shadows, spacing } from '@/styles/theme';

interface ImageCardProps {
  src: string;
  alt: string;
  title?: string;
  description?: string;
  className?: string;
  imageClassName?: string;
  contentClassName?: string;
  variant?: 'default' | 'urban' | 'accent';
  aspectRatio?: 'square' | 'video' | 'portrait' | 'landscape';
  overlay?: boolean;
  hoverable?: boolean;
  loading?: 'lazy' | 'eager';
  children?: React.ReactNode;
}

export const ImageCard = ({
  src,
  alt,
  title,
  description,
  className,
  imageClassName,
  contentClassName,
  variant = 'default',
  aspectRatio = 'landscape',
  overlay = false,
  hoverable = true,
  loading = 'lazy',
  children
}: ImageCardProps) => {
  const getAspectRatioClasses = () => {
    switch (aspectRatio) {
      case 'square':
        return 'aspect-square';
      case 'video':
        return 'aspect-video';
      case 'portrait':
        return 'aspect-[3/4]';
      case 'landscape':
        return 'aspect-[4/3]';
      default:
        return 'aspect-[4/3]';
    }
  };

  const getVariantClasses = () => {
    switch (variant) {
      case 'urban':
        return cn(
          colors.gradients.card,
          colors.borders.default,
          'border'
        );
      case 'accent':
        return cn(
          colors.gradients.card,
          colors.borders.accent,
          'border'
        );
      default:
        return cn(
          'bg-white dark:bg-gray-900',
          colors.borders.default,
          'border'
        );
    }
  };

  return (
    <div className={cn(
      'rounded-xl overflow-hidden',
      getVariantClasses(),
      shadows.card,
      hoverable && cn(animations.smooth, animations.cardHover),
      className
    )}>
      {/* Image container */}
      <div className={cn(
        'relative overflow-hidden',
        getAspectRatioClasses()
      )}>
        <OptimizedImage
          src={src}
          alt={alt}
          loading={loading}
          className={cn('w-full h-full object-cover', imageClassName)}
        />
        
        {/* Overlay */}
        {overlay && (
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        )}
        
        {/* Overlay content */}
        {(title || description) && overlay && (
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            {title && (
              <h3 className="text-xl font-bold mb-2">{title}</h3>
            )}
            {description && (
              <p className="text-sm text-white/90">{description}</p>
            )}
          </div>
        )}
      </div>
      
      {/* Content section (when not using overlay) */}
      {(title || description || children) && !overlay && (
        <div className={cn(spacing.cardPadding, contentClassName)}>
          {title && (
            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
              {title}
            </h3>
          )}
          {description && (
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
              {description}
            </p>
          )}
          {children}
        </div>
      )}
    </div>
  );
};