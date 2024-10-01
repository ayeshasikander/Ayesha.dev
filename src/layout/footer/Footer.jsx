import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { image } from "../../assets/image";
import { Link } from "react-router-dom";

const Logo = (props) => {
  return (
    <img
      src={image.logo2}
      alt="logo"
      style={{ width: "60px", height: "auto" }}
    />
  );
};

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function SmallWithLogoLeft() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container
        as={Stack}
        maxW={"full"}
        py={4}
        px={20}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        bgColor={"bg_color"}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        {" "}
        <Text>ayesha sikander ©.dev 2024</Text>
        <Logo />
        <Stack direction={"row"} spacing={6}>
          <Link to={""}>
            {" "}
            <SocialButton label={"whatsapp"}>
              <FaWhatsapp color="#25D366" fontSize={"1.1rem"} />
            </SocialButton>
          </Link>
          <Link to={""}>
            {" "}
            <SocialButton label={"linkedin"}>
              <FaLinkedin color="#25D366" fontSize={"1.1rem"} />
            </SocialButton>
          </Link>
          <Link to={"/"}>
            {" "}
            <SocialButton label={"Github"}>
              <FaGithub color="#25D366" fontSize={"1.1rem"} />
            </SocialButton>
          </Link>
          <Link to={"/"}>
            <SocialButton label={"Twitter"}>
              <FaTwitter color="#25D366" fontSize={"1.1rem"} />
            </SocialButton>
          </Link>
        </Stack>
      </Container>
    </Box>
  );
}
