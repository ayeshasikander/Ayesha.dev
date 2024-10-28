import React, { useState, useEffect } from "react";
import { ArrowUpIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <Button
          onClick={scrollToTop}
          position="fixed"
          bottom="6"
          right="6"
          p="3"
          borderRadius="full"
          bg="primaryColor"
          color="white"
          shadow="lg"
          _hover={{ bg: "#1cb05f" }}
          transition="all 0.3s"
          zIndex="50"
          aria-label="Scroll to top"
        >
          <ArrowUpIcon w={8} h={8} color="white" />
        </Button>
      )}
    </>
  );
};

export default ScrollToTop;
