
import { UseFormReturn } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import EditPostFormFields from "./edit-post-form-fields";
import EditPostMetaFields from "./edit-post-meta-fields";
import EditPostToggles from "./edit-post-toggles";
import { type PostFormData } from "./types";
import { Save } from "lucide-react";

interface EditPostFormProps {
  form: UseFormReturn<PostFormData>;
  onSubmit: (data: PostFormData) => Promise<void>;
  saving: boolean;
  postTitle?: string;
}

const EditPostForm = ({ form, onSubmit, saving, postTitle }: EditPostFormProps) => {
  const navigate = useNavigate();

  return (
    <>
      <h1 className="text-4xl font-bold text-[#0A0A0A] dark:text-brand-cream mb-8">
        Edit Story: {postTitle || 'Loading...'}
      </h1>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <EditPostFormFields form={form} />
          <EditPostMetaFields form={form} />
          <EditPostToggles form={form} />

          {/* Submit Button */}
          <div className="flex justify-end gap-4 pt-8 border-t border-[#247EFF]/20">
            <Button
              type="button"
              variant="outline"
              onClick={() => navigate("/blog")}
              className="border-[#247EFF]/20 text-[#0A0A0A] dark:text-brand-cream"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={saving}
              className="bg-[#247EFF] hover:bg-[#0057FF] text-white"
            >
              <Save className="mr-2 h-4 w-4" />
              {saving ? 'Saving...' : 'Save Changes'}
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
};

export default EditPostForm;
