import React from 'react'
import AboutMe from '../components/AboutMe'
import HeroSection from '../components/HeroSection'
import Projects from '../components/Proyects'
import Skills from '../components/Skills'

function Home() {
  return (
    <div>
      <HeroSection />
      <AboutMe />
      <Skills />
      <Projects />
    </div>
  )
}

export default Home
