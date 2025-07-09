
import { HeroSkeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <div className="min-h-screen bg-brand-cream dark:bg-brand-black flex items-center justify-center">
      <div className="container mx-auto px-6 max-w-4xl">
        <HeroSkeleton />
      </div>
    </div>
  );
};

export default Loading;
