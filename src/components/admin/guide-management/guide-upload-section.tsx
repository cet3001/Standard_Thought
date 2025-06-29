
import { Input } from '@/components/ui/input';
import { Loader2 } from 'lucide-react';

interface GuideUploadSectionProps {
  uploading: boolean;
  onUpload: (file: File) => void;
}

export const GuideUploadSection = ({ uploading, onUpload }: GuideUploadSectionProps) => {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      onUpload(file);
      event.target.value = '';
    }
  };

  return (
    <div className="space-y-4">
      <h3 className="font-semibold">Upload New Guide</h3>
      <div>
        <Input
          type="file"
          accept=".pdf"
          onChange={handleFileChange}
          disabled={uploading}
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
  );
};
