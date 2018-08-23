import React, { Component } from 'react';
import './App.css';


import Landing from './components/Landing';
import Skills from './components/Skills';
import Project from './components/Project';
import Contact from './components/Contact';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Landing/>
        <Skills/>
        <Project/>
        <Contact/> 
      </div>
    );
  }
}

export default App;
