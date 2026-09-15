import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { How } from "@/components/How";
import { Included } from "@/components/Included";
import { StickyCta } from "@/components/StickyCta";
import { Work } from "@/components/Work";

export default function Page() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Work />
        <Included />
        <How />
        <About />
        <Contact />
      </main>
      <Footer />
      <StickyCta />
    </>
  );
}
