-- Create homophone_leaderboard table in Supabase
-- Run this in the Supabase SQL Editor

CREATE TABLE IF NOT EXISTS homophone_leaderboard (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  score INTEGER NOT NULL,
  date TEXT NOT NULL,
  duration INTEGER,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Disable Row Level Security (RLS) for public read/write access
ALTER TABLE homophone_leaderboard ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows all operations (since we're using the anon key)
CREATE POLICY "Allow all operations for anon users" ON homophone_leaderboard
  FOR ALL
  USING (true)
  WITH CHECK (true);

-- Alternatively, if the above doesn't work, you can disable RLS entirely:
-- ALTER TABLE homophone_leaderboard DISABLE ROW LEVEL SECURITY;

