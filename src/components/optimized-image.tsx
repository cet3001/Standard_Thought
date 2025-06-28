
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
}

const OptimizedImage = ({ 
  src, 
  alt, 
  className = "", 
  width, 
  height, 
  priority = false,
  placeholder = "/placeholder.svg",
  mobileOptimized = true
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const [imgSrc, setImgSrc] = useState(priority ? src : placeholder);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (priority) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { 
        threshold: 0.1,
        rootMargin: mobileOptimized && window.innerWidth < 768 ? '100px' : '50px'
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority, mobileOptimized]);

  useEffect(() => {
    if (isInView && imgSrc === placeholder) {
      // Generate responsive image src for mobile
      let optimizedSrc = src;
      
      if (mobileOptimized && window.innerWidth < 768) {
        // For mobile devices, we could add URL parameters for smaller images
        // This is a placeholder for image optimization service integration
        optimizedSrc = src;
      }
      
      setImgSrc(optimizedSrc);
    }
  }, [isInView, src, imgSrc, placeholder, mobileOptimized]);

  const handleLoad = () => {
    setIsLoaded(true);
    setHasError(false);
  };

  const handleError = () => {
    setHasError(true);
    setImgSrc(placeholder);
    setIsLoaded(true);
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <img
        ref={imgRef}
        src={imgSrc}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        onLoad={handleLoad}
        onError={handleError}
        className={`transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        } w-full h-full object-cover gpu-accelerated`}
        style={{
          aspectRatio: width && height ? `${width}/${height}` : undefined,
          imageRendering: mobileOptimized ? '-webkit-optimize-contrast' : undefined,
          maxWidth: '100%',
          height: 'auto'
        }}
        sizes={mobileOptimized ? "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" : undefined}
      />
      {(!isLoaded || hasError) && (
        <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 loading-skeleton" />
      )}
    </div>
  );
};

export default OptimizedImage;
