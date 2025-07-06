import { useState, useEffect } from 'react';

interface OptimizedHeroImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
}

const OptimizedHeroImage = ({
  src,
  alt,
  className = '',
  priority = false,
  sizes = '100vw'
}: OptimizedHeroImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  // Generate WebP and fallback URLs
  const getOptimizedUrl = (originalSrc: string, format: string = 'webp') => {
    if (originalSrc.includes('lovable-uploads')) {
      // For Lovable uploads, we'll use the original for now
      // In production, you'd want to use a service like Cloudinary or ImageKit
      return originalSrc;
    }
    return originalSrc;
  };

  const webpSrc = getOptimizedUrl(src, 'webp');
  const originalSrc = src;

  useEffect(() => {
    // Preload critical images
    if (priority) {
      const img = new Image();
      img.src = webpSrc;
      img.onload = () => setIsLoaded(true);
      img.onerror = () => {
        setError(true);
        const fallbackImg = new Image();
        fallbackImg.src = originalSrc;
        fallbackImg.onload = () => setIsLoaded(true);
      };
    }
  }, [webpSrc, originalSrc, priority]);

  return (
    <picture className={className}>
      {/* WebP version for modern browsers */}
      <source
        srcSet={webpSrc}
        type="image/webp"
        sizes={sizes}
      />
      
      {/* Fallback for older browsers */}
      <img
        src={originalSrc}
        alt={alt}
        className={`transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'} ${className}`}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        onLoad={() => setIsLoaded(true)}
        onError={() => setError(true)}
        sizes={sizes}
        style={{
          maxWidth: '100%',
          height: 'auto',
          objectFit: 'cover',
          objectPosition: 'center'
        }}
      />
    </picture>
  );
};

export default OptimizedHeroImage;