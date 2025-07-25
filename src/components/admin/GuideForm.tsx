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
import { X, Upload, Plus, Minus } from 'lucide-react';
import { useGuides, Guide } from '@/hooks/use-guides';
import { useAuth } from '@/contexts/AuthContext';

const guideSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string().min(1, 'Description is required'),
  bullets: z.array(z.string()).default([]),
  price: z.number().min(0, 'Price must be 0 or greater'),
  is_active: z.boolean().default(true),
  sort_order: z.number().min(0, 'Sort order must be 0 or greater'),
});

type GuideFormData = z.infer<typeof guideSchema>;

interface GuideFormProps {
  guide?: Guide | null;
  onClose: () => void;
  onSuccess: () => void;
}

export const GuideForm = ({ guide, onClose, onSuccess }: GuideFormProps) => {
  const { user } = useAuth();
  const { createGuide, updateGuide, uploadGuideFile } = useGuides();
  const [bullets, setBullets] = useState<string[]>(guide?.bullets || ['']);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);

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

      onSuccess();
    } catch (error) {
      console.error('Error saving guide:', error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <Card className="bg-slate-800 border-slate-700">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className="text-brand-cream">
            {guide ? 'Edit Guide' : 'Create New Guide'}
          </CardTitle>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <Label htmlFor="title" className="text-brand-cream">Title</Label>
                <Input
                  id="title"
                  {...register('title')}
                  className="bg-slate-700 border-slate-600 text-brand-cream"
                  placeholder="Enter guide title"
                />
                {errors.title && (
                  <p className="text-red-400 text-sm mt-1">{errors.title.message}</p>
                )}
              </div>

              <div>
                <Label htmlFor="description" className="text-brand-cream">Description</Label>
                <Textarea
                  id="description"
                  {...register('description')}
                  className="bg-slate-700 border-slate-600 text-brand-cream"
                  placeholder="Enter guide description"
                  rows={4}
                />
                {errors.description && (
                  <p className="text-red-400 text-sm mt-1">{errors.description.message}</p>
                )}
              </div>

              <div>
                <Label htmlFor="price" className="text-brand-cream">Price ($)</Label>
                <Input
                  id="price"
                  type="number"
                  step="0.01"
                  min="0"
                  {...register('price', { valueAsNumber: true })}
                  className="bg-slate-700 border-slate-600 text-brand-cream"
                  placeholder="0.00 for free"
                />
                {errors.price && (
                  <p className="text-red-400 text-sm mt-1">{errors.price.message}</p>
                )}
              </div>

              <div>
                <Label htmlFor="sort_order" className="text-brand-cream">Sort Order</Label>
                <Input
                  id="sort_order"
                  type="number"
                  min="0"
                  {...register('sort_order', { valueAsNumber: true })}
                  className="bg-slate-700 border-slate-600 text-brand-cream"
                  placeholder="0"
                />
                {errors.sort_order && (
                  <p className="text-red-400 text-sm mt-1">{errors.sort_order.message}</p>
                )}
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <Label className="text-brand-cream">Key Points/Bullets</Label>
                <div className="space-y-2">
                  {bullets.map((bullet, index) => (
                    <div key={index} className="flex gap-2">
                      <Input
                        value={bullet}
                        onChange={(e) => updateBullet(index, e.target.value)}
                        className="bg-slate-700 border-slate-600 text-brand-cream"
                        placeholder={`Key point ${index + 1}`}
                      />
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() => removeBullet(index)}
                        className="border-slate-600"
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
                    className="border-slate-600"
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Add Bullet Point
                  </Button>
                </div>
              </div>

              <div>
                <Label htmlFor="file" className="text-brand-cream">Guide File</Label>
                <div className="mt-2">
                  <Input
                    id="file"
                    type="file"
                    onChange={handleFileChange}
                    className="bg-slate-700 border-slate-600 text-brand-cream"
                    accept=".pdf,.doc,.docx,.txt"
                  />
                  {guide?.file_name && (
                    <p className="text-sm text-brand-cream/60 mt-1">
                      Current file: {guide.file_name}
                    </p>
                  )}
                  {selectedFile && (
                    <p className="text-sm text-brand-gold mt-1">
                      New file selected: {selectedFile.name}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Switch
                  id="is_active"
                  checked={isActive}
                  onCheckedChange={(checked) => setValue('is_active', checked)}
                />
                <Label htmlFor="is_active" className="text-brand-cream">
                  Active
                  <Badge
                    variant={isActive ? "default" : "secondary"}
                    className={`ml-2 ${isActive ? "bg-green-600" : "bg-gray-600"}`}
                  >
                    {isActive ? "Visible" : "Hidden"}
                  </Badge>
                </Label>
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-4 pt-4 border-t border-slate-700">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="border-slate-600"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting || uploading}
              className="bg-brand-gold text-black hover:bg-brand-gold/90"
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
      </CardContent>
    </Card>
  );
};