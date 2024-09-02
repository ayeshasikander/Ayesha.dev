import React from 'react'
import Header from '../../layout/header/Header'
import HeroSection from '../../components/heroSection/HeroSection'
import ProjectCard from '../../components/cards/ProjectCard'
import About from '../../components/about/About'
import FaqAccordion from '../../components/accordion/FaqAccordion'

export const Main = () => {
  return (
    <div>
      <Header />
      <HeroSection />

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
      <About />
      <FaqAccordion/>
     
    </div>
  )
}
