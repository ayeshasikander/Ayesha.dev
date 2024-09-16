import React from "react";
import { Box, Grid, GridItem, Button, Heading, Text, List, ListItem, ListIcon } from "@chakra-ui/react";
import { MdCheckCircle, MdSettings } from "react-icons/md";
import { image } from "../../assets/image";

const MyService = () => {
  return (
    <>
      <Heading fontSize={"3xl"}>MyServices</Heading>
      <Box display={"flex"} flexDirection={"column"} gap={10} mb={10}>
        <Grid templateColumns="repeat(2, 1fr)" gap={6} alignItems="center">
          <GridItem w="100%">
            <img src={image.icon2} alt="icon1" />
          </GridItem>
          <GridItem w="100%">
            <Heading>I'm a Heading</Heading>
            <List spacing={3} mt={4}>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="green.500" />
                Lorem ipsum dolor sit amet
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="green.500" />
                Assumenda, quia temporibus
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="green.500" />
                Quidem, ipsam illum quis
              </ListItem>
              <ListItem>
                <ListIcon as={MdSettings} color="green.500" />
                Quidem, ipsam illum quis
              </ListItem>
            </List>
          </GridItem>
        </Grid>
        <Grid templateColumns="repeat(2, 1fr)" gap={6} alignItems="center">
          <GridItem w="100%">
            <img src={image.icon3} alt="icon2" />
          </GridItem>
          <GridItem w="100%">
            <Text>I'm a Text</Text>
            <Heading>I'm a Heading</Heading>
          </GridItem>
        </Grid>
      </Box>
      <Button m={4} sx={{ border: "1px solid black" , color: "black", fontWeight: "bold",}}>Contact Me</Button>
    </>
  );
};

export default MyService;
