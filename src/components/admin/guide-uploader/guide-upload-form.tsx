
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Upload, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

interface GuideUploadFormProps {
  onUploadSuccess: () => void;
}

export const GuideUploadForm = ({ onUploadSuccess }: GuideUploadFormProps) => {
  const [uploading, setUploading] = useState(false);
  const { toast } = useToast();

  const uploadGuide = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    console.log('Starting upload for file:', file.name, 'Type:', file.type, 'Size:', file.size);

    if (file.type !== 'application/pdf') {
      toast({
        title: "Invalid file type",
        description: "Please upload a PDF file.",
        variant: "destructive",
      });
      return;
    }

    // Check file size (limit to 10MB)
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
      console.log('Uploading file as:', fileName);
      
      const { data, error } = await supabase.storage
        .from('guides')
        .upload(fileName, file, {
          cacheControl: '3600',
          upsert: false
        });

      if (error) {
        console.error('Upload error:', error);
        throw error;
      }

      console.log('Upload successful:', data);
      toast({
        title: "Guide uploaded successfully! 🎉",
        description: `${file.name} has been uploaded and is ready for download.`,
      });

      // Clear the input
      event.target.value = '';
      
      // Notify parent to refresh the list
      onUploadSuccess();
    } catch (error: any) {
      console.error('Upload error:', error);
      
      let errorMessage = "Please try again or contact support.";
      if (error.message?.includes('policy') || error.message?.includes('permission')) {
        errorMessage = "You don't have permission to upload files. Please check your admin status.";
      } else if (error.message?.includes('duplicate')) {
        errorMessage = "A file with this name already exists.";
      }
      
      toast({
        title: "Upload failed",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setUploading(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Upload className="h-5 w-5" />
          Upload New Guide
        </CardTitle>
        <CardDescription>
          Upload PDF guides that users can download after signing up for the newsletter.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <Input
              type="file"
              accept=".pdf"
              onChange={uploadGuide}
              disabled={uploading}
              className="cursor-pointer"
            />
          </div>
          {uploading && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Loader2 className="w-4 h-4 animate-spin" />
              Uploading... Please wait.
            </div>
          )}
          <p className="text-sm text-muted-foreground">
            Only PDF files are accepted (max 10MB). Files will be securely stored and tracked when downloaded.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
