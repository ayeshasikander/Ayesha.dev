import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
  Box,
} from "@chakra-ui/react";

const ContactModal = ({ isOpen, onClose }) => {
  const handleContact = (method) => {
    if (method === "email") {
      window.location.href = "mailTo:sikanderayesha46@gmail.com";
    } else if (method === "whatsapp") {
      window.location.href = "https://wa.me/+923161248074";
    }
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Contact Me</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text>Please choose your preferred contact method:</Text>
          <Box display="flex" justifyContent="space-around" mt={4}>
            <Button colorScheme="blue" onClick={() => handleContact("email")}>
              Contact via Email
            </Button>
            <Button
              colorScheme="green"
              onClick={() => handleContact("whatsapp")}
            >
              Contact via WhatsApp
            </Button>
          </Box>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="red" onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ContactModal;
