-- Insert Credit Building Action Plan guide
INSERT INTO public.guides (
  title,
  description,
  bullets,
  price,
  sort_order,
  is_active,
  created_by,
  file_name,
  file_path
) VALUES (
  'Credit Building Action Plan',
  'A step-by-step action plan to build credit from scratch—no cosigner, no family help needed. Real strategies for first-gen entrepreneurs.',
  ARRAY[
    'Check Your Credit for Free',
    'Dispute Errors Like a Pro', 
    'Start with Secured Cards',
    'Payment Timing Strategies',
    'Utilization Rules Explained',
    'Level Up to Unsecured Credit'
  ],
  0.00,
  2,
  true,
  '79fd1a6c-009b-4ff7-bedc-0eb3f55f373c',
  'Credit Building Action Plan.pdf',
  'guides/credit-building-action-plan.pdf'
);