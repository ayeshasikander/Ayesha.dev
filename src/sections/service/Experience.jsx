import {
  Container,
  Stack,
  Box,
  Heading,
  Text,
  SimpleGrid,
  Card,
  CardBody,
  CardHeader,
} from "@chakra-ui/react";
import { skill } from "./skill";
import "../../style/serviceLayout/experience.scss";

export default function Experience() {
  return (
    <Container maxW={"6xl"}>
      <Stack
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: "column", md: "row" }}
      >
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          {/* <Box position="relative">
            <Heading
              as="h1"
              fontSize={{ base: "5xl", sm: "4xl" }}
              position="absolute"
              top="0"
              left="0"
              zIndex={1}
              opacity={1.1}
              color="green"
              textTransform="uppercase"
              fontWeight="bold"
              letterSpacing="wide"
            >
              My Career
            </Heading>
            <Heading
             
              fontWeight={600}
              fontSize={{ base: "4xl", sm: "5xl" }}
              fontFamily={"heading"}
              textTransform={"uppercase"}
              color={"color_white"}
            >
              <span style={{ color: "#08D665", fontSize: "14px" }}>
                MY EXPERIENCE{" "}
              </span>
              <br />
              Experience and <span style={{ color: "#08D665" }}>skill</span>
            </Heading>
          </Box> */}
          <Box position="relative" mb={8}>
            <Heading
              as="h1"
              fontSize={{ base: "7xl", sm: "9xl" }}
              position="absolute"
              top="50%"
              left="50%"
              transform="translate(-50%, -50%)"
              opacity={1.1}
              // color="green"
              color={"transparent"}
              textTransform="uppercase"
              fontWeight="bold"
              letterSpacing="wide"
              sx={{
                WebkitTextStrokeWidth: "1px",
                WebkitTextStrokeColor: "rgba(255, 255, 255, 0.233)",
              }}
            >
              Career
            </Heading>

            <Heading
              position={"absolute"}
              fontWeight={600}
              fontSize={{ base: "4xl", sm: "5xl" }}
              fontFamily={"heading"}
              textTransform={"uppercase"}
              color={"white"}
            >
              <span style={{ color: "#08D665", fontSize: "14px" }}>
                MY EXPERIENCE
              </span>
              <br />
              Experience and <span style={{ color: "#08D665" }}>skill</span>
            </Heading>
          </Box>
        </Stack>

        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Text className="desc" color={"color_white"}>
            <div className="line"></div>
            Snippy is a rich coding snippets app that lets you create your own
            code snippets, categorize them.
          </Text>
        </Stack>
      </Stack>

      <Container height={"50vh"} maxWidth={"6xl"}>
        <SimpleGrid
          spacing={3}
          templateColumns="repeat(auto-fill, minmax(250px, 1fr))"
        >
          {skill.map((skill) => (
            <Card className="skill-card" key={skill.id}>
              <CardHeader>
                <Heading
                  size="md"
                  color={"primaryColor"}
                  fontWeight={600}
                  fontSize={"20px"}
                  textTransform={"uppercase"}
                  fontFamily={"heading"}
                >
                  {" "}
                  {skill.title}
                </Heading>
              </CardHeader>
              <CardBody>
                <Text
                  color={"color_white"}
                  fontWeight={400}
                  fontSize={"15px"}
                  fontFamily={"body"}
                >
                  {skill.desc}
                </Text>
              </CardBody>
            </Card>
          ))}
        </SimpleGrid>
      </Container>
    </Container>
  );
}
