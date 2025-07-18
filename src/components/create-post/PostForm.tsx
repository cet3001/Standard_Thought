// Component: PostForm
// Purpose: Render the form for creating or editing a blog post. Uses props to
// control every field so parent components can manage state.
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ImageUpload } from "./ImageUpload";

interface FormData {
  title: string;
  body: string;
  metaTitle: string;
  metaDescription: string;
  tags: string;
  metaTags: string;
  featured: boolean;
  uploadNow: boolean;
  standardThoughtLaw: string;
  commentsEnabled: boolean;
  displayTag: string;
}

interface PostFormProps {
  formData: FormData;
  setFormData: (data: FormData) => void;
  onSubmit: (e: React.FormEvent) => void;
  submitting: boolean;
  isEditing: boolean;
  imageFile: File | null;
  setImageFile: (file: File | null) => void;
  imagePreview: string | null;
  setImagePreview: (url: string | null) => void;
  onCancel: () => void;
}

const STANDARD_THOUGHT_LAWS = [
  "Law #1: The Trauma Flip—Turn Money Scars into Legacy Assets",
  "Law #2: The Exclusion Flip—Turn Barriers into Bread", 
  "Law #3: The Grit Myth—Street Stories Over Safe Narratives",
  "Law #4: The Risk Flip—Turn Instinct Fears into Asset Empires",
  "Law #5: The Score Flip—Turn Trauma Traps into Legacy Keys",
  "Law #6: The Mindset Myth—Flip Stories Over Safe Illusions",
  "Law #7: The Flow Flip—Turn Paycheck Cycles into Legacy Systems",
  "Law #8: The Bot Flip—Turn Tech Exclusion into Legacy Income", 
  "Law #9: The Hustle Myth—Turn Side Plays into Empire Foundations",
  "Law #10: The Legacy Myth—Turn Inherited Chains into Unbreakable Webs"
];

