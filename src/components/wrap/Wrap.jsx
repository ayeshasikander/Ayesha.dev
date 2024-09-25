import React from "react";
import { Box } from "@chakra-ui/react";
import "../../style/mainWrap/mainWrap.scss";
import Carousal from "../slider/Carousal";

const Wrap = () => {
  return (
    <>
      <Box className="bgCarousal">
        <Carousal />
      </Box>
    </>
  );
};

export default Wrap;
