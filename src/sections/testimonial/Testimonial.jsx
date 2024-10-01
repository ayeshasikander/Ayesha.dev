import { Box, Heading, Stack, Text, Container } from "@chakra-ui/react";
import React from "react";
import "../../style/cardsLayout/feedback.scss";
import FeedbackSlide from "../../components/slider/FeedbackSlide";

const Testimonial = () => {
  return (
    <Box className="testimonial">
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
                  fontSize={{ base: "4xl", sm: "6xl", md: "8xl"  }}
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
                  Testimonials
                </Heading>

                <Heading
                  fontWeight={600}
                  fontSize={{ base: "4xl", sm: "5xl" }}
                  fontFamily={"heading"}
                  textTransform={"uppercase"}
                  color={"white"}
                >
                  <span style={{ color: "#08D665", fontSize: "14px" }}>
                    Testimonials
                  </span>
                  <br />
                  Happy Clients TO<span style={{ color: "#08D665" }}>says</span>
                </Heading>
              </Box>
            </Stack>

            <Stack flex={1} spacing={{ base: 5, md: 10 }}>
              <Text className="desc" color={"color_white"}>
                <div className="line"></div>
                Building lasting partnerships, one satisfied client at a
                time—your success is my greatest reward.
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Container>
      <FeedbackSlide />
    </Box>
  );
};

export default Testimonial;
