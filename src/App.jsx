import { useState } from "react";
import "./App.css";
import { Home } from "../components/Home";
import { About } from "../components/About";
import { Nav } from "../components/Nav";
import { Projects } from "../components/Projects";
import { Contact } from "../components/Contact";

function App() {
  return (
    <>
      <Nav />
      <section id="Home">
        <Home />
      </section>
      <section id="About">
        <About />
      </section>
      <section id="Projects">
        <Projects />
      </section>
      <section id="Contact">
        <Contact />
      </section>
    </>
  );
}

export default App;
