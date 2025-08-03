import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Trash2, Edit, Plus, Save, X } from 'lucide-react';
import { usePaidGuides, PaidGuide, PaidGuideInsert, PaidGuideUpdate } from '@/hooks/use-paid-guides';
import { useToast } from '@/hooks/use-toast';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';

interface GuideFormData {
  title: string;
  subtitle: string;
  description: string;
  price: string;
  currency: string;
  slug: string;
  stripe_product_id: string;
  stripe_price_id: string;
  watermark_url: string;
  featured: boolean;
  active: boolean;
}

const PaidGuidesManagement: React.FC = () => {
  const { guides, loading, createPaidGuide, updatePaidGuide, deletePaidGuide } = usePaidGuides(true);
  const { toast } = useToast();
  
  const [isCreating, setIsCreating] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState<GuideFormData>({
    title: '',
    subtitle: '',
    description: '',
    price: '',
    currency: 'USD',
    slug: '',
    stripe_product_id: '',
    stripe_price_id: '',
    watermark_url: '',
    featured: false,
    active: true,
  });

  const resetForm = () => {
    setFormData({
      title: '',
      subtitle: '',
      description: '',
      price: '',
      currency: 'USD',
      slug: '',
      stripe_product_id: '',
      stripe_price_id: '',
      watermark_url: '',
      featured: false,
      active: true,
    });
  };

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, '')
      .replace(/\s+/g, '-')
      .replace(/^-+|-+$/g, '');
  };

  const handleInputChange = (field: keyof GuideFormData, value: string | boolean) => {
    setFormData(prev => {
      const updated = { ...prev, [field]: value };
      
      // Auto-generate slug when title changes
      if (field === 'title' && typeof value === 'string') {
        updated.slug = generateSlug(value);
      }
      
      return updated;
    });
  };

  const validateForm = (): boolean => {
    if (!formData.title.trim()) {
      toast({
        title: "Validation Error",
        description: "Title is required",
        variant: "destructive",
      });
      return false;
    }

    if (!formData.price || isNaN(Number(formData.price)) || Number(formData.price) <= 0) {
      toast({
        title: "Validation Error",
        description: "Please enter a valid price in cents",
        variant: "destructive",
      });
      return false;
    }

    if (!formData.slug.trim()) {
      toast({
        title: "Validation Error",
        description: "Slug is required",
        variant: "destructive",
      });
      return false;
    }

    return true;
  };

  const handleCreate = async () => {
    if (!validateForm()) return;

    const guideData: PaidGuideInsert = {
      title: formData.title.trim(),
      subtitle: formData.subtitle.trim() || undefined,
      description: formData.description.trim() || undefined,
      price: Number(formData.price),
      currency: formData.currency,
      slug: formData.slug.trim(),
      stripe_product_id: formData.stripe_product_id.trim() || undefined,
      stripe_price_id: formData.stripe_price_id.trim() || undefined,
      watermark_url: formData.watermark_url.trim() || undefined,
      featured: formData.featured,
      active: formData.active,
    };

    const success = await createPaidGuide(guideData);
    if (success) {
      setIsCreating(false);
      resetForm();
    }
  };

  const handleEdit = (guide: PaidGuide) => {
    setFormData({
      title: guide.title,
      subtitle: guide.subtitle || '',
      description: guide.description || '',
      price: guide.price.toString(),
      currency: guide.currency,
      slug: guide.slug,
      stripe_product_id: guide.stripe_product_id || '',
      stripe_price_id: guide.stripe_price_id || '',
      watermark_url: guide.watermark_url || '',
      featured: guide.featured,
      active: guide.active,
    });
    setEditingId(guide.id);
  };

  const handleUpdate = async () => {
    if (!validateForm() || !editingId) return;

    const updates: PaidGuideUpdate = {
      title: formData.title.trim(),
      subtitle: formData.subtitle.trim() || undefined,
      description: formData.description.trim() || undefined,
      price: Number(formData.price),
      currency: formData.currency,
      slug: formData.slug.trim(),
      stripe_product_id: formData.stripe_product_id.trim() || undefined,
      stripe_price_id: formData.stripe_price_id.trim() || undefined,
      watermark_url: formData.watermark_url.trim() || undefined,
      featured: formData.featured,
      active: formData.active,
    };

    const success = await updatePaidGuide(editingId, updates);
    if (success) {
      setEditingId(null);
      resetForm();
    }
  };

  const handleDelete = async (id: string) => {
    await deletePaidGuide(id);
  };

  const handleCancel = () => {
    setIsCreating(false);
    setEditingId(null);
    resetForm();
  };

  const formatPrice = (price: number) => {
    return `$${(price / 100).toFixed(2)}`;
  };

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Paid Guides Management</h2>
        </div>
        <div className="grid gap-4">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="h-40 animate-pulse bg-muted" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Paid Guides Management</h2>
        {!isCreating && !editingId && (
          <Button onClick={() => setIsCreating(true)} className="flex items-center gap-2">
            <Plus className="h-4 w-4" />
            Add New Guide
          </Button>
        )}
      </div>

      {/* Create/Edit Form */}
      {(isCreating || editingId) && (
        <Card>
          <CardHeader>
            <CardTitle>{isCreating ? 'Create New Paid Guide' : 'Edit Paid Guide'}</CardTitle>
            <CardDescription>
              {isCreating 
                ? 'Add a new premium guide to the vault section'
                : 'Update the selected paid guide details'
              }
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="title">Title *</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => handleInputChange('title', e.target.value)}
                  placeholder="e.g., Flip Debt Into Seed Money"
                />
              </div>
              
              <div>
                <Label htmlFor="subtitle">Subtitle</Label>
                <Input
                  id="subtitle"
                  value={formData.subtitle}
                  onChange={(e) => handleInputChange('subtitle', e.target.value)}
                  placeholder="e.g., Turn liability into liquidity"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
                placeholder="Detailed description of what the guide offers..."
                rows={3}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="price">Price (in cents) *</Label>
                <Input
                  id="price"
                  type="number"
                  value={formData.price}
                  onChange={(e) => handleInputChange('price', e.target.value)}
                  placeholder="4700 (for $47.00)"
                />
              </div>
              
              <div>
                <Label htmlFor="currency">Currency</Label>
                <Input
                  id="currency"
                  value={formData.currency}
                  onChange={(e) => handleInputChange('currency', e.target.value)}
                  placeholder="USD"
                />
              </div>

              <div>
                <Label htmlFor="slug">URL Slug *</Label>
                <Input
                  id="slug"
                  value={formData.slug}
                  onChange={(e) => handleInputChange('slug', e.target.value)}
                  placeholder="flip-debt-seed-money"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="stripe_product_id">Stripe Product ID</Label>
                <Input
                  id="stripe_product_id"
                  value={formData.stripe_product_id}
                  onChange={(e) => handleInputChange('stripe_product_id', e.target.value)}
                  placeholder="prod_..."
                />
              </div>
              
              <div>
                <Label htmlFor="stripe_price_id">Stripe Price ID</Label>
                <Input
                  id="stripe_price_id"
                  value={formData.stripe_price_id}
                  onChange={(e) => handleInputChange('stripe_price_id', e.target.value)}
                  placeholder="price_..."
                />
              </div>
            </div>

            <div>
              <Label htmlFor="watermark_url">Watermark URL</Label>
              <Input
                id="watermark_url"
                value={formData.watermark_url}
                onChange={(e) => handleInputChange('watermark_url', e.target.value)}
                placeholder="https://..."
              />
            </div>

            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Switch
                  id="featured"
                  checked={formData.featured}
                  onCheckedChange={(checked) => handleInputChange('featured', checked)}
                />
                <Label htmlFor="featured">Featured</Label>
              </div>
              
              <div className="flex items-center space-x-2">
                <Switch
                  id="active"
                  checked={formData.active}
                  onCheckedChange={(checked) => handleInputChange('active', checked)}
                />
                <Label htmlFor="active">Active</Label>
              </div>
            </div>

            <div className="flex gap-2 pt-4">
              <Button 
                onClick={isCreating ? handleCreate : handleUpdate}
                className="flex items-center gap-2"
              >
                <Save className="h-4 w-4" />
                {isCreating ? 'Create Guide' : 'Update Guide'}
              </Button>
              <Button variant="outline" onClick={handleCancel} className="flex items-center gap-2">
                <X className="h-4 w-4" />
                Cancel
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Guides List */}
      <div className="grid gap-4">
        {guides.map((guide) => (
          <Card key={guide.id}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    {guide.title}
                    {guide.featured && (
                      <span className="bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded">
                        FEATURED
                      </span>
                    )}
                    {!guide.active && (
                      <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                        INACTIVE
                      </span>
                    )}
                  </CardTitle>
                  <CardDescription>
                    {guide.subtitle} • {formatPrice(guide.price)} • Slug: {guide.slug}
                  </CardDescription>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleEdit(guide)}
                    className="flex items-center gap-1"
                  >
                    <Edit className="h-3 w-3" />
                    Edit
                  </Button>
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button
                        variant="destructive"
                        size="sm"
                        className="flex items-center gap-1"
                      >
                        <Trash2 className="h-3 w-3" />
                        Delete
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Delete Paid Guide</AlertDialogTitle>
                        <AlertDialogDescription>
                          Are you sure you want to delete "{guide.title}"? This action cannot be undone.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction
                          onClick={() => handleDelete(guide.id)}
                          className="bg-destructive text-destructive-foreground"
                        >
                          Delete
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </div>
            </CardHeader>
            {guide.description && (
              <CardContent>
                <p className="text-sm text-muted-foreground">{guide.description}</p>
                {(guide.stripe_product_id || guide.stripe_price_id) && (
                  <div className="mt-2 text-xs text-muted-foreground">
                    {guide.stripe_product_id && <div>Product ID: {guide.stripe_product_id}</div>}
                    {guide.stripe_price_id && <div>Price ID: {guide.stripe_price_id}</div>}
                  </div>
                )}
              </CardContent>
            )}
          </Card>
        ))}
        
        {guides.length === 0 && (
          <Card>
            <CardContent className="text-center py-8">
              <p className="text-muted-foreground">No paid guides found. Create your first one above.</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default PaidGuidesManagement;