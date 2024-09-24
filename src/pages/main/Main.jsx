import React from "react";
import About from "../../sections/about/About";
import Service from "../../sections/service/Service";
import Contact from "../contact/Contact";
import Wrap from "../../components/wrap/Wrap";
import Slide from "../../components/slider/Slide";
import Portfolio from "../portfolio/Portfolio";
import Skills from "../../sections/skill/Skills";

const Main = () => {
  return (
    <div>
      {/* <Wrap />
      <Slide />
      <Portfolio />
      <About /> */}
      <Skills />
      {/* <Service />
      <Contact /> */}
    </div>
  );
};

export default Main;
