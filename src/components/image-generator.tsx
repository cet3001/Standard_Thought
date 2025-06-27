
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Download, Copy, Wand2 } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

const ImageGenerator = () => {
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{ imageUrl: string; revisedPrompt: string } | null>(null);

  const generateImage = async () => {
    if (!prompt.trim()) {
      toast.error('Please enter a prompt for image generation');
      return;
    }

    setLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke('generate-image', {
        body: {
          prompt: prompt,
          size: '1024x1024',
          quality: 'hd',
          style: 'vivid'
        }
      });

      if (error) throw error;

      setResult(data);
      toast.success('Image generated successfully!');
    } catch (error: unknown) {
      console.error('DALL-E generation error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Failed to generate image';
      toast.error(errorMessage);
    } finally {
      setLoading(false);
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
    <div className="max-w-4xl mx-auto p-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-brand-black dark:text-brand-cream mb-4">
          AI Image Generator
        </h1>
        <p className="text-brand-black/70 dark:text-brand-cream/70">
          Generate custom AI images with DALL-E for your wealth-building content
        </p>
      </div>

      <Card className="bg-white/95 dark:bg-brand-black/95 border border-[#247EFF]/20">
        <CardHeader>
          <CardTitle className="text-brand-black dark:text-brand-cream flex items-center gap-2">
            <Wand2 size={20} />
            Generate Custom Images with AI
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <Textarea
              placeholder="Describe the image you want to generate... (e.g., 'A professional entrepreneur working on a laptop in a modern office, wealth building concept, high quality')"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              rows={4}
              className="bg-brand-cream/50 dark:bg-brand-black/50"
            />
          </div>
          
          <Button 
            onClick={generateImage}
            disabled={loading || !prompt.trim()}
            className="bg-[#247EFF] hover:bg-[#0057FF] text-white w-full"
            size="lg"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Generating Image...
              </>
            ) : (
              <>
                <Wand2 className="w-4 h-4 mr-2" />
                Generate Image
              </>
            )}
          </Button>

          {result && (
            <div className="space-y-4">
              <div className="relative group">
                <img
                  src={result.imageUrl}
                  alt="Generated image"
                  className="w-full rounded-lg shadow-lg"
                />
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button
                    size="sm"
                    onClick={() => copyToClipboard(result.imageUrl)}
                    className="bg-black/50 hover:bg-black/70"
                  >
                    <Copy size={14} />
                  </Button>
                  <Button
                    size="sm"
                    onClick={() => downloadImage(result.imageUrl, 'generated-image.png')}
                    className="bg-black/50 hover:bg-black/70"
                  >
                    <Download size={14} />
                  </Button>
                </div>
              </div>
              {result.revisedPrompt && (
                <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    <strong>Revised Prompt:</strong>
                  </p>
                  <p className="text-sm">{result.revisedPrompt}</p>
                </div>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default ImageGenerator;
