import React from "react";
import About from "../../sections/about/About";
import Service from "../../sections/service/Service";
import Contact from "../contact/Contact";
import Wrap from "../../components/wrap/Wrap";
import Slide from "../../components/slider/Slide";
import Portfolio from "../portfolio/Portfolio";
import Tech from "../../sections/skill/Tech";

const Main = () => {
  return (
    <div>
      <Wrap />
      <Tech/>
      <Portfolio />
      <About />
      <Slide />
      <Service />
      <Contact />
    </div>
  );
};

export default Main;
