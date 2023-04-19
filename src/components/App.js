import React from 'react';
import '../styles/app.css';
import About from './About';
import Intro from './Intro';
import Projects from './Projects';
import Skills from './Skills';

export default function App(){
  return(
    <div className='App'>
      <Intro />
      <About />
      <Projects />
      <Skills />
      <svg onClick={()=>{
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }} class="to-top-button" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M11 16h2v-4.2l1.6 1.6L16 12l-4-4l-4 4l1.4 1.4l1.6-1.6V16Zm1 6q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z"></path></svg>
    </div>
  )
}