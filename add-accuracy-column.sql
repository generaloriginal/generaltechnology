-- Add accuracy column to homophone_leaderboard table
-- Run this in the Supabase SQL Editor

ALTER TABLE homophone_leaderboard 
ADD COLUMN IF NOT EXISTS accuracy INTEGER;

