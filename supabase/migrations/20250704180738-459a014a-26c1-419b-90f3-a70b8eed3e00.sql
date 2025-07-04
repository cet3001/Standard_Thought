-- Fix common Supabase warnings and optimization issues

-- 1. Add missing indexes for better performance on foreign key lookups
CREATE INDEX IF NOT EXISTS idx_blog_posts_author_id ON public.blog_posts(author_id);
CREATE INDEX IF NOT EXISTS idx_comments_blog_post_id ON public.comments(blog_post_id);
CREATE INDEX IF NOT EXISTS idx_guide_downloads_user_email ON public.guide_downloads(user_email);
CREATE INDEX IF NOT EXISTS idx_blog_posts_published_created ON public.blog_posts(published, created_at DESC) WHERE published = true;
CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON public.blog_posts(slug) WHERE published = true;

-- 2. Add missing trigger for profiles table to update timestamp
CREATE TRIGGER IF NOT EXISTS update_profiles_updated_at
    BEFORE UPDATE ON public.profiles
    FOR EACH ROW
    EXECUTE FUNCTION public.update_updated_at_column();

-- 3. Add missing trigger for builder_stories table to update timestamp  
CREATE TRIGGER IF NOT EXISTS update_builder_stories_updated_at
    BEFORE UPDATE ON public.builder_stories
    FOR EACH ROW
    EXECUTE FUNCTION public.update_updated_at_column();

-- 4. Add missing trigger for blog_posts to auto-generate slug
CREATE TRIGGER IF NOT EXISTS auto_generate_blog_post_slug
    BEFORE INSERT OR UPDATE ON public.blog_posts
    FOR EACH ROW
    EXECUTE FUNCTION public.auto_generate_slug();

-- 5. Add trigger to auto-populate profiles when user signs up
CREATE TRIGGER IF NOT EXISTS on_auth_user_created
    AFTER INSERT ON auth.users
    FOR EACH ROW
    EXECUTE FUNCTION public.handle_new_user();

-- 6. Improve the admin check function to be more efficient and avoid potential RLS recursion
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

-- 7. Add better constraint on subscribers table to prevent duplicate emails
ALTER TABLE public."Subscribers" 
ADD CONSTRAINT unique_active_email 
EXCLUDE (email WITH =) 
WHERE (unsubscribed IS NOT TRUE);

-- 8. Add constraint to ensure guide downloads have valid email format
ALTER TABLE public.guide_downloads 
ADD CONSTRAINT valid_email_format 
CHECK (user_email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$');

-- 9. Add constraint to ensure blog posts have valid slugs
ALTER TABLE public.blog_posts 
ADD CONSTRAINT valid_slug_format 
CHECK (slug IS NULL OR slug ~* '^[a-z0-9-]+$');

-- 10. Update RLS policy for profiles to allow inserts (needed for user registration)
DROP POLICY IF EXISTS "Users can insert their own profile" ON public.profiles;
CREATE POLICY "Users can insert their own profile" 
ON public.profiles 
FOR INSERT 
WITH CHECK (auth.uid() = id);