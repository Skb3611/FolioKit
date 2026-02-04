import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { RootProvider } from "fumadocs-ui/provider/next";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ClientOnly } from "@/components/docs/client-only";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FolioKit",
  description:
    "Free and open-source animated components and effects built with React, Typescript, Tailwind CSS, and Motion.",
  openGraph: {
    title: "FolioKit",
    description:
      "Free and open-source animated components and effects built with React, Typescript, Tailwind CSS, and Motion.",
    images: [
      {
        url: "/images/og.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    title: "FolioKit",
    description:
      "Free and open-source animated components and effects built with React, Typescript, Tailwind CSS, and Motion.",
    images: [
      {
        url: "/images/og.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" style={{colorScheme:"dark"}}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <RootProvider>
            <TooltipProvider>{children}</TooltipProvider>
        </RootProvider>
      </body>
    </html>
  );
}
