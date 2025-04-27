const { createClient } = require('@supabase/supabase-js');

// Ambil data dari .env
const supabaseUrl = "https://aiqixyyhlwfvnblgrttu.supabase.co"
const supabaseKey = "7bXaDDMD+DvoyHmz5s4fgTYs1j5HjplAFjDiu3aRmRmIXMf7ipTLrwxVSSHi6EDoymIooT/JugTafjMpxaanAw=="

// Create Supabase Client
const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = supabase;
