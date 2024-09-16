import React from "react";
import {
  HStack,
  VStack,
  Text,
  Box,
  Container,
  Heading,
  SimpleGrid,
  Stack,
} from "@chakra-ui/react";
import MyService from "../../components/myService/MyService";
import Workflow from "../../components/workflow/Workflow";

const features = [
  {
    id: 1,
    title: <MyService />,
  },
  {
    id: 1,
    title: <Workflow />,
  },
];

export default function Service() {
  return (
    <Box p={4}>
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Heading fontSize={"3xl"} mt={20}>This is the headline</Heading>
      </Stack>

      <Container maxW={"6xl"} mt={20} mb={20}>
        <SimpleGrid columns={{ base: 1, md: 1, lg: 2 }} spacing={10}>
          {features.map((feature) => (
            <HStack key={feature.id} align={"top"}>
              <VStack align={"start"}>
                <Text fontWeight={600}>{feature.title}</Text>
                <Text color={"gray.600"}>{feature.text}</Text>
              </VStack>
            </HStack>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
