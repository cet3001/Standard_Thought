import { cn } from "@/lib/utils"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-muted", className)}
      {...props}
    />
  )
}

// Brand-appropriate skeleton loaders
const BlogPostSkeleton = () => (
  <div className="bg-white/20 dark:bg-gray-900/25 backdrop-blur-md rounded-xl overflow-hidden shadow-2xl border border-white/30 dark:border-gray-700/40">
    <div className="h-48 bg-gradient-to-r from-gray-200/20 via-gray-300/20 to-gray-200/20 animate-pulse"></div>
    <div className="p-6 space-y-4">
      <div className="flex items-center gap-2">
        <div className="w-16 h-6 bg-gradient-to-r from-yellow-300/30 to-yellow-400/30 rounded-full animate-pulse"></div>
      </div>
      <div className="space-y-2">
        <div className="h-6 bg-gradient-to-r from-gray-200/30 via-gray-300/30 to-gray-200/30 rounded animate-pulse"></div>
        <div className="h-4 w-3/4 bg-gradient-to-r from-gray-200/30 via-gray-300/30 to-gray-200/30 rounded animate-pulse"></div>
      </div>
      <div className="space-y-2">
        <div className="h-3 bg-gradient-to-r from-gray-200/20 via-gray-300/20 to-gray-200/20 rounded animate-pulse"></div>
        <div className="h-3 w-5/6 bg-gradient-to-r from-gray-200/20 via-gray-300/20 to-gray-200/20 rounded animate-pulse"></div>
      </div>
      <div className="flex items-center justify-between">
        <div className="h-4 w-24 bg-gradient-to-r from-gray-200/20 via-gray-300/20 to-gray-200/20 rounded animate-pulse"></div>
        <div className="h-8 w-16 bg-gradient-to-r from-yellow-300/30 to-yellow-400/30 rounded-lg animate-pulse"></div>
      </div>
    </div>
  </div>
)

const HeroSkeleton = () => (
  <div className="text-center py-20">
    <div className="space-y-6">
      <div className="h-16 w-3/4 mx-auto bg-gradient-to-r from-yellow-300/30 via-yellow-400/30 to-yellow-300/30 rounded-lg animate-pulse"></div>
      <div className="h-6 w-1/2 mx-auto bg-gradient-to-r from-gray-200/30 via-gray-300/30 to-gray-200/30 rounded animate-pulse"></div>
      <div className="h-12 w-48 mx-auto bg-gradient-to-r from-yellow-300/30 to-yellow-400/30 rounded-xl animate-pulse"></div>
    </div>
  </div>
)

const ContentSkeleton = () => (
  <div className="space-y-4">
    <div className="h-8 w-1/3 bg-gradient-to-r from-yellow-300/30 to-yellow-400/30 rounded animate-pulse"></div>
    <div className="space-y-2">
      <div className="h-4 bg-gradient-to-r from-gray-200/30 via-gray-300/30 to-gray-200/30 rounded animate-pulse"></div>
      <div className="h-4 w-4/5 bg-gradient-to-r from-gray-200/30 via-gray-300/30 to-gray-200/30 rounded animate-pulse"></div>
      <div className="h-4 w-3/4 bg-gradient-to-r from-gray-200/30 via-gray-300/30 to-gray-200/30 rounded animate-pulse"></div>
    </div>
  </div>
)

export { Skeleton, BlogPostSkeleton, HeroSkeleton, ContentSkeleton }
