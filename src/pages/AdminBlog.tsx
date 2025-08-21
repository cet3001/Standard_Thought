import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useBlogPosts } from '@/hooks/use-blog-posts';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { Plus, Edit, Trash2, Eye, EyeOff, Calendar, Tag } from 'lucide-react';
import { BlogPost } from '@/hooks/use-blog-posts';
import { useToast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router-dom';
import { AdminLayout } from '@/components/admin/AdminLayout';
import { formatDistanceToNow } from 'date-fns';

const AdminBlog = () => {
  const navigate = useNavigate();
  const { isAdmin } = useAuth();
  const { blogPosts, loading, deleteBlogPost, deleteBulkBlogPosts, updateBlogPost } = useBlogPosts(true);
  const [selectedPosts, setSelectedPosts] = useState<string[]>([]);
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

  const handleTogglePublished = async (post: BlogPost) => {
    try {
      await updateBlogPost(post.id, { published: !post.published });
      toast({
        title: "Success",
        description: `Post ${post.published ? 'unpublished' : 'published'} successfully`,
      });
    } catch (error) {
      console.error('Error toggling post status:', error);
    }
  };

  const handleEdit = (post: BlogPost) => {
    navigate(`/admin/blog/edit/${post.id}`, { state: { editPost: post } });
  };

  const handleDelete = async (post: BlogPost) => {
    if (window.confirm(`Are you sure you want to delete "${post.title}"?`)) {
      await deleteBlogPost(post.id);
    }
  };

  const handleSelectPost = (postId: string, checked: boolean) => {
    setSelectedPosts(prev => 
      checked 
        ? [...prev, postId]
        : prev.filter(id => id !== postId)
    );
  };

  const handleSelectAll = (checked: boolean) => {
    setSelectedPosts(checked ? blogPosts.map(post => post.id) : []);
  };

  const handleBulkDelete = async () => {
    try {
      await deleteBulkBlogPosts(selectedPosts);
      setSelectedPosts([]);
    } catch (error) {
      console.error('Error deleting posts:', error);
    }
  };

  const clearSelection = () => {
    setSelectedPosts([]);
  };

  if (loading) {
    return (
      <AdminLayout title="Loading...">
        <div className="text-center">Loading blog posts...</div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout title="Blog Management" description="Manage your blog posts, content, and publication status">
      {/* Bulk Action Toolbar */}
      {selectedPosts.length > 0 && (
        <Card className="bg-primary/5 border-primary/20 mb-6">
          <CardContent className="flex items-center justify-between p-4">
            <div className="flex items-center gap-3">
              <Badge variant="secondary" className="bg-primary/10 text-primary">
                {selectedPosts.length} selected
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
                  <AlertDialogTitle>Delete Selected Posts</AlertDialogTitle>
                  <AlertDialogDescription>
                    Are you sure you want to delete {selectedPosts.length} selected posts? This action cannot be undone.
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
        {blogPosts.length > 0 && (
          <div className="flex items-center gap-4">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="select-all"
                checked={selectedPosts.length === blogPosts.length && blogPosts.length > 0}
                onCheckedChange={handleSelectAll}
              />
              <label 
                htmlFor="select-all" 
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
              >
                Select all posts
              </label>
            </div>
          </div>
        )}
        <Button
          onClick={() => navigate('/admin/blog/new')}
          className="bg-primary text-primary-foreground hover:bg-primary/90"
        >
          <Plus className="mr-2 h-4 w-4" />
          Add New Post
        </Button>
      </div>

      <div className="grid gap-6">
        {blogPosts.length === 0 ? (
          <Card>
            <CardContent className="text-center py-12">
              <p className="text-muted-foreground mb-4">No blog posts created yet</p>
              <Button
                onClick={() => navigate('/admin/blog/new')}
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <Plus className="mr-2 h-4 w-4" />
                Create Your First Post
              </Button>
            </CardContent>
          </Card>
        ) : (
          blogPosts.map((post) => (
            <Card key={post.id} className={`hover:shadow-lg transition-shadow ${selectedPosts.includes(post.id) ? 'ring-2 ring-primary/50 bg-primary/5' : ''}`}>
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-3 flex-1">
                    <Checkbox
                      checked={selectedPosts.includes(post.id)}
                      onCheckedChange={(checked) => handleSelectPost(post.id, !!checked)}
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <CardTitle className="text-xl">{post.title}</CardTitle>
                        <Badge
                          variant={post.published ? "default" : "secondary"}
                          className={post.published ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200" : ""}
                        >
                          {post.published ? "Published" : "Draft"}
                        </Badge>
                        {post.featured && (
                          <Badge variant="outline" className="border-yellow-500 text-yellow-600">
                            Featured
                          </Badge>
                        )}
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">{post.excerpt}</p>
                    </div>
                  </div>
                  <div className="flex gap-2 ml-4">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleTogglePublished(post)}
                      title={post.published ? "Unpublish post" : "Publish post"}
                    >
                      {post.published ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleEdit(post)}
                      title="Edit post"
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleDelete(post)}
                      className="border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground"
                      title="Delete post"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex justify-between items-center text-sm text-muted-foreground bg-muted/50 p-3 rounded-md">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      <span>{formatDistanceToNow(new Date(post.created_at))} ago</span>
                    </div>
                    {post.display_tag && (
                      <div className="flex items-center gap-1">
                        <Tag className="h-3 w-3" />
                        <span>{post.display_tag}</span>
                      </div>
                    )}
                  </div>
                  <div className="font-medium">
                    {post.slug ? (
                      <span className="text-primary">/{post.slug}</span>
                    ) : (
                      <span className="text-muted-foreground">No slug</span>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </AdminLayout>
  );
};

export default AdminBlog;