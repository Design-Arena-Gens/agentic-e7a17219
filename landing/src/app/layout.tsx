import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://agentic-e7a17219.vercel.app"),
  title: "Aurelia Laboratories — Professional Cosmetic Science",
  description:
    "Clinical-grade skincare designed for master aestheticians and modern spa teams. Targeted protocols, potent actives, effortless refinement.",
  openGraph: {
    title: "Aurelia Laboratories — Professional Cosmetic Science",
    description:
      "Clinical-grade skincare designed for master aestheticians and modern spa teams.",
    url: "https://agentic-e7a17219.vercel.app",
    siteName: "Aurelia Laboratories",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aurelia Laboratories — Professional Cosmetic Science",
    description:
      "Clinical-grade skincare designed for master aestheticians and modern spa teams.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
