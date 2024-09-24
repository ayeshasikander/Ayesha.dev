import React from "react";
import "../../style/cardsLayout/cube.scss";

const Cube = ({ position, icons, size }) => {
  const faceSize = size / 2;

  return (
    <div
      className="cube-container"
      style={{
        top: `${position.y}px`,
        left: `${position.x}px`,
        position: "absolute",
        width: `${size}px`,
        height: `${size}px`,
      }}
    >
      <div className="cube" style={{ width: size, height: size }}>
        {/* Front Face */}
        <div
          className="face front"
          style={{ transform: `translateZ(${faceSize}px)` }}
        >
          <img src={icons[0]} alt="Front face" />
        </div>

        {/* Back Face */}
        <div
          className="face back"
          style={{ transform: `rotateY(180deg) translateZ(${faceSize}px)` }}
        >
          <img src={icons[1]} alt="Back face" />
        </div>

        {/* Right Face */}
        <div
          className="face right"
          style={{ transform: `rotateY(90deg) translateZ(${faceSize}px)` }}
        >
          <img src={icons[2]} alt="Right face" />
        </div>

        {/* Left Face */}
        <div
          className="face left"
          style={{ transform: `rotateY(-90deg) translateZ(${faceSize}px)` }}
        >
          <img src={icons[3]} alt="Left face" />
        </div>

        {/* Top Face */}
        <div
          className="face top"
          style={{ transform: `rotateX(90deg) translateZ(${faceSize}px)` }}
        >
          <img src={icons[4]} alt="Top face" />
        </div>

        {/* Bottom Face */}
        <div
          className="face bottom"
          style={{ transform: `rotateX(-90deg) translateZ(${faceSize}px)` }}
        >
          <img src={icons[5]} alt="Bottom face" />
        </div>
      </div>
    </div>
  );
};

export default Cube;
