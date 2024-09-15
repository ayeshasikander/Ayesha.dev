import React from "react";
import { Box, Grid, GridItem } from "@chakra-ui/react";
import MyService from "../../components/myService/MyService";
import Workflow from "../../components/workflow/Workflow";

const Service = () => {
  return (
    <Box w={"90%"} m={"auto"} h={"100vh"}>
      <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={6}>
        <GridItem w="100%" h="10">
          <MyService />
        </GridItem>
        <GridItem w="100%" h="10">
          <Workflow />
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Service;
