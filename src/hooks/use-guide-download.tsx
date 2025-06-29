
import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

export const useGuideDownload = () => {
  const [isDownloading, setIsDownloading] = useState(false);
  const { toast } = useToast();

  const downloadGuide = async (guideName: string, userEmail: string) => {
    setIsDownloading(true);
    
    try {
      // Call the edge function to download the guide
      const { data, error } = await supabase.functions.invoke('download-guide', {
        body: { 
          guide_name: guideName,
          user_email: userEmail 
        }
      });

      if (error) {
        throw error;
      }

      // If the response is successful, it means the download was tracked
      // Now get the actual file for download
      const { data: fileData, error: downloadError } = await supabase.storage
        .from('guides')
        .download(guideName);

      if (downloadError) {
        throw new Error('Failed to download guide');
      }

      // Create a download link
      const blob = new Blob([fileData], { type: 'application/pdf' });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = guideName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);

      toast({
        title: "Download started! 📖",
        description: "Your guide is downloading now. Check your downloads folder.",
      });

    } catch (error) {
      console.error('Download error:', error);
      toast({
        title: "Download failed",
        description: "Please try again or contact support.",
        variant: "destructive",
      });
    } finally {
      setIsDownloading(false);
    }
  };

  return { downloadGuide, isDownloading };
};
