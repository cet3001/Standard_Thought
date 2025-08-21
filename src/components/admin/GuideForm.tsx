import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { X, Upload, Plus, Minus, FileText, Target } from 'lucide-react';
import { useGuides, Guide } from '@/hooks/use-guides';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';

const guideSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string().min(1, 'Description is required'),
  bullets: z.array(z.string()).default([]),
  price: z.number().min(0, 'Price must be 0 or greater'),
  is_active: z.boolean().default(true),
  sort_order: z.number().min(0, 'Sort order must be 0 or greater'),
  pillar: z.string().optional(),
});

type GuideFormData = z.infer<typeof guideSchema>;

interface GuideFormProps {
  guide?: Guide | null;
  onClose: () => void;
  onSuccess: (createdGuide?: Guide) => void;
}

export const GuideForm = ({ guide, onClose, onSuccess }: GuideFormProps) => {
  const { user } = useAuth();
  const { createGuide, updateGuide, uploadGuideFile } = useGuides();
  const { toast } = useToast();
  const [bullets, setBullets] = useState<string[]>(guide?.bullets || ['']);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [socialHooks, setSocialHooks] = useState<string[]>(() => {
    if (guide?.social_hooks) {
      if (Array.isArray(guide.social_hooks)) {
        return (guide.social_hooks as string[]);
      }
    }
    return ['', '', ''];
  });
  const [selectedPillar, setSelectedPillar] = useState<string>(guide?.pillar || '');

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting }
  } = useForm<GuideFormData>({
    resolver: zodResolver(guideSchema),
    defaultValues: {
      title: guide?.title || '',
      description: guide?.description || '',
      bullets: guide?.bullets || [],
      price: guide?.price || 0,
      is_active: guide?.is_active ?? true,
      sort_order: guide?.sort_order || 0,
      pillar: guide?.pillar || '',
    }
  });

  const isActive = watch('is_active');

  useEffect(() => {
    setValue('bullets', bullets.filter(bullet => bullet.trim() !== ''));
  }, [bullets, setValue]);

  const addBullet = () => {
    setBullets([...bullets, '']);
  };

  const removeBullet = (index: number) => {
    setBullets(bullets.filter((_, i) => i !== index));
  };

  const updateBullet = (index: number, value: string) => {
    const newBullets = [...bullets];
    newBullets[index] = value;
    setBullets(newBullets);
  };

  const updateSocialHook = (index: number, value: string) => {
    const newHooks = [...socialHooks];
    newHooks[index] = value;
    setSocialHooks(newHooks);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const onSubmit = async (data: GuideFormData) => {
    if (!user) return;

    try {
      setUploading(true);
      
      const guideData = {
        title: data.title,
        description: data.description,
        bullets: bullets.filter(bullet => bullet.trim() !== ''),
        price: data.price,
        is_active: data.is_active,
        sort_order: data.sort_order,
        created_by: user.id,
        pillar: selectedPillar || null,
        social_hooks: socialHooks.filter(hook => hook.trim() !== ''),
      };

      let savedGuide: Guide;

      if (guide) {
        // Update existing guide
        savedGuide = await updateGuide(guide.id, guideData);
      } else {
        // Create new guide
        savedGuide = await createGuide(guideData);
      }

      // Upload file if selected
      if (selectedFile && savedGuide) {
        await uploadGuideFile(selectedFile, savedGuide.id);
      }

      toast({
        title: "Success",
        description: guide ? "Guide updated successfully" : "Guide created successfully",
      });

      onSuccess(guide ? undefined : savedGuide);
    } catch (error) {
      console.error('Error saving guide:', error);
      toast({
        title: "Error",
        description: "Failed to save guide. Please try again.",
        variant: "destructive",
      });
    } finally {
      setUploading(false);
    }
  };

  return (
    <Card className="bg-card border-border hover:shadow-lg transition-shadow">
      <CardHeader className="pb-4">
        <div className="flex justify-between items-center">
          <CardTitle className="text-foreground text-xl">
            {guide ? 'Edit Guide' : 'Create New Guide'}
          </CardTitle>
          <Button variant="ghost" size="sm" onClick={onClose} className="hover:bg-accent">
            <X className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="core-content" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="core-content" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              Core Content
            </TabsTrigger>
            <TabsTrigger value="amplification" className="flex items-center gap-2">
              <Target className="h-4 w-4" />
              Amplification
            </TabsTrigger>
          </TabsList>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <TabsContent value="core-content" className="space-y-6 mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="title" className="text-foreground font-medium">Title</Label>
                    <Input
                      id="title"
                      {...register('title')}
                      className="bg-background border-border text-foreground mt-2"
                      placeholder="Enter guide title"
                    />
                    {errors.title && (
                      <p className="text-destructive text-sm mt-1">{errors.title.message}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="description" className="text-foreground font-medium">Description</Label>
                    <Textarea
                      id="description"
                      {...register('description')}
                      className="bg-background border-border text-foreground mt-2"
                      placeholder="Enter guide description"
                      rows={4}
                    />
                    {errors.description && (
                      <p className="text-destructive text-sm mt-1">{errors.description.message}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="price" className="text-foreground font-medium">Price ($)</Label>
                    <Input
                      id="price"
                      type="number"
                      step="0.01"
                      min="0"
                      {...register('price', { valueAsNumber: true })}
                      className="bg-background border-border text-foreground mt-2"
                      placeholder="0.00 for free"
                    />
                    {errors.price && (
                      <p className="text-destructive text-sm mt-1">{errors.price.message}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="sort_order" className="text-foreground font-medium">Sort Order</Label>
                    <Input
                      id="sort_order"
                      type="number"
                      min="0"
                      {...register('sort_order', { valueAsNumber: true })}
                      className="bg-background border-border text-foreground mt-2"
                      placeholder="0"
                    />
                    {errors.sort_order && (
                      <p className="text-destructive text-sm mt-1">{errors.sort_order.message}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <Label className="text-foreground font-medium">Key Points/Bullets</Label>
                    <div className="space-y-3 mt-2">
                      {bullets.map((bullet, index) => (
                        <div key={index} className="flex gap-2">
                          <Input
                            value={bullet}
                            onChange={(e) => updateBullet(index, e.target.value)}
                            className="bg-background border-border text-foreground"
                            placeholder={`Key point ${index + 1}`}
                          />
                          <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            onClick={() => removeBullet(index)}
                            className="hover:bg-destructive/10 hover:text-destructive hover:border-destructive"
                            title="Remove bullet point"
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={addBullet}
                        className="hover:bg-accent"
                      >
                        <Plus className="h-4 w-4 mr-2" />
                        Add Bullet Point
                      </Button>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="file" className="text-foreground font-medium">Guide File</Label>
                    <div className="mt-2">
                      <Input
                        id="file"
                        type="file"
                        onChange={handleFileChange}
                        className="bg-background border-border text-foreground"
                        accept=".pdf,.doc,.docx,.txt"
                      />
                      {guide?.file_name && (
                        <p className="text-sm text-muted-foreground mt-2 p-2 bg-muted rounded">
                          Current file: <span className="font-medium">{guide.file_name}</span>
                        </p>
                      )}
                      {selectedFile && (
                        <p className="text-sm text-primary mt-2 p-2 bg-primary/10 rounded border border-primary/20">
                          New file selected: <span className="font-medium">{selectedFile.name}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 p-3 bg-muted/50 rounded-lg border border-border">
                    <Switch
                      id="is_active"
                      checked={isActive}
                      onCheckedChange={(checked) => setValue('is_active', checked)}
                    />
                    <Label htmlFor="is_active" className="text-foreground font-medium cursor-pointer">
                      Active Status
                      <Badge
                        variant={isActive ? "default" : "secondary"}
                        className={`ml-2 ${isActive ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200" : ""}`}
                      >
                        {isActive ? "Visible" : "Hidden"}
                      </Badge>
                    </Label>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="amplification" className="space-y-6 mt-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Content Pillar Section */}
                <div className="space-y-6">
                  <div>
                    <Label className="text-foreground font-medium text-lg">Content Pillar</Label>
                    <div className="mt-2">
                      <Select value={selectedPillar} onValueChange={setSelectedPillar}>
                        <SelectTrigger className="bg-background border-border text-foreground">
                          <SelectValue placeholder="Select a content pillar" />
                        </SelectTrigger>
                        <SelectContent className="bg-background border-border">
                          <SelectItem value="Legacy">Legacy</SelectItem>
                          <SelectItem value="Hustle">Hustle</SelectItem>
                          <SelectItem value="Mindset">Mindset</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Social Media Hooks Section */}
                  <div>
                    <Label className="text-foreground font-medium text-lg">Social Media Hooks</Label>
                    <div className="space-y-4 mt-2">
                      {socialHooks.map((hook, index) => (
                        <div key={index}>
                          <Label htmlFor={`social-hook-${index}`} className="text-muted-foreground text-sm">
                            Social Hook {index + 1}
                          </Label>
                          <Textarea
                            id={`social-hook-${index}`}
                            value={hook}
                            onChange={(e) => updateSocialHook(index, e.target.value)}
                            className="bg-background border-border text-foreground mt-1"
                            placeholder={`Enter social media hook ${index + 1}...`}
                            rows={3}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Linked Assets Section */}
                <div className="space-y-6">
                  <div>
                    <Label className="text-foreground font-medium text-lg">Linked Assets</Label>
                    <div className="space-y-4 mt-2">
                      {/* Linked CTAs */}
                      <div className="p-4 bg-muted/30 rounded-lg border border-border">
                        <h4 className="font-medium text-foreground mb-3">Linked CTAs</h4>
                        <div className="space-y-2 text-sm text-muted-foreground">
                          <div className="flex items-center justify-between p-2 bg-background rounded border">
                            <span>Download Now Button</span>
                            <Badge variant="outline">Active</Badge>
                          </div>
                          <div className="flex items-center justify-between p-2 bg-background rounded border">
                            <span>Get Free Guide CTA</span>
                            <Badge variant="outline">Active</Badge>
                          </div>
                          <div className="flex items-center justify-between p-2 bg-background rounded border opacity-50">
                            <span>Hero Section CTA</span>
                            <Badge variant="secondary">Inactive</Badge>
                          </div>
                        </div>
                      </div>

                      {/* Email Campaigns */}
                      <div className="p-4 bg-muted/30 rounded-lg border border-border">
                        <h4 className="font-medium text-foreground mb-3">Email Campaigns</h4>
                        <div className="space-y-2 text-sm text-muted-foreground">
                          <div className="flex items-center justify-between p-2 bg-background rounded border">
                            <span>Weekly Newsletter #47</span>
                            <Badge variant="outline">Sent</Badge>
                          </div>
                          <div className="flex items-center justify-between p-2 bg-background rounded border">
                            <span>Guide Launch Campaign</span>
                            <Badge variant="outline">Scheduled</Badge>
                          </div>
                          <div className="text-center p-2 text-muted-foreground italic">
                            No campaigns featuring this guide yet
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <div className="flex justify-end gap-4 pt-6 border-t border-border">
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                className="hover:bg-accent"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={isSubmitting || uploading}
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                {uploading ? (
                  <>
                    <Upload className="mr-2 h-4 w-4 animate-spin" />
                    {guide ? 'Updating...' : 'Creating...'}
                  </>
                ) : (
                  <>
                    {guide ? 'Update Guide' : 'Create Guide'}
                  </>
                )}
              </Button>
            </div>
          </form>
        </Tabs>
      </CardContent>
    </Card>
  );
};