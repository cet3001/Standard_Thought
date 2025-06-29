
import { useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { useAuth } from '@/contexts/AuthContext';
import { GuideUploadForm } from './guide-uploader/guide-upload-form';
import { GuideList } from './guide-uploader/guide-list';
import { useGuideStorage } from './guide-uploader/use-guide-storage';

export const GuideUploader = () => {
  const { isAdmin } = useAuth();
  const { guides, loading, loadGuides } = useGuideStorage();

  useEffect(() => {
    if (isAdmin) {
      loadGuides();
    }
  }, [isAdmin, loadGuides]);

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
    <div className="space-y-6">
      <GuideUploadForm onUploadSuccess={loadGuides} />
      <GuideList 
        guides={guides} 
        loading={loading} 
        onRefresh={loadGuides} 
      />
    </div>
  );
};
