"use client";

import { signout } from "@/lib/actions/auth";
import { useTransition } from "react";
import Button from "./button";

function SignoutButton() {
  const [pending, startTransition] = useTransition();
  const handleSignout = () => startTransition(signout);

  return (
    <Button
      className="absolute bottom-4 right-4 px-8 bg-[#b5002d13] text-secondary font-normal hover:bg-[#b5002d30] md:top-10 md:right-10"
      loading={pending}
      loadingText=""
      onClick={handleSignout}
    >
      Signout
    </Button>
  );
}

export default SignoutButton;
