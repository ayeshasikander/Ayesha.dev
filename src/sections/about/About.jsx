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
            👋Hello! I'm Ayesha Sikander, a passionate web developer from
            Pakistan specializing in Frontend development with React and
            JavaScript. A 2023 graduate from Women University Multan, <br />
            I'm on a mission to create user-centric web applications that make a
            real impact. My expertise lies in crafting intuitive, interactive
            interfaces, and I'm currently expanding into Full-Stack development
            with Node.js. Through this portfolio, I'm excited to showcase my
            projects and share my journey in software development. Join me as I
            turn innovative ideas into digital realities!
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
