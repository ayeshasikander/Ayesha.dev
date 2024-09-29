import React from "react";
import { Carousel, Typography } from "antd";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa6";
import { Container, Box } from "@chakra-ui/react";

const contentStyle = {
  margin: "2rem",
  padding: "2rem",
  color: "#fff",
  textAlign: "center",
  background: "transparent",
//   fontSize: "2rem",
  fontFamily: "'Oswald', sans-serif",
  lineHeight: "1.2",
  textTransform: "uppercase",
  fontWeight:"bold",
//   height: {
//     xs: "auto",
//     md:"40vh",
//     lg:"40vh",
//   },
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const FeedbackSlide = () => (
  <Container maxW={"5xl"} position="relative">
   
    <Box position="absolute" top="-20px" left="10px" zIndex={1}>
      <FaQuoteLeft style={{ fontSize: "3rem", color: "#08D665" }} />
    </Box>
    <Box position="absolute" bottom="-10px" right="10px" zIndex={1}>
      <FaQuoteRight style={{ fontSize: "3rem", color: "#08D665" }} />
    </Box>

  
    <Carousel
      arrows
      infinite={false}
      dots={false}
      style={{ padding: "0 2rem" }}
    >
      <div>
        <Typography style={contentStyle}>
          Great and super-professional service provider, which
          brought new technologies, new methodology, and a fresh perspective to
          our project.
        </Typography>
      </div>
      <div>
        <Typography style={contentStyle}>
          Helped us streamline our processes and bring innovative
          solutions that enhanced our project's performance.
        </Typography>
      </div>
      <div>
        <Typography style={contentStyle}>
          We appreciated the level of professionalism and commitment 
          brought to our team, making a big impact on our success.
        </Typography>
      </div>
    </Carousel>
  </Container>
);

export default FeedbackSlide;
