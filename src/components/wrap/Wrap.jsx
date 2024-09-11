import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
} from "@chakra-ui/react";
import { image } from "../../assets/image";

export default function Wrap() {
  return (
    <Container
      maxW={"5xl"}
      border={"1px"}
      borderColor={"gray.200"}
      borderRadius={"lg"}
      position={"relative"}
      mt={20}
    >
      <Stack
        textAlign={"center"}
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: "3xl", sm: "4xl", md: "8xl" }}
          lineHeight={"110%"}
        >
          Meeting scheduling{" "}
          {/* <Text as={"span"} color={"orange.400"}>
            made easy
          </Text> */}
        </Heading>
        <Text color={"gray.500"} maxW={"3xl"}>
          Never miss a meeting. Never be late for one too. Keep track of your
          meetings and receive smart reminders in appropriate times. Read your
          smart “Daily Agenda” every morning.
        </Text>
        <Stack spacing={6} direction={"row"}>
          <Button
            rounded={"full"}
            px={6}
            colorScheme={"orange"}
            bg={"orange.400"}
            _hover={{ bg: "orange.500" }}
          >
            Get started
          </Button>
          <Button rounded={"full"} px={6}>
            Learn more
          </Button>
        </Stack>
        <Flex
          w={"full"}
          position={"absolute"}
          bottom={0}
          justifyContent={"center"}
          mt={{ base: 12, sm: 16 }}
        >
          <img
            src={image.girl1}
            alt="hello"
            height={{ sm: "24rem", lg: "28rem" }}
            mt={{ base: 12, sm: 16,md: 18 }}
          />
        </Flex>
      </Stack>
    </Container>
  );
}
