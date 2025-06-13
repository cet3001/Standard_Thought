
import { UseFormReturn } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";

interface PostFormData {
  title: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string;
  image_url?: string;
  meta_description?: string;
  meta_keywords?: string;
  featured: boolean;
  published: boolean;
  comments_enabled: boolean;
}

interface EditPostTogglesProps {
  form: UseFormReturn<PostFormData>;
}

const EditPostToggles = ({ form }: EditPostTogglesProps) => {
  return (
    <div className="flex flex-wrap gap-6">
      <FormField
        control={form.control}
        name="featured"
        render={({ field }) => (
          <FormItem className="flex items-center space-x-2">
            <FormControl>
              <input
                type="checkbox"
                checked={field.value}
                onChange={field.onChange}
                className="w-4 h-4 text-[#247EFF] border-[#247EFF]/20 rounded focus:ring-[#247EFF]"
              />
            </FormControl>
            <FormLabel className="text-[#0A0A0A] dark:text-brand-cream">Featured</FormLabel>
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="published"
        render={({ field }) => (
          <FormItem className="flex items-center space-x-2">
            <FormControl>
              <input
                type="checkbox"
                checked={field.value}
                onChange={field.onChange}
                className="w-4 h-4 text-[#247EFF] border-[#247EFF]/20 rounded focus:ring-[#247EFF]"
              />
            </FormControl>
            <FormLabel className="text-[#0A0A0A] dark:text-brand-cream">Published</FormLabel>
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="comments_enabled"
        render={({ field }) => (
          <FormItem className="flex items-center space-x-2">
            <FormControl>
              <input
                type="checkbox"
                checked={field.value}
                onChange={field.onChange}
                className="w-4 h-4 text-[#247EFF] border-[#247EFF]/20 rounded focus:ring-[#247EFF]"
              />
            </FormControl>
            <FormLabel className="text-[#0A0A0A] dark:text-brand-cream">Enable Comments</FormLabel>
          </FormItem>
        )}
      />
    </div>
  );
};

export default EditPostToggles;
