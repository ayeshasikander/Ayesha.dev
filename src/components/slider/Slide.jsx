import { Box } from "@chakra-ui/react";
import "../../style/frontWrap/frontWrapStyle.scss";
import { Typography } from "antd";
import React from "react";

const SlideContent = [
  "Javascript",
  "React js",
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
      <Box className="slide-content-reverse">
        {SlideContent.slice()
          .reverse()
          .map((slide, index) => (
            <Typography className="slide-text" key={index}>
              {slide}
            </Typography>
          ))}
      </Box>
    </Box>
  );
};

export default Slide;
