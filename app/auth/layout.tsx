import { PropsWithChildren } from "react";
import { redirect } from "next/navigation";
import { Inter } from "next/font/google";
import { getSession } from "@/lib/actions/auth";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

async function AuthLayout({ children }: PropsWithChildren) {
  const { session } = await getSession();

  if (session) redirect("/");

  return <div className={cn("p-4", inter.className)}>{children}</div>;
}

export default AuthLayout;
