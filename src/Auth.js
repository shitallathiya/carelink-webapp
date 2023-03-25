"use client";

import { useEffect} from "react"; 
import { createClient } from "@supabase/supabase-js"; // for supabase's function
import { ThemeSupa, Auth } from "@supabase/auth-ui-react"; // for Auth UI
import { useRouter } from "next/navigation";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_ANON
); 

