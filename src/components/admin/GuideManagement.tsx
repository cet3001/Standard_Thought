
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Upload } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useGuideManagement } from './guide-management/use-guide-management';
import { GuideUploadSection } from './guide-management/guide-upload-section';
import { GuideListSection } from './guide-management/guide-list-section';

export const GuideManagement = () => {
  const { isAdmin } = useAuth();
  const {
    guides,
    loading,
    uploading,
    deletingFile,
    loadGuides,
    uploadGuide,
    deleteGuide,
    listBuckets, // New function
  } = useGuideManagement();

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
        <GuideUploadSection 
          uploading={uploading} 
          onUpload={uploadGuide} 
        />
        
        <GuideListSection
          guides={guides}
          loading={loading}
          deletingFile={deletingFile}
          onRefresh={loadGuides}
          onDelete={deleteGuide}
          onListBuckets={listBuckets} // Pass the new function
        />
      </CardContent>
    </Card>
  );
};
