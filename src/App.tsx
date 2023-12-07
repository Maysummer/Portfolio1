import Navbar from './components/Navbar';
import './index.css';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import {useRef} from 'react';

function App() {
  const title = 'a Frontend Engineer';
  return (
    <div>
      <Navbar />
      <div className="homeContainer">
        <div className='helloContainer'>
          <p className="hello">Hello </p>
          <span className="wave">👋</span>
        </div>
        <h1 className="nmesoma">I'm Nmesoma Udojike</h1>
        <h3 className="FE">
          {title.split('').map((char, index) => (
            <span className="animatedTitle" key={index}>
              {char}
            </span>
          ))}
        </h3>
      </div>
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
