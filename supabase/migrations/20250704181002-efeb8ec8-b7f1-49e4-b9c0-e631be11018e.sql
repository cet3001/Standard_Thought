-- Clean up duplicate subscribers and add constraints

-- 1. Add constraint to ensure guide downloads have valid email format
DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.table_constraints 
        WHERE constraint_name = 'valid_email_format' 
        AND table_name = 'guide_downloads'
    ) THEN
        ALTER TABLE public.guide_downloads 
        ADD CONSTRAINT valid_email_format 
        CHECK (user_email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$');
    END IF;
END $$;

-- 2. Add constraint to ensure blog posts have valid slugs
DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.table_constraints 
        WHERE constraint_name = 'valid_slug_format' 
        AND table_name = 'blog_posts'
    ) THEN
        ALTER TABLE public.blog_posts 
        ADD CONSTRAINT valid_slug_format 
        CHECK (slug IS NULL OR slug ~* '^[a-z0-9-]+$');
    END IF;
END $$;

-- 3. Update RLS policy for profiles to allow inserts (needed for user registration)
DROP POLICY IF EXISTS "Users can insert their own profile" ON public.profiles;
CREATE POLICY "Users can insert their own profile" 
ON public.profiles 
FOR INSERT 
WITH CHECK (auth.uid() = id);

-- 4. Clean up duplicate subscriber emails by keeping the most recent one
WITH duplicate_emails AS (
    SELECT email, MIN(id) as keep_id
    FROM public."Subscribers"
    WHERE email IS NOT NULL 
    AND (unsubscribed IS NOT TRUE OR unsubscribed IS NULL)
    GROUP BY email
    HAVING COUNT(*) > 1
)
DELETE FROM public."Subscribers" s
WHERE s.email IN (SELECT email FROM duplicate_emails)
AND s.id NOT IN (SELECT keep_id FROM duplicate_emails);

-- 5. Now add unique constraint to prevent future duplicate active subscriber emails
DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM pg_class 
        WHERE relname = 'unique_active_subscriber_email'
    ) THEN
        CREATE UNIQUE INDEX unique_active_subscriber_email 
        ON public."Subscribers"(email) 
        WHERE (unsubscribed IS NOT TRUE OR unsubscribed IS NULL);
    END IF;
END $$;

-- 6. Add index on subscribers unsubscribe_token for faster lookups
CREATE INDEX IF NOT EXISTS idx_subscribers_unsubscribe_token 
ON public."Subscribers"(unsubscribe_token) 
WHERE unsubscribe_token IS NOT NULL;