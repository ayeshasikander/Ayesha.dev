import {
  Heading,
  Box,
  Text,
  Stack,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaGithub, FaShareAlt } from "react-icons/fa";
import "../../style/cardsLayout/animation.scss";

const truncateDescription = (desc, limit) => {
  const words = desc.split(" ");
  if (words.length > limit) {
    return words.slice(0, limit).join(" ") + "...";
  }
  return desc;
};
export default function ProjectCard({ item }) {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: item.title,
          text: item.desc,
          url: item.liveLink,
        });
        console.log("Share was successful.");
      } catch (error) {
        console.error("Share failed:", error);
      }
    } else {
      alert("Share API not supported on this browser.");
    }
  };

  const wordLimit = 20;
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
        className="animated-background"
      >
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          bg="blackAlpha.800"
        />

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
            <Heading
              fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
              fontWeight={{base:"300", md:"400", lg:"500"}}
            >
              {item.title}
            </Heading>
            <Text fontSize={{ base: "14px", md: "16px", lg: "18px" }}>
              {truncateDescription(item.desc, wordLimit)}
            </Text>
          </Stack>

          <Stack direction={"row"} justify={"center"} spacing={6} mt={6}>
            <Link
              style={{ color: "white" }}
              to={item.githubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <Stack spacing={0} align={"center"}>
                <FaGithub />
                <Text fontSize={"sm"}>GitHub</Text>
              </Stack>
            </Link>

            <Button
              onClick={handleShare}
              variant="link"
              colorScheme="teal"
              aria-label="Share"
            >
              <Stack spacing={0} align={"center"}>
                <FaShareAlt />
                <Text fontSize={"sm"}>Share</Text>
              </Stack>
            </Button>
          </Stack>

          <Link to={item.liveLink} target="_blank" rel="noopener noreferrer">
            {" "}
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
              Live Link
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
