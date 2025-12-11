-- Supabase Leaderboard Setup SQL
-- Run this in Supabase Dashboard → SQL Editor

-- Step 1: Create the leaderboard table
CREATE TABLE IF NOT EXISTS leaderboard (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  score BIGINT NOT NULL,
  date TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Step 2: Disable Row Level Security (allow public read/write)
ALTER TABLE leaderboard DISABLE ROW LEVEL SECURITY;

-- Step 3: Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_leaderboard_score ON leaderboard(score DESC);
CREATE INDEX IF NOT EXISTS idx_leaderboard_created_at ON leaderboard(created_at DESC);

-- Verify the table was created
SELECT * FROM leaderboard LIMIT 1;

