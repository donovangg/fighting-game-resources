import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://qczsiistziidnaavyrgw.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFjenNpaXN0emlpZG5hYXZ5cmd3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjU3OTM3ODMsImV4cCI6MTk4MTM2OTc4M30.dC3GGHz5-hDCdjHaDMqSXZ9heNlg9eI2LZOCsJt241M"
);