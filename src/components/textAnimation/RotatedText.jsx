import React, { useState, useEffect } from "react";
import "../../style/cardsLayout/rotatedText.scss";

const RotatedText = () => {
  const [rotationX, setRotationX] = useState(0);
  const [rotationY, setRotationY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const xPosPercent = (e.pageX / window.innerWidth) * 100 - 50;
      const yPosPercent = (e.pageY / window.innerHeight) * 100 - 50;

      setRotationX(yPosPercent * 0.1);
      setRotationY(xPosPercent * 0.1);
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const texts = [
    "javascript", "html", "css", "scss", "react js", "developer",
    "programmer", "pwa", "front end", "vision", "ideas", "concept",
    "design", "ui frame", "library"
  ];

  const cellCount = texts.length;
  const rotationAngle = 360 / cellCount;  // Angle for each cell

  return (
    <div className="wrapper">
      <div className="scene">
        <div
          className="carousel"
          style={{
            transform: `rotateY(${rotationY}deg) rotateX(${rotationX}deg)`,
          }}
        >
          {texts.map((text, index) => (
            <div
              className="carousel__cell"
              key={index}
              style={{
                transform: `rotateY(${index * rotationAngle}deg) translateZ(300px)`, // Increase translateZ
              }}
            >
              {text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RotatedText;
