import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
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
      <html lang="en" className="!scroll-smooth">
        <body className={quicksand.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
