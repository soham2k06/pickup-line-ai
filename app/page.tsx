import Button from "@/components/button";
import IconHeart from "@/components/icons/icon-heart";
import Link from "next/link";

function Home() {
  return (
    <main className="bg-[url(/bg.png)] bg-cover bg-no-repeat min-h-dvh flex justify-center items-center">
      <Link href="/generator">
        <Button>
          <IconHeart />
          Generate one for me
          <IconHeart />
        </Button>
      </Link>
    </main>
  );
}

export default Home;
