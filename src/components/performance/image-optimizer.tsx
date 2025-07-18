import { useState, useEffect, useRef } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  sizes?: string;
  quality?: number;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
}

const ImageOptimizer = ({
  src,
  alt,
  className = '',
  width,
  height,
  priority = false,
  sizes = '100vw',
  quality = 85,
  placeholder = 'empty',
  blurDataURL
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState<string>('');
  const imgRef = useRef<HTMLImageElement>(null);

  // Generate optimized source URLs
  const generateSources = (originalSrc: string) => {
    // Check if this is a Lovable upload or external image
    if (originalSrc.includes('lovable-uploads') || originalSrc.startsWith('http')) {
      // For production, you'd use a service like Cloudinary or ImageKit
      // For now, return the original with format hints for browser
      return {
        webp: originalSrc,
        original: originalSrc,
        avif: originalSrc // Would be converted in production
      };
    }
    
    return {
      webp: originalSrc,
      original: originalSrc,
      avif: originalSrc
    };
  };

  const sources = generateSources(src);

  useEffect(() => {
    if (priority) {
      // Preload critical images immediately
      preloadImage(sources.webp);
    } else {
      // Use Intersection Observer for lazy loading
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              preloadImage(sources.webp);
              observer.unobserve(entry.target);
            }
          });
        },
        {
          rootMargin: '50px 0px', // Start loading 50px before visible
          threshold: 0.1
        }
      );

      if (imgRef.current) {
        observer.observe(imgRef.current);
      }

      return () => {
        if (imgRef.current) {
          observer.unobserve(imgRef.current);
        }
      };
    }
  }, [sources.webp, priority]);

  const preloadImage = (imageSrc: string) => {
    const img = new Image();
    img.onload = () => {
      setCurrentSrc(imageSrc);
      setIsLoaded(true);
    };
    img.onerror = () => {
      setError(true);
      // Fallback to original format
      if (imageSrc !== sources.original) {
        preloadImage(sources.original);
      }
    };
    img.src = imageSrc;
  };

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setError(true);
    // Try fallback formats
    if (currentSrc !== sources.original) {
      setCurrentSrc(sources.original);
    }
  };

  // Create placeholder blur effect
  const getPlaceholderStyle = () => {
    if (placeholder === 'blur' && blurDataURL) {
      return {
        backgroundImage: `url(${blurDataURL})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        filter: 'blur(20px)',
        transition: 'filter 0.3s ease'
      };
    }
    return {};
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Placeholder/Loading state */}
      {!isLoaded && (
        <div 
          className="absolute inset-0 bg-gradient-to-r from-muted/30 via-muted/50 to-muted/30 animate-pulse"
          style={getPlaceholderStyle()}
        />
      )}
      
      {/* Main image using picture element for format support */}
      <picture>
        {/* AVIF for modern browsers - best compression */}
        <source
          srcSet={currentSrc}
          type="image/avif"
          sizes={sizes}
        />
        
        {/* WebP for most modern browsers */}
        <source
          srcSet={currentSrc}
          type="image/webp"
          sizes={sizes}
        />
        
        {/* Fallback to original format */}
        <img
          ref={imgRef}
          src={priority ? currentSrc : undefined}
          alt={alt}
          width={width}
          height={height}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          onLoad={handleLoad}
          onError={handleError}
          className={`
            transition-opacity duration-300 
            ${isLoaded ? 'opacity-100' : 'opacity-0'} 
            w-full h-full object-cover
          `}
          sizes={sizes}
          style={{
            aspectRatio: width && height ? `${width}/${height}` : undefined,
            maxWidth: '100%',
            height: 'auto'
          }}
        />
      </picture>
      
      {/* Error state */}
      {error && !isLoaded && (
        <div className="absolute inset-0 bg-muted/20 flex items-center justify-center">
          <div className="text-muted-foreground text-sm">
            Image failed to load
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageOptimizer;