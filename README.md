# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/77b99b38-7590-4686-8b21-9653b11d193b

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/77b99b38-7590-4686-8b21-9653b11d193b) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Setup

1. Copy `.env.example` to `.env`.
2. Fill in your keys and URLs:
   - `OPENAI_API_KEY`
   - `RESEND_API_KEY`
   - `SUPABASE_URL`
   - `SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY`
   - `ADMIN_NOTIFICATION_EMAIL`
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`

## Seed the Blog Locally

After your env vars are set, run the seeder to drop in sample posts:

```bash
npm run seed:blog
```

You'll get real-looking content in seconds so you can focus on the UI.

## Supabase Project Setup

1. Sign up at [Supabase](https://supabase.com) and create a new project.
2. Grab your project's URL, **anon** key, and **service role** key from **Settings > API**.
3. Drop those values into `.env` and match them in the `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` fields.
4. Keep these keys private; never commit them.

## Seed the Blog

Run `npm run seed:blog` to load the starter posts into your Supabase database.

## Start the Dev Server

Kick things off with `npm run dev`. When the server says it's ready, head to `http://localhost:8080/blog` and make sure the posts show up.

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/77b99b38-7590-4686-8b21-9653b11d193b) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)

## Admin Manual Playbook Send

Admins must enter an email before hitting **Send Playbook** in the dashboard. The tool doesn't fire without a target inbox.

## Set up an admin in Supabase

1. Head to your Supabase project and open the `profiles` table.
2. Find the user and set their `role` column to `admin`.
3. Save it. The app picks up the change on next login.

That's it—no more hardcoded emails.
