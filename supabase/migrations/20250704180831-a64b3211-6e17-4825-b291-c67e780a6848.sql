-- Fix common Supabase warnings and optimization issues (corrected)

-- 1. Add missing indexes for better performance on foreign key lookups
CREATE INDEX IF NOT EXISTS idx_blog_posts_author_id ON public.blog_posts(author_id);
CREATE INDEX IF NOT EXISTS idx_comments_blog_post_id ON public.comments(blog_post_id);
CREATE INDEX IF NOT EXISTS idx_guide_downloads_user_email ON public.guide_downloads(user_email);
CREATE INDEX IF NOT EXISTS idx_blog_posts_published_created ON public.blog_posts(published, created_at DESC) WHERE published = true;
CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON public.blog_posts(slug) WHERE published = true;

-- 2. Add trigger for profiles table to update timestamp (drop first if exists)
DROP TRIGGER IF EXISTS update_profiles_updated_at ON public.profiles;
CREATE TRIGGER update_profiles_updated_at
    BEFORE UPDATE ON public.profiles
    FOR EACH ROW
    EXECUTE FUNCTION public.update_updated_at_column();

-- 3. Add trigger for builder_stories table to update timestamp  
DROP TRIGGER IF EXISTS update_builder_stories_updated_at ON public.builder_stories;
CREATE TRIGGER update_builder_stories_updated_at
    BEFORE UPDATE ON public.builder_stories
    FOR EACH ROW
    EXECUTE FUNCTION public.update_updated_at_column();

-- 4. Add trigger for blog_posts to auto-generate slug
DROP TRIGGER IF EXISTS auto_generate_blog_post_slug ON public.blog_posts;
CREATE TRIGGER auto_generate_blog_post_slug
    BEFORE INSERT OR UPDATE ON public.blog_posts
    FOR EACH ROW
    EXECUTE FUNCTION public.auto_generate_slug();

-- 5. Improve the admin check function to be more efficient and avoid potential RLS recursion
CREATE OR REPLACE FUNCTION public.is_admin_user()
RETURNS boolean
LANGUAGE plpgsql
STABLE SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
    user_email text;
    user_role public.user_role;
BEGIN
    -- Get current user email from JWT
    user_email := (auth.jwt() ->> 'email');
    
    -- Check if user is the hardcoded admin email
    IF user_email = 'cet3001@gmail.com' THEN
        RETURN true;
    END IF;
    
    -- Check if user has admin role in profiles table
    SELECT role INTO user_role 
    FROM public.profiles 
    WHERE id = auth.uid();
    
    RETURN (user_role = 'admin');
END;
$$;