import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import About from "../components/About";
import Experience from "../components/Experience";
import Certifications from "../components/Certifications";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar";
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Projects />
      <Skills  />
      <About  />
      <Experience />
      <Certifications />
      <Contact />
    </main>
  );
}