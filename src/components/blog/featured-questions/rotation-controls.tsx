
import { questionPool } from "./question-data";

interface FeaturedQuestion {
  id: number;
  question: string;
  answer: string;
  category: string;
  featured: boolean;
}

interface RotationControlsProps {
  currentRotation: number;
  setCurrentRotation: (rotation: number) => void;
  featuredQuestions: FeaturedQuestion[];
}

const RotationControls = ({ currentRotation, setCurrentRotation, featuredQuestions }: RotationControlsProps) => {
  return (
    <div className="mt-8 text-center">
      <div className="flex items-center justify-center gap-2 mb-4">
        {Array.from({ length: Math.ceil(questionPool.length / 3) }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentRotation(idx)}
            className={`w-3 h-3 rounded-full transition-colors ${
              Math.floor(currentRotation / 3) === idx 
                ? 'bg-[#247EFF]' 
                : 'bg-[#247EFF]/20 hover:bg-[#247EFF]/40'
            }`}
          />
        ))}
      </div>
      <p className="text-sm text-[#0A0A0A]/60 dark:text-brand-cream/60">
        Showing {featuredQuestions.length} of {questionPool.length} featured questions • Content rotates to keep fresh
      </p>
    </div>
  );
};

export default RotationControls;
