
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Edit, Trash2 } from "lucide-react";
import { toast } from "sonner";

interface BlogPostActionsProps {
  postId: string;
  postTitle: string;
  postSlug: string;
  onDelete?: () => void;
}

const BlogPostActions = ({ postId, postTitle, postSlug, onDelete }: BlogPostActionsProps) => {
  const { isAdmin } = useAuth();
  const navigate = useNavigate();
  const [isDeleting, setIsDeleting] = useState(false);

  if (!isAdmin) return null;

  const handleEdit = () => {
    navigate(`/edit-post/${postSlug}`);
  };

  const handleDelete = async () => {
    setIsDeleting(true);
    try {
      const { error } = await supabase
        .from('blog_posts')
        .delete()
        .eq('id', postId);

      if (error) {
        console.error('Error deleting post:', error);
        toast.error('Failed to delete post');
      } else {
        toast.success('Post deleted successfully');
        onDelete?.();
      }
    } catch (error) {
      console.error('Unexpected error:', error);
      toast.error('An unexpected error occurred');
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <div className="flex items-center gap-2">
      <Button
        onClick={handleEdit}
        size="sm"
        variant="outline"
        className="border-[#247EFF] text-[#247EFF] hover:bg-[#247EFF] hover:text-white"
      >
        <Edit className="h-4 w-4 mr-1" />
        Edit
      </Button>
      
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button
            size="sm"
            variant="outline"
            className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
          >
            <Trash2 className="h-4 w-4 mr-1" />
            Delete
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent className="bg-white dark:bg-brand-black border-[#247EFF]/20">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-[#0A0A0A] dark:text-brand-cream">
              Delete Story
            </AlertDialogTitle>
            <AlertDialogDescription className="text-[#0A0A0A]/70 dark:text-brand-cream/70">
              Are you sure you want to delete "{postTitle}"? This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="border-[#247EFF]/20 text-[#0A0A0A] dark:text-brand-cream">
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDelete}
              disabled={isDeleting}
              className="bg-red-500 hover:bg-red-600 text-white"
            >
              {isDeleting ? 'Deleting...' : 'Delete'}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default BlogPostActions;
