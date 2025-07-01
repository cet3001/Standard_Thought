// Blog Seeder Runner
// Purpose: Kick off createSamplePosts from the command line.
// Why: One command to load the DB with sample posts for local dev.
import { createSamplePosts } from '../src/lib/sample-posts';

(async () => {
  const result = await createSamplePosts();
  if (result.success) {
    console.log('Blog seeded. Time to build.');
  } else {
    console.error('Seed failed:', result.error);
    process.exit(1);
  }
})();
