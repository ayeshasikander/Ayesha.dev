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
            <Heading
              fontWeight={600}
              fontSize={{ base: "4xl", sm: "5xl" }}
              fontFamily={"heading"}
              textTransform={"uppercase"}
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
            you can use them anywhere. All that is free! Spend more time
            focusing on the important aspects of your business. Turn to
            McCartney HR LLC in Brooklyn, NY for HR solutions. As an advanced
            virtual HR company, we are offering online HR systems that can be
            customized depending on your business needs.
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
