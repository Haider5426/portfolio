import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Ledger from "@/components/Ledger";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="page">
      <Nav />
      <main id="top">
        <Hero />
        <Ledger />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}
