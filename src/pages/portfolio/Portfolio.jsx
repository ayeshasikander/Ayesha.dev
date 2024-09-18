import { Box, Text } from "@chakra-ui/react";
import React from "react";
import ProjectSlides from "../../components/cards/ProjectSlides";
import "../../style/cardsLayout/portfolio.scss";

const Portfolio = () => {
  return (
    <>
      <Box className="portfolio">
        <Text fontWeight="bold" fontSize="2rem" textAlign="center">
          My Portfolio Projects
        </Text>
        <ProjectSlides />
      </Box>
    </>
  );
};

export default Portfolio;
