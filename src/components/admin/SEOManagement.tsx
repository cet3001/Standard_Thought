import { useState, useEffect, useMemo } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Badge } from "@/components/ui/badge";
import { Plus, Save, Trash, BarChart3, Search, ArrowUpDown, ArrowUp, ArrowDown } from "lucide-react";
import { AdminSectionCard } from './AdminSectionCard';

interface SEOSetting {
  id: string;
  page_type: string;
  title: string;
  description: string;
  keywords: string;
  meta_image?: string;
  og_title?: string;
  og_description?: string;
  twitter_title?: string;
  twitter_description?: string;
  is_active: boolean;
}

const PAGE_TYPES = [
  'homepage',
  'blog',
  'about',
  'contact',
  'credit',
  'cash-management',
  'investing',
  'ai-side-hustles'
];

export const SEOManagement = () => {
  const [seoSettings, setSeoSettings] = useState<SEOSetting[]>([]);
  const [selectedSetting, setSelectedSetting] = useState<SEOSetting | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  // Search and Sort states
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

  // Filtered and sorted SEO settings
  const filteredAndSortedSettings = useMemo(() => {
    let filteredSettings = seoSettings;

    // Apply search filter
    if (searchTerm) {
      filteredSettings = filteredSettings.filter(setting => 
        setting.page_type.toLowerCase().includes(searchTerm.toLowerCase()) ||
        setting.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Apply sorting
    return [...filteredSettings].sort((a, b) => {
      const comparison = a.page_type.localeCompare(b.page_type);
      return sortDirection === 'desc' ? -comparison : comparison;
    });
  }, [seoSettings, searchTerm, sortDirection]);

  const handleSort = () => {
    setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
  };

  const getSortIcon = () => {
    return sortDirection === 'asc' ? <ArrowUp className="h-4 w-4" /> : <ArrowDown className="h-4 w-4" />;
  };

  useEffect(() => {
    loadSEOSettings();
  }, []);

  const loadSEOSettings = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('seo_settings')
        .select('*')
        .order('page_type');

      if (error) throw error;
      setSeoSettings(data || []);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to load SEO settings",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const createNewSetting = () => {
    const newSetting: SEOSetting = {
      id: '',
      page_type: '',
      title: '',
      description: '',
      keywords: '',
      meta_image: '',
      og_title: '',
      og_description: '',
      twitter_title: '',
      twitter_description: '',
      is_active: true
    };
    setSelectedSetting(newSetting);
    setIsEditing(true);
  };

  const saveSetting = async () => {
    if (!selectedSetting) return;

    setLoading(true);
    try {
      const settingData = {
        page_type: selectedSetting.page_type,
        title: selectedSetting.title,
        description: selectedSetting.description,
        keywords: selectedSetting.keywords,
        meta_image: selectedSetting.meta_image,
        og_title: selectedSetting.og_title,
        og_description: selectedSetting.og_description,
        twitter_title: selectedSetting.twitter_title,
        twitter_description: selectedSetting.twitter_description,
        is_active: selectedSetting.is_active
      };

      let result;
      if (selectedSetting.id) {
        // Update existing
        result = await supabase
          .from('seo_settings')
          .update(settingData)
          .eq('id', selectedSetting.id);
      } else {
        // Create new
        result = await supabase
          .from('seo_settings')
          .insert(settingData);
      }

      if (result.error) throw result.error;

      toast({
        title: "Success",
        description: "SEO settings saved successfully"
      });

      setIsEditing(false);
      loadSEOSettings();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to save SEO settings",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const deleteSetting = async (id: string) => {
    setLoading(true);
    try {
      const { error } = await supabase
        .from('seo_settings')
        .delete()
        .eq('id', id);

      if (error) throw error;

      toast({
        title: "Success",
        description: "SEO setting deleted successfully"
      });

      setSelectedSetting(null);
      loadSEOSettings();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to delete SEO setting",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const updateSelectedSetting = (field: keyof SEOSetting, value: any) => {
    if (!selectedSetting) return;
    setSelectedSetting({
      ...selectedSetting,
      [field]: value
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <BarChart3 className="h-6 w-6" />
            SEO Management
          </h2>
          <p className="text-muted-foreground">
            Manage dynamic SEO settings for different pages. Optimize for AEO and urban wealth building content.
          </p>
        </div>
        <Button onClick={createNewSetting} className="flex items-center gap-2">
          <Plus className="h-4 w-4" />
          Add SEO Setting
        </Button>
      </div>

      <div className="space-y-6">
        {/* Search and Sort Controls */}
        <AdminSectionCard 
          title="Search & Sort"
          icon={<Search className="h-5 w-5" />}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">Search Pages</label>
              <Input
                type="text"
                placeholder="Search pages..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-background border-border"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">Sort Order</label>
              <Button
                variant="outline"
                onClick={handleSort}
                className="w-full flex items-center gap-2 justify-center bg-background border-border hover:bg-accent"
              >
                Page Name {getSortIcon()}
              </Button>
            </div>
          </div>
          <div className="mt-4 text-sm text-muted-foreground">
            Showing {filteredAndSortedSettings.length} of {seoSettings.length} SEO settings
          </div>
        </AdminSectionCard>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* SEO Settings List */}
          <AdminSectionCard 
            title="SEO Settings"
            description="Click on a setting to edit or create new ones for different pages"
            icon={<BarChart3 className="h-5 w-5" />}
          >
            <div className="space-y-2">
              {filteredAndSortedSettings.map((setting) => (
                <div
                  key={setting.id}
                  className={`p-3 border rounded-lg cursor-pointer hover:bg-accent transition-colors ${
                    selectedSetting?.id === setting.id ? 'border-primary bg-accent' : ''
                  }`}
                  onClick={() => {
                    setSelectedSetting(setting);
                    setIsEditing(false);
                  }}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">{setting.page_type}</h4>
                      <p className="text-sm text-muted-foreground truncate">
                        {setting.title}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant={setting.is_active ? "default" : "secondary"}>
                        {setting.is_active ? "Active" : "Inactive"}
                      </Badge>
                    </div>
                  </div>
                </div>
              ))}
              {filteredAndSortedSettings.length === 0 && searchTerm && (
                <p className="text-center text-muted-foreground py-4">
                  No SEO settings found matching "{searchTerm}". Try a different search term.
                </p>
              )}
              {filteredAndSortedSettings.length === 0 && !searchTerm && (
                <p className="text-center text-muted-foreground py-4">
                  No SEO settings found. Create your first one!
                </p>
              )}
            </div>
          </AdminSectionCard>

          {/* SEO Editor */}
          {selectedSetting && (
            <AdminSectionCard 
              title={`${isEditing ? 'Edit' : 'View'} SEO Setting`}
              description="Configure meta tags, Open Graph, and Twitter cards"
              icon={<Save className="h-5 w-5" />}
            >
            <div className="flex gap-2 mb-6">
              {!isEditing && (
                <Button variant="outline" onClick={() => setIsEditing(true)}>
                  Edit
                </Button>
              )}
              {isEditing && (
                <>
                  <Button variant="outline" onClick={() => setIsEditing(false)}>
                    Cancel
                  </Button>
                  <Button onClick={saveSetting} disabled={loading}>
                    <Save className="h-4 w-4 mr-2" />
                    Save
                  </Button>
                </>
              )}
              {selectedSetting.id && (
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => deleteSetting(selectedSetting.id)}
                >
                  <Trash className="h-4 w-4" />
                </Button>
              )}
            </div>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="page_type">Page Type</Label>
                <Select
                  value={selectedSetting.page_type}
                  onValueChange={(value) => updateSelectedSetting('page_type', value)}
                  disabled={!isEditing}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select page type" />
                  </SelectTrigger>
                  <SelectContent>
                    {PAGE_TYPES.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  value={selectedSetting.title}
                  onChange={(e) => updateSelectedSetting('title', e.target.value)}
                  disabled={!isEditing}
                  placeholder="Build Generational Wealth From Grit and Instinct"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={selectedSetting.description}
                  onChange={(e) => updateSelectedSetting('description', e.target.value)}
                  disabled={!isEditing}
                  placeholder="Build generational wealth from grit and instinct—no inheritance needed..."
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="keywords">Cultural Keywords (AEO-optimized)</Label>
                <Textarea
                  id="keywords"
                  value={selectedSetting.keywords}
                  onChange={(e) => updateSelectedSetting('keywords', e.target.value)}
                  disabled={!isEditing}
                  placeholder="Black generational trauma flip, urban mindset 2025, cycle-breaking wealth strategies, first-gen Black entrepreneurs, trauma-to-legacy transformation, urban wealth blueprints, recession-proof Black business..."
                  rows={3}
                />
                <div className="flex flex-wrap gap-1 mt-2">
                  {['Black generational trauma flip', 'urban mindset 2025', 'cycle-breaking wealth', 'first-gen Black entrepreneurs', 'trauma-to-legacy transformation', 'recession-proof Black business'].map((keyword) => (
                    <Badge
                      key={keyword}
                      variant="outline"
                      className="cursor-pointer text-xs"
                      onClick={() => {
                        if (isEditing) {
                          const currentKeywords = selectedSetting.keywords || '';
                          const newKeywords = currentKeywords ? `${currentKeywords}, ${keyword}` : keyword;
                          updateSelectedSetting('keywords', newKeywords);
                        }
                      }}
                    >
                      + {keyword}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="og_title">Open Graph Title</Label>
                <Input
                  id="og_title"
                  value={selectedSetting.og_title || ''}
                  onChange={(e) => updateSelectedSetting('og_title', e.target.value)}
                  disabled={!isEditing}
                  placeholder="Custom Open Graph title (optional)"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="twitter_title">Twitter Title</Label>
                <Input
                  id="twitter_title"
                  value={selectedSetting.twitter_title || ''}
                  onChange={(e) => updateSelectedSetting('twitter_title', e.target.value)}
                  disabled={!isEditing}
                  placeholder="Custom Twitter title (optional)"
                />
              </div>

              <div className="flex items-center space-x-2">
                <Switch
                  id="is_active"
                  checked={selectedSetting.is_active}
                  onCheckedChange={(checked) => updateSelectedSetting('is_active', checked)}
                  disabled={!isEditing}
                />
                <Label htmlFor="is_active">Active</Label>
              </div>
            </div>
          </AdminSectionCard>
          )}
        </div>
      </div>
    </div>
  );
};