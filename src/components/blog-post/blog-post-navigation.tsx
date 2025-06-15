
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import BlogPostActions from "@/components/blog-post-actions";

interface BlogPostNavigationProps {
  onBackClick: () => void;
  postId: string;
  postTitle: string;
  postSlug: string;
  onDelete: () => void;
}

const BlogPostNavigation = ({ 
  onBackClick, 
  postId, 
  postTitle, 
  postSlug, 
  onDelete 
}: BlogPostNavigationProps) => {
  return (
    <div className="flex items-center justify-between mb-8">
      <Button
        variant="ghost"
        onClick={onBackClick}
        className="text-[#247EFF] hover:text-[#0057FF] p-0"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Stories
      </Button>
      
      <BlogPostActions
        postId={postId}
        postTitle={postTitle}
        postSlug={postSlug}
        onDelete={onDelete}
      />
    </div>
  );
};

export default BlogPostNavigation;
