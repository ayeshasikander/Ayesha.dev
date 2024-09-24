import React from "react";
import { Box, ListItem, UnorderedList, Heading } from "@chakra-ui/react";
import LineDivider from "../../components/line/LineDevder";

const listData = [
  {
    id: 1,
    desc: "Experienced and versatile web developer, adept at architecting and delivering robust, scalable, and high-performing web applications.",
  },
  {
    id: 2,
    desc: "Proficient in managing complex state using Redux, ensuring predictable and maintainable state management.",
  },
  {
    id: 3,
    desc: "Skilled in leveraging React Query to tackle server-state management challenges effectively.",
  },
  {
    id: 4,
    desc: "Comfortable navigating intricate front-end architectures, optimizing routing and navigation using React Router.",
  },
  {
    id: 5,
    desc: "Fluent in Material-UI, Ant Design, Tailwind CSS, and other latest UI libraries, crafting visually appealing and responsive user interfaces with a cohesive design.",
  },
  {
    id: 6,
    desc: "Well-versed in Node.js, Express.js, MongoDB, and Mongoose, expanding my back-end development capabilities.",
  },
];

const SkillDesc = () => {
  return (
    <Box padding={5} display={"flex"} flexDirection={"column"} gap={25}>
      <Box
        display={"flex"}
        justifyContent={"center"}
        flexDirection={"column"}
        alignItems={"center"}
        paddingTop={"2rem"}
      >
        <Heading align={"center"} fontSize={"2xl"}>
          My Technical Expertise
        </Heading>
        <LineDivider />
      </Box>
      <UnorderedList
        sx={{
          listStyleType: "disc",
          "& li::marker": {
            color: "primaryColor",
            fontSize: "1.5em",
          },
        }}
      >
        {listData.map((skill) => (
          <ListItem key={skill.id} fontSize={"15px"} p={2}>
            {skill.desc}
          </ListItem>
        ))}
      </UnorderedList>
    </Box>
  );
};

export default SkillDesc;
