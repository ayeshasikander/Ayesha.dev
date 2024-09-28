import {
  Container,
  Flex,
  Box,
  Heading,
  IconButton,
  Button,
  VStack,
  HStack,
  Stack,
  Text,
} from "@chakra-ui/react";
import { MdPhone, MdEmail, MdLocationOn } from "react-icons/md";
import { BsGithub, BsDiscord } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import Robot from "../../components/textAnimation/Robot";
import ContactBox from "./ContactBox";

export default function Contact() {
  return (
    <Container
      bg="#1f1e1e0a"
      maxW="full"
      mt={0}
      centerContent
      overflow="hidden"
    >
      {" "}
      <Box
        bg="black"
        color="white"
        borderRadius="lg"
        m={{ sm: 4, md: 16, lg: 10 }}
        p={{ sm: 5, md: 5, lg: 10 }}
        width={"100%"}
      >
        <div>
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
                Snippy is a rich coding snippets app that lets you create your
                own code snippets, categorize them.
              </Text>
            </Stack>
          </Stack>
        </div>
        <Flex
          direction={{ base: "column", md: "row" }}
          justifyContent={"space-evenly"}
          align={"center"}
          gap={{ base: 3, md: 5 }}
        >
          <ContactBox />

          <Box>
            <Robot />
          </Box>
          <Box>
            <Box
            // py={{ base: 5, sm: 5, md: 8, lg: 10 }}
            >
              <VStack
              // pl={0}
              // spacing={3}
              >
                <Button
                  size="md"
                  height="48px"
                  variant="ghost"
                  color="#DCE2FF"
                  _hover={{ border: "1px solid #08D665" }}
                  leftIcon={<MdPhone color="#08D665" size="20px" />}
                >
                  +92 3161248074
                </Button>
                <Button
                  size="md"
                  height="48px"
                  variant="ghost"
                  color="#DCE2FF"
                  _hover={{ border: "1px solid #08D665" }}
                  leftIcon={<MdEmail color="#08D665" size="20px" />}
                >
                  sikanderayesha46@gmail.com
                </Button>
                <Button
                  size="md"
                  height="48px"
                  variant="ghost"
                  color="#DCE2FF"
                  _hover={{ border: "1px solid #08D665" }}
                  leftIcon={<MdLocationOn color="#08D665" size="20px" />}
                >
                  Lahore, Pakistan
                </Button>
              </VStack>
            </Box>
            <HStack
              mt={{ lg: 10, md: 10 }}
              alignItems="center"
              justifyContent={"space-evenly"}
            >
              <IconButton
                aria-label="facebook"
                variant="ghost"
                size="lg"
                isRound
                _hover={{ bg: "#08D665" }}
                icon={<FaLinkedin size="28px" color="#ECECEC" />}
              />
              <IconButton
                aria-label="github"
                variant="ghost"
                size="lg"
                isRound
                _hover={{ bg: "#08D665" }}
                icon={<BsGithub size="28px" color="#ECECEC" />}
              />
              <IconButton
                aria-label="discord"
                variant="ghost"
                size="lg"
                isRound
                _hover={{ bg: "#08D665" }}
                icon={<BsDiscord size="28px" color="#ECECEC" />}
              />
            </HStack>
          </Box>
        </Flex>
      </Box>
    </Container>
  );
}
