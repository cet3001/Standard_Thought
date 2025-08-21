import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useGuides } from '@/hooks/use-guides';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Checkbox } from '@/components/ui/checkbox';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { Plus, Edit, Trash2, Eye, EyeOff, Settings } from 'lucide-react';
import { GuideForm } from '@/components/admin/GuideForm';
import { CTAManagement } from '@/components/admin/CTAManagement';
import { Guide } from '@/hooks/use-guides';
import { useToast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router-dom';
import { AdminLayout } from '@/components/admin/AdminLayout';

const AdminGuides = () => {
  const navigate = useNavigate();
  const { isAdmin } = useAuth();
  const { guides, loading, deleteGuide, deleteBulkGuides, updateGuide } = useGuides(true);
  const [showForm, setShowForm] = useState(false);
  const [editingGuide, setEditingGuide] = useState<Guide | null>(null);
  const [selectedGuides, setSelectedGuides] = useState<string[]>([]);
  const { toast } = useToast();

  if (!isAdmin) {
    return (
      <AdminLayout title="Access Denied">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Access Denied</h1>
          <p className="mt-4">You don't have permission to access this page.</p>
        </div>
      </AdminLayout>
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

  const handleFormSuccess = (createdGuide?: Guide) => {
    if (createdGuide) {
      // New guide created - navigate to success page
      navigate(`/admin/guides/success/${createdGuide.id}`);
    } else {
      // Existing guide updated - just close form
      handleFormClose();
    }
  };

  const handleSelectGuide = (guideId: string, checked: boolean) => {
    setSelectedGuides(prev => 
      checked 
        ? [...prev, guideId]
        : prev.filter(id => id !== guideId)
    );
  };

  const handleSelectAll = (checked: boolean) => {
    setSelectedGuides(checked ? guides.map(guide => guide.id) : []);
  };

  const handleBulkDelete = async () => {
    try {
      await deleteBulkGuides(selectedGuides);
      setSelectedGuides([]);
    } catch (error) {
      console.error('Error deleting guides:', error);
    }
  };

  const clearSelection = () => {
    setSelectedGuides([]);
  };

  if (loading) {
    return (
      <AdminLayout title="Loading...">
        <div className="text-center">Loading guides...</div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout title="Guide Management" description="Manage your guides, pricing, content, and CTA connections">
      <Tabs defaultValue="guides" className="w-full">
        <TabsList className="grid w-full grid-cols-2 bg-muted border border-border">
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
                onSuccess={handleFormSuccess}
              />
            </div>
          )}

          {/* Bulk Action Toolbar */}
          {selectedGuides.length > 0 && (
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="flex items-center justify-between p-4">
                <div className="flex items-center gap-3">
                  <Badge variant="secondary" className="bg-primary/10 text-primary">
                    {selectedGuides.length} selected
                  </Badge>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={clearSelection}
                  >
                    Clear Selection
                  </Button>
                </div>
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button variant="destructive" size="sm">
                      <Trash2 className="mr-2 h-4 w-4" />
                      Delete Selected
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Delete Selected Guides</AlertDialogTitle>
                      <AlertDialogDescription>
                        Are you sure you want to delete {selectedGuides.length} selected guides? This action cannot be undone.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction
                        onClick={handleBulkDelete}
                        className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                      >
                        Delete All
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </CardContent>
            </Card>
          )}

          <div className="flex items-center justify-between mb-6">
            {guides.length > 0 && (
              <div className="flex items-center gap-4">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="select-all"
                    checked={selectedGuides.length === guides.length && guides.length > 0}
                    onCheckedChange={handleSelectAll}
                  />
                  <label 
                    htmlFor="select-all" 
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                  >
                    Select all guides
                  </label>
                </div>
              </div>
            )}
            <Button
              onClick={() => setShowForm(true)}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <Plus className="mr-2 h-4 w-4" />
              Add New Guide
            </Button>
          </div>

          <div className="grid gap-6">
            {guides.length === 0 ? (
              <Card>
                <CardContent className="text-center py-12">
                  <p className="text-muted-foreground mb-4">No guides created yet</p>
                  <Button
                    onClick={() => setShowForm(true)}
                    className="bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    <Plus className="mr-2 h-4 w-4" />
                    Create Your First Guide
                  </Button>
                </CardContent>
              </Card>
            ) : (
              guides.map((guide) => (
                <Card key={guide.id} className={`hover:shadow-lg transition-shadow ${selectedGuides.includes(guide.id) ? 'ring-2 ring-primary/50 bg-primary/5' : ''}`}>
                  <CardHeader className="pb-4">
                    <div className="flex justify-between items-start">
                      <div className="flex items-center gap-3 flex-1">
                        <Checkbox
                          checked={selectedGuides.includes(guide.id)}
                          onCheckedChange={(checked) => handleSelectGuide(guide.id, !!checked)}
                        />
                         <div className="flex-1">
                           <div className="flex items-center gap-3 mb-3">
                             <CardTitle className="text-xl">{guide.title}</CardTitle>
                             <Badge
                               variant={guide.is_active ? "default" : "secondary"}
                               className={guide.is_active ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200" : ""}
                             >
                               {guide.is_active ? "Active" : "Inactive"}
                             </Badge>
                             <Badge variant="outline" className="border-primary text-primary font-medium">
                               {guide.price > 0 ? `$${guide.price}` : "Free"}
                             </Badge>
                           </div>
                           <p className="text-muted-foreground text-sm leading-relaxed">{guide.description}</p>
                         </div>
                       </div>
                      <div className="flex gap-2 ml-4">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleToggleActive(guide)}
                          title={guide.is_active ? "Deactivate guide" : "Activate guide"}
                        >
                          {guide.is_active ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleEdit(guide)}
                          title="Edit guide"
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleDelete(guide)}
                          className="border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground"
                          title="Delete guide"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    {guide.bullets && guide.bullets.length > 0 && (
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold mb-3">Key Points:</h4>
                        <ul className="list-disc list-inside text-sm text-muted-foreground space-y-2 pl-2">
                          {guide.bullets.map((bullet, index) => (
                            <li key={index} className="leading-relaxed">{bullet}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    <div className="flex justify-between items-center text-sm text-muted-foreground bg-muted/50 p-3 rounded-md">
                      <div className="font-medium">
                        Sort Order: <span className="text-foreground">{guide.sort_order}</span>
                      </div>
                      <div className="font-medium">
                        {guide.file_name ? (
                          <span className="text-primary">File: {guide.file_name}</span>
                        ) : (
                          <span className="text-muted-foreground">No file uploaded</span>
                        )}
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
    </AdminLayout>
  );
};

export default AdminGuides;