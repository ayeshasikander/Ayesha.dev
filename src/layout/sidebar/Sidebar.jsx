import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
} from "@chakra-ui/react";
import { image } from "../../assets/image";
import ProfileCard from "../../components/cards/ProfileCard";

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
      <DrawerOverlay
        bg="rgba(0, 0, 0, 0.8)"
        transition="opacity 0.1s ease-in-out"
      />

      <DrawerContent
        bg="#0B0D0C"
        color="white"
        transition="transform 0.5s ease-in-out, opacity 0.5s ease-in-out"
        transform={isOpen ? "translateX(0%)" : "translateX(100%)"}
        opacity={isOpen ? 1 : 0}
        transitionDelay={isOpen ? "0s" : "0.1s"}
        pt={10}
      >
        <DrawerCloseButton/>
        <DrawerHeader>
          <img width={"60px"} src={image.logo2} alt="" />
        </DrawerHeader>
        <DrawerBody>
          <ProfileCard />
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default Sidebar;
