import { Container, Stack, Flex, Box, Heading, Text } from "@chakra-ui/react";
import '../../style/serviceLayout/experience.scss';

export default function Experience() {
  return (
    <Container maxW={"7xl"}>
      <Stack
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: "column", md: "row" }}
      >
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Box>
            <Heading
              fontWeight={600}
              fontSize={{ base: "4xl", sm: "5xl" }}
              fontFamily={"heading"}
              textTransform={"uppercase"}
              color={"color_white"}
            >
              <span style={{ color: "primaryColor", fontSize: "14px" }}>
                MY EXPERIENCE{" "}
              </span>
              <br />
              Experience and skill
            </Heading>
          </Box>
        </Stack>

        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Text className="desc" color={"color_white"}>
            <div className="line"></div>
            Snippy is a rich coding snippets app that lets you create your own
            code snippets, categorize them, and even sync them in the cloud so
            you can use them anywhere. All that is free!
          </Text>
        </Stack>
      </Stack>
    </Container>
  );
}
