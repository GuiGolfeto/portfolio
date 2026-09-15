import { Credentials } from "@/components/Credentials";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Process } from "@/components/Process";
import { Projects } from "@/components/Projects";
import { QuoteForm } from "@/components/QuoteForm";
import { ServiceArea } from "@/components/ServiceArea";
import { Services } from "@/components/Services";
import { StickyCta } from "@/components/StickyCta";
import { Testimonials } from "@/components/Testimonials";

export default function Page() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Credentials />
        <Services />
        <Projects />
        <Process />
        <Testimonials />
        <QuoteForm />
        <ServiceArea />
        <Faq />
      </main>
      <Footer />
      <StickyCta />
    </>
  );
}
