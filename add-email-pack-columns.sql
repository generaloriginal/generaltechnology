-- Add email and pack columns to homophone_leaderboard table
-- Run this in the Supabase SQL Editor

ALTER TABLE homophone_leaderboard 
ADD COLUMN IF NOT EXISTS email TEXT;

ALTER TABLE homophone_leaderboard 
ADD COLUMN IF NOT EXISTS pack TEXT;

