
const BlogCardSkeleton = () => {
  return (
    <div className="bg-white/90 dark:bg-brand-black/80 backdrop-blur-sm border-[#247EFF]/20 rounded-3xl overflow-hidden animate-pulse">
      {/* Image skeleton */}
      <div className="h-48 bg-gradient-to-r from-[#247EFF]/10 via-[#247EFF]/20 to-[#247EFF]/10 bg-[length:200%_100%] animate-[shimmer_2s_infinite] relative">
        <div className="absolute top-4 left-4 flex gap-2">
          <div className="h-6 w-16 bg-[#247EFF]/30 rounded-full"></div>
        </div>
      </div>
      
      {/* Content skeleton */}
      <div className="p-6">
        <div className="h-6 bg-gradient-to-r from-[#247EFF]/10 via-[#247EFF]/20 to-[#247EFF]/10 bg-[length:200%_100%] animate-[shimmer_2s_infinite] rounded mb-3 w-3/4"></div>
        <div className="space-y-2 mb-4">
          <div className="h-4 bg-gradient-to-r from-[#247EFF]/10 via-[#247EFF]/20 to-[#247EFF]/10 bg-[length:200%_100%] animate-[shimmer_2s_infinite] rounded"></div>
          <div className="h-4 bg-gradient-to-r from-[#247EFF]/10 via-[#247EFF]/20 to-[#247EFF]/10 bg-[length:200%_100%] animate-[shimmer_2s_infinite] rounded w-5/6"></div>
          <div className="h-4 bg-gradient-to-r from-[#247EFF]/10 via-[#247EFF]/20 to-[#247EFF]/10 bg-[length:200%_100%] animate-[shimmer_2s_infinite] rounded w-4/6"></div>
        </div>
        <div className="flex items-center justify-between mb-4">
          <div className="h-4 w-24 bg-gradient-to-r from-[#247EFF]/10 via-[#247EFF]/20 to-[#247EFF]/10 bg-[length:200%_100%] animate-[shimmer_2s_infinite] rounded"></div>
          <div className="h-4 w-20 bg-gradient-to-r from-[#247EFF]/10 via-[#247EFF]/20 to-[#247EFF]/10 bg-[length:200%_100%] animate-[shimmer_2s_infinite] rounded"></div>
        </div>
        <div className="h-10 bg-gradient-to-r from-[#247EFF]/10 via-[#247EFF]/20 to-[#247EFF]/10 bg-[length:200%_100%] animate-[shimmer_2s_infinite] rounded-2xl"></div>
      </div>
    </div>
  );
};

const BlogGridSkeleton = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[...Array(6)].map((_, index) => (
        <BlogCardSkeleton key={index} />
      ))}
    </div>
  );
};

export { BlogCardSkeleton, BlogGridSkeleton };
