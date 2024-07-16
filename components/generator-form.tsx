"use client";

import { useState, useTransition } from "react";
import { generatePickupLine } from "@/lib/actions/ai";
import { IPickupLine } from "@/lib/types";
import IconHeart from "./icons/icon-heart";
import Button from "./button";
import Label from "./label";
import Input from "./input";
import Textarea from "./textarea";
import PickupLinesContainer from "./pickup-lines-container";
import ButtonSaved from "./button-saved";

function GeneratorForm() {
  const [pickupLines, setPickupLines] = useState<IPickupLine[]>([]);
  const [tab, setTab] = useState<"generate" | "saved">("generate");

  const [pending, startTransition] = useTransition();

  function handleGenerate(formData: FormData) {
    const prompt = formData.get("prompt") as string;
    const adj = formData.get("adj") as string;

    startTransition(async () => {
      const pickupLine = await generatePickupLine(prompt, adj);
      const newPickupLine: IPickupLine = {
        content: pickupLine,
        prompt,
      };
      setPickupLines([...pickupLines, newPickupLine]);
    });

    setTab("saved");
  }

  return (
    <section className="w-full max-w-[512px] h-full overflow-y-auto px-4">
      {tab === "saved" && !!pickupLines?.length && (
        <>
          <PickupLinesContainer pickupLines={pickupLines} />
          <Button className="w-full" onClick={() => setTab("generate")}>
            <IconHeart />
            Regenerate pickup line
            <IconHeart />
          </Button>
        </>
      )}
      {tab === "generate" && (
        <>
          {!!pickupLines?.length && <ButtonSaved setTab={setTab} />}
          <form action={handleGenerate}>
            <div className="mb-4">
              <Label htmlFor="prompt">Tell us about your crush</Label>
              <Textarea
                disabled={pending}
                id="prompt"
                name="prompt"
                rows={4}
                placeholder="She is a 10 but.. She likes football...."
                required
              />
            </div>
            <div className="mb-8">
              <Label htmlFor="adj">Style</Label>
              <Input
                disabled={pending}
                type="text"
                id="adj"
                name="adj"
                placeholder="Eg. funny"
                required
              />
            </div>
            <Button className="w-full" loading={pending} loadingText="">
              <IconHeart />
              Generate for me
              <IconHeart />
            </Button>
          </form>
        </>
      )}
    </section>
  );
}

export default GeneratorForm;
