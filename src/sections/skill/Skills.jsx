import { Typography } from "antd";
import { Box } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import Cube from "../cubeFlex/Cube";
import { svgIcon } from "../../assets/svgIcon";

// Function to generate random content for each cube
const getRandomWords = () => {
  const randomWords = [
    { icon: svgIcon.redux, text: "Redux" },
    // [svgIcon.redux, "World", "React", "Random", "3D", "Cube"],
    ["Front", "Back", "Left", "Right", "Top", "Bottom"],
    ["Program", "Design", "Code", "Chakra", "AntD", "Fun"],
    // Add more sets of random words as needed
  ];
  const index = Math.floor(Math.random() * randomWords.length);
  return randomWords[index];
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

  useEffect(() => {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const radius = 300;
    const cubeCount = 10;

    // Generate the positions for smaller cubes
    const surroundingCubes = generateCircularPositions(
      centerX,
      centerY,
      radius,
      cubeCount
    ).map((position) => ({
      position,
      size: 80, // Smaller size for surrounding cubes
      words: getRandomWords(),
    }));

    // Central cube (large)
    const centralCube = {
      position: { x: centerX - 100, y: centerY - 100 }, // Centered
      size: 200, // Larger size
      words: getRandomWords(),
    };

    setCubes([centralCube, ...surroundingCubes]);
  }, []);

  //   useEffect(() => {
  //     const centerX = window.innerWidth / 2;
  //     const centerY = window.innerHeight / 2;
  //     const radius = 300; // Distance from center cube
  //     const cubeCount = 10; // Number of smaller cubes around

  //     // Generate the positions for smaller cubes
  //     const surroundingCubes = generateCircularPositions(centerX, centerY, radius, cubeCount).map((position) => ({
  //       position,
  //       size: 100, // Smaller size for surrounding cubes
  //       words: getRandomWords(),
  //     }));

  //     // Central cube (large)
  //     const centralCube = {
  //       position: { x: centerX - 100, y: centerY - 100 }, // Centered
  //       size: 200, // Larger size
  //       words: getRandomWords(),
  //     };

  //     setCubes([centralCube, ...surroundingCubes]);
  //   }, []);

  return (
    <Box
      className="skills"
      bgColor="blue"
      height={"120vh"}
      width={"100%"}
      p={5}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      position="relative"
      overflow="hidden"
    >
      <Typography>Skills</Typography>
      {cubes.map((cube, index) => (
        <Cube
          key={index}
          position={cube.position}
          words={cube.words}
          size={cube.size}
        />
      ))}
    </Box>
  );
};

export default Skills;
