"use server";

import { redirect } from "next/navigation";
import { createClient } from "../supabase/server";

export async function signout() {
  const supabase = createClient();
  const { error } = await supabase.auth.signOut();
  if (error) {
    console.log(error);
    throw new Error(error.message);
  }
  redirect("/auth");
}

export async function getSession() {
  const supabase = createClient();
  const { data: user, error } = await supabase.auth.getSession();
  if (error) {
    console.log(error);
    throw new Error(error.message);
  }

  return user;
}
