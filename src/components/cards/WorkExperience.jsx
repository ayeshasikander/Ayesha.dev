import {
  Container,
  Box,
  Heading,
  Text,
  VStack,
  HStack,
  Flex,
  Badge,
  Icon,
} from "@chakra-ui/react";
import { BsBriefcaseFill } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import "../../style/serviceLayout/experience.scss";

const experiences = [
  {
    id: 1,
    company: "724.One Ltd",
    role: "React.js Developer",
    location: "Lahore",
    period: "JUNE 2025 - PRESENT",
    type: "Internship → Permanent",
    responsibilities: [
      "Started as a Frontend Intern and promoted to full-time React.js Developer based on performance",
      "Created responsive UIs with Tailwind CSS, Material-UI, Ant Design; optimized performance via code splitting",
      "Improved app performance using Redux Toolkit, Zustand, React Query, and optimized component rendering",
      "Integrated Stripe payments, Firebase authentication, and REST/GraphQL APIs",
      "Handle or integrate AI-based learning flow including chatbot interaction, quiz generation, and automated quiz evaluation",
    ],
    isActive: true,
  },
  {
    id: 2,
    company: "NewbieLogics",
    role: "React.js Developer",
    location: "Remote",
    period: "JUNE 2025 - PRESENT",
    type: "Contract",
    responsibilities: [
      "Developed responsive frontend using React.js and modern UI libraries",
      "Integrated APIs using Axios and React Query and collaborated with cross-functional teams",
      "Developed an AI Skin Consultant that analyzes user concerns through dynamic questionnaires to recommend specific skincare routines",
      "Utilized Socket.io for real-time user interactions and Strapi CMS for flexible content management",
    ],
    isActive: true,
  },
];

export default function WorkExperience() {
  return (
    <Container maxW={"6xl"} py={{ base: 10, md: 16 }}>
      {/* Timeline Experience Section */}
      <VStack spacing={8} align="stretch" position="relative">
        {/* Vertical Timeline Line */}
        <Box
          position="absolute"
          left={{ base: "20px", md: "40px" }}
          top="0"
          bottom="0"
          width="2px"
          bgGradient="linear(to-b, #08D665, transparent)"
          display={{ base: "block", md: "block" }}
        />

        {experiences.map((exp, index) => (
          <Box
            key={exp.id}
            className="experience-card"
            position="relative"
            pl={{ base: "50px", md: "80px" }}
          >
            {/* Timeline Dot */}
            <Box
              position="absolute"
              left={{ base: "11px", md: "31px" }}
              top="8px"
              width="20px"
              height="20px"
              borderRadius="full"
              bg={exp.isActive ? "#08D665" : "#2D3748"}
              border="4px solid"
              borderColor="#0c0e0f"
              boxShadow={exp.isActive ? "0 0 20px #08D665" : "none"}
              zIndex={2}
            />

            {/* Experience Card */}
            <Box className="exp-content" p={6} borderRadius="md">
              {/* Header */}
              <Flex
                direction={{ base: "column", md: "row" }}
                justify="space-between"
                align={{ base: "start", md: "center" }}
                mb={4}
                gap={2}
              >
                <VStack align="start" spacing={1}>
                  <Heading
                    size="lg"
                    color="#08D665"
                    fontWeight={600}
                    fontFamily={"heading"}
                  >
                    {exp.role}
                  </Heading>
                  <HStack spacing={3} flexWrap="wrap">
                    <HStack color="white" fontSize="md">
                      <Icon as={BsBriefcaseFill} />
                      <Text fontWeight={500}>{exp.company}</Text>
                    </HStack>
                    <HStack color="gray.400" fontSize="sm">
                      <Icon as={MdLocationOn} />
                      <Text>{exp.location}</Text>
                    </HStack>
                  </HStack>
                </VStack>

                <VStack align={{ base: "start", md: "end" }} spacing={2}>
                  <Badge
                    colorScheme="green"
                    px={3}
                    py={1}
                    borderRadius="full"
                    fontSize="xs"
                    fontWeight={600}
                  >
                    {exp.period}
                  </Badge>
                  <Badge
                    variant="outline"
                    colorScheme="cyan"
                    px={3}
                    py={1}
                    borderRadius="full"
                    fontSize="xs"
                  >
                    {exp.type}
                  </Badge>
                </VStack>
              </Flex>

              {/* Responsibilities */}
              <VStack align="start" spacing={3} mt={4}>
                {exp.responsibilities.map((resp, idx) => (
                  <HStack
                    key={idx}
                    align="start"
                    spacing={3}
                    className="responsibility-item"
                  >
                    <Box
                      minW="6px"
                      minH="6px"
                      borderRadius="full"
                      bg="#08D665"
                      mt={2}
                    />
                    <Text
                      color="gray.300"
                      fontSize="sm"
                      lineHeight="1.6"
                      fontFamily={"body"}
                    >
                      {resp}
                    </Text>
                  </HStack>
                ))}
              </VStack>
            </Box>
          </Box>
        ))}
      </VStack>
    </Container>
  );
}
