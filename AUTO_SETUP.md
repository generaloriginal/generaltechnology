# Automatic Supabase Setup

I've created a SQL script you can run to set up everything automatically!

## Quick Setup (2 minutes)

### Option 1: Run SQL Script (Easiest!)

1. Go to your Supabase Dashboard: https://supabase.com/dashboard
2. Click on your project
3. Go to **SQL Editor** (left sidebar)
4. Click **New query**
5. Copy and paste the contents of `setup-supabase-sql.sql`
6. Click **Run** (or press Cmd/Ctrl + Enter)
7. Done! ✅

### Option 2: Use Service Role Key (Advanced)

If you want to automate it further, you can use the service role key:

1. Get your **service role key** from Supabase:
   - Settings → API → **service_role** key (secret!)
   - ⚠️ **NEVER commit this to GitHub!**

2. Run the setup script:
   ```bash
   SUPABASE_SERVICE_KEY=your_service_role_key_here node setup-supabase.js
   ```

## What Gets Created

- ✅ `leaderboard` table with columns: `id`, `name`, `score`, `date`, `created_at`
- ✅ Row Level Security disabled (public read/write)
- ✅ Indexes for fast queries

## After Setup

Once you run the SQL script, your leaderboard will work immediately! No other configuration needed.

The game will automatically:
- Read scores from Supabase
- Write new scores to Supabase
- Show shared leaderboard to all players

