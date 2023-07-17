import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import Body from "./body";
import "./globals.css";

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Anonymous",
  description: "Say anything you want guilt free.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" className="!scroll-smooth ">
        <Body className={`bg-isabelle dark:bg-black ${quicksand.className}`}>
          {children}
        </Body>
      </html>
    </ClerkProvider>
  );
}
