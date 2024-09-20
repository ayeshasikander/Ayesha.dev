import React from "react";
import Lottie from "lottie-react";
import animationData from "../../assets/video/Animation.json";
const Robot = () => {
  return (
    <Lottie
      style={{ width: "100%", height: "500px" }}
      animationData={animationData}
    />
  );
};

export default Robot;
