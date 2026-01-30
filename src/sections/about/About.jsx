import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
} from "@chakra-ui/react";
import { image } from "../../assets/image";
import LineDevider from "../../components/line/LineDevder";
import Bubble from "../../components/textAnimation/Bubble";

export default function About() {
  return (
    <Container maxW={"7xl"}>
      <Stack
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: "column", md: "row" }}
      >
        <Flex
          flex={1}
          justify={"center"}
          align={"center"}
          position={"relative"}
          w={"full"}
        >
          <Box
            position={"relative"}
            rounded={"2xl"}
            boxShadow={"2xl"}
            width={"70%"}
            overflow={"hidden"}
          >
            <Bubble />
            <Box
              position={"absolute"}
              top={"50%"}
              left={"50%"}
              transform={"translate(-50%, -50%)"}
              width={"80%"}
            >
              <img
                src={image.girl3}
                alt="about"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  filter: "drop-shadow(5px 5px 10px #08D665)",
                }}
              />
            </Box>
          </Box>
        </Flex>

        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Box>
            <Stack flex={1} spacing={{ base: 5, md: 10 }} position={"relative"}>
              <Box mb={8}>
                <Heading
                  as="h1"
                  fontSize={{ base: "6xl", sm: "8xl" }}
                  position={"absolute"}
                  opacity={1.1}
                  color={"transparent"}
                  textTransform="uppercase"
                  fontWeight="bold"
                  fontFamily={"body"}
                  sx={{
                    WebkitTextStrokeWidth: "1px",
                    WebkitTextStrokeColor: "rgba(255, 255, 255, 0.233)",
                  }}
                >
                  About me
                </Heading>

                <Heading
                  fontWeight={600}
                  fontSize={{ base: "4xl", sm: "5xl" }}
                  fontFamily={"heading"}
                  textTransform={"uppercase"}
                  color={"white"}
                >
                  <span style={{ color: "#08D665", fontSize: "14px" }}>
                    Crafting Digital
                  </span>
                  <br />
                  Breathing Life into{" "}
                  <span style={{ color: "#08D665" }}>Bytes</span>
                </Heading>
              </Box>
            </Stack>
            <LineDevider />
          </Box>

          <Text color={"color_white"}>
            👋 Hi! I'm Ayesha Sikander, a React.js Developer with 2+ years
            building production-ready web applications in Lahore, Pakistan.
            <br />
            Currently at 724.One Ltd & NewbieLogics, I create responsive,
            high-performance interfaces using React, TypeScript, Redux Toolkit,
            and modern UI frameworks. From AI learning platforms to real-time
            streaming systems.<br/> A 2023 graduate from Women University Multan with
            a BS in Computer Science, I've evolved from a frontend intern to a
            full-time developer, consistently pushing the boundaries of what's
            possible on the web. From integrating Stripe payments and Firebase
            authentication to building AI-driven chatbots and dynamic data
            visualizations.
            <br />
            <span style={{ color: "#08D665" }}>
              Let's create something amazing!
            </span>
          </Text>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: "column", sm: "row" }}
          >
            <a href="/Ayesha_Sikander_ReactJS_Developer.pdf">
              <Button
                rounded={"md"}
                size={"lg"}
                px={6}
                colorScheme={"#000000"}
                bg={"primaryColor"}
                fontSize={"1rem"}
                fontWeight={"bold"}
                _hover={{
                  bg: "transparent",
                  color: "primaryColor",
                  border: "1px solid",
                  borderColor: "primaryColor",
                }}
              >
                DOWNLOAD CV
              </Button>
            </a>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
}
