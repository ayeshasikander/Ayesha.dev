import React from 'react';
import '../../style/cardsLayout/cube.scss';

const Cube = ({ position, words, size }) => {
  const faceSize = size / 2;

  return (
    <div
      className="cube-container"
      style={{
        top: `${position.y}px`,
        left: `${position.x}px`,
        position: 'absolute',
        width: `${size}px`,
        height: `${size}px`,
      }}
    >
      <div className="cube">
        <div className="face front" style={{ transform: `translateZ(${faceSize}px)` }}>
          <span>{words[0]}</span>
        </div>
        <div className="face back" style={{ transform: `rotateY(180deg) translateZ(${faceSize}px)` }}>
          {words[1]}
        </div>
        <div className="face right" style={{ transform: `rotateY(90deg) translateZ(${faceSize}px)` }}>
          {words[2]}
        </div>
        <div className="face left" style={{ transform: `rotateY(-90deg) translateZ(${faceSize}px)` }}>
          {words[3]}
        </div>
        <div className="face top" style={{ transform: `rotateX(90deg) translateZ(${faceSize}px)` }}>
          {words[4]}
        </div>
        <div className="face bottom" style={{ transform: `rotateX(-90deg) translateZ(${faceSize}px)` }}>
          {words[5]}
        </div>
      </div>
    </div>
  );
};

export default Cube;
