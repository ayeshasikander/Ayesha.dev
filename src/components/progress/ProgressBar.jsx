import React, { useState, useEffect, useRef } from "react";
import { Flex, Progress } from "antd";
import "../../style/serviceLayout/progress.scss";
import Typography from "antd/es/typography/Typography";

const ProgressBar = ({ item }) => {
  const [animatedPercent, setAnimatedPercent] = useState(0);
  const [displayPercent, setDisplayPercent] = useState(0);
  const progressRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let startValue = 0;
          const duration = 2000;
          const increment = item.percent / (duration / 10);
          
          const counter = setInterval(() => {
            startValue += increment;
            if (startValue >= item.percent) {
              clearInterval(counter);
              startValue = item.percent; 
            }
            setDisplayPercent(Math.round(startValue)); 
            setAnimatedPercent(startValue); 
          }, 10); 
        }
      },
      { threshold: 0.5 }
    );

    if (progressRef.current) {
      observer.observe(progressRef.current);
    }

    return () => {
      if (progressRef.current) {
        observer.unobserve(progressRef.current);
      }
    };
  }, [item.percent]);

  return (
    <Flex vertical gap="middle" ref={progressRef}>
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
          percent={animatedPercent}
          strokeWidth={9}
          strokeColor={{
            "20%": "#08D665 ",
            "100%": "#020704",
          }}
          trailColor="white"
          format={() => (
            <span
              style={{
                color: "white",
                fontSize: "2rem",
                fontWeight: "bold",
                fontFamily: "'Oswald', sans-serif",
              }}
            >
              {displayPercent}%
            </span>
          )}
        />
        <Typography className="title">{item.title}</Typography>
      </Flex>
    </Flex>
  );
};

export default ProgressBar;
