import React, { useContext } from 'react';
import { About } from './components/about';
import { Contact } from './components/contact';
import { Intro } from './components/intro.tsx';
import { Navbar } from './components/navbar';
import { Projects } from './components/projects';
import { ThemeContext } from './hooks/context';


function App() {
  const theme = useContext(ThemeContext);
  const darkMode =theme.state.darkMode;

  return (
    <div style={{backgroundColor:darkMode? "var(--dark)": "var(--background)", color:darkMode? "var(--silk)": "var(--dark)"}}>
      <Navbar />
      <Intro />
      <About />
      {/* <Projects /> */}
      <Contact />
    </div>
  );
}

export default App;
