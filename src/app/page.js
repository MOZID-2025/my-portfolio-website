import Image from "next/image";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Skills from "./components/Skills";

import EducationAndCertifications from "./components/Education";
import ContactCTA from "./components/Contact";
import Projects from "./project/page";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <About />
      <Services />
      <Skills />
      <Projects />
      <EducationAndCertifications />
      <ContactCTA />
    </div>
  );
}
