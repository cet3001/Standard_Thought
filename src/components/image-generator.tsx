
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Loader2, Download, Copy, Wand2, Search, ExternalLink } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

interface UnsplashPhoto {
  id: string;
  description: string;
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
  };
  user: {
    name: string;
    username: string;
    profileUrl: string;
  };
  downloadUrl: string;
  htmlUrl: string;
  width: number;
  height: number;
}

const ImageGenerator = () => {
  const [dallePrompt, setDallePrompt] = useState('');
  const [dalleLoading, setDalleLoading] = useState(false);
  const [dalleResult, setDalleResult] = useState<{ imageUrl: string; revisedPrompt: string } | null>(null);
  
  const [unsplashQuery, setUnsplashQuery] = useState('');
  const [unsplashLoading, setUnsplashLoading] = useState(false);
  const [unsplashResults, setUnsplashResults] = useState<UnsplashPhoto[]>([]);
  const [unsplashTotal, setUnsplashTotal] = useState(0);

  const generateImage = async () => {
    if (!dallePrompt.trim()) {
      toast.error('Please enter a prompt for image generation');
      return;
    }

    setDalleLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke('generate-image', {
        body: {
          prompt: dallePrompt,
          size: '1024x1024',
          quality: 'hd',
          style: 'vivid'
        }
      });

      if (error) throw error;

      setDalleResult(data);
      toast.success('Image generated successfully!');
    } catch (error: any) {
      console.error('DALL-E generation error:', error);
      toast.error(error.message || 'Failed to generate image');
    } finally {
      setDalleLoading(false);
    }
  };

  const searchPhotos = async () => {
    if (!unsplashQuery.trim()) {
      toast.error('Please enter a search query');
      return;
    }

    setUnsplashLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke('search-photos', {
        body: {
          query: unsplashQuery,
          perPage: 12,
          orientation: 'landscape'
        }
      });

      if (error) throw error;

      setUnsplashResults(data.results);
      setUnsplashTotal(data.total);
      toast.success(`Found ${data.total} photos!`);
    } catch (error: any) {
      console.error('Unsplash search error:', error);
      toast.error(error.message || 'Failed to search photos');
    } finally {
      setUnsplashLoading(false);
    }
  };

  const copyToClipboard = (url: string) => {
    navigator.clipboard.writeText(url);
    toast.success('Image URL copied to clipboard!');
  };

  const downloadImage = async (url: string, filename: string) => {
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const downloadUrl = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(downloadUrl);
      toast.success('Image downloaded!');
    } catch (error) {
      toast.error('Failed to download image');
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-brand-black dark:text-brand-cream mb-4">
          Image Generator & Stock Photos
        </h1>
        <p className="text-brand-black/70 dark:text-brand-cream/70">
          Generate custom AI images or search high-quality stock photos for your content
        </p>
      </div>

      <Tabs defaultValue="dalle" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="dalle" className="flex items-center gap-2">
            <Wand2 size={16} />
            AI Generator (DALL-E)
          </TabsTrigger>
          <TabsTrigger value="unsplash" className="flex items-center gap-2">
            <Search size={16} />
            Stock Photos (Unsplash)
          </TabsTrigger>
        </TabsList>

        <TabsContent value="dalle">
          <Card className="bg-white/95 dark:bg-brand-black/95 border border-[#247EFF]/20">
            <CardHeader>
              <CardTitle className="text-brand-black dark:text-brand-cream">
                Generate Custom Images with AI
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Textarea
                  placeholder="Describe the image you want to generate... (e.g., 'A professional entrepreneur working on a laptop in a modern office, wealth building concept, high quality')"
                  value={dallePrompt}
                  onChange={(e) => setDallePrompt(e.target.value)}
                  rows={3}
                  className="bg-brand-cream/50 dark:bg-brand-black/50"
                />
              </div>
              
              <Button 
                onClick={generateImage}
                disabled={dalleLoading || !dallePrompt.trim()}
                className="bg-[#247EFF] hover:bg-[#0057FF] text-white"
              >
                {dalleLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Wand2 className="w-4 h-4 mr-2" />
                    Generate Image
                  </>
                )}
              </Button>

              {dalleResult && (
                <div className="space-y-4">
                  <div className="relative group">
                    <img
                      src={dalleResult.imageUrl}
                      alt="Generated image"
                      className="w-full rounded-lg shadow-lg"
                    />
                    <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button
                        size="sm"
                        onClick={() => copyToClipboard(dalleResult.imageUrl)}
                        className="bg-black/50 hover:bg-black/70"
                      >
                        <Copy size={14} />
                      </Button>
                      <Button
                        size="sm"
                        onClick={() => downloadImage(dalleResult.imageUrl, 'generated-image.png')}
                        className="bg-black/50 hover:bg-black/70"
                      >
                        <Download size={14} />
                      </Button>
                    </div>
                  </div>
                  {dalleResult.revisedPrompt && (
                    <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                        <strong>Revised Prompt:</strong>
                      </p>
                      <p className="text-sm">{dalleResult.revisedPrompt}</p>
                    </div>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="unsplash">
          <Card className="bg-white/95 dark:bg-brand-black/95 border border-[#247EFF]/20">
            <CardHeader>
              <CardTitle className="text-brand-black dark:text-brand-cream">
                Search High-Quality Stock Photos
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex gap-2">
                <Input
                  placeholder="Search for photos... (e.g., business, money, entrepreneur, success)"
                  value={unsplashQuery}
                  onChange={(e) => setUnsplashQuery(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && searchPhotos()}
                  className="bg-brand-cream/50 dark:bg-brand-black/50"
                />
                <Button 
                  onClick={searchPhotos}
                  disabled={unsplashLoading || !unsplashQuery.trim()}
                  className="bg-[#247EFF] hover:bg-[#0057FF] text-white"
                >
                  {unsplashLoading ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <Search className="w-4 h-4" />
                  )}
                </Button>
              </div>

              {unsplashTotal > 0 && (
                <p className="text-sm text-brand-black/70 dark:text-brand-cream/70">
                  Found {unsplashTotal.toLocaleString()} photos
                </p>
              )}

              {unsplashResults.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {unsplashResults.map((photo) => (
                    <Card key={photo.id} className="overflow-hidden group">
                      <div className="relative">
                        <img
                          src={photo.urls.small}
                          alt={photo.description}
                          className="w-full h-48 object-cover"
                        />
                        <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                          <Button
                            size="sm"
                            onClick={() => copyToClipboard(photo.urls.regular)}
                            className="bg-black/50 hover:bg-black/70 text-white"
                          >
                            <Copy size={12} />
                          </Button>
                          <Button
                            size="sm"
                            onClick={() => downloadImage(photo.urls.regular, `unsplash-${photo.id}.jpg`)}
                            className="bg-black/50 hover:bg-black/70 text-white"
                          >
                            <Download size={12} />
                          </Button>
                          <Button
                            size="sm"
                            asChild
                            className="bg-black/50 hover:bg-black/70 text-white"
                          >
                            <a href={photo.htmlUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink size={12} />
                            </a>
                          </Button>
                        </div>
                      </div>
                      <CardContent className="p-4">
                        <p className="text-sm text-brand-black dark:text-brand-cream mb-2 line-clamp-2">
                          {photo.description || 'High-quality stock photo'}
                        </p>
                        <div className="flex items-center justify-between">
                          <Badge variant="outline" className="text-xs">
                            {photo.width} × {photo.height}
                          </Badge>
                          <p className="text-xs text-brand-black/60 dark:text-brand-cream/60">
                            by {photo.user.name}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ImageGenerator;
