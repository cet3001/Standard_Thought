
import { Star } from "lucide-react";

const StarRating = () => (
  <div className="flex justify-center space-x-1 mb-6" role="img" aria-label="Five star rating">
    {[...Array(5)].map((_, i) => (
      <Star key={i} className="w-5 h-5 fill-[#f4d03f] text-[#f4d03f]" aria-hidden="true" />
    ))}
  </div>
);

export default StarRating;
