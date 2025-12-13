#!/usr/bin/env node
/**
 * Automatic Supabase Setup using PostgreSQL connection
 * This will create the table automatically
 */

const { Client } = require('pg');

// Your Supabase connection details
const connectionString = 'postgresql://postgres:[YOUR_PASSWORD]@db.bmnixnmqferqlcxublii.supabase.co:5432/postgres';
const SERVICE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJtbml4bm1xZmVycWxjeHVibGlpIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2NTQxMDc3NSwiZXhwIjoyMDgwOTg2Nzc1fQ.iUNig3c6vSOJVr9vdAD_BJUv53diwvFjHIeh8e9P524';

async function setupAuto() {
  console.log('⚠️  To run this automatically, you need:');
  console.log('   1. Your database password (from Supabase project settings)');
  console.log('   2. Install pg package: npm install pg\n');
  console.log('   Then update the connection string with your password.\n');
  console.log('📝 EASIER: Just run the SQL script in Supabase SQL Editor!\n');
  console.log('   File: setup-supabase-sql.sql\n');
}

setupAuto();


