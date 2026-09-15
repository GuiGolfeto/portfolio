import { BeforeAfter } from "@/components/BeforeAfter";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { QuoteForm } from "@/components/QuoteForm";
import { ServiceArea } from "@/components/ServiceArea";
import { Services } from "@/components/Services";
import { Stats } from "@/components/Stats";
import { StickyCta } from "@/components/StickyCta";
import { Testimonials } from "@/components/Testimonials";

export default function Page() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Stats />
        <Services />
        <BeforeAfter />
        <HowItWorks />
        <ServiceArea />
        <Testimonials />
        <QuoteForm />
        <Faq />
      </main>
      <Footer />
      <StickyCta />
    </>
  );
}
