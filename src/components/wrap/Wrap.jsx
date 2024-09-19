import { Flex, Container, Heading, Stack, Text, Box } from "@chakra-ui/react";
import { image } from "../../assets/image";
import { IoMdMail } from "react-icons/io";
import { RiWhatsappFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";

export default function Wrap() {
  return (
    <Container maxW={"6xl"} borderRadius={"lg"} position={"relative"} mt={20}>
      {" "}
      <Stack
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
      >
        <Heading
          textAlign={"center"}
          fontWeight={800}
          fontSize={{ base: "3xl", sm: "4xl", md: "7xl" }}
          lineHeight={"110%"}
          fontFamily={"heading"}
          textTransform={"uppercase"}
          color={"primaryColor"}
        >
          i am Ayesha Sikander
        </Heading>
        <Box
          w={"full"}
          maxW={"5xl"}
          h={"30vh"}
          display={"flex"}
          justifyContent={"space-between"}
          gap={20}
        >
          <Text
            color={"gray.500"}
            align={"left"}
            alignSelf={"flex-start"}
            w={"28%"}
          >
            <Text fontSize={"1xl"} fontWeight={"bold"}>
              Ayesha Sikander
            </Text>
            <Text fontSize={"sm"}>
              Passionate React js developer focused on building practical
              solutions.
            </Text>
            <Box display={"flex"} gap={2} mt={4}>
              <Box
                borderBottom="2px"
                borderColor="gray.200"
                width="40%"
                my={4}
              />

              <IoMdMail
                cursor={"pointer"}
                fontSize={"20px"}
                onClick={() => window.open("mailto:sikanderayesha46@gmail.com")}
              />

              <RiWhatsappFill
                cursor={"pointer"}
                fontSize={"20px"}
                onClick={() => window.open("https://wa.me/+923161248074")}
              />

              <FaLinkedin
                cursor={"pointer"}
                fontSize={"20px"}
                onClick={() =>
                  window.open("https://www.linkedin.com/in/ayesha-sikander/")
                }
              />
            </Box>
          </Text>
          <Text
            color={"gray.500"}
            align={"left"}
            alignSelf={"flex-end"}
            w={"25%"}
          >
            <Text fontSize={"1xl"} fontWeight={"bold"}>
              Quote_
            </Text>
            Emphasizes the journey from concept to reality “Daily Agenda” every
            morning.
          </Text>
        </Box>

        <Flex
          position={"absolute"}
          pointerEvents={"none"}
          bottom={100}
          left={0}
          right={0}
          justifyContent={"center"}
          mt={{ base: 12, sm: 16 }}
        >
          <img
            src={image.girl1}
            alt="hello"
            mt={{ base: 12, sm: 16, md: 18 }}
          />
        </Flex>
      </Stack>
    </Container>
  );
}
