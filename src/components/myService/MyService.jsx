import React from "react";
import {
  Box,
  Grid,
  GridItem,
  Button,
  Heading,
  Text,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";
import { MdCheckCircle, MdSettings } from "react-icons/md";
import ContactModal from "../modal/ContactModal";
import { image } from "../../assets/image";
import { useDisclosure } from "@chakra-ui/react";

const MyService = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box display={"flex"} flexDirection={"column"} gap={10} mb={10}>
        <Grid
          templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
          alignItems="center"
        >
          <GridItem w="100%">
            {/* <Box sx={{ width: "250px" }}> */}
            <img src={image.icon2} alt="icon1" />
            {/* </Box> */}
          </GridItem>
          <GridItem w="100%">
            <Heading fontSize={"2xl"} color={"primaryColor"}>
              Responsive Layout for your Design
            </Heading>
            <List spacing={3} mt={4}>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="primaryColor" />
                Landing page
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="primaryColor" />
                Information portals
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="primaryColor" />
                Website and business cards
              </ListItem>
              <ListItem>
                <ListIcon as={MdSettings} color="primaryColor" />
                Web Applications
              </ListItem>
            </List>
          </GridItem>
        </Grid>
        <Grid
          templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
          alignItems="center"
        >
          <GridItem w="100%">
            <Box sx={{ width: "180px" }}>
              <img src={image.icon3} alt="icon2" />
            </Box>
          </GridItem>
          <GridItem w="100%">
            <Text>Do you haven't a design?</Text>
            <Heading fontSize={"2xl"} color={"primaryColor"}>
              Choose a designer and order a layout
            </Heading>
          </GridItem>
        </Grid>
      </Box>
      <Button
        m={4}
        bgColor={"primaryColor"}
        sx={{
          border: "1px solid #992400ef",
          color: "white",
          fontWeight: "bold",
          "&:hover": {
            backgroundColor: "secondaryColor",
          },
        }}
        onClick={onOpen}
      >
        Contact Me
      </Button>

      <ContactModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default MyService;
