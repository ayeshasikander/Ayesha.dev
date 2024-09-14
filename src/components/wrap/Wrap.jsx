import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Box,
} from "@chakra-ui/react";
import { image } from "../../assets/image";
import { IoMdMail } from "react-icons/io";
import { RiWhatsappFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
// import RotatedText from "../textAnimation/RotatedText";

export default function Wrap() {
  return (
    <Container
      maxW={"6xl"}
      // border={"1px"}
      // borderColor={"gray.200"}
      borderRadius={"lg"}
      position={"relative"}
      mt={20}
    >
      {" "}
      <Stack
        // textAlign={"center"}
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
      >
        {/* <Text align={"left"} w={"full"}>
          React & Next
        </Text> */}
        <Heading
          textAlign={"center"}
          fontWeight={800}
          fontSize={{ base: "3xl", sm: "4xl", md: "8xl" }}
          lineHeight={"110%"}
        >
          Meeting scheduling
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
            <Heading fontSize={"1xl"}>Ayesha Sikander</Heading>
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
              <IoMdMail fontSize={"20px"} />
              <RiWhatsappFill fontSize={"20px"} />
              <FaLinkedin fontSize={"20px"} />
            </Box>
          </Text>
          <Text
            color={"gray.500"}
            align={"left"}
            alignSelf={"flex-end"}
            w={"25%"}
          >
            <Heading fontSize={"1xl"}>Quote_</Heading>
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
            // height={{ sm: "24rem", lg: "28rem" }}
            mt={{ base: 12, sm: 16, md: 18 }}
          />
        </Flex>

        {/* Container for image and rotated text */}
        {/* <Box
          position={"absolute"}
          top={0}
          left={0}
          right={0}
          bottom={100}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          overflow={"hidden"}
        >
          <img
            src={image.girl1}
            alt="hello"
            style={{
              height: "100%",
              objectFit: "cover",
              position: "absolute",
              zIndex: 1,
            }}
          />
          <div
            style={{
              position: "absolute",
              top: '100px',
              // left: 0,
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 2,
            }}
          >
            <RotatedText />
          </div>
        </Box> */}
      </Stack>
    </Container>
  );
}
