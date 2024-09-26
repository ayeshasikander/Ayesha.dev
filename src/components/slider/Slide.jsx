import { Box } from "@chakra-ui/react";
import "../../style/frontWrap/frontWrapStyle.scss";
import { Typography } from "antd";
import React from "react";
import LineDivider from "../line/LineDevder";

const SlideContent = [
  "Javascript",
  "React js",
  "Redux",
  "Node js",
  "Express js",
  "Mongo DB",
  "Mongoose",
  "Ant.d",
  "Tailwind",
  "Styled Components",
  "Chakra UI",
  "Material UI",
  "Bootstrap",
  "Sass",
];

const Slide = () => {
  return (
    <Box className="slide-container">
      <Box className="slide-content">
        {SlideContent.map((slide, index) => (
          <Typography className="slide-text" key={index}>
            {slide}
          </Typography>
        ))}
      </Box>
    </Box>
  );
};

export default Slide;
