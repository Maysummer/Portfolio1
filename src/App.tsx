import React from 'react';
import Navbar from './components/Navbar';
import './index.css';

function App() {
  const title = 'a Frontend Engineer'
  return (
    <div>
      <Navbar />
      <div className="homeContainer">
        <h1 className="hello">Hello <span className="wave">👋</span></h1>
        <h1 className="nmesoma">I'm Nmesoma Udojike</h1>
        <h3 className="FE">{title.split('').map((char, index) => (
          <span className='animatedTitle' key={index}>{char}</span>
        ))}</h3>
      </div>
    </div>
  );
}

export default App;
