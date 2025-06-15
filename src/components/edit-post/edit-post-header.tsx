
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";

interface EditPostHeaderProps {
  postTitle?: string;
}

const EditPostHeader = ({ postTitle }: EditPostHeaderProps) => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-between mb-8">
      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          onClick={() => navigate("/blog")}
          className="text-[#247EFF] hover:text-[#0057FF] p-0"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Stories
        </Button>
      </div>
      <Badge className="bg-[#247EFF] text-white px-4 py-2">
        Edit Story
      </Badge>
    </div>
  );
};

export default EditPostHeader;
