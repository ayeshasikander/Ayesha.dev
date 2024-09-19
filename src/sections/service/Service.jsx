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
    <Box p={4}>
      <Box
        display={"flex"}
        justifyContent={"center"}
        flexDirection={"column"}
        alignItems={"center"}
        paddingTop={"2rem"}
      >
        <Heading align={"center"} fontSize={"2xl"}>
          My Services
        </Heading>
        <LineDivider />
      </Box>
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
