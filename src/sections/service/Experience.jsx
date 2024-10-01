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
import SkillProgress from "../skill/SkillProgress";

export default function Experience() {
  return (
    <Container maxW={"6xl"}>
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
              Career
            </Heading>

            <Heading
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
            Fueled by curiosity and creativity, I strive to turn ideas into
            impactful digital experiences as a React.js Developer.
          </Text>
        </Stack>
      </Stack>

      <Container maxWidth={"6xl"} marginY={"3rem"}>
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
      <SkillProgress />
    </Container>
  );
}
