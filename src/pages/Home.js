import React from 'react'
import AboutMe from '../components/AboutMe'
import HeroSection from '../components/HeroSection'
import Projects from '../components/Proyects'
import Skills from '../components/Skills'

function Home() {
  const nombres = ["omar", "dario", "juan"]
  return (
    <div>
      <HeroSection nombre={nombres[1]} />
      <AboutMe />
      <Skills />
      <Projects />
    </div>
  )
}

export default Home
