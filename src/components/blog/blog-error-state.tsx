
import { Button } from "@/components/ui/button";

interface BlogErrorStateProps {
  error: string;
  onRetry: () => void;
}

const BlogErrorState = ({ error, onRetry }: BlogErrorStateProps) => {
  return (
    <div className="text-center py-16">
      <div className="max-w-md mx-auto">
        <h3 className="text-2xl font-semibold text-[#0A0A0A] dark:text-brand-cream mb-4">
          Something Went Wrong
        </h3>
        <p className="text-[#0A0A0A]/70 dark:text-brand-cream/70 mb-6">
          {error}
        </p>
        <Button
          onClick={onRetry}
          className="bg-[#247EFF] hover:bg-[#0057FF] text-white font-medium rounded-2xl px-8 py-3 transition-all duration-300"
        >
          Try Again
        </Button>
      </div>
    </div>
  );
};

export default BlogErrorState;
