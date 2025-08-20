import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

interface LandingContentItem {
  id: string;
  section_name: string;
  content: any;
  is_active: boolean;
}

const LandingContentManager = () => {
  const [contentItems, setContentItems] = useState<LandingContentItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingItem, setEditingItem] = useState<LandingContentItem | null>(null);

  useEffect(() => {
    fetchContent();
  }, []);

  const fetchContent = async () => {
    try {
      const { data, error } = await supabase
        .from('landing_page_content')
        .select('*')
        .order('section_name');

      if (error) throw error;
      setContentItems(data || []);
    } catch (err) {
      console.error('Error fetching content:', err);
      toast.error('Failed to fetch content');
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async (item: LandingContentItem) => {
    try {
      const { error } = await supabase
        .from('landing_page_content')
        .update({ 
          content: item.content,
          is_active: item.is_active 
        })
        .eq('id', item.id);

      if (error) throw error;
      
      toast.success('Content updated successfully');
      setEditingItem(null);
      fetchContent();
    } catch (err) {
      console.error('Error updating content:', err);
      toast.error('Failed to update content');
    }
  };

  const handleEdit = (item: LandingContentItem) => {
    setEditingItem({ ...item });
  };

  const handleCancel = () => {
    setEditingItem(null);
  };

  const updateEditingContent = (field: string, value: any) => {
    if (!editingItem) return;
    
    setEditingItem({
      ...editingItem,
      content: {
        ...editingItem.content,
        [field]: value
      }
    });
  };

  if (loading) {
    return <div className="p-6">Loading content...</div>;
  }

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-bold">Landing Page Content Manager</h2>
      
      {contentItems.map((item) => (
        <Card key={item.id} className="w-full">
          <CardHeader>
            <CardTitle className="flex justify-between items-center">
              <span className="capitalize">{item.section_name.replace('_', ' ')}</span>
              <div className="space-x-2">
                <Button
                  variant="outline"
                  onClick={() => handleEdit(item)}
                  disabled={editingItem?.id === item.id}
                >
                  Edit
                </Button>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            {editingItem?.id === item.id ? (
              <div className="space-y-4">
                {/* Hero Content Editor */}
                {item.section_name === 'hero' && (
                  <>
                    <div>
                      <label className="block text-sm font-medium mb-1">Headline</label>
                      <Input
                        value={editingItem.content.headline || ''}
                        onChange={(e) => updateEditingContent('headline', e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Subheadline</label>
                      <Textarea
                        value={editingItem.content.subheadline || ''}
                        onChange={(e) => updateEditingContent('subheadline', e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">CTA Text</label>
                      <Input
                        value={editingItem.content.ctaText || ''}
                        onChange={(e) => updateEditingContent('ctaText', e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">CTA URL</label>
                      <Input
                        value={editingItem.content.ctaUrl || ''}
                        onChange={(e) => updateEditingContent('ctaUrl', e.target.value)}
                      />
                    </div>
                  </>
                )}

                {/* Value Props Content Editor */}
                {item.section_name === 'value_props' && (
                  <>
                    <div>
                      <label className="block text-sm font-medium mb-1">Title</label>
                      <Input
                        value={editingItem.content.title || ''}
                        onChange={(e) => updateEditingContent('title', e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Subtitle</label>
                      <Input
                        value={editingItem.content.subtitle || ''}
                        onChange={(e) => updateEditingContent('subtitle', e.target.value)}
                      />
                    </div>
                  </>
                )}

                {/* Social Proof Content Editor */}
                {item.section_name === 'social_proof' && (
                  <div>
                    <label className="block text-sm font-medium mb-1">Content (JSON)</label>
                    <Textarea
                      value={JSON.stringify(editingItem.content, null, 2)}
                      onChange={(e) => {
                        try {
                          const parsed = JSON.parse(e.target.value);
                          setEditingItem({
                            ...editingItem,
                            content: parsed
                          });
                        } catch (err) {
                          // Invalid JSON, don't update
                        }
                      }}
                      rows={8}
                      className="font-mono text-sm"
                    />
                  </div>
                )}

                <div className="flex space-x-2">
                  <Button onClick={() => handleSave(editingItem)}>
                    Save Changes
                  </Button>
                  <Button variant="outline" onClick={handleCancel}>
                    Cancel
                  </Button>
                </div>
              </div>
            ) : (
              <div className="space-y-2">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <pre className="text-sm text-gray-600 overflow-x-auto">
                    {JSON.stringify(item.content, null, 2)}
                  </pre>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm">Active:</span>
                  <span className={`px-2 py-1 rounded text-xs ${
                    item.is_active ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {item.is_active ? 'Yes' : 'No'}
                  </span>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default LandingContentManager;