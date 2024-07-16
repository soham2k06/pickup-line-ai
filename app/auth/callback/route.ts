import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const code = searchParams.get("code");

  const next = searchParams.get("next") ?? "/";

  if (code) {
    const supabase = createClient();

    const { error } = await supabase.auth.exchangeCodeForSession(code);

    const baseurl = process.env.NEXT_PUBLIC_BASE_URL;
    if (!error) return NextResponse.redirect(`${baseurl}${next}`);

    throw new Error(error.message);
  }
}
