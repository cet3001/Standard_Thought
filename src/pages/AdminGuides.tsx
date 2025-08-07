import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useGuides } from '@/hooks/use-guides';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Plus, Edit, Trash2, Eye, EyeOff, Settings, ArrowLeft } from 'lucide-react';
import { GuideForm } from '@/components/admin/GuideForm';
import { CTAManagement } from '@/components/admin/CTAManagement';
import { Guide } from '@/hooks/use-guides';
import { useToast } from '@/hooks/use-toast';
import { Link } from 'react-router-dom';
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import SEO from "@/components/seo";
import { useHeaderHeight } from "@/hooks/use-header-height";

const AdminGuides = () => {
  const { isAdmin } = useAuth();
  const { guides, loading, deleteGuide, updateGuide } = useGuides(true);
  const [showForm, setShowForm] = useState(false);
  const [editingGuide, setEditingGuide] = useState<Guide | null>(null);
  const { toast } = useToast();
  const headerHeight = useHeaderHeight(); // Move hook call to top

  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-brand-black text-brand-cream p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-center">Access Denied</h1>
          <p className="text-center mt-4">You don't have permission to access this page.</p>
        </div>
      </div>
    );
  }

  const handleToggleActive = async (guide: Guide) => {
    try {
      await updateGuide(guide.id, { is_active: !guide.is_active });
      toast({
        title: "Success",
        description: `Guide ${guide.is_active ? 'deactivated' : 'activated'} successfully`,
      });
    } catch (error) {
      console.error('Error toggling guide status:', error);
    }
  };

  const handleEdit = (guide: Guide) => {
    setEditingGuide(guide);
    setShowForm(true);
  };

  const handleDelete = async (guide: Guide) => {
    if (window.confirm(`Are you sure you want to delete "${guide.title}"?`)) {
      await deleteGuide(guide.id);
    }
  };

  const handleFormClose = () => {
    setShowForm(false);
    setEditingGuide(null);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-brand-black text-brand-cream p-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">Loading guides...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Guides Management | Admin | Standardthought"
        description="Manage your guides, pricing, content, and CTA connections."
        url="/admin/guides"
        noIndex={true}
      />
      
      <Navigation />
      
      <main style={{ marginTop: `${headerHeight}px`, paddingTop: '3rem', paddingBottom: '4rem' }}>
        <div className="container mx-auto px-6 max-w-6xl">
          {/* Back Button */}
          <div className="mb-6">
            <Link to="/admin">
              <Button variant="outline" className="border-muted-foreground/20 hover:bg-accent">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Dashboard
              </Button>
            </Link>
          </div>
          
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">Guide Management</h1>
              <p className="text-muted-foreground">Manage your guides, pricing, content, and CTA connections</p>
            </div>
          </div>

        <Tabs defaultValue="guides" className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-muted border border-border">{/* ... keep existing code */}
            <TabsTrigger value="guides" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              Guides
            </TabsTrigger>
            <TabsTrigger value="cta-management" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <Settings className="mr-2 h-4 w-4" />
              CTA Management
            </TabsTrigger>
          </TabsList>

          <TabsContent value="guides" className="space-y-6">
            {showForm && (
              <div className="mb-6">
                <GuideForm
                  guide={editingGuide}
                  onClose={handleFormClose}
                  onSuccess={handleFormClose}
                />
              </div>
            )}

            <div className="flex justify-end mb-6">
              <Button
                onClick={() => setShowForm(true)}
                className="bg-gradient-to-r from-[#FFD700] via-[#FFF8DC] to-[#FFA500] text-black font-bold hover:from-[#FFA500] hover:to-[#FFD700] shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-[#FFD700]"
              >
                <Plus className="mr-2 h-4 w-4" />
                Add New Guide
              </Button>
            </div>

            <div className="grid gap-6">
              {guides.length === 0 ? (
                <Card className="bg-slate-800 border-slate-700">
                  <CardContent className="text-center py-12">
                    <p className="text-brand-cream/60 mb-4">No guides created yet</p>
                    <Button
                      onClick={() => setShowForm(true)}
                      className="bg-gradient-to-r from-[#FFD700] via-[#FFF8DC] to-[#FFA500] text-black font-bold hover:from-[#FFA500] hover:to-[#FFD700] shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-[#FFD700]"
                    >
                      <Plus className="mr-2 h-4 w-4" />
                      Create Your First Guide
                    </Button>
                  </CardContent>
                </Card>
              ) : (
                guides.map((guide) => (
                  <Card key={guide.id} className="bg-slate-800 border-slate-700">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <CardTitle className="text-brand-cream">{guide.title}</CardTitle>
                            <Badge
                              variant={guide.is_active ? "default" : "secondary"}
                              className={guide.is_active ? "bg-green-600" : "bg-gray-600"}
                            >
                              {guide.is_active ? "Active" : "Inactive"}
                            </Badge>
                            <Badge variant="outline" className="border-brand-gold text-brand-gold">
                              {guide.price > 0 ? `$${guide.price}` : "Free"}
                            </Badge>
                          </div>
                          <p className="text-brand-cream/80 text-sm">{guide.description}</p>
                        </div>
                        <div className="flex gap-2 ml-4">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleToggleActive(guide)}
                            className="border-slate-600"
                          >
                            {guide.is_active ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleEdit(guide)}
                            className="border-slate-600"
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleDelete(guide)}
                            className="border-red-600 text-red-400 hover:bg-red-900/20"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      {guide.bullets && guide.bullets.length > 0 && (
                        <div className="mb-4">
                          <h4 className="text-sm font-semibold text-brand-cream mb-2">Key Points:</h4>
                          <ul className="list-disc list-inside text-sm text-brand-cream/80 space-y-1">
                            {guide.bullets.map((bullet, index) => (
                              <li key={index}>{bullet}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                      <div className="flex justify-between items-center text-sm text-brand-cream/60">
                        <div>
                          Sort Order: {guide.sort_order}
                        </div>
                        <div>
                          {guide.file_name ? `File: ${guide.file_name}` : "No file uploaded"}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))
              )}
            </div>
          </TabsContent>

          <TabsContent value="cta-management">
            <CTAManagement />
          </TabsContent>
        </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AdminGuides;