
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Upload, FileText, Trash2, AlertCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';

export const GuideUploader = () => {
  const [uploading, setUploading] = useState(false);
  const [guides, setGuides] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const { isAdmin } = useAuth();

  if (!isAdmin) {
    return (
      <Card>
        <CardContent className="p-6">
          <p className="text-center text-muted-foreground">Admin access required</p>
        </CardContent>
      </Card>
    );
  }

  useEffect(() => {
    loadGuides();
  }, []);

  const loadGuides = async () => {
    setLoading(true);
    try {
      console.log('Loading guides from storage...');
      const { data, error } = await supabase.storage
        .from('guides')
        .list();

      if (error) {
        console.error('Error loading guides:', error);
        throw error;
      }

      console.log('Guides loaded:', data);
      setGuides(data || []);
    } catch (error) {
      console.error('Error loading guides:', error);
      toast({
        title: "Error loading guides",
        description: "Please try again or check if the storage bucket exists.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

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
      
      // Refresh the list
      await loadGuides();
    } catch (error: any) {
      console.error('Upload error:', error);
      
      let errorMessage = "Please try again or contact support.";
      if (error.message?.includes('storage')) {
        errorMessage = "Storage bucket may not exist. Please check the setup.";
      } else if (error.message?.includes('policy')) {
        errorMessage = "You don't have permission to upload files.";
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

  const deleteGuide = async (fileName: string) => {
    try {
      console.log('Deleting file:', fileName);
      const { error } = await supabase.storage
        .from('guides')
        .remove([fileName]);

      if (error) {
        console.error('Delete error:', error);
        throw error;
      }

      toast({
        title: "Guide deleted",
        description: `${fileName} has been removed.`,
      });

      await loadGuides(); // Refresh the list
    } catch (error) {
      console.error('Delete error:', error);
      toast({
        title: "Delete failed",
        description: "Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="space-y-6">
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
                <div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
                Uploading... Please wait.
              </div>
            )}
            <p className="text-sm text-muted-foreground">
              Only PDF files are accepted (max 10MB). Files will be securely stored and tracked when downloaded.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5" />
            Uploaded Guides
          </CardTitle>
          <CardDescription>
            Manage your uploaded guide files.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Button onClick={loadGuides} disabled={loading} variant="outline">
              {loading ? 'Loading...' : 'Refresh List'}
            </Button>
            
            {guides.length === 0 ? (
              <div className="text-center py-8">
                <AlertCircle className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">
                  No guides uploaded yet.
                </p>
              </div>
            ) : (
              <div className="space-y-2">
                {guides.map((guide) => (
                  <div key={guide.name} className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">{guide.name}</p>
                      <p className="text-sm text-muted-foreground">
                        Size: {guide.metadata?.size ? Math.round(guide.metadata.size / 1024) : 'Unknown'} KB
                        {guide.created_at && (
                          <span className="ml-2">
                            • Uploaded: {new Date(guide.created_at).toLocaleDateString()}
                          </span>
                        )}
                      </p>
                    </div>
                    <Button
                      onClick={() => deleteGuide(guide.name)}
                      variant="destructive"
                      size="sm"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
