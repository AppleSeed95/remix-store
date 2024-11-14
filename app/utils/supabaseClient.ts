import { createClient } from "@supabase/supabase-js";

const supabaseURL = process.env.SUPABASE_URL || "https://hzsduopqlrczfqcizrfb.supabase.co";
const publicKey = process.env.PUBLIC_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh6c2R1b3BxbHJjemZxY2l6cmZiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzAxMjE4MzIsImV4cCI6MjA0NTY5NzgzMn0.xTimur9lDxsNhuEiU0B0_urkdc0gpppVIUyWHFxjnXk";

const supabase = createClient(supabaseURL, publicKey);

export default supabase;
