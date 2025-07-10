import { useState, useEffect } from "react";
import { useBuilderStories } from "@/hooks/use-builder-stories";
import { Quote } from "lucide-react";
import { SectionOverlayBox } from "@/components/layout";

interface BlogTestimonialsProps {
  isVisible: boolean;
}

const BlogTestimonials = ({ isVisible }: BlogTestimonialsProps) => {
  const { stories: testimonials, loading } = useBuilderStories(15);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Rotate testimonials every 4 seconds
  useEffect(() => {
    if (testimonials.length > 0) {
      const interval = setInterval(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      }, 4000);
      
      return () => clearInterval(interval);
    }
  }, [testimonials.length]);

  if (loading || testimonials.length === 0) {
    return null;
  }

  return (
    <SectionOverlayBox className={`mb-24 transition-all duration-700 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <div className="text-center mb-12">
        <h3 className="text-4xl md:text-5xl font-black text-brand-black dark:text-brand-cream font-ibm-plex-mono mb-6">
          REAL{" "}
          <span className="font-permanent-marker transform rotate-1" style={{
            color: 'transparent',
            background: 'linear-gradient(45deg, #f4d03f, #f7dc6f, #fdeaa7, #f8e71c, #ffd700, #ffeb3b, #fff176, #f4d03f)',
            backgroundSize: '400% 400%',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            animation: 'pearlescent 3s ease-in-out infinite'
          }}>
            BUILDERS
          </span>
        </h3>
      </div>
      
      <div className="relative h-48 flex items-center justify-center">
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className={`absolute inset-0 transition-all duration-1000 ${
              index === currentTestimonial 
                ? 'opacity-100 translate-x-0' 
                : index < currentTestimonial 
                  ? 'opacity-0 -translate-x-full' 
                  : 'opacity-0 translate-x-full'
            }`}
          >
            <div className="text-center p-8">
              <Quote className="w-8 h-8 text-primary mx-auto mb-4 opacity-60" />
              <blockquote className="text-xl md:text-2xl font-medium text-brand-black dark:text-brand-cream mb-6 italic leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                {testimonial.avatar_url && (
                  <img
                    src={testimonial.avatar_url}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2"
                    style={{ borderColor: '#ffd700' }}
                  />
                )}
                <div className="text-left">
                  <p className="font-bold text-brand-black dark:text-brand-cream">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-brand-black/70 dark:text-brand-cream/70">
                    {testimonial.city_area}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionOverlayBox>
  );
};

export default BlogTestimonials;