
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { createSamplePosts } from "@/lib/sample-posts";
import { Loader2, Plus } from "lucide-react";

const AddSamplePosts = () => {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleAddSamplePosts = async () => {
    setLoading(true);
    try {
      const result = await createSamplePosts();
      
      if (result.success) {
        toast({
          title: "Success!",
          description: "Sample blog posts have been added to the database.",
        });
      } else {
        toast({
          title: "Error",
          description: "Failed to add sample posts. Check console for details.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error('Error adding sample posts:', error);
      toast({
        title: "Error",
        description: "An unexpected error occurred.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      onClick={handleAddSamplePosts}
      disabled={loading}
      className="bg-[#247EFF] hover:bg-[#0057FF] text-white"
    >
      {loading ? (
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      ) : (
        <Plus className="mr-2 h-4 w-4" />
      )}
      Add Sample Blog Posts
    </Button>
  );
};

export default AddSamplePosts;
