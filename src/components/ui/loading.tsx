
import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <div className="min-h-screen bg-brand-cream dark:bg-brand-black flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#247EFF] mx-auto mb-4"></div>
        <p className="text-[#0A0A0A] dark:text-brand-cream">Loading...</p>
      </div>
    </div>
  );
};

export default Loading;
