import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/NavbarFolder/Navbar'
import Intro from './Components/IntroFolder/Intro'
import Experience from './Components/ExperienceFolder/Experience'
import Projects from './Components/ProjectsFolder/Projects'
import Contact from './Components/Contact/Contact'
import AOS from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true, 
    });
  }, []);
  return (
    <div>
      <Navbar />
      <Intro />
      <Experience/>
      <Projects/>
      <Contact/>

    </div>
  )
}

export default App
