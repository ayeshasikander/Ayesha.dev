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

export default function About() {
  return (
    <Container
      maxW={"7xl"}
      // background={"bg_color"}
    >
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
            height={"300px"}
            rounded={"2xl"}
            boxShadow={"2xl"}
            width={"70%"}
            overflow={"hidden"}
          >
            <video
              autoPlay
              loop
              muted
              controls
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            >
              <source src={image.code} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Box>
        </Flex>

        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Box>
            <Heading
              fontWeight={600}
              fontSize={{ base: "3xl", lg: "2xl" }}
              color={"color_white"}
            >
              <Text
                as={"span"}
                position={"relative"}
                _after={{
                  content: "''",
                  width: "full",
                  height: "30%",
                  position: "absolute",
                  bottom: 1,
                  left: 0,
                  bg: "red.400",
                  zIndex: -1,
                }}
              >
                About Me
              </Text>
            </Heading>
            <LineDevider />
          </Box>
          <Text color={"color_white"}>
            Snippy is a rich coding snippets app that lets you create your own
            code snippets, categorize them, and even sync them in the cloud so
            you can use them anywhere. All that is free!
          </Text>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: "column", sm: "row" }}
          >
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
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
}
