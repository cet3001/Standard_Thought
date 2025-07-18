
import ImageOptimizer from './performance/image-optimizer';

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
  return (
    <ImageOptimizer
      src={src}
      alt={alt}
      className={className}
      width={width}
      height={height}
      priority={priority}
      sizes={mobileOptimized ? "(max-width: 768px) 100vw, 50vw" : "100vw"}
    />
  );
};

export default OptimizedImage;
