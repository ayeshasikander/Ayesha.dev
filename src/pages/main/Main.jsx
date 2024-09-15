import React from "react";
// import HeroSection from "../../sections/heroSection/HeroSection";
// import ProjectCard from '../../components/cards/ProjectCard';
import About from "../../sections/about/About";
import Service from "../../sections/service/Service";
import Contact from "../contact/Contact";
import ProjectSlides from "../../components/cards/ProjectSlides";
import Cube from "../../sections/cubeFlex/Cube";
import Wrap from "../../components/wrap/Wrap";
// import RotatedText from "../../components/textAnimation/RotatedText";

const Main = () => {
  return (
    <div>
      {/* <HeroSection /> */}
      <Wrap />
      {/* <RotatedText /> */}
      <ProjectSlides />
      <About />
      <Cube />
      <Service />
      <Contact />
    </div>
  );
};

export default Main;
