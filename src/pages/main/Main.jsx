import React from 'react';
import HeroSection from '../../sections/heroSection/HeroSection';
// import ProjectCard from '../../components/cards/ProjectCard';
import About from '../../sections/about/About';
import FaqAccordion from '../../sections/accordion/FaqAccordion';
import Service from '../../sections/service/Service';
import Contact from '../contact/Contact';
import ProjectSlides from '../../components/cards/ProjectSlides';
import Cube from '../../sections/cubeFlex/Cube';

const Main = () => {
  return (
    <div>
      <HeroSection />
      <ProjectSlides />
      <About />
      <Cube />
      <FaqAccordion />
      <Service />
      <Contact />
    </div>
  )
}

export default Main;
