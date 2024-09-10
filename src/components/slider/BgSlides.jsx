import React from "react";
import { Carousel } from "antd";
import { image } from "../../assets/image";

const contentStyle = {
  height: "100vh",
  color: "#fff",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "#364d79",
  width: "100%",
  border: "1px solid red",
};

const imgWrap = {
  height: "100%",
  width: "100%",
};

const BgSlides = () => (
  <Carousel
    effect="fade"
    //  autoplay
    // dots={false}
    dotPosition="right"
  >
    <div>
      <h3 style={contentStyle}>
        <img style={imgWrap} src={image.slide1} alt="" />
      </h3>
    </div>
    <div>
      <h3 style={contentStyle}>
        <img style={imgWrap} src={image.slide2} alt="" />
      </h3>
    </div>
    <div>
      <h3 style={contentStyle}>
        <img style={imgWrap} src={image.slide3} alt="" />
      </h3>
    </div>
    <div>
      <h3 style={contentStyle}>
        <img style={imgWrap} src={image.slide4} alt="" />
      </h3>
    </div>
    <div>
      <h3 style={contentStyle}>
        <img style={imgWrap} src={image.slide5} alt="" />
      </h3>
    </div>
    <div>
      <h3 style={contentStyle}>
        <img style={imgWrap} src={image.slide6} alt="" />
      </h3>
    </div>
  </Carousel>
);
export default BgSlides;
