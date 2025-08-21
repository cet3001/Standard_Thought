-- Add new columns to guides table for amplification features
ALTER TABLE public.guides 
ADD COLUMN pillar text,
ADD COLUMN social_hooks jsonb DEFAULT '[]'::jsonb;

-- Add check constraint for pillar values
ALTER TABLE public.guides 
ADD CONSTRAINT check_pillar_values 
CHECK (pillar IS NULL OR pillar IN ('Legacy', 'Hustle', 'Mindset'));