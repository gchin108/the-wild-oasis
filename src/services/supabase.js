import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://khxikbwovlonwdryzpsf.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtoeGlrYndvdmxvbndkcnl6cHNmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTYxNjYwNDYsImV4cCI6MjAxMTc0MjA0Nn0.O90BA3JqFgJWKi6VuVlVByhOyKToXVWVkolLf0DnWNI"
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;