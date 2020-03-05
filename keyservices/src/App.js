import React from 'react';
import './App.css';
import Nav from './Nav';
import Accueil from './components/Accueil';
import KeyservicesPresentation from './components/KeyservicesPresentation';
import KeyservicesVilles from './components/KeyservicesVilles';
import Contact from './components/Contact';
import MonEspace from './components/MonEspace';




function App() {
  return (
    <div className="App">
        <Nav />
        <Accueil />
        <KeyservicesPresentation />
        <KeyservicesVilles />
        <Contact />
        <MonEspace />
    </div>
  );
}

export default App;
