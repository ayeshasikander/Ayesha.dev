import React from "react";
import { Box, Grid, GridItem, Button, Heading, Text } from "@chakra-ui/react";
import { image } from "../../assets/image";

const MyService = () => {
  return (
    <>
      <Box>MyService</Box>
      <Box display={"flex"} flexDirection={"column"} gap={10}>
        <Grid templateColumns="repeat(2, 1fr)" gap={6}>
          <GridItem w="100%">
            <img src={image.icon2} alt="icon1" />
          </GridItem>
          <GridItem w="100%">
            <Heading>I'm a Heading</Heading>
            <Text>I'm a Text</Text>
            <Text>I'm a Text</Text>
            <Text>I'm a Text</Text>
            <Text>I'm a Text</Text>
          </GridItem>
        </Grid>
        <Grid templateColumns="repeat(2, 1fr)" gap={6}>
          <GridItem w="100%">
            <img src={image.icon3} alt="icon2" />
          </GridItem>
          <GridItem w="100%">
            <Text>I'm a Text</Text>
            <Heading>I'm a Heading</Heading>
          </GridItem>
        </Grid>
      </Box>
      <Button m={4}>Contact Me</Button>
    </>
  );
};

export default MyService;
