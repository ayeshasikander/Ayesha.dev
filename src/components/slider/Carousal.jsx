import React from "react";
import { Carousel, Row, Col } from "antd";
import "../../style/mainWrap/carousalStyle.scss";

const Carousal = () => (
  <Carousel
    effect="fade"
     className="custom-dots"
    style={{
      width: "100%",
      height: "100vh",
    }}
  >
    {/* Slide 1 */}
    <div>
      <Row
        style={{ height: "100vh", width: "100%", background: "transparent" }}
      >
        {/* First Column (60% width) */}
        <Col style={{ flex: 3, background: "transparent" }}>
          <h1 style={{ textAlign: "center", color: "white" }}>
            60% Width Column
          </h1>
        </Col>
        {/* Second Column (40% width) */}
        <Col style={{ flex: 2, background: "transparent" }}>
          <h1 style={{ textAlign: "center", color: "white" }}>
            40% Width Column
          </h1>
        </Col>
      </Row>
    </div>

    {/* Slide 2 */}
    <div>
      <Row
        style={{ height: "100vh", width: "100%", background: "transparent" }}
      >
        {/* First Column (60% width) */}
        <Col style={{ flex: 3, background: "transparent" }}>
          <h1 style={{ textAlign: "center", color: "white" }}>
            60% Width Column..
          </h1>
        </Col>
        {/* Second Column (40% width) */}
        <Col style={{ flex: 2, background: "transparent" }}>
          <h1 style={{ textAlign: "center", color: "white" }}>
            40% Width Column..
          </h1>
        </Col>
      </Row>
    </div>
  </Carousel>
);

export default Carousal;
