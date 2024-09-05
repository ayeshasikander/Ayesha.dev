import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link as RouterLink } from "react-router-dom";
import { image } from "../../assets/image";

const Links = [
  { name: "Home", path: "/" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Contact", path: "/contact" },
];

const NavLink = ({ name, path }) => {
  return (
    <Box
      as={RouterLink}
      to={path}
      px={3}
      py={2}
      rounded={"full"}
      color={"#EAE8D9"}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("#EAE8D9"),
        color: "black",
      }}
    >
      {name}
    </Box>
  );
};

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue("black", "black")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"} px={{ base: 0, md: 12 }}>
          <Box w={90}>
            <img src={image.logo2} alt="Logo" />
          </Box>
          <Flex alignItems={"center"}>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
              ml="auto"
            >
              {Links.map((link) => (
                <NavLink key={link.name} name={link.name} path={link.path} />
              ))}

              <RouterLink to="/profile">
                <Avatar
                  size={"sm"}
                  src={
                    "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                  }
                />
              </RouterLink>
            </HStack>
            <IconButton
              size={"md"}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={"Open Menu"}
              display={{ md: "none" }}
              onClick={isOpen ? onClose : onOpen}
              ml={4}
            />
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link.name} name={link.name} path={link.path} />
              ))}
              <RouterLink to="/profile">
                <Avatar
                  size={"sm"}
                  src={
                    "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                  }
                />
              </RouterLink>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
