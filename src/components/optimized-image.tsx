
import { useState, useRef, useEffect } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  placeholder?: string;
  mobileOptimized?: boolean;
  sizes?: string;
}

const OptimizedImage = ({ 
  src, 
  alt, 
  className = "", 
  width, 
  height, 
  priority = false,
  placeholder = "/placeholder.svg",
  mobileOptimized = true,
  sizes = "100vw"
}: OptimizedImageProps) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef<HTMLImageElement>(null);

  // Generate WebP and optimized versions
  const getOptimizedSrc = (originalSrc: string) => {
    if (originalSrc.includes('lovable-uploads')) {
      return originalSrc;
    }
    return originalSrc;
  };

  const webpSrc = getOptimizedSrc(src).replace(/\.(jpe?g|png)$/i, '.webp');
  const optimizedSrc = getOptimizedSrc(src);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (priority || !imgRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '50px' }
    );

    observer.observe(imgRef.current);
    return () => observer.disconnect();
  }, [priority]);

  const handleError = () => {
    setHasError(true);
    setIsLoaded(true);
  };

  const handleLoad = () => {
    setIsLoaded(true);
    setHasError(false);
  };

  const shouldLoad = priority || isInView;

  return (
    <div ref={imgRef} className={`relative overflow-hidden ${className}`}>
      {shouldLoad && (
        <picture>
          <source
            srcSet={webpSrc}
            type="image/webp"
            sizes={sizes}
          />
          <img
            src={hasError ? placeholder : optimizedSrc}
            alt={alt}
            width={width}
            height={height}
            loading={priority ? "eager" : "lazy"}
            decoding="async"
            onLoad={handleLoad}
            onError={handleError}
            className={`transition-opacity duration-300 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            } w-full h-full object-cover`}
            style={{
              aspectRatio: width && height ? `${width}/${height}` : undefined,
              maxWidth: '100%',
              height: 'auto'
            }}
            sizes={sizes}
          />
        </picture>
      )}
      {!isLoaded && shouldLoad && (
        <div className="absolute inset-0 bg-gradient-to-r from-muted/30 via-muted/50 to-muted/30 animate-pulse" />
      )}
    </div>
  );
};

export default OptimizedImage;
