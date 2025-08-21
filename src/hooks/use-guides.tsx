import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Tables, TablesInsert, TablesUpdate } from '@/integrations/supabase/types';
import { useToast } from '@/hooks/use-toast';

export type Guide = Tables<'guides'>;
export type GuideInsert = TablesInsert<'guides'>;
export type GuideUpdate = TablesUpdate<'guides'>;

export const useGuides = (includeInactive = false) => {
  const [guides, setGuides] = useState<Guide[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  const fetchGuides = async () => {
    try {
      setLoading(true);
      let query = supabase
        .from('guides')
        .select('*')
        .order('sort_order', { ascending: true });

      if (!includeInactive) {
        query = query.eq('is_active', true);
      }

      const { data, error } = await query;

      if (error) throw error;
      setGuides(data || []);
    } catch (error) {
      console.error('Error fetching guides:', error);
      toast({
        title: "Error",
        description: "Failed to load guides",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const createGuide = async (guide: GuideInsert) => {
    try {
      const { data, error } = await supabase
        .from('guides')
        .insert([guide])
        .select()
        .single();

      if (error) throw error;

      toast({
        title: "Success",
        description: "Guide created successfully",
      });

      await fetchGuides();
      return data;
    } catch (error) {
      console.error('Error creating guide:', error);
      toast({
        title: "Error",
        description: "Failed to create guide",
        variant: "destructive",
      });
      throw error;
    }
  };

  const updateGuide = async (id: string, updates: GuideUpdate) => {
    try {
      const { data, error } = await supabase
        .from('guides')
        .update(updates)
        .eq('id', id)
        .select()
        .single();

      if (error) throw error;

      toast({
        title: "Success",
        description: "Guide updated successfully",
      });

      await fetchGuides();
      return data;
    } catch (error) {
      console.error('Error updating guide:', error);
      toast({
        title: "Error",
        description: "Failed to update guide",
        variant: "destructive",
      });
      throw error;
    }
  };

  const deleteGuide = async (id: string) => {
    try {
      const { error } = await supabase
        .from('guides')
        .delete()
        .eq('id', id);

      if (error) throw error;

      toast({
        title: "Success",
        description: "Guide deleted successfully",
      });

      await fetchGuides();
    } catch (error) {
      console.error('Error deleting guide:', error);
      toast({
        title: "Error",
        description: "Failed to delete guide",
        variant: "destructive",
      });
      throw error;
    }
  };

  const deleteBulkGuides = async (ids: string[]) => {
    try {
      const { error } = await supabase
        .from('guides')
        .delete()
        .in('id', ids);

      if (error) throw error;

      toast({
        title: "Success",
        description: `${ids.length} guides deleted successfully`,
      });

      await fetchGuides();
    } catch (error) {
      console.error('Error deleting guides:', error);
      toast({
        title: "Error", 
        description: "Failed to delete guides",
        variant: "destructive",
      });
      throw error;
    }
  };

  const uploadGuideFile = async (file: File, guideId: string) => {
    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `${guideId}.${fileExt}`;
      const filePath = `guides/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('guides')
        .upload(filePath, file, { upsert: true });

      if (uploadError) throw uploadError;

      // Update guide with file path
      await updateGuide(guideId, {
        file_path: filePath,
        file_name: file.name
      });

      return filePath;
    } catch (error) {
      console.error('Error uploading file:', error);
      toast({
        title: "Error",
        description: "Failed to upload file",
        variant: "destructive",
      });
      throw error;
    }
  };

  useEffect(() => {
    fetchGuides();
  }, [includeInactive]);

  return {
    guides,
    loading,
    createGuide,
    updateGuide,
    deleteGuide,
    deleteBulkGuides,
    uploadGuideFile,
    refetch: fetchGuides
  };
};