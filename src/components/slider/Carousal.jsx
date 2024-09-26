import React from "react";
import { Carousel, Row, Col, Typography, Button } from "antd";
import { RiArrowRightCircleFill } from "react-icons/ri";
import "../../style/mainWrap/carousalStyle.scss";
import { image } from "../../assets/image";

const Carousal = () => (
  <Carousel
    effect="fade"
    className="custom-dots"
    style={{
      width: "100%",
      height: "100vh",
    }}
  >
    <div>
      <Row className="slide_container">
        <Col className="slide-content" flex={3}>
          <div className="slide-content-box">
            <Typography className="title">
              <span>Imagination</span> is more <br /> important then knowledge
            </Typography>
            <Typography className="desc">
              <div className="line"></div>
              Together we the people achieve more then any single person could
              ever do alone.
            </Typography>
            <div className="btn">
              <Button>
                Getting Started <RiArrowRightCircleFill className="icon" />
              </Button>
            </div>
          </div>
        </Col>

        <Col className="slide-content2" flex={2}>
          <img src={image.girl1} alt="" />
        </Col>
      </Row>
    </div>

    <div>
      <Row className="slide_container">
        <Col className="slide-content" flex={3}>
          <div className="slide-content-box">
            <Typography className="title">
              <span>Imagination</span> is more <br /> important then knowledge
            </Typography>
            <Typography className="desc">
              <div className="line"></div>
              Passionate React js developer focused on building practical
              solutions.
            </Typography>
            <div className="btn">
              <Button>
                Getting Started <RiArrowRightCircleFill className="icon" />
              </Button>
            </div>
          </div>
        </Col>

        <Col className="slide-content2" flex={2}>
          <img src={image.girl3} alt="" />
        </Col>
      </Row>
    </div>
  </Carousel>
);

export default Carousal;
