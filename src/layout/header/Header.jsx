import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { CgMenuGridO } from "react-icons/cg";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { image } from "../../assets/image";
import Sidebar from "../sidebar/Sidebar";
import { useEffect, useState } from "react";

const Links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/#about" },
  { name: "Services", path: "/#service" },
  { name: "Portfolio", path: "/#portfolio" },
  { name: "Contact", path: "/#contact" },
];

const NavLink = ({ name, path, isActive }) => {
  const border = useColorModeValue(isActive ? "1px solid #09c75e" : "", "");
  const color = useColorModeValue(isActive ? "white" : " #777", "red.500");

  return (
    <Box
      as={RouterLink}
      to={path}
      px={3}
      py={2}
      rounded={"full"}
      border={border}
      color={color}
      fontSize={"18px"}
      fontWeight={isActive ? "600" : "500"}
      _hover={{
        bg: useColorModeValue("transparent"),
        color: "white",
        border: "1px solid #09c75e",
        textDecoration: "none",
      }}
      textDecoration={"none"}
    >
      {name}
    </Box>
  );
};

export default function Header() {
  // const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isMobileMenuOpen,
    onOpen: onMobileMenuOpen,
    onClose: onMobileMenuClose,
  } = useDisclosure();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  const scrollToSection = () => {
    const hash = location.hash;
    if (hash) {
      const section = document.querySelector(hash);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  useEffect(() => {
    scrollToSection();
  }, [location]);

  const onSidebarOpen = () => {
    setIsSidebarOpen(true);
  };

  const onSidebarClose = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      <Box
        px={4}
        bg={" rgba(245, 245, 245, 0.041)"}
        backdropFilter="blur(10px)"
        boxShadow="0 1px 10px 0 #09c75e"
      >
        <Flex
          h={16}
          alignItems={"center"}
          justifyContent={"space-between"}
          px={{ base: 0, md: 12 }}
        >
          <Box w={"58px"}>
            <img src={image.logo2} alt="Logo" />
          </Box>
          <Flex alignItems={"center"}>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
              ml="auto"
              textDecoration={"none !important"}
            >
              {Links.map((link) => (
                <NavLink
                  textDecoration="none"
                  key={link.name}
                  name={link.name}
                  path={link.path}
                  isActive={location.pathname + location.hash === link.path}
                />
              ))}

              <CgMenuGridO
                color="#09c75e"
                fontSize={"2.2rem"}
                cursor={"pointer"}
                onClick={onSidebarOpen}
              />
            </HStack>
            <IconButton
              size={"md"}
              icon={isMobileMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={"Open Menu"}
              display={{ md: "none" }}
              onClick={isMobileMenuOpen ? onMobileMenuClose : onMobileMenuOpen}
              ml={4}
            />
          </Flex>
        </Flex>

        {isMobileMenuOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink
                  key={link.name}
                  name={link.name}
                  path={link.path}
                  isActive={location.pathname + location.hash === link.path}
                />
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

      <Sidebar isOpen={isSidebarOpen} onClose={onSidebarClose} />
    </>
  );
}
