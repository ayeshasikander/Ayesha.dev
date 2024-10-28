import React from "react";
import { Stack, Button } from "@chakra-ui/react";
import { Carousel, Row, Col, Typography } from "antd";
import { Link } from "react-router-dom";
import { RiArrowDownCircleFill } from "react-icons/ri";
import "../../style/mainWrap/carousalStyle.scss";
import { image } from "../../assets/image";

const Carousal = () => (
  <Carousel
    effect="fade"
    autoplay
    autoplaySpeed={2000}
    className="custom-dots"
    style={{
      width: "100%",
    }}
  >
    <div>
      <Row className="slide_container">
        <Col xs={24} md={14} className="slide-content">
          <div className="slide-content-box">
            <Typography className="title">
              <span className="name">Welcome to my portfolio!</span>
              <br />
              I'm Ayesha Sikander.
            </Typography>
            <Typography className="desc">
              <div className="line"></div>
              Passionate React.js developer focused on building practical
              solutions.
            </Typography>
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={{ base: "column", sm: "row" }}
            >
              <Link to="#portfolio">
                {" "}
                <Button
                  rounded={"md"}
                  size={"lg"}
                  px={6}
                  colorScheme={"#000000"}
                  bg={"primaryColor"}
                  fontSize={"1rem"}
                  // fontWeight={"bold"}
                  fontFamily={"'Rubik', sans-serif"}
                  textTransform={"uppercase"}
                  _hover={{
                    bg: "transparent",
                    color: "primaryColor",
                    border: "1px solid",
                    borderColor: "primaryColor",
                  }}
                >
                  View My Projects <RiArrowDownCircleFill className="icon_down"/>
                </Button>
              </Link>
            </Stack>
          </div>
        </Col>

        <Col xs={0} md={10} className="slide-content2">
          <img src={image.girl1} alt="Slide 1" className="responsive-img" />
        </Col>
      </Row>
    </div>

    <div>
      <Row className="slide_container">
        <Col xs={24} md={14} className="slide-content">
          <div className="slide-content-box">
            <Typography className="title">
              <span>Imagination</span> is more <br /> important than knowledge
            </Typography>
            <Typography className="desc">
              <div className="line"></div>
              Explore my work or get in touch to start a project together.
            </Typography>
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={{ base: "column", sm: "row" }}
            >
              <a href="/Ayesha_Sikander.pdf">
              <Button
                rounded={"md"}
                size={"lg"}
                px={6}
                colorScheme={"#000000"}
                bg={"primaryColor"}
                fontSize={"1rem"}
                // fontWeight={"bold"}
                fontFamily={"'Rubik', sans-serif"}
                textTransform={"uppercase"}
                _hover={{
                  bg: "transparent",
                  color: "primaryColor",
                  border: "1px solid",
                  borderColor: "primaryColor",
                }}
              >
                DOWNLOAD CV
              </Button></a>
            </Stack>
          </div>
        </Col>

        <Col xs={0} md={10} className="slide-content2">
          <img src={image.girl3} alt="Slide 2" className="responsive-img" />
        </Col>
      </Row>
    </div>
  </Carousel>
);

export default Carousal;
