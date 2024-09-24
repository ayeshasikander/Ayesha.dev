import { Flex } from "@chakra-ui/react";
import React, { useState, useEffect, useRef } from "react";
import Cube from "../cubeFlex/Cube";
import { svgIcon } from "../../assets/svgIcon";

const getRandomIcons = () => {
  const allIcons = [
    svgIcon.redux,
    svgIcon.react,
    svgIcon.axios,
    svgIcon.sass,
    svgIcon.javascript,
    svgIcon.mui,
    svgIcon.tailwincss,
    svgIcon.antd,
    svgIcon.bootstrap,
    svgIcon.vite,
    svgIcon.mongodb,
    svgIcon.express,
    svgIcon.node,
    svgIcon.router,
    svgIcon.github,
  ];

  // Shuffle and return exactly 6 icons for the 6 sides of the cube
  const shuffledIcons = allIcons.sort(() => 0.5 - Math.random());
  return shuffledIcons.slice(0, 6);
};

const generateCircularPositions = (centerX, centerY, radius, count) => {
  const angleIncrement = (2 * Math.PI) / count;
  return Array.from({ length: count }).map((_, index) => {
    const angle = index * angleIncrement;
    return {
      x: centerX + radius * Math.cos(angle),
      y: centerY + radius * Math.sin(angle),
    };
  });
};

const Skills = () => {
  const [cubes, setCubes] = useState([]);
  const containerRef = useRef(null);

  useEffect(() => {
    const initializeCubes = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const containerHeight = containerRef.current.offsetHeight;

        const centerX = containerWidth / 2;
        const centerY = containerHeight / 2;
        const radius = Math.min(containerWidth * 0.4, containerHeight * 0.4);
        const cubeCount = 10;

        const surroundingCubes = generateCircularPositions(
          centerX,
          centerY,
          radius,
          cubeCount
        ).map((position) => ({
          position,
          size: Math.min(80, radius / 4),
          icons: getRandomIcons(),
        }));

        // Central cube (larger)
        const centralCube = {
          position: { x: centerX, y: centerY },
          size: Math.min(200, radius / 2), // Larger size
          icons: getRandomIcons(),
        };

        setCubes([centralCube, ...surroundingCubes]);
      }
    };

    initializeCubes();

    const intervalId = setInterval(() => {
      initializeCubes();
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Flex
      className="skills"
      height={"70%"}
      width={"100%"}
      ref={containerRef}
      position="relative"
      overflow="hidden"
    >
      {cubes.map((cube, index) => (
        <Cube
          key={index}
          position={cube.position}
          icons={cube.icons}
          size={cube.size}
        />
      ))}
    </Flex>
  );
};

export default Skills;
