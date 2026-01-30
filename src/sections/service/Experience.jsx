import {
  Container,
  Stack,
  Box,
  Heading,
  Text,
} from "@chakra-ui/react";
import "../../style/serviceLayout/experience.scss";
import SkillProgress from "../skill/SkillProgress";
import WorkExperience from "../../components/cards/WorkExperience";

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
                WORK EXPERIENCE
              </span>
              <br />
              Professional <span style={{ color: "#08D665" }}>Journey</span>
            </Heading>
          </Box>
        </Stack>

        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Text className="desc" color={"color_white"}>
            <div className="line"></div>
            2+ years of hands-on experience building modern web applications
            with React.js, delivering high-quality solutions from internship to
            full-time roles.
          </Text>
        </Stack>
      </Stack>
      {/* work experience section */}
      <WorkExperience />
      <SkillProgress />
    </Container>
  );
}
