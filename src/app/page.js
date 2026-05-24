import Image from "next/image";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import EducationAndCertifications from "./components/Education";
import ContactCTA from "./components/Contact";

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
