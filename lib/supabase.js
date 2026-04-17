import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://gjfbbqpylubprnognwnw.supabase.co";
const supabaseKey = "sb_publishable_MYmS1DA1ppejY8clb3tfIA_2BHGRJDF";

export const supabase = createClient(supabaseUrl, supabaseKey);