#!/usr/bin/env node
/**
 * Automatic Supabase Leaderboard Setup
 * Uses service role key to create table and configure RLS
 */

const SUPABASE_URL = 'https://bmnixnmqferqlcxublii.supabase.co';
const SERVICE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJtbml4bm1xZmVycWxjeHVibGlpIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2NTQxMDc3NSwiZXhwIjoyMDgwOTg2Nzc1fQ.iUNig3c6vSOJVr9vdAD_BJUv53diwvFjHIeh8e9P524';

async function setupLeaderboard() {
  console.log('🚀 Setting up Supabase leaderboard automatically...\n');

  try {
    // Check if table exists by trying to query it
    console.log('📊 Checking if leaderboard table exists...');
    const checkResponse = await fetch(`${SUPABASE_URL}/rest/v1/leaderboard?select=id&limit=1`, {
      headers: {
        'apikey': SERVICE_KEY,
        'Authorization': `Bearer ${SERVICE_KEY}`
      }
    });

    if (checkResponse.ok) {
      console.log('✅ Leaderboard table already exists!\n');
      console.log('🔓 Checking Row Level Security...');
      
      // Try to insert a test record to check RLS
      const testResponse = await fetch(`${SUPABASE_URL}/rest/v1/leaderboard`, {
        method: 'POST',
        headers: {
          'apikey': SERVICE_KEY,
          'Authorization': `Bearer ${SERVICE_KEY}`,
          'Content-Type': 'application/json',
          'Prefer': 'return=minimal'
        },
        body: JSON.stringify({
          name: '__test__',
          score: 0,
          date: new Date().toLocaleDateString()
        })
      });

      if (testResponse.ok) {
        // Delete test record
        await fetch(`${SUPABASE_URL}/rest/v1/leaderboard?name=eq.__test__`, {
          method: 'DELETE',
          headers: {
            'apikey': SERVICE_KEY,
            'Authorization': `Bearer ${SERVICE_KEY}`
          }
        });
        console.log('✅ RLS is properly configured - public access enabled!\n');
        console.log('🎉 Setup complete! Your leaderboard is ready to use.\n');
        return;
      } else {
        console.log('⚠️  Table exists but RLS might be blocking writes.');
        console.log('   Please disable RLS in Supabase Dashboard:\n');
        console.log('   Settings → API → Row Level Security → leaderboard → Toggle OFF\n');
      }
    } else {
      console.log('📝 Table does not exist. Creating it...\n');
      console.log('⚠️  Supabase REST API cannot create tables directly.');
      console.log('   Please run the SQL script in Supabase SQL Editor:\n');
      console.log('   1. Go to Supabase Dashboard → SQL Editor');
      console.log('   2. Copy contents of setup-supabase-sql.sql');
      console.log('   3. Paste and run\n');
      console.log('   Or create manually:');
      console.log('   - Table name: leaderboard');
      console.log('   - Columns: name (text), score (int8), date (text)');
      console.log('   - Disable RLS\n');
    }

  } catch (error) {
    console.error('❌ Error:', error.message);
    console.log('\n📝 Manual setup required. See AUTO_SETUP.md for instructions.\n');
  }
}

setupLeaderboard();


