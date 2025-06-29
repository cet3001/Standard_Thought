
import { Button } from '@/components/ui/button';
import { FileText, Trash2, Loader2, RefreshCw, FolderOpen } from 'lucide-react';
import type { Guide } from './types';

interface GuideListSectionProps {
  guides: Guide[];
  loading: boolean;
  deletingFile: string | null;
  onRefresh: () => void;
  onDelete: (fileName: string) => void;
  onListBuckets: () => void; // New prop
}

export const GuideListSection = ({ 
  guides, 
  loading, 
  deletingFile, 
  onRefresh, 
  onDelete,
  onListBuckets // New prop
}: GuideListSectionProps) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold">Uploaded Guides</h3>
        <div className="flex gap-2">
          <Button 
            onClick={onListBuckets} 
            variant="outline" 
            size="sm"
            className="flex items-center gap-2"
          >
            <FolderOpen className="w-4 h-4" />
            List Buckets
          </Button>
          <Button 
            onClick={onRefresh} 
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
      </div>
      
      {loading ? (
        <div className="flex items-center justify-center py-8">
          <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
          <span className="ml-2 text-muted-foreground">Loading guides...</span>
        </div>
      ) : guides.length === 0 ? (
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
                onClick={() => onDelete(guide.name)}
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
  );
};
