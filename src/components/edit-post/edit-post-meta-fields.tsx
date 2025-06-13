
import { UseFormReturn } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
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

interface EditPostMetaFieldsProps {
  form: UseFormReturn<PostFormData>;
}

const EditPostMetaFields = ({ form }: EditPostMetaFieldsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <FormField
        control={form.control}
        name="meta_description"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-[#0A0A0A] dark:text-brand-cream">Meta Description</FormLabel>
            <FormControl>
              <Textarea 
                {...field}
                rows={3}
                className="border-[#247EFF]/20 focus:border-[#247EFF] text-[#0A0A0A] dark:text-brand-cream bg-white dark:bg-brand-black"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="meta_keywords"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-[#0A0A0A] dark:text-brand-cream">Meta Keywords</FormLabel>
            <FormControl>
              <Textarea 
                {...field}
                rows={3}
                className="border-[#247EFF]/20 focus:border-[#247EFF] text-[#0A0A0A] dark:text-brand-cream bg-white dark:bg-brand-black"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

export default EditPostMetaFields;
