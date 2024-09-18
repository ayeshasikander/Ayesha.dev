import React from "react";
import About from "../../sections/about/About";
import Service from "../../sections/service/Service";
import Contact from "../contact/Contact";
import Cube from "../../sections/cubeFlex/Cube";
import Wrap from "../../components/wrap/Wrap";
import Slide from "../../components/slider/Slide";
import Portfolio from "../portfolio/Portfolio";

const Main = () => {
  return (
    <div>
      <Wrap />
      <Slide />
      <Portfolio />
      <About />
      <Service />
      <Cube />
      <Contact />
    </div>
  );
};

export default Main;
