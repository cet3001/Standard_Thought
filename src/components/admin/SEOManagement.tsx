import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { DEFAULTS } from "@/components/seo/defaults";

interface SEOSettings {
  id?: string;
  page_type: string;
  title: string;
  description: string;
  keywords: string;
  meta_image: string;
  is_active: boolean;
  created_at?: string;
  updated_at?: string;
}

const SEOManagement = () => {
  const [settings, setSettings] = useState<SEOSettings[]>([]);
  const [currentSetting, setCurrentSetting] = useState<SEOSettings>({
    page_type: 'homepage',
    title: DEFAULTS.title,
    description: DEFAULTS.description,
    keywords: DEFAULTS.keywords,
    meta_image: DEFAULTS.image,
    is_active: true
  });
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const { toast } = useToast();

  const pageTypes = [
    { value: 'homepage', label: 'Homepage' },
    { value: 'blog', label: 'Blog Listing' },
    { value: 'blog_post', label: 'Blog Post Template' },
    { value: 'cash_management', label: 'Cash Management' },
    { value: 'credit_building', label: 'Credit Building' },
    { value: 'investing', label: 'Investing' },
    { value: 'ai_side_hustles', label: 'AI Side Hustles' },
    { value: 'sales', label: 'Sales Page' }
  ];

  const missionFocusedPhrases = [
    "Build generational wealth from grit and instinct—no inheritance needed",
    "Urban wealth building for first-gen entrepreneurs who refuse to stay broke",
    "Turn street smarts into investment strategies that actually work",
    "Financial education that speaks your language, not Wall Street's",
    "From the hood to wealth—practical money moves for real people",
    "Break generational poverty with proven urban wealth strategies",
    "AI side hustles and money moves for the culture",
    "Investment blueprints designed for people who started with nothing"
  ];

  useEffect(() => {
    loadSEOSettings();
  }, []);

  const loadSEOSettings = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('seo_settings')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setSettings(data || []);
    } catch (error) {
      console.error('Error loading SEO settings:', error);
      toast({
        title: "Error",
        description: "Failed to load SEO settings",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const saveSEOSetting = async () => {
    setSaving(true);
    try {
      const { data, error } = currentSetting.id 
        ? await supabase
            .from('seo_settings')
            .update({
              title: currentSetting.title,
              description: currentSetting.description,
              keywords: currentSetting.keywords,
              meta_image: currentSetting.meta_image,
              is_active: currentSetting.is_active,
              updated_at: new Date().toISOString()
            })
            .eq('id', currentSetting.id)
            .select()
        : await supabase
            .from('seo_settings')
            .insert([{
              page_type: currentSetting.page_type,
              title: currentSetting.title,
              description: currentSetting.description,
              keywords: currentSetting.keywords,
              meta_image: currentSetting.meta_image,
              is_active: currentSetting.is_active
            }])
            .select();

      if (error) throw error;

      toast({
        title: "Success",
        description: "SEO settings saved successfully",
      });

      loadSEOSettings();
      
      // Reset form
      setCurrentSetting({
        page_type: 'homepage',
        title: DEFAULTS.title,
        description: DEFAULTS.description,
        keywords: DEFAULTS.keywords,
        meta_image: DEFAULTS.image,
        is_active: true
      });
    } catch (error) {
      console.error('Error saving SEO setting:', error);
      toast({
        title: "Error",
        description: "Failed to save SEO settings",
        variant: "destructive"
      });
    } finally {
      setSaving(false);
    }
  };

  const loadSetting = (setting: SEOSettings) => {
    setCurrentSetting(setting);
  };

  const generateBlogPostSEO = (title: string, content: string) => {
    // Extract key themes for keywords
    const keywords = content
      .toLowerCase()
      .match(/\b(wealth|money|invest|credit|cash|budget|save|financial|urban|entrepreneur|side hustle|income|portfolio)\w*/g)
      ?.slice(0, 10)
      .join(', ') || 'wealth building, financial education, urban finance';

    // Generate compelling description
    const description = content
      .replace(/<[^>]*>/g, '') // Remove HTML
      .slice(0, 140) + '...';

    return {
      title: `${title} | Urban Wealth Building Guide | Standardthought`,
      description,
      keywords: `${keywords}, standardthought, urban wealth building, financial literacy`
    };
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">SEO Management</h2>
        <p className="text-muted-foreground">
          Manage SEO settings for different page types and optimize for answer engines
        </p>
      </div>

      <Tabs defaultValue="settings" className="space-y-6">
        <TabsList>
          <TabsTrigger value="settings">SEO Settings</TabsTrigger>
          <TabsTrigger value="generator">Blog Post Generator</TabsTrigger>
          <TabsTrigger value="phrases">Mission Phrases</TabsTrigger>
        </TabsList>

        <TabsContent value="settings" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Form */}
            <Card>
              <CardHeader>
                <CardTitle>
                  {currentSetting.id ? 'Edit SEO Setting' : 'Create SEO Setting'}
                </CardTitle>
                <CardDescription>
                  Configure SEO metadata for different page types
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="page_type">Page Type</Label>
                  <select
                    id="page_type"
                    value={currentSetting.page_type}
                    onChange={(e) => setCurrentSetting({
                      ...currentSetting, 
                      page_type: e.target.value
                    })}
                    className="w-full px-3 py-2 border border-input rounded-md bg-background"
                  >
                    {pageTypes.map(type => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="title">Title (max 60 chars)</Label>
                  <Input
                    id="title"
                    value={currentSetting.title}
                    onChange={(e) => setCurrentSetting({
                      ...currentSetting, 
                      title: e.target.value
                    })}
                    maxLength={60}
                  />
                  <p className="text-sm text-muted-foreground">
                    {currentSetting.title.length}/60 characters
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description (max 160 chars)</Label>
                  <Textarea
                    id="description"
                    value={currentSetting.description}
                    onChange={(e) => setCurrentSetting({
                      ...currentSetting, 
                      description: e.target.value
                    })}
                    maxLength={160}
                    rows={3}
                  />
                  <p className="text-sm text-muted-foreground">
                    {currentSetting.description.length}/160 characters
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="keywords">Keywords (comma-separated)</Label>
                  <Textarea
                    id="keywords"
                    value={currentSetting.keywords}
                    onChange={(e) => setCurrentSetting({
                      ...currentSetting, 
                      keywords: e.target.value
                    })}
                    rows={2}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="meta_image">Meta Image URL</Label>
                  <Input
                    id="meta_image"
                    value={currentSetting.meta_image}
                    onChange={(e) => setCurrentSetting({
                      ...currentSetting, 
                      meta_image: e.target.value
                    })}
                  />
                </div>

                <Button 
                  onClick={saveSEOSetting} 
                  disabled={saving}
                  className="w-full"
                >
                  {saving ? 'Saving...' : 'Save SEO Setting'}
                </Button>
              </CardContent>
            </Card>

            {/* Existing Settings */}
            <Card>
              <CardHeader>
                <CardTitle>Existing SEO Settings</CardTitle>
                <CardDescription>
                  Click to edit existing settings
                </CardDescription>
              </CardHeader>
              <CardContent>
                {loading ? (
                  <p>Loading...</p>
                ) : settings.length === 0 ? (
                  <p className="text-muted-foreground">No SEO settings found</p>
                ) : (
                  <div className="space-y-3">
                    {settings.map((setting) => (
                      <div
                        key={setting.id}
                        className="p-3 border rounded-lg cursor-pointer hover:bg-muted/50"
                        onClick={() => loadSetting(setting)}
                      >
                        <div className="flex items-center justify-between">
                          <h4 className="font-medium">{setting.page_type}</h4>
                          <Badge variant={setting.is_active ? "default" : "secondary"}>
                            {setting.is_active ? "Active" : "Inactive"}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground truncate">
                          {setting.title}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="generator" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Blog Post SEO Generator</CardTitle>
              <CardDescription>
                Auto-generate SEO metadata for blog posts based on content
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="blog_title">Blog Post Title</Label>
                <Input
                  id="blog_title"
                  placeholder="Enter blog post title..."
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="blog_content">Blog Post Content (first 500 words)</Label>
                <Textarea
                  id="blog_content"
                  placeholder="Paste blog content here for keyword extraction..."
                  rows={6}
                />
              </div>

              <Button 
                onClick={() => {
                  const titleInput = document.getElementById('blog_title') as HTMLInputElement;
                  const contentInput = document.getElementById('blog_content') as HTMLTextAreaElement;
                  
                  if (titleInput?.value && contentInput?.value) {
                    const generated = generateBlogPostSEO(titleInput.value, contentInput.value);
                    setCurrentSetting({
                      ...currentSetting,
                      page_type: 'blog_post',
                      title: generated.title,
                      description: generated.description,
                      keywords: generated.keywords
                    });
                    
                    toast({
                      title: "SEO Generated",
                      description: "Blog post SEO has been generated. Review and save."
                    });
                  }
                }}
              >
                Generate SEO Metadata
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="phrases" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Mission-Focused Phrases</CardTitle>
              <CardDescription>
                Pre-written phrases optimized for urban wealth building messaging
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                {missionFocusedPhrases.map((phrase, index) => (
                  <div
                    key={index}
                    className="p-4 border rounded-lg hover:bg-muted/50 cursor-pointer"
                    onClick={() => {
                      setCurrentSetting({
                        ...currentSetting,
                        description: phrase
                      });
                      toast({
                        title: "Phrase Selected",
                        description: "Mission phrase added to description field"
                      });
                    }}
                  >
                    <p className="text-sm font-medium">{phrase}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SEOManagement;
