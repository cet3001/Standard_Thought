
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Upload, FileText, Trash2 } from 'lucide-react';
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

  const loadGuides = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase.storage
        .from('guides')
        .list();

      if (error) throw error;
      setGuides(data || []);
    } catch (error) {
      console.error('Error loading guides:', error);
      toast({
        title: "Error loading guides",
        description: "Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const uploadGuide = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (file.type !== 'application/pdf') {
      toast({
        title: "Invalid file type",
        description: "Please upload a PDF file.",
        variant: "destructive",
      });
      return;
    }

    setUploading(true);
    try {
      const fileName = `${Date.now()}-${file.name}`;
      
      const { data, error } = await supabase.storage
        .from('guides')
        .upload(fileName, file);

      if (error) throw error;

      toast({
        title: "Guide uploaded successfully! 🎉",
        description: `${file.name} has been uploaded and is ready for download.`,
      });

      loadGuides(); // Refresh the list
    } catch (error) {
      console.error('Upload error:', error);
      toast({
        title: "Upload failed",
        description: "Please try again or contact support.",
        variant: "destructive",
      });
    } finally {
      setUploading(false);
    }
  };

  const deleteGuide = async (fileName: string) => {
    try {
      const { error } = await supabase.storage
        .from('guides')
        .remove([fileName]);

      if (error) throw error;

      toast({
        title: "Guide deleted",
        description: `${fileName} has been removed.`,
      });

      loadGuides(); // Refresh the list
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
            <p className="text-sm text-muted-foreground">
              Only PDF files are accepted. Files will be securely stored and tracked when downloaded.
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
              <p className="text-muted-foreground text-center py-4">
                No guides uploaded yet.
              </p>
            ) : (
              <div className="space-y-2">
                {guides.map((guide) => (
                  <div key={guide.name} className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">{guide.name}</p>
                      <p className="text-sm text-muted-foreground">
                        Size: {Math.round(guide.metadata?.size / 1024 || 0)} KB
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
