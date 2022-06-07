import React from 'react';
import { About } from './components/about';
import { Contact } from './components/contact';
import { Intro } from './components/intro.tsx';
import { Navbar } from './components/navbar';
import { Projects } from './components/projects';


function App() {
  return (
    <>
    <Navbar/>
    <Intro/>
    <About/>
    <Projects/>
    <Contact/>
    </>
  );
}

export default App;
