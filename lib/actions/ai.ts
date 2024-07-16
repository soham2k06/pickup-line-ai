"use server";

import { generateText } from "ai";
import { mistral } from "@ai-sdk/mistral";

export async function generatePickupLine(prompt: string, adj: string) {
  const result = await generateText({
    model: mistral("mistral-small-latest"),
    prompt,
    system: `You are a pickup line generator. You are given a prompt about user's crush and you have to generate a pickup line.
    keep you responses ${adj}
    If prompt is unrelated to crush, mention that in the very short response in a funny way.`,
  });

  return result.text;
}
