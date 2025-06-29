
import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Upload, FileText, Trash2, Loader2, AlertCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';

interface Guide {
  name: string;
  metadata?: {
    size?: number;
  };
  created_at?: string;
}

export const GuideManagement = () => {
  const { isAdmin } = useAuth();
  const { toast } = useToast();
  const [guides, setGuides] = useState<Guide[]>([]);
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [deletingFile, setDeletingFile] = useState<string | null>(null);

  const loadGuides = async () => {
    setLoading(true);
    try {
      console.log('🔍 Loading guides from storage...');
      console.log('📊 Network check: This should trigger a request to .../storage/v1/object/list');
      
      const { data, error } = await supabase.storage
        .from('guides')
        .list('', { 
          sortBy: { column: 'created_at', order: 'desc' },
          limit: 100
        });

      if (error) {
        console.error('❌ Storage list error:', error);
        console.error('🚨 Check DevTools Network tab for storage/v1/object/list request');
        console.error('🚨 Status should be 200. If 403, check RLS policies on storage.objects');
        throw error;
      }

      console.log('✅ Guides loaded successfully:', data?.length || 0, 'files');
      console.log('📋 Guide data:', data);
      setGuides(data || []);
    } catch (error: any) {
      console.error('💥 Error loading guides:', error);
      toast({
        title: "Error loading guides",
        description: error.message || "Check console and Network tab for RLS/auth issues",
        variant: "destructive",
      });
      setGuides([]);
    } finally {
      setLoading(false);
    }
  };

  const uploadGuide = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
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
      console.log('🔄 Uploading file as:', fileName);
      console.log('📊 Network check: This should trigger a request to .../storage/v1/object (POST)');
      
      const { data, error } = await supabase.storage
        .from('guides')
        .upload(fileName, file, {
          cacheControl: '3600',
          upsert: false
        });

      if (error) {
        console.error('❌ Upload error:', error);
        console.error('🚨 Check DevTools Network tab for storage/v1/object request');
        console.error('🚨 Status should be 200. If 403, RLS policy is blocking upload');
        throw error;
      }

      console.log('✅ Upload successful:', data);
      toast({
        title: "Guide uploaded successfully! 🎉",
        description: `${file.name} has been uploaded and is ready for download.`,
      });

      // Clear the input
      event.target.value = '';
      
      // Refresh the list
      loadGuides();
    } catch (error: any) {
      console.error('💥 Upload error:', error);
      
      let errorMessage = "Please try again or contact support.";
      if (error.message?.includes('policy') || error.message?.includes('permission')) {
        errorMessage = "RLS policy blocking upload. Check admin permissions.";
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
    setDeletingFile(fileName);
    try {
      console.log('🗑️ Deleting file:', fileName);
      console.log('📊 Network check: This should trigger a request to .../storage/v1/object (DELETE)');
      
      const { error } = await supabase.storage
        .from('guides')
        .remove([fileName]);

      if (error) {
        console.error('❌ Delete error:', error);
        console.error('🚨 Check DevTools Network tab for storage/v1/object DELETE request');
        console.error('🚨 Status should be 200. If 403, RLS policy is blocking delete');
        throw error;
      }

      console.log('✅ Delete successful for:', fileName);
      toast({
        title: "Guide deleted",
        description: `${fileName} has been removed.`,
      });

      loadGuides(); // Refresh the list
    } catch (error) {
      console.error('💥 Delete error:', error);
      toast({
        title: "Delete failed",
        description: "Check console for RLS/auth issues.",
        variant: "destructive",
      });
    } finally {
      setDeletingFile(null);
    }
  };

  useEffect(() => {
    if (isAdmin) {
      console.log('🔐 Admin detected, loading guides...');
      loadGuides();
    } else {
      console.log('⚠️ Non-admin user, guides not loaded');
    }
  }, [isAdmin]);

  if (!isAdmin) {
    return (
      <Card>
        <CardContent className="p-6">
          <p className="text-center text-muted-foreground">Admin access required</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Upload className="h-5 w-5" />
          Guide Management
        </CardTitle>
        <CardDescription>
          Upload and manage PDF guides for your audience
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Upload Section */}
        <div className="space-y-4">
          <h3 className="font-semibold">Upload New Guide</h3>
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
              Uploading... Check Network tab for storage/v1/object requests
            </div>
          )}
          <p className="text-sm text-muted-foreground">
            Only PDF files are accepted (max 10MB). Files will be securely stored and tracked when downloaded.
          </p>
        </div>

        {/* Guide List Section */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold">Uploaded Guides</h3>
            <Button 
              onClick={loadGuides} 
              disabled={loading} 
              variant="outline" 
              size="sm"
            >
              {loading ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                'Refresh'
              )}
            </Button>
          </div>
          
          {loading ? (
            <div className="flex items-center justify-center py-8">
              <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
              <span className="ml-2 text-muted-foreground">Loading guides... Check Network tab</span>
            </div>
          ) : guides.length === 0 ? (
            <div className="text-center py-8">
              <AlertCircle className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">
                No guides uploaded yet. Upload your first PDF guide above.
              </p>
            </div>
          ) : (
            <div className="space-y-2 max-h-64 overflow-y-auto">
              {guides.map((guide) => (
                <div key={guide.name} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <FileText className="h-4 w-4 text-blue-500" />
                    <div>
                      <p className="font-medium truncate max-w-[200px]" title={guide.name}>
                        {guide.name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Size: {guide.metadata?.size ? Math.round(guide.metadata.size / 1024) : 'Unknown'} KB
                        {guide.created_at && (
                          <span className="ml-2">
                            • {new Date(guide.created_at).toLocaleDateString()}
                          </span>
                        )}
                      </p>
                    </div>
                  </div>
                  <Button
                    onClick={() => deleteGuide(guide.name)}
                    variant="destructive"
                    size="sm"
                    disabled={deletingFile === guide.name}
                  >
                    {deletingFile === guide.name ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <Trash2 className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              ))}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