export const PostForm = ({
  formData,
  setFormData,
  onSubmit,
  submitting,
  isEditing,
  imageFile,
  setImageFile,
  imagePreview,
  setImagePreview,
  onCancel
}: PostFormProps) => {
  // Debug log to see if formData is being received
  console.log('PostForm rendering with formData:', {
    title: formData.title,
    body: formData.body?.substring(0, 50) + '...',
    tags: formData.tags,
    featured: formData.featured
  });
  return (
    <Card className="backdrop-blur-sm border-2 border-yellow-400/30 shadow-2xl" style={{
      background: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
    }}>
      <CardHeader>
        <CardTitle className="text-brand-black dark:text-brand-cream font-ibm-plex-mono">Story Details</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={onSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="title" className="text-brand-black dark:text-brand-cream font-ibm-plex-mono">Title</Label>
              <Input
                id="title"
                value={formData.title}
                onChange={(e) =>
                  setFormData(prev => ({ ...prev, title: e.target.value }))
                }
                placeholder="Enter your story title"
                required
                className="bg-brand-cream/50 dark:bg-brand-black/50 border-yellow-400/30 focus:border-yellow-400 text-brand-black dark:text-brand-cream font-kalam"
              />
            </div>
            <div>
              <Label htmlFor="metaTitle" className="text-brand-black dark:text-brand-cream font-ibm-plex-mono">Meta Title</Label>
              <Input
                id="metaTitle"
                value={formData.metaTitle}
                onChange={(e) =>
                  setFormData(prev => ({ ...prev, metaTitle: e.target.value }))
                }
                placeholder="SEO title (optional)"
                className="bg-brand-cream/50 dark:bg-brand-black/50 border-yellow-400/30 focus:border-yellow-400 text-brand-black dark:text-brand-cream font-kalam"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="standardThoughtLaw" className="text-brand-black dark:text-brand-cream font-ibm-plex-mono">
              Standard Thought Law <span className="text-yellow-400">*</span>
            </Label>
            <Select
              value={formData.standardThoughtLaw}
              onValueChange={(value) =>
                setFormData(prev => ({ ...prev, standardThoughtLaw: value }))
              }
              required
            >
              <SelectTrigger className="bg-brand-cream/50 dark:bg-brand-black/50 border-yellow-400/30 focus:border-yellow-400 text-brand-black dark:text-brand-cream font-kalam">
                <SelectValue placeholder="Select a Standard Thought Law" />
              </SelectTrigger>
              <SelectContent className="bg-brand-cream dark:bg-brand-black border-yellow-400/30">
                {STANDARD_THOUGHT_LAWS.map((law, index) => (
                  <SelectItem key={index} value={law} className="text-brand-black dark:text-brand-cream font-kalam">
                    {law}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {formData.standardThoughtLaw && (
              <div className="mt-2">
                <Label htmlFor="customLaw" className="text-brand-black dark:text-brand-cream font-ibm-plex-mono text-sm">
                  Customize Law (Optional)
                </Label>
                <Input
                  id="customLaw"
                  value={formData.standardThoughtLaw}
                  onChange={(e) =>
                    setFormData(prev => ({
                      ...prev,
                      standardThoughtLaw: e.target.value
                    }))
                  }
                  placeholder="Edit the selected law to fit your story..."
                  className="bg-brand-cream/50 dark:bg-brand-black/50 border-yellow-400/30 focus:border-yellow-400 text-brand-black dark:text-brand-cream font-kalam"
                />
              </div>
            )}
          </div>

          <div>
            <Label htmlFor="body" className="text-brand-black dark:text-brand-cream font-ibm-plex-mono">Story Content</Label>
            <Textarea
              id="body"
              value={formData.body}
              onChange={(e) =>
                setFormData(prev => ({ ...prev, body: e.target.value }))
              }
              placeholder="Write your story here..."
              rows={12}
              required
              className="bg-brand-cream/50 dark:bg-brand-black/50 border-yellow-400/30 focus:border-yellow-400 text-brand-black dark:text-brand-cream font-kalam"
            />
          </div>

          <div>
            <Label htmlFor="metaDescription" className="text-brand-black dark:text-brand-cream font-ibm-plex-mono">Meta Description</Label>
            <Textarea
              id="metaDescription"
              value={formData.metaDescription}
              onChange={(e) =>
                setFormData(prev => ({ ...prev, metaDescription: e.target.value }))
              }
              placeholder="Brief description for search engines"
              rows={3}
              className="bg-brand-cream/50 dark:bg-brand-black/50 border-yellow-400/30 focus:border-yellow-400 text-brand-black dark:text-brand-cream font-kalam"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <Label htmlFor="tags" className="text-brand-black dark:text-brand-cream font-ibm-plex-mono">Tags</Label>
              <Input
                id="tags"
                value={formData.tags}
                onChange={(e) =>
                  setFormData(prev => ({ ...prev, tags: e.target.value }))
                }
                placeholder="hustle, mindset, network (comma separated)"
                className="bg-brand-cream/50 dark:bg-brand-black/50 border-yellow-400/30 focus:border-yellow-400 text-brand-black dark:text-brand-cream font-kalam"
              />
            </div>
            <div>
              <Label htmlFor="displayTag" className="text-brand-black dark:text-brand-cream font-ibm-plex-mono">Display Tag</Label>
              <Select
                value={formData.displayTag}
                onValueChange={(value) =>
                  setFormData(prev => ({ ...prev, displayTag: value }))
                }
              >
                <SelectTrigger className="bg-brand-cream/50 dark:bg-brand-black/50 border-yellow-400/30 focus:border-yellow-400 text-brand-black dark:text-brand-cream font-kalam">
                  <SelectValue placeholder="Enter tags first, then select display tag" />
                </SelectTrigger>
                <SelectContent className="bg-brand-cream dark:bg-brand-black border-yellow-400/30 z-50">
                  {formData.tags && formData.tags.trim() ? formData.tags.split(',').map((tag, index) => {
                    const trimmedTag = tag.trim();
                    if (!trimmedTag) return null;
                    return (
                      <SelectItem key={index} value={trimmedTag} className="text-brand-black dark:text-brand-cream font-kalam">
                        {trimmedTag}
                      </SelectItem>
                    );
                  }).filter(Boolean) : null}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="metaTags" className="text-brand-black dark:text-brand-cream font-ibm-plex-mono">Meta Tags</Label>
              <Input
                id="metaTags"
                value={formData.metaTags}
                onChange={(e) =>
                  setFormData(prev => ({ ...prev, metaTags: e.target.value }))
                }
                placeholder="SEO keywords (comma separated)"
                className="bg-brand-cream/50 dark:bg-brand-black/50 border-yellow-400/30 focus:border-yellow-400 text-brand-black dark:text-brand-cream font-kalam"
              />
            </div>
          </div>

          <ImageUpload
            imageFile={imageFile}
            setImageFile={setImageFile}
            imagePreview={imagePreview}
            setImagePreview={setImagePreview}
          />

          <div className="flex flex-wrap gap-6">
            <div className="flex items-center space-x-2 bg-[#FFD700] text-black p-4 rounded-lg border-2 border-black shadow-lg">
              <Switch
                id="featured"
                checked={formData.featured}
                onCheckedChange={(checked) =>
                  setFormData(prev => ({ ...prev, featured: checked }))
                }
                className="data-[state=checked]:bg-black"
              />
              <Label htmlFor="featured" className="text-black font-ibm-plex-mono font-bold text-sm">Feature Blog Post</Label>
            </div>
            <div className="flex items-center space-x-2 bg-[#FFD700] text-black p-4 rounded-lg border-2 border-black shadow-lg">
              <Switch
                id="uploadNow"
                checked={formData.uploadNow}
                onCheckedChange={(checked) =>
                  setFormData(prev => ({ ...prev, uploadNow: checked }))
                }
                className="data-[state=checked]:bg-black"
              />
              <Label htmlFor="uploadNow" className="text-black font-ibm-plex-mono font-bold text-sm">Show Image Now</Label>
            </div>
            <div className="flex items-center space-x-2 bg-[#FFD700] text-black p-4 rounded-lg border-2 border-black shadow-lg">
              <Switch
                id="commentsEnabled"
                checked={formData.commentsEnabled}
                onCheckedChange={(checked) =>
                  setFormData(prev => ({ ...prev, commentsEnabled: checked }))
                }
                className="data-[state=checked]:bg-black"
              />
              <Label htmlFor="commentsEnabled" className="text-black font-ibm-plex-mono font-bold text-sm">Enable Comments</Label>
            </div>
          </div>

          <div className="flex gap-4">
            <Button
              type="submit"
              disabled={submitting}
              className="bg-gradient-to-r from-[#FFD700] via-[#FFF8DC] to-[#FFA500] text-black font-bold px-8 py-4 rounded-3xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-base border-0"
            >
              <span 
                style={{ 
                  fontFamily: "'Permanent Marker', 'Kalam', 'Comic Neue', cursive",
                  textShadow: '2px 2px 0px rgba(0,0,0,0.3), 1px 1px 0px rgba(255,255,255,0.1)',
                  transform: 'rotate(-1deg)',
                  display: 'inline-block'
                }}
              >
                {submitting ? (isEditing ? "Updating..." : "Publishing...") : (isEditing ? "Update Story" : "Publish Story")}
              </span>
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={onCancel}
              className="border-yellow-400/30 text-brand-black dark:text-brand-cream hover:bg-yellow-400/20 font-ibm-plex-mono"
            >
              Cancel
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};