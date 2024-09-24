import React from "react";
import { Box } from "@chakra-ui/react";
import SkillDesc from "./SkillDesc";
import Skills from "./Skills";

const Tech = () => {
  return (
    <Box
      className="tech"
      margin={"auto"}
      width={"90%"}
      height={{
        lg: "100vh",
        base: "100%",
      }}
      display={"flex"}
      flexDirection={{
        base: "column",
        lg: "row",
      }}
      alignItems={"center"}
      justifyContent={"center"}
      position={"relative"}
    >
      <Box
        width={{
          lg: "50%",
          base: "100%",
        }}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        padding={5}
        height="100%"
      >
        <SkillDesc />
      </Box>

      <Box
        width={{
          lg: "50%",
          base: "100%",
        }}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        height="100%"
      >
        <Skills />
      </Box>
    </Box>
  );
};

export default Tech;
