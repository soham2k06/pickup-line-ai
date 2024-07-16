import { useState } from "react";
import Button from "./button";
import IconClipboard from "./icons/icon-clipboard";
import IconCheck from "./icons/icon-check";
import { IPickupLine } from "@/lib/types";

interface PickupLinesContainerProps {
  pickupLines: IPickupLine[];
}

function PickupLinesContainer({ pickupLines }: PickupLinesContainerProps) {
  const [copied, setCopied] = useState<number | null>(null);

  function handleCopy(line: string, i: number) {
    if (copied === i) return;
    setCopied(i);
    navigator.clipboard.writeText(line);
    setTimeout(() => setCopied(null), 2000);
  }

  return (
    <div>
      <p className="text-xl tracking-tight text-secondary/90 text-center mb-4">
        Copy the below pick up lines
      </p>
      <ul className="space-y-4 mb-8 max-md:max-h-[320px] overflow-y-auto">
        {pickupLines.map((line, index) => (
          <li
            key={index}
            className="bg-background py-6 px-4 rounded border border-primary"
          >
            <div className="flex justify-between items-center gap-2">
              <h3 className="text-secondary text-2xl tracking-tight mb-2">
                {line.content}
              </h3>
              <Button
                size="icon"
                variant="ghost"
                onClick={() => handleCopy(line.content, index)}
              >
                {copied === index ? <IconCheck /> : <IconClipboard />}
              </Button>
            </div>
            <p className="text-lg text-primary/80">{line.prompt}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PickupLinesContainer;
