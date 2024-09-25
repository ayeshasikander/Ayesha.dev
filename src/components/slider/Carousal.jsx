import React from "react";
import { Carousel, Row, Col } from "antd";

const Carousal = () => (
  <Carousel effect="fade" style={{
    width: "100%",
    height: "100vh",
    backgroundColor: "red",

  }}>
    <div>
      <Row>
        <Col flex={3}>3 / 5</Col>
        <Col flex={2}>2 / 5</Col>
      </Row>
    </div>
    <div>
      <Row backgroundColor="green">
        <Col flex={3}>3 / 5</Col>
        <Col flex={2}>2 / 5</Col>
      </Row>
    </div>
  </Carousel>
);
export default Carousal;
