import {
  Heading,
  Box,
  Text,
  Stack,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";

export default function ProjectCard({ item }) {
  return (
    <Box
      w={"full"}
      h={"100%"}
      bg={useColorModeValue("white", "gray.800")}
      boxShadow={"2xl"}
      rounded={"md"}
      overflow={"hidden"}
      position="relative"
    >
      <Box
        h={"100%"}
        w={"full"}
        bgImage={`url(${item.bgImg})`}
        bgPos="center"
        bgSize="cover"
        position="relative"
      >
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          bg="blackAlpha.600"
        />

        {/* Content over the background */}
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          p={6}
          color="white"
        >
          <Stack spacing={3} align={"center"}>
            <Heading fontSize={"2xl"} fontWeight={500}>
              {item.title}
            </Heading>
            <Text>
              {item.desc}
            </Text>
          </Stack>

          <Stack direction={"row"} justify={"center"} spacing={6} mt={6}>
            <Stack spacing={0} align={"center"}>
              <Text fontWeight={600}>23k</Text>
              <Text fontSize={"sm"}>Followers</Text>
            </Stack>
            <Stack spacing={0} align={"center"}>
              <Text fontWeight={600}>23k</Text>
              <Text fontSize={"sm"}>Following</Text>
            </Stack>
          </Stack>

          <Button
            w={"full"}
            mt={8}
            bg={useColorModeValue("#151f21", "gray.900")}
            color={"white"}
            rounded={"md"}
            _hover={{
              transform: "translateY(-2px)",
              boxShadow: "lg",
            }}
          >
            Follow
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
