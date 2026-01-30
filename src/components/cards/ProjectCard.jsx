import {
  Heading,
  Box,
  Text,
  useColorModeValue,
  Tag,
  HStack,
  VStack,
  IconButton,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaGithub, FaShareAlt } from "react-icons/fa";
import { useState } from "react";
import "../../style/cardsLayout/animation.scss";

const truncateDescription = (desc, limit) => {
  const words = desc.split(" ");
  if (words.length > limit) {
    return words.slice(0, limit).join(" ") + "...";
  }
  return desc;
};

export default function ProjectCard({ item }) {
  const [isHovered, setIsHovered] = useState(false);

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

  const wordLimit = 25;
  const bgColor = useColorModeValue("white", "gray.900");
  const borderColor = useColorModeValue("gray.200", "gray.700");

  return (
    <Box
      w={"full"}
      h={"450px"}
      bg={bgColor}
      borderRadius="xl"
      overflow={"hidden"}
      position="relative"
      border="1px solid"
      borderColor={borderColor}
      transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      _hover={{
        transform: "translateY(-12px)",
        boxShadow: "0 25px 50px rgba(8, 214, 101, 0.15)",
        borderColor: "#08D665",
      }}
    >
      {/* Image Container with Overlay */}
      <Box h={"100%"} w={"full"} position="relative" overflow="hidden">
        <Box
          bgImage={`url(${item.bgImg})`}
          bgPos="center"
          bgSize="cover"
          h="full"
          w="full"
          transition="transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)"
          transform={isHovered ? "scale(1.08)" : "scale(1)"}
        />

        {/* Gradient Overlay - darker for better readability */}
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          bgGradient={
            isHovered
              ? "linear(to-b, blackAlpha.500 0%, blackAlpha.900 100%)"
              : "linear(to-b, blackAlpha.400 0%, blackAlpha.800 100%)"
          }
          transition="all 0.4s ease"
        />

        {/* Featured Badge */}
        {item.featured && (
          <Tag
            position="absolute"
            top={4}
            right={4}
            colorScheme="green"
            size="md"
            fontWeight="bold"
            fontSize="xs"
            textTransform="uppercase"
            letterSpacing="wide"
            bg="#08D665"
            color="white"
            boxShadow="lg"
          >
            Featured
          </Tag>
        )}

        {/* Quick Action Icons */}
        <HStack
          position="absolute"
          top={4}
          left={4}
          spacing={2}
          opacity={isHovered ? 1 : 0}
          transform={isHovered ? "translateY(0)" : "translateY(-10px)"}
          transition="all 0.3s ease"
        >
          <IconButton
            as={Link}
            to={item.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            icon={<FaGithub />}
            size="sm"
            aria-label="View on GitHub"
            bg="whiteAlpha.900"
            color="gray.800"
            _hover={{ bg: "white", transform: "scale(1.1)" }}
            transition="all 0.2s"
          />
          <IconButton
            onClick={handleShare}
            icon={<FaShareAlt />}
            size="sm"
            aria-label="Share Project"
            bg="whiteAlpha.900"
            color="gray.800"
            _hover={{ bg: "white", transform: "scale(1.1)" }}
            transition="all 0.2s"
          />
        </HStack>

        {/* Content Section - Slides up on hover */}
        <VStack
          position="absolute"
          bottom={0}
          left={0}
          right={0}
          align="stretch"
          p={6}
          spacing={3}
          transform={
            isHovered ? "translateY(0)" : "translateY(calc(100% - 140px))"
          }
          transition="transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
        >
          {/* Title - Always Visible */}
          <Heading
            fontSize={{ base: "xl", md: "2xl" }}
            fontWeight="700"
            lineHeight="shorter"
            color="white"
            letterSpacing="tight"
            textShadow="0 2px 10px rgba(0,0,0,0.5)"
          >
            {item.title}
          </Heading>

          {/* Hidden content - shows on hover */}
          <Box opacity={isHovered ? 1 : 0} transition="opacity 0.3s ease 0.1s">
            {/* Description */}
            <Text
              fontSize={{ base: "sm", md: "md" }}
              color="whiteAlpha.900"
              lineHeight="tall"
              mb={3}
              textShadow="0 1px 5px rgba(0,0,0,0.5)"
            >
              {truncateDescription(item.desc, wordLimit)}
            </Text>

            {/* Tags */}
            {item.tags && item.tags.length > 0 && (
              <HStack spacing={2} flexWrap="wrap" mb={4}>
                {item.tags.slice(0, 4).map((tag, index) => (
                  <Tag
                    key={index}
                    size="sm"
                    variant="solid"
                    bg="whiteAlpha.300"
                    color="white"
                    fontSize="xs"
                    fontWeight="medium"
                    backdropFilter="blur(10px)"
                  >
                    {tag}
                  </Tag>
                ))}
                {item.tags.length > 4 && (
                  <Tag
                    size="sm"
                    variant="solid"
                    bg="whiteAlpha.300"
                    color="white"
                    fontSize="xs"
                    fontWeight="medium"
                    backdropFilter="blur(10px)"
                  >
                    +{item.tags.length - 4}
                  </Tag>
                )}
              </HStack>
            )}
          </Box>
        </VStack>
      </Box>
    </Box>
  );
}
