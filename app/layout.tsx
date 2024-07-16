import type { Metadata } from "next";
import { Grand_Hotel } from "next/font/google";
import "./globals.css";

import { Analytics } from "@vercel/analytics/react";

const grandHotel = Grand_Hotel({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pickup Line Generator",
  description: "Pickup line generator using AI",
  keywords: [
    "AI",
    "Pickup Line",
    "Generator",
    "Next.js",
    "React",
    "Tailwind",
    "Vercel",
    "AI SDK",
    "Mistral",
    "OpenAI",
    "GPT-3",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Analytics />
      <body className={grandHotel.className}>{children}</body>
    </html>
  );
}
