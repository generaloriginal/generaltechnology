-- Reset homophone leaderboard - Delete all scores
-- Run this in the Supabase SQL Editor

DELETE FROM homophone_leaderboard;

-- Verify the table is empty
SELECT COUNT(*) FROM homophone_leaderboard;

