import React from "react";
import ProgressBar from "../../components/progress/ProgressBar";
import { Container, SimpleGrid } from "@chakra-ui/react";
import { data } from "./progressData";

const SkillProgress = () => {
  return (
    <Container maxWidth={"6xl"} my={"3rem"}>
      <SimpleGrid
        spacing={3}
        templateColumns="repeat(auto-fill, minmax(250px, 1fr))"
      >
        {data.map((item) => (
          <ProgressBar key={item.id} item={item} />
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default SkillProgress;
