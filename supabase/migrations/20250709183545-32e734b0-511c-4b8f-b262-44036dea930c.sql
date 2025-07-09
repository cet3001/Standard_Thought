-- Fix RLS policies for better security

-- Update Subscribers table policies
DROP POLICY IF EXISTS "Users can view their own subscription" ON public."Subscribers";
DROP POLICY IF EXISTS "Users can update their own subscription" ON public."Subscribers";

-- Create more secure policies for Subscribers
CREATE POLICY "Users can view own subscription by email"
ON public."Subscribers"
FOR SELECT
USING (email = (auth.jwt() ->> 'email'));

CREATE POLICY "Users can update own subscription by email"
ON public."Subscribers"
FOR UPDATE
USING (email = (auth.jwt() ->> 'email'))
WITH CHECK (email = (auth.jwt() ->> 'email'));

-- Add DELETE policy for subscribers (admin only)
CREATE POLICY "Admins can delete subscriptions"
ON public."Subscribers"
FOR DELETE
USING (public.is_admin_user());

-- Fix builder_stories policies to be more restrictive
DROP POLICY IF EXISTS "Authenticated users can insert builder stories" ON public.builder_stories;
DROP POLICY IF EXISTS "Authenticated users can update builder stories" ON public.builder_stories;

-- Only admins can insert/update builder stories
CREATE POLICY "Admins can insert builder stories"
ON public.builder_stories
FOR INSERT
WITH CHECK (public.is_admin_user());

CREATE POLICY "Admins can update builder stories"
ON public.builder_stories
FOR UPDATE
USING (public.is_admin_user())
WITH CHECK (public.is_admin_user());

-- Add DELETE policy for builder_stories (admin only)
CREATE POLICY "Admins can delete builder stories"
ON public.builder_stories
FOR DELETE
USING (public.is_admin_user());

-- Add missing DELETE policy for blog_posts (authors can delete their own posts)
CREATE POLICY "Authors can delete their own blog posts"
ON public.blog_posts
FOR DELETE
USING (auth.uid() = author_id);

-- Add missing DELETE policy for comments (admins only)
CREATE POLICY "Admins can delete comments"
ON public.comments
FOR DELETE
USING (public.is_admin_user());

-- Update guides policies to be more explicit
DROP POLICY IF EXISTS "Admins can manage all guides" ON public.guides;

-- Create separate policies for guides for better security
CREATE POLICY "Admins can select guides"
ON public.guides
FOR SELECT
USING (is_active = true OR public.is_admin_user());

CREATE POLICY "Admins can insert guides"
ON public.guides
FOR INSERT
WITH CHECK (public.is_admin_user());

CREATE POLICY "Admins can update guides"
ON public.guides
FOR UPDATE
USING (public.is_admin_user())
WITH CHECK (public.is_admin_user());

CREATE POLICY "Admins can delete guides"
ON public.guides
FOR DELETE
USING (public.is_admin_user());