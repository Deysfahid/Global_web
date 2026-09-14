import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import About from "@/components/About";
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import CTA from "@/components/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Portfolio />
      <CTA
        heading="Want a website like this for your business?"
        buttonText="Start a Project"
        variant="dark"
      />
      <Services />
      <About />
      <Process />
      <Contact />
    </>
  );
}
