import type { Metadata, Viewport } from "next";
import { Archivo, Fraunces } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ramos Construction & Remodeling · MetroWest, MA",
  description:
    "Kitchens, bathrooms, decks and additions across Framingham, Natick and Greater Boston. Licensed and insured in Massachusetts, itemized quotes and a 5-year warranty.",
  openGraph: {
    title: "Ramos Construction & Remodeling",
    description: "Remodeling that adds value to your home. Licensed and insured in Massachusetts.",
    type: "website",
    locale: "en_US",
  },
};

export const viewport: Viewport = { themeColor: "#15100D" };

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${archivo.variable} ${fraunces.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
