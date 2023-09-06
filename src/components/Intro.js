import React, {useEffect} from 'react';
import '../styles/intro.css';
import me from '../assets/me.jpg';
import Aos from 'aos';
import "aos/dist/aos.css";

export default function Intro(){
  useEffect(()=>{
    Aos.init({duration: 2000});
  },[])
  return(
    <section className='intro' id='intro'>
      <header data-aos='fade-in' className='intro-content'>
        <h1 className='name'>
          Anthony <br />
          Gleason
        </h1>
        <h3 className='title intro-title'>Full Stack Developer</h3>
      </header>
      <img data-aos='fade-in' src={me} className='intro-img' alt='me' />
    </section>
  )
};