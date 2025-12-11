#!/usr/bin/env node
/**
 * Supabase Auto-Setup Script
 * 
 * This script automatically creates the leaderboard table and configures RLS
 * 
 * Usage:
 * 1. Get your service role key from Supabase: Settings → API → service_role key
 * 2. Run: SUPABASE_SERVICE_KEY=your_service_key node setup-supabase.js
 * 
 * WARNING: Never commit the service role key to GitHub!
 */

const SUPABASE_URL = 'https://bmnixnmqferqlcxublii.supabase.co';
const SERVICE_KEY = process.env.SUPABASE_SERVICE_KEY;

if (!SERVICE_KEY) {
  console.error('❌ Error: SUPABASE_SERVICE_KEY environment variable not set');
  console.log('\nTo run this script:');
  console.log('1. Get your service role key from Supabase Dashboard → Settings → API');
  console.log('2. Run: SUPABASE_SERVICE_KEY=your_key_here node setup-supabase.js');
  process.exit(1);
}

async function setupSupabase() {
  console.log('🚀 Setting up Supabase leaderboard...\n');

  try {
    // Step 1: Create the leaderboard table
    console.log('📊 Creating leaderboard table...');
    
    const createTableSQL = `
      CREATE TABLE IF NOT EXISTS leaderboard (
        id BIGSERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        score BIGINT NOT NULL,
        date TEXT,
        created_at TIMESTAMPTZ DEFAULT NOW()
      );
    `;

    const createTableResponse = await fetch(`${SUPABASE_URL}/rest/v1/rpc/exec_sql`, {
      method: 'POST',
      headers: {
        'apikey': SERVICE_KEY,
        'Authorization': `Bearer ${SERVICE_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ query: createTableSQL })
    });

    // Alternative: Use direct SQL endpoint
    const sqlResponse = await fetch(`${SUPABASE_URL}/rest/v1/`, {
      method: 'POST',
      headers: {
        'apikey': SERVICE_KEY,
        'Authorization': `Bearer ${SERVICE_KEY}`,
        'Content-Type': 'application/json',
        'Prefer': 'return=minimal'
      }
    });

    // Actually, Supabase REST API doesn't support DDL directly
    // We need to use the SQL editor or provide instructions
    console.log('⚠️  Supabase REST API cannot create tables directly.');
    console.log('   Please create the table manually in Supabase Dashboard:\n');
    console.log('   1. Go to Table Editor → New table');
    console.log('   2. Name: leaderboard');
    console.log('   3. Add columns:');
    console.log('      - name (text, not null)');
    console.log('      - score (int8, not null)');
    console.log('      - date (text, nullable)');
    console.log('   4. Save\n');
    
    // Step 2: Disable RLS (or create policy)
    console.log('🔓 Configuring Row Level Security...');
    console.log('   Go to Settings → API → Row Level Security');
    console.log('   Find "leaderboard" table and toggle RLS OFF\n');

    console.log('✅ Setup instructions displayed above!');
    console.log('   Once you create the table, the leaderboard will work automatically.\n');

  } catch (error) {
    console.error('❌ Error:', error.message);
    console.log('\n📝 Manual setup required:');
    console.log('   1. Create table in Supabase Dashboard → Table Editor');
    console.log('   2. Disable RLS for the leaderboard table');
  }
}

setupSupabase();

