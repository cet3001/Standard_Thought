
import { Testimonial } from "./testimonial-data";
import StarRating from "./star-rating";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  return (
    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 mx-4 text-center min-h-[400px] flex flex-col justify-between">
      {/* Category Tag */}
      <div className="flex justify-center mb-6">
        <span className={`${testimonial.categoryColor} text-white px-4 py-2 rounded-full text-sm font-semibold`}>
          {testimonial.category}
        </span>
      </div>

      {/* Quote */}
      <blockquote className="text-white/90 text-xl md:text-2xl leading-relaxed italic mb-8 flex-grow flex items-center">
        "{testimonial.quote}"
      </blockquote>
      
      <div>
        <StarRating />
        
        {/* Profile */}
        <div className="flex items-center justify-center space-x-4">
          <div className="w-20 h-20 bg-[#247EFF] rounded-full flex items-center justify-center text-white font-bold text-lg" aria-hidden="true">
            {testimonial.initials}
          </div>
          <div className="text-left">
            <div className="font-bold text-white text-lg">{testimonial.name}</div>
            <div className="text-[#f4d03f] text-sm font-medium">{testimonial.title}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
