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
    }}
  >
    <div>
      <Row className="slide_container">
        <Col xs={24} md={14} className="slide-content">
          <div className="slide-content-box">
            <Typography className="title">
              <span>Imagination</span> is more <br /> important than knowledge
            </Typography>
            <Typography className="desc">
              <div className="line"></div>
              Together, we achieve more than any single person could ever do
              alone.
            </Typography>
            <div className="btn">
              <Button>
                Getting Started <RiArrowRightCircleFill className="icon" />
              </Button>
            </div>
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
              Passionate React.js developer focused on building practical
              solutions.
            </Typography>
            <div className="btn">
              <Button>
                Getting Started <RiArrowRightCircleFill className="icon" />
              </Button>
            </div>
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
