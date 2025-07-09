-- Update existing blog posts with new categorization schema

-- First, let's update the categories to be more consistent
UPDATE blog_posts SET 
  category = 'Entrepreneurship',
  tags = ARRAY['ai-side-hustles', 'business-automation', 'artificial-intelligence', 'passive-income', 'digital-products']
WHERE title LIKE '%AI Side Hustles That Actually Work%';

UPDATE blog_posts SET 
  category = 'Credit & Finance',
  tags = ARRAY['credit-building', 'financial-strategy', 'no-cosigner', 'credit-score', 'financial-freedom']
WHERE title LIKE '%Credit Hustle%';

UPDATE blog_posts SET 
  category = 'Wealth Building',
  tags = ARRAY['wealth-mindset', 'generational-wealth', 'financial-psychology', 'long-term-wealth', 'money-education']
WHERE title LIKE '%Wealth Mindset vs. Rich Mindset%';

UPDATE blog_posts SET 
  category = 'Entrepreneurship',
  tags = ARRAY['side-hustle', 'business-strategy', 'smart-work', 'hustle-culture', 'entrepreneurship-mistakes']
WHERE title LIKE '%Why Your Side Hustle Isn%';

UPDATE blog_posts SET 
  category = 'Entrepreneurship',
  tags = ARRAY['first-revenue', 'business-milestones', 'mindset-shift', 'entrepreneurship-psychology', 'breaking-barriers']
WHERE title LIKE '%The First $1,000%';

UPDATE blog_posts SET 
  category = 'Entrepreneurship',
  tags = ARRAY['bootstrap-business', 'low-budget-startup', 'service-business', 'practical-entrepreneurship', 'real-business']
WHERE title LIKE '%Bootstrap Playbook%';

UPDATE blog_posts SET 
  category = 'Personal Development',
  tags = ARRAY['authenticity', 'code-switching', 'professional-development', 'cultural-identity', 'workplace-success']
WHERE title LIKE '%Code-Switching Tax%';

UPDATE blog_posts SET 
  category = 'Mindset & Psychology',
  tags = ARRAY['money-trauma', 'generational-patterns', 'mindset-shift', 'financial-psychology', 'family-programming']
WHERE title LIKE '%Money Doesn%';

UPDATE blog_posts SET 
  category = 'Entrepreneurship',
  tags = ARRAY['ai-side-hustles', 'digital-products', 'passive-income', 'artificial-intelligence', 'online-business']
WHERE title LIKE '%AI-Powered Digital Products%';

UPDATE blog_posts SET 
  category = 'Mindset & Psychology',
  tags = ARRAY['money-trauma', 'generational-wealth', 'financial-psychology', 'scarcity-mindset', 'wealth-building']
WHERE title LIKE '%Money Trauma in the Culture%';

UPDATE blog_posts SET 
  category = 'Personal Development',
  tags = ARRAY['work-life-balance', 'burnout-prevention', 'sustainable-hustle', 'mental-health', 'productivity']
WHERE title LIKE '%Hustle vs. Grind%';

UPDATE blog_posts SET 
  category = 'Mindset & Psychology',
  tags = ARRAY['success-stories', 'resilience', 'overcoming-obstacles', 'motivation', 'building-from-nothing']
WHERE title LIKE '%From the Mud%';