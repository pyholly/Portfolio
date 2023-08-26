import "./App.css";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Nav } from "./components/Nav";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";

function App() {
  return (
    <div>
      <Nav />
      {/* <h1 className="text-3xl font-bold text-center bg-blue-500 mx-auto">
        Hello world!
      </h1> */}
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
    </div>
  );
}

export default App;
