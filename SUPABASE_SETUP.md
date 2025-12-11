# Supabase Setup for Leaderboard (5 minutes)

## Step 1: Create Free Supabase Account

1. Go to https://supabase.com/
2. Click "Start your project"
3. Sign up with GitHub (easiest) or email
4. Click "New Project"

## Step 2: Create Project

1. **Organization**: Create new or use existing
2. **Name**: `snake-game-leaderboard` (or any name)
3. **Database Password**: Create a strong password (save it, but you won't need it for this)
4. **Region**: Choose closest to you
5. Click "Create new project" (takes 1-2 minutes)

## Step 3: Get Your API Keys

1. Once project is ready, go to **Settings** (gear icon) → **API**
2. You'll see:
   - **Project URL**: Copy this (looks like `https://xxxxx.supabase.co`)
   - **anon public** key: Copy this (long string)

## Step 4: Create Database Table

1. Go to **Table Editor** in left sidebar
2. Click "New table"
3. Name: `leaderboard`
4. Click "Save"
5. Add columns:
   - Click "Add column"
   - **name**: `name` (type: `text`, nullable: false)
   - Click "Add column"  
   - **score**: `score` (type: `int8`, nullable: false)
   - Click "Add column"
   - **date**: `date` (type: `text`, nullable: true)
6. Click "Save"

## Step 5: Enable Public Access

1. Go to **Settings** → **API**
2. Scroll to "Row Level Security (RLS)"
3. Click on `leaderboard` table
4. Toggle **RLS** to OFF (or create a policy to allow public read/write)
5. For simplicity, you can disable RLS for now

## Step 6: Update snake.html

1. Open `snake.html`
2. Find these lines (around line 361-362):
   ```javascript
   const SUPABASE_URL = 'YOUR_SUPABASE_URL';
   const SUPABASE_ANON_KEY = 'YOUR_SUPABASE_ANON_KEY';
   ```
3. Replace with your actual values:
   ```javascript
   const SUPABASE_URL = 'https://xxxxx.supabase.co';
   const SUPABASE_ANON_KEY = 'your-long-anon-key-here';
   ```

## Step 7: Test It!

1. Open your game
2. Play and get a score
3. Check Supabase → Table Editor → `leaderboard`
4. You should see your score!

## Done! 🎉

Now the leaderboard is stored permanently on Supabase servers and shared across all players!

**Free Tier Limits:**
- 500 MB database
- 2 GB bandwidth/month
- More than enough for a leaderboard!

