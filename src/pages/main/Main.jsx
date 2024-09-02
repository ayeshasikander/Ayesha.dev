import React from 'react'
import Header from '../../layout/header/Header'
import HeroSection from '../../sections/heroSection/HeroSection'
import ProjectCard from '../../components/cards/ProjectCard'
import About from '../../sections/about/About'
import FaqAccordion from '../../sections/accordion/FaqAccordion'
import Service from '../../sections/service/Service'
import Contact from '../contact/Contact'
import Footer from '../../layout/footer/Footer'

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
      <FaqAccordion />
      <Service />
      <Contact/>
      <Footer/>
    </div>
  )
}
