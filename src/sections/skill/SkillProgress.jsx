import React from "react";
import {
  Container,
  Box,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  HStack,
  Icon,
  Badge,
  Flex,
  Wrap,
} from "@chakra-ui/react";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import "./skillProgress.scss";
import {skillsData} from "./progressData";

// Star Rating Component
const StarRating = ({ level }) => {
  const stars = [];
  const fullStars = Math.floor(level);
  const hasHalfStar = level % 1 !== 0;

  for (let i = 0; i < fullStars; i++) {
    stars.push(<Icon key={`full-${i}`} as={BsStarFill} color="#08D665" />);
  }
  if (hasHalfStar) {
    stars.push(<Icon key="half" as={BsStarHalf} color="#08D665" />);
  }
  const emptyStars = 5 - Math.ceil(level);
  for (let i = 0; i < emptyStars; i++) {
    stars.push(<Icon key={`empty-${i}`} as={BsStar} color="gray.600" />);
  }
  return <HStack spacing={1}>{stars}</HStack>;
};

// Proficiency Badge Component
const ProficiencyBadge = ({ level }) => {
  const badges = {
    expert: { text: "Expert", color: "green" },
    advanced: { text: "Advanced", color: "cyan" },
    intermediate: { text: "Intermediate", color: "blue" },
    learning: { text: "Learning", color: "purple" },
  };

  const badge = badges[level];
  return (
    <Badge
      colorScheme={badge.color}
      fontSize="xs"
      px={3}
      py={1}
      borderRadius="full"
      fontWeight={600}
    >
      {badge.text}
    </Badge>
  );
};

const SkillProgress = () => {
  return (
    <Container maxWidth={"6xl"} my={"5rem"}>
      {/* Header */}
      <VStack spacing={4} mb={12} textAlign="center">
        <Heading
          fontWeight={600}
          fontSize={{ base: "3xl", sm: "4xl" }}
          fontFamily={"heading"}
          textTransform={"uppercase"}
          color={"white"}
        >
          <span style={{ color: "#08D665", fontSize: "14px" }}>
            TECHNICAL EXPERTISE
          </span>
          <br />
          My <span style={{ color: "#08D665" }}>Tech Stack</span>
        </Heading>
        <Text color="gray.400" maxW="2xl" fontSize="md">
          Proficiency built through 2+ years of production experience and 10+
          real-world projects
        </Text>
      </VStack>

      {/* Skills Grid */}
      <VStack spacing={10} align="stretch">
        {skillsData.map((category) => (
          <Box key={category.id} className="skill-category-section">
            <Heading
              size="md"
              color="#08D665"
              mb={6}
              fontFamily={"heading"}
              textTransform={"uppercase"}
              fontSize={"18px"}
              fontWeight={600}
              display="flex"
              alignItems="center"
              gap={3}
            >
              <Box w="40px" h="2px" bg="#08D665" />
              {category.category}
              <Box flex={1} h="1px" bg="rgba(8, 214, 101, 0.2)" />
            </Heading>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
              {category.skills.map((skill, index) => (
                <Box key={index} className="skill-card-modern">
                  <Flex justify="space-between" align="start" mb={3}>
                    <HStack spacing={3} flex={1}>
                      {skill.icon && (
                        <Box
                          className="skill-icon-box"
                          bg={`${skill.color}15`}
                          p={2}
                          borderRadius="md"
                        >
                          <Icon
                            as={skill.icon}
                            boxSize={6}
                            color={skill.color}
                          />
                        </Box>
                      )}
                      {!skill.icon && (
                        <Box
                          className="skill-icon-box"
                          bg={`${skill.color}15`}
                          p={2}
                          borderRadius="md"
                          w="40px"
                          h="40px"
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                        >
                          <Box
                            w="8px"
                            h="8px"
                            borderRadius="full"
                            bg={skill.color}
                          />
                        </Box>
                      )}
                      <VStack align="start" spacing={1}>
                        <Text
                          color="white"
                          fontWeight={600}
                          fontSize="md"
                          fontFamily={"body"}
                        >
                          {skill.name}
                        </Text>
                        <Text
                          color="gray.500"
                          fontSize="xs"
                          fontFamily={"body"}
                        >
                          {skill.description}
                        </Text>
                      </VStack>
                    </HStack>
                    <ProficiencyBadge level={skill.level} />
                  </Flex>

                  <Flex justify="space-between" align="center" mt={4}>
                    <StarRating level={skill.stars} />
                    <Text
                      color="gray.500"
                      fontSize="xs"
                      fontWeight={500}
                      fontFamily={"body"}
                    >
                      {skill.experience}
                    </Text>
                  </Flex>
                </Box>
              ))}
            </SimpleGrid>
          </Box>
        ))}
      </VStack>

      {/* Tech Tags Cloud */}
      <Box className="tech-cloud-section" mt={12} p={8} borderRadius="xl">
        <Heading
          size="md"
          color="white"
          mb={6}
          textAlign="center"
          fontFamily={"heading"}
        >
          Additional Technologies
        </Heading>
        <Wrap justify="center" spacing={3}>
          {[
            "SCSS",
            "CSS Modules",
            "Bootstrap",
            "GSAP",
            "Framer Motion",
            "Chart.js",
            "ApexCharts",
            "Recharts",
            "Strapi CMS",
            "Agora",
            "Vercel",
            "Netlify",
            "ESLint",
            "Prettier",
          ].map((tech, index) => (
            <Badge
              key={index}
              className="tech-tag"
              px={4}
              py={2}
              borderRadius="full"
              fontSize="sm"
              fontWeight={500}
            >
              {tech}
            </Badge>
          ))}
        </Wrap>
      </Box>

      {/* Summary Stats */}
      <SimpleGrid
        columns={{ base: 2, md: 4 }}
        spacing={6}
        mt={12}
        className="stats-grid"
      >
        <Box className="stat-card" textAlign="center" p={6}>
          <Heading size="2xl" color="#08D665" fontFamily={"heading"}>
            20+
          </Heading>
          <Text color="gray.400" fontSize="sm" mt={2}>
            Technologies
          </Text>
        </Box>
        <Box className="stat-card" textAlign="center" p={6}>
          <Heading size="2xl" color="#08D665" fontFamily={"heading"}>
            10+
          </Heading>
          <Text color="gray.400" fontSize="sm" mt={2}>
            Projects
          </Text>
        </Box>
        <Box className="stat-card" textAlign="center" p={6}>
          <Heading size="2xl" color="#08D665" fontFamily={"heading"}>
            2+
          </Heading>
          <Text color="gray.400" fontSize="sm" mt={2}>
            Years Exp
          </Text>
        </Box>
        <Box className="stat-card" textAlign="center" p={6}>
          <Heading size="2xl" color="#08D665" fontFamily={"heading"}>
            2
          </Heading>
          <Text color="gray.400" fontSize="sm" mt={2}>
            Companies
          </Text>
        </Box>
      </SimpleGrid>
    </Container>
  );
};

export default SkillProgress;
