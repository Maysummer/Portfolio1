import Navbar from "./components/Navbar";
import "./index.css";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import { Typewriter } from "react-simple-typewriter";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <div className="homeContainer">
        <div className="helloContainer">
          <p className="hello">Hello </p>
          <span className="wave">👋</span>
        </div>
        <h1 className="nmesoma">I'm Nmesoma Udojike</h1>
        <h3 className="FE">
        <Typewriter
          words={["a Frontend Engineer"]}
          loop={5}
        />
        </h3>
        
      </div>
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
