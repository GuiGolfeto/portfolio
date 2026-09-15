import { Booking } from "@/components/Booking";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { StickyCta } from "@/components/StickyCta";
import { Team } from "@/components/Team";
import { Testimonials } from "@/components/Testimonials";
import { Visit } from "@/components/Visit";

export default function Page() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <Team />
        <Gallery />
        <Booking />
        <Testimonials />
        <Visit />
      </main>
      <Footer />
      <StickyCta />
    </>
  );
}
