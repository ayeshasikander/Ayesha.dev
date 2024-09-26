import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import ProjectSlides from "../../components/cards/ProjectSlides";
import "../../style/cardsLayout/portfolio.scss";
import LineDivider from "../../components/line/LineDevder";

const Portfolio = () => {
  return (
    <>
      <Box className="portfolio">
        <Box
          display={"flex"}
          justifyContent={"center"}
          flexDirection={"column"}
          alignItems={"center"}
          paddingTop={"2rem"}
        >
         <Heading align={"center"} fontSize={"2xl"} color={"color_white"}>
          My Portfolio
        </Heading>
          <LineDivider />
        </Box>
        <ProjectSlides />
      </Box>
    </>
  );
};

export default Portfolio;
