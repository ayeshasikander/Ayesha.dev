import React from "react";
import { Flex, Progress } from "antd";
import "../../style/serviceLayout/progress.scss";
import Typography from "antd/es/typography/Typography";

const ProgressBar = ({ item }) => (
  <Flex vertical gap="middle">
    <Flex
      align="center"
      justify="center"
      wrap
      style={{
        padding: "2rem",
      }}
    >
      <Progress
        type="circle"
        percent={item.percent}
        strokeWidth={9}
        strokeColor={{
          "20%": "#08D665 ",
          "100%": "#020704",
        }}
        trailColor="white"
        format={(percent) => (
          <span
            style={{
              color: "white",
              fontSize: "2rem",
              fontWeight: "bold",
              fontFamily: "'Oswald', sans-serif",
            }}
          >
            {percent}%
          </span>
        )}
      />
      <Typography className="title">{item.title}</Typography>
    </Flex>
  </Flex>
);

export default ProgressBar;
