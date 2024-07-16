import SignoutButton from "@/components/signout-button";
import GeneratorForm from "@/components/generator-form";

function Generator() {
  return (
    <div className="relative">
      <main className="bg-[url(/bg-blurred.png)] bg-cover bg-no-repeat h-dvh overflow-hidden flex flex-col items-center p-4 md:p-11">
        <SignoutButton />
        <h1 className="text-primary text-4xl mb-10 md:text-5xl">
          Pickup line Generator
        </h1>
        <GeneratorForm />
      </main>
    </div>
  );
}

export default Generator;
