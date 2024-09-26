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
         <Heading align={"center"}  color={"color_white"} fontSize={{ base: "4xl", sm: "5xl" }}
              fontFamily={"heading"}
              textTransform={"uppercase"}>
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
