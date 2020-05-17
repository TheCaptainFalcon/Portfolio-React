import React from 'react';
import logo from './logo.svg';
import './App.css';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Navigation from './components/Navigation';


function App() {
  return (
    <div className="App">
      <Navigation/>
      <Portfolio/>
      <Skills/>
      <Projects/>
    </div>
  );
}

export default App;
