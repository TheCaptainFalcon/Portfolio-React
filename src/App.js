import React from 'react';
import logo from './logo.svg';
import './App.css';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';

function App() {
  return (
    <div className="App">
      <Portfolio/>
      <Skills/>
      <Projects/>
      <Experience/>
    </div>
  );
}

export default App;
