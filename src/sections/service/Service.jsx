import React from "react";
import { Box, Grid, GridItem } from "@chakra-ui/react";
import MyService from "../../components/myService/MyService";
import Workflow from "../../components/workflow/Workflow";

const Service = () => {
  return (
    <Box w={"90%"} m={"auto"} h={"100vh"} border={"1px solid red"}>
      <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={6}>
        <GridItem w="100%" h="10" bg="blue.500">
          <MyService />
        </GridItem>
        <GridItem w="100%" h="10" bg="blue.500">
          <Workflow />
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Service;
