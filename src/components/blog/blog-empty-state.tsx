
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

interface BlogEmptyStateProps {
  isFiltered?: boolean;
  onClearFilters?: () => void;
}

const BlogEmptyState = ({ isFiltered, onClearFilters }: BlogEmptyStateProps) => {
  const navigate = useNavigate();
  const { isAdmin, user, loading: authLoading } = useAuth();

  if (isFiltered) {
    return (
      <div className="text-center py-16">
        <p className="text-xl text-[#0A0A0A]/70 dark:text-brand-cream/70 mb-4">No stories found matching your search.</p>
        <Button 
          onClick={onClearFilters}
          variant="outline"
          className="border-[#247EFF] text-[#247EFF] hover:bg-[#247EFF] hover:text-white rounded-2xl"
        >
          Clear Filters
        </Button>
      </div>
    );
  }

  return (
    <div className="text-center py-16">
      <div className="max-w-md mx-auto">
        <h3 className="text-2xl font-semibold text-[#0A0A0A] dark:text-brand-cream mb-4">
          No Stories Yet
        </h3>
        <p className="text-[#0A0A0A]/70 dark:text-brand-cream/70 mb-6">
          Be the first to share your builder journey. Every legend starts with someone brave enough to go first.
        </p>
        {!authLoading && user && isAdmin ? (
          <Button
            onClick={() => navigate("/create-post")}
            className="bg-[#247EFF] hover:bg-[#0057FF] text-white font-medium rounded-2xl px-8 py-3 transition-all duration-300"
          >
            <Plus className="mr-2 h-5 w-5" />
            Create First Story
          </Button>
        ) : (
          <Button
            onClick={() => navigate("/auth")}
            className="bg-[#247EFF] hover:bg-[#0057FF] text-white font-medium rounded-2xl px-8 py-3 transition-all duration-300"
          >
            Join Movement
          </Button>
        )}
      </div>
    </div>
  );
};

export default BlogEmptyState;
