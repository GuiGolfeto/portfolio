import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SparkleHome Cleaning · House cleaning in Framingham and MetroWest",
  description:
    "Residential and commercial cleaning in Framingham, Natick and the MetroWest area. In-house team, supplies included, and a flat quote in a 2-minute call.",
  openGraph: {
    title: "SparkleHome Cleaning",
    description:
      "A spotless home, without lifting a finger. Free quote in 2 minutes.",
    type: "website",
    locale: "en_US",
  },
};

export const viewport: Viewport = {
  themeColor: "#071722",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${jakarta.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
