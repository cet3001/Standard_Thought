
import { UseFormReturn } from "react-hook-form";
import { Input } from "@/components/ui/input";
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

interface EditPostFormFieldsProps {
  form: UseFormReturn<PostFormData>;
}

const EditPostFormFields = ({ form }: EditPostFormFieldsProps) => {
  return (
    <>
      {/* Title */}
      <FormField
        control={form.control}
        name="title"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-[#0A0A0A] dark:text-brand-cream">Title</FormLabel>
            <FormControl>
              <Input 
                {...field} 
                className="border-[#247EFF]/20 focus:border-[#247EFF] text-[#0A0A0A] dark:text-brand-cream bg-white dark:bg-brand-black"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      {/* Excerpt */}
      <FormField
        control={form.control}
        name="excerpt"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-[#0A0A0A] dark:text-brand-cream">Excerpt</FormLabel>
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

      {/* Content */}
      <FormField
        control={form.control}
        name="content"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-[#0A0A0A] dark:text-brand-cream">Content</FormLabel>
            <FormControl>
              <Textarea 
                {...field}
                rows={20}
                className="border-[#247EFF]/20 focus:border-[#247EFF] text-[#0A0A0A] dark:text-brand-cream bg-white dark:bg-brand-black"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      {/* Category and Tags Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[#0A0A0A] dark:text-brand-cream">Category</FormLabel>
              <FormControl>
                <Input 
                  {...field}
                  className="border-[#247EFF]/20 focus:border-[#247EFF] text-[#0A0A0A] dark:text-brand-cream bg-white dark:bg-brand-black"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="tags"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[#0A0A0A] dark:text-brand-cream">Tags (comma separated)</FormLabel>
              <FormControl>
                <Input 
                  {...field}
                  placeholder="tag1, tag2, tag3"
                  className="border-[#247EFF]/20 focus:border-[#247EFF] text-[#0A0A0A] dark:text-brand-cream bg-white dark:bg-brand-black"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      {/* Image URL */}
      <FormField
        control={form.control}
        name="image_url"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-[#0A0A0A] dark:text-brand-cream">Image URL</FormLabel>
            <FormControl>
              <Input 
                {...field}
                className="border-[#247EFF]/20 focus:border-[#247EFF] text-[#0A0A0A] dark:text-brand-cream bg-white dark:bg-brand-black"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
};

export default EditPostFormFields;
