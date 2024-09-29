import React from "react";
import About from "../../sections/about/About";
import Service from "../../sections/service/Service";
import Contact from "../contact/Contact";
import Wrap from "../../components/wrap/Wrap";
import Slide from "../../components/slider/Slide";
import Portfolio from "../portfolio/Portfolio";
import Testimonial from "../../sections/testimonial/Testimonial";

const Main = () => {
  return (
    <div>
      <div id="wrap">
        <Wrap />
      </div>

      <div id="about">
        <About />
      </div>

      <Slide />

      <div id="service">
        <Service />
      </div>

      <div id="portfolio">
        <Portfolio />
      </div>
      <div>
        <Testimonial />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
};

export default Main;
