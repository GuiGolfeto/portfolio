import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const space = Space_Grotesk({ variable: "--font-space", subsets: ["latin"], display: "swap" });
const inter = Inter({ variable: "--font-inter", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Guilherme Golfeto · Websites for local businesses",
  description:
    "I build fast websites for local businesses that don't have one yet. Built for phones, ready for Google, with your contact one tap away.",
  openGraph: {
    title: "Guilherme Golfeto · Websites for local businesses",
    description: "Your customer searches Google. Do you show up?",
    type: "website",
    locale: "en_US",
  },
};

export const viewport: Viewport = { themeColor: "#FCFBF9" };

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${space.variable} ${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
