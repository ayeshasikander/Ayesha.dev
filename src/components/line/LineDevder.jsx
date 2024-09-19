import React from "react";
import { chakra } from "@chakra-ui/react";
import { motion, isValidMotionProp } from "framer-motion";

const AnimatedBox = chakra(motion.div, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === "children",
});

const LineDivider = () => {
  return (
    <AnimatedBox
      w="100px"
      h={1}
      bg="primaryColor"
      borderRadius="full"
      my={1}
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ duration: 0.5 }}
    />
  );
};

export default LineDivider;
