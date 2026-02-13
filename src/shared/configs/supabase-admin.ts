import {createClient} from "@supabase/supabase-js"

const supabaseUrl: string = process.env.SUPABASE_URL ?? ""
const supabaseServiceRoleKey: string = process.env.SUPABASE_SERVICE_ROLE_KEY ?? ""

if (!supabaseUrl) {
	throw new Error("Missing SUPABASE_URL or NEXT_PUBLIC_SUPABASE_URL environment variable")
}

if (!supabaseServiceRoleKey) {
	throw new Error("Missing SUPABASE_SERVICE_ROLE_KEY environment variable")
}

export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceRoleKey, {
	auth: {
		autoRefreshToken: false,
		persistSession: false,
	},
})
