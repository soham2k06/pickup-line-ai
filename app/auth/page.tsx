"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import IconGoogle from "@/components/icons/icon-google";
import Button from "@/components/button";

function Auth() {
  const supabase = createClient();

  const [pending, setPending] = useState(false);

  const handleLogin = async () => {
    setPending(true);
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo: `${location.origin}/auth/callback` },
    });
    setPending(false);
  };

  return (
    <main className="flex min-h-dvh justify-center items-center">
      <div className="flex flex-col items-center">
        <div className="bg-primary size-11 flex items-center justify-center rounded-md mb-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="13"
            viewBox="0 0 14 13"
            fill="none"
          >
            <path
              d="M14 4.375C14 8.75 7.51312 12.2913 7.23687 12.4375C7.16406 12.4767 7.08268 12.4972 7 12.4972C6.91732 12.4972 6.83594 12.4767 6.76312 12.4375C6.48688 12.2913 0 8.75 0 4.375C0.00115796 3.34764 0.409788 2.36269 1.13624 1.63624C1.86269 0.909788 2.84764 0.501158 3.875 0.5C5.16563 0.5 6.29562 1.055 7 1.99312C7.70438 1.055 8.83438 0.5 10.125 0.5C11.1524 0.501158 12.1373 0.909788 12.8638 1.63624C13.5902 2.36269 13.9988 3.34764 14 4.375Z"
              fill="white"
            />
          </svg>
        </div>
        <h1 className="text-xl font-semibold mb-4">Pickup line generator</h1>
        <p className="text-muted-foreground font-medium mb-7">
          Generate pickup line for your crush now!
        </p>
        <Button
          variant="secondary"
          className="max-w-[400px] w-full"
          loading={pending}
          // loadingText=""
          onClick={handleLogin}
        >
          <IconGoogle />
          Sign up with google
        </Button>
        <p className="mt-56 text-muted-foreground text-sm text-center">
          By signing up, you agree to the Terms of Use, Privacy Notice
        </p>
      </div>
    </main>
  );
}

export default Auth;
