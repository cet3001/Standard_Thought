
import { useState, useEffect, useCallback } from 'react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import type { Guide } from './types';

export const useGuideManagement = () => {
  const { isAdmin, user } = useAuth();
  const { toast } = useToast();
  const [guides, setGuides] = useState<Guide[]>([]);
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [deletingFile, setDeletingFile] = useState<string | null>(null);

  const loadGuides = useCallback(async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase.storage
        .from('guides')
        .list('', { sortBy: { column: 'created_at', order: 'desc' } });

      if (error) throw error;
      setGuides(data ?? []);
    } catch (err: any) {
      console.error('Error loading guides:', err);
      toast({
        title: 'Error loading guides',
        description:
          err.message?.includes('The resource was not found')
            ? 'Bucket "guides" is missing. Create it in Supabase ▸ Storage.'
            : err.message,
        variant: 'destructive',
      });
      setGuides([]);
    } finally {
      setLoading(false);
    }
  }, [toast]);

  const uploadGuide = async (file: File) => {
    if (!file) return;

    console.log('📤 Starting upload for file:', file.name, 'Type:', file.type, 'Size:', file.size);

    if (file.type !== 'application/pdf') {
      toast({
        title: "Invalid file type",
        description: "Please upload a PDF file.",
        variant: "destructive",
      });
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      toast({
        title: "File too large",
        description: "Please upload a file smaller than 10MB.",
        variant: "destructive",
      });
      return;
    }

    setUploading(true);
    try {
      const fileName = `${Date.now()}-${file.name.replace(/[^a-zA-Z0-9.-]/g, '_')}`;
      console.log('🔄 Uploading file as:', fileName);
      console.log('👤 Upload by user:', user?.email);
      
      const { data, error } = await supabase.storage
        .from('guides')
        .upload(fileName, file, {
          cacheControl: '3600',
          upsert: false,
        });

      if (error) {
        console.error('❌ Upload error:', error);
        
        if (error.message.includes('permission') || error.message.includes('policy') || (error as any).statusCode === 403) {
          throw new Error('Permission denied. You may not have admin upload permissions.');
        }
        
        throw error;
      }

      console.log('✅ Upload successful:', data);
      toast({
        title: "Guide uploaded successfully! 🎉",
        description: `${file.name} has been uploaded and is ready for download.`,
      });

      loadGuides();
    } catch (error: any) {
      console.error('💥 Upload error:', error);
      
      toast({
        title: "Upload failed",
        description: error.message || "Please try again or contact support.",
        variant: "destructive",
      });
    } finally {
      setUploading(false);
    }
  };

  const deleteGuide = async (fileName: string) => {
    setDeletingFile(fileName);
    try {
      console.log('🗑️ Deleting file:', fileName);
      console.log('👤 Delete by user:', user?.email);
      
      const { error } = await supabase.storage
        .from('guides')
        .remove([fileName]);

      if (error) {
        console.error('❌ Delete error:', error);
        
        if (error.message.includes('permission') || error.message.includes('policy') || (error as any).statusCode === 403) {
          throw new Error('Permission denied. You may not have admin delete permissions.');
        }
        
        throw error;
      }

      console.log('✅ Delete successful for:', fileName);
      toast({
        title: "Guide deleted",
        description: `${fileName} has been removed.`,
      });

      loadGuides();
    } catch (error: any) {
      console.error('💥 Delete error:', error);
      toast({
        title: "Delete failed",
        description: error.message || "Please try again or contact support.",
        variant: "destructive",
      });
    } finally {
      setDeletingFile(null);
    }
  };

  useEffect(() => {
    if (isAdmin && user) {
      console.log('🔐 Admin user detected, loading guides...');
      loadGuides();
    }
  }, [isAdmin, user, loadGuides]);

  return {
    guides,
    loading,
    uploading,
    deletingFile,
    loadGuides,
    uploadGuide,
    deleteGuide,
  };
};
