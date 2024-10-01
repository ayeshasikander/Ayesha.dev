import { Box, Heading, Stack, Text, Container } from "@chakra-ui/react";
import React from "react";
import ProjectSlides from "../../components/cards/ProjectSlides";
import "../../style/cardsLayout/portfolio.scss";

const Portfolio = () => {
  return (
    <Box className="portfolio">
      <Container maxW={"6xl"}>
        <Box
          display={"flex"}
          justifyContent={"center"}
          flexDirection={"column"}
          alignItems={"center"}
          paddingTop={"2rem"}
        >
          <Stack
            align={"center"}
            spacing={{ base: 8, md: 10 }}
            py={{ base: 10 }}
            direction={{ base: "column", md: "row" }}
            width={"100%"}
          >
            <Stack flex={1} spacing={{ base: 5, md: 10 }} position={"relative"}>
              <Box mb={8}>
                <Heading
                  as="h1"
                  fontSize={{  base: "4xl", sm: "6xl", md: "8xl" }}
                  position={"absolute"}
                  opacity={1.1}
                  color={"transparent"}
                  textTransform="uppercase"
                  // fontWeight="bold"
                  fontFamily={"body"}
                  sx={{
                    WebkitTextStrokeWidth: "1px",
                    WebkitTextStrokeColor: "rgba(255, 255, 255, 0.233)",
                  }}
                >
                  Portfolio
                </Heading>

                <Heading
                  fontWeight={600}
                  fontSize={{ base: "4xl", sm: "5xl" }}
                  fontFamily={"heading"}
                  textTransform={"uppercase"}
                  color={"white"}
                >
                  <span style={{ color: "#08D665", fontSize: "14px" }}>
                    MY Projects
                  </span>
                  <br />
                  Working <span style={{ color: "#08D665" }}>project</span>
                </Heading>
              </Box>
            </Stack>

            <Stack flex={1} spacing={{ base: 5, md: 10 }}>
              <Text className="desc" color={"color_white"}>
                <div className="line"></div>
                Every project is a step toward innovation, where creativity
                meets functionality.
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Container>
      <ProjectSlides />
    </Box>
  );
};

export default Portfolio;
