import React from "react";
import Lottie from "lottie-react";
import animationData from "../../assets/video/bubble.json";
const Bubble = () => {
  return (
    <Lottie
      style={{ width: "100%", height: "500px" }}
      animationData={animationData}
    />
  );
};

export default Bubble;
