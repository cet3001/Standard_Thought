
import { Button } from "@/components/ui/button";

interface ErrorMessageProps {
  error: Error | unknown;
  onRetry?: () => void;
}

const ErrorMessage = ({ error, onRetry }: ErrorMessageProps) => {
  const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred';

  return (
    <div className="min-h-screen bg-brand-cream dark:bg-brand-black flex items-center justify-center">
      <div className="text-center max-w-md mx-auto p-6">
        <h2 className="text-2xl font-semibold text-[#0A0A0A] dark:text-brand-cream mb-4">
          Something went wrong
        </h2>
        <p className="text-[#0A0A0A]/70 dark:text-brand-cream/70 mb-6">
          {errorMessage}
        </p>
        {onRetry && (
          <Button
            onClick={onRetry}
            className="bg-[#247EFF] hover:bg-[#0057FF] text-white"
          >
            Try Again
          </Button>
        )}
      </div>
    </div>
  );
};

export default ErrorMessage;
