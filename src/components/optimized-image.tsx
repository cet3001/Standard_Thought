
import { useState } from 'react';

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
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleError = () => {
    setHasError(true);
    setIsLoaded(true);
  };

  const handleLoad = () => {
    setIsLoaded(true);
    setHasError(false);
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <img
        src={hasError ? placeholder : src}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? "eager" : "lazy"}
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
      />
      {!isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-r from-gray-200/30 via-gray-300/30 to-gray-200/30 animate-pulse" />
      )}
    </div>
  );
};

export default OptimizedImage;
