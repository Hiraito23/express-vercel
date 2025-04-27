const { createClient } = require('@supabase/supabase-js');

// Ambil data dari .env
const supabaseUrl = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFpcWl4eXlobHdmdm5ibGdydHR1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU3MjE3MzIsImV4cCI6MjA2MTI5NzczMn0.Nejmvm0-eo6SyinW6fyujwzP_bDSSI71tP3ZNvOLDTg"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFpcWl4eXlobHdmdm5ibGdydHR1Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0NTcyMTczMiwiZXhwIjoyMDYxMjk3NzMyfQ.IuvqPhCVBaH5W1QOXAgy-pIxhMQCQFpIjKgq1SYy_x0"

// Create Supabase Client
const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = supabase;
