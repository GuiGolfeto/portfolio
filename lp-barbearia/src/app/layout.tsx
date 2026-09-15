import type { Metadata, Viewport } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";

const oswald = Oswald({ variable: "--font-oswald", subsets: ["latin"], display: "swap" });
const inter = Inter({ variable: "--font-inter", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Studio Nove Barbearia · Framingham, MA",
  description:
    "Barbershop in Framingham, MA. Haircuts, beard work and color by appointment. Book in 3 steps on the site, or call.",
  openGraph: {
    title: "Studio Nove Barbearia",
    description: "Your cut, done right. Barbershop in Framingham, MA.",
    type: "website",
    locale: "en_US",
  },
};

export const viewport: Viewport = { themeColor: "#0A0B0D" };

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${oswald.variable} ${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
