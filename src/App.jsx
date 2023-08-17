import { useState } from "react";
import "./App.css";
import { Home } from "../components/Home";
import { About } from "../components/About";
import { Nav } from "../components/Nav";
import { Projects } from "../components/Projects";
import { Contact } from "../components/Contact";

function App() {
  return (
    <section>
      <Nav />
      <Home />
      <About />
      <Projects />
      <Contact />
    </section>
  );
}

export default App;
