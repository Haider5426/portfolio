import { ViewTransition } from "react";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Ledger from "@/components/Ledger";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";
import { navTransitionMap } from "@/lib/viewTransition";

export default function Home() {
  return (
    <ViewTransition enter={navTransitionMap} exit={navTransitionMap} default="none">
      <div className="page">
        <Nav />
        <main id="main">
          <Hero />
          <Ledger />
          <Experience />
          <Projects />
          <Skills />
          <Resume />
          <Contact />
        </main>
        {/* Scrollspy end-of-page sentinel — see Nav.tsx */}
        <div id="page-end" aria-hidden="true" />
      </div>
    </ViewTransition>
  );
}
