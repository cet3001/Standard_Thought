
import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Upload, FileText, Trash2, Loader2, AlertCircle, RefreshCw } from 'lucide-react';
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
  const { isAdmin, user } = useAuth();
  const { toast } = useToast();
  const [guides, setGuides] = useState<Guide[]>([]);
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [deletingFile, setDeletingFile] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const loadGuides = async () => {
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
      console.log('👤 Upload by user:', user?.email);
      
      const { data, error } = await supabase.storage
        .from('guides')
        .upload(fileName, file, {
          cacheControl: '3600',
          upsert: false,
        });

      if (error) {
        console.error('❌ Upload error:', error);
        console.error('🚨 Upload error details:', {
          message: error.message,
          statusCode: (error as any).statusCode,
          status: (error as any).status
        });
        
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

      // Clear the input
      event.target.value = '';
      
      // Refresh the list
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
        console.error('🚨 Delete error details:', {
          message: error.message,
          statusCode: (error as any).statusCode,
          status: (error as any).status
        });
        
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

      loadGuides(); // Refresh the list
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
    } else {
      console.log('⚠️ User not admin or not authenticated');
    }
  }, [isAdmin, user]);

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
              disabled={uploading || loading}
              className="cursor-pointer"
            />
          </div>
          {uploading && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Loader2 className="w-4 h-4 animate-spin" />
              Uploading PDF guide...
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
              className="flex items-center gap-2"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Loading...
                </>
              ) : (
                <>
                  <RefreshCw className="w-4 h-4" />
                  Refresh
                </>
              )}
            </Button>
          </div>
          
          {error && (
            <div className="p-4 border border-red-200 bg-red-50 rounded-lg">
              <div className="flex items-center gap-2 text-red-800">
                <AlertCircle className="h-4 w-4" />
                <span className="font-medium">Error</span>
              </div>
              <p className="text-sm text-red-700 mt-1">{error}</p>
              <Button 
                onClick={loadGuides} 
                variant="outline" 
                size="sm" 
                className="mt-2"
                disabled={loading}
              >
                Try Again
              </Button>
            </div>
          )}
          
          {loading ? (
            <div className="flex items-center justify-center py-8">
              <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
              <span className="ml-2 text-muted-foreground">Loading guides...</span>
            </div>
          ) : guides.length === 0 && !error ? (
            <div className="text-center py-8">
              <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
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
