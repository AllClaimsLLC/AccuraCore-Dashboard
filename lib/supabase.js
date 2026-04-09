import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://vqbbrclbhemexbgcwhcj.supabase.co";
const supabaseKey = "sb_publishable_ir85Z6qp2qX9L0G1u9-GnA_lbrMtZXw";

export const supabase = createClient(supabaseUrl, supabaseKey);