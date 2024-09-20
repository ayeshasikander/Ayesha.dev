import {
  Container,
  Flex,
  Box,
  Heading,
  IconButton,
  Button,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { MdPhone, MdEmail, MdLocationOn } from "react-icons/md";
import { BsGithub, BsDiscord } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import Robot from "../../components/textAnimation/Robot";

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
        width={"60%"}
      >
        {/* https://adilnaseemsheikh.github.io/ */}
        <Flex
          direction={{ base: "column", md: "row" }}
          align={"center"}
          gap={{ base: 3, md: 5 }}
        >
          <Box p={4}>
            <Heading>Get in touch</Heading>

            <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
              <VStack pl={0} spacing={3}>
                <Button
                  size="md"
                  height="48px"
                  width="200px"
                  variant="ghost"
                  color="#DCE2FF"
                  _hover={{ border: "2px solid #1C6FEB" }}
                  leftIcon={<MdPhone color="#1970F1" size="20px" />}
                >
                  +92 3161248074
                </Button>
                <Button
                  size="md"
                  height="48px"
                  width="200px"
                  variant="ghost"
                  color="#DCE2FF"
                  _hover={{ border: "2px solid #1C6FEB" }}
                  leftIcon={<MdEmail color="#1970F1" size="20px" />}
                >
                  sikanderayesha46@gmail.com
                </Button>
                <Button
                  size="md"
                  height="48px"
                  width="200px"
                  variant="ghost"
                  color="#DCE2FF"
                  _hover={{ border: "2px solid #1C6FEB" }}
                  leftIcon={<MdLocationOn color="#1970F1" size="20px" />}
                >
                  Lahore, Pakistan
                </Button>
              </VStack>
            </Box>
            <HStack
              mt={{ lg: 10, md: 10 }}
              spacing={5}
              px={5}
              alignItems="flex-start"
            >
              <IconButton
                aria-label="facebook"
                variant="ghost"
                size="lg"
                isRound
                _hover={{ bg: "#0D74FF" }}
                icon={<FaLinkedin size="28px" color="#ECECEC" />}
              />
              <IconButton
                aria-label="github"
                variant="ghost"
                size="lg"
                isRound
                _hover={{ bg: "#0D74FF" }}
                icon={<BsGithub size="28px" color="#ECECEC" />}
              />
              <IconButton
                aria-label="discord"
                variant="ghost"
                size="lg"
                isRound
                _hover={{ bg: "#0D74FF" }}
                icon={<BsDiscord size="28px" color="#ECECEC" />}
              />
            </HStack>
          </Box>
          <Box>
            <Robot />
          </Box>
        </Flex>
      </Box>
    </Container>
  );
}
