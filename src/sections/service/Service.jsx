import React from "react";
import {
  HStack,
  VStack,
  Text,
  Box,
  Container,
  SimpleGrid,
  Heading,
} from "@chakra-ui/react";
import MyService from "../../components/myService/MyService";
import Workflow from "../../components/workflow/Workflow";
import LineDivider from "../../components/line/LineDevder";
import WrapService from "./WrapService";

const features = [
  {
    id: 1,
    title: <MyService />,
  },
  {
    id: 2,
    title: <Workflow />,
  },
];

export default function Service() {
  return (
    <Box position="relative">
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        display="flex"
        alignItems="center"
        justifyContent="center"
        zIndex={0}
      >
        <WrapService />
      </Box>
      <Box
        position="relative"
        zIndex={1}
        p={4}
        backgroundColor="rgba(255, 255, 255, 0.8)"
      >
        <Box
          display="flex"
          justifyContent="center"
          flexDirection="column"
          alignItems="center"
          paddingTop="2rem"
        >
          <Heading align="center" fontSize="2xl">
            My Services
          </Heading>
          <LineDivider />
        </Box>
        <Container maxW="6xl" mt={20} mb={20}>
          <SimpleGrid columns={{ base: 1, md: 1, lg: 2 }} spacing={10}>
            {features.map((feature) => (
              <HStack key={feature.id} align="top">
                <VStack align="start">
                  <Text fontWeight={600}>{feature.title}</Text>
                  <Text color="gray.600">{feature.text}</Text>
                </VStack>
              </HStack>
            ))}
          </SimpleGrid>
        </Container>
      </Box>
    </Box>
  );
}
