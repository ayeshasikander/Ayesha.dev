import React from "react";
import { Col, Row } from "antd";
import ProfileCard from "../../components/cards/ProfileCard";
const ProfileSection = () => (
  <Row style={{ height: "50vh", width: "85%",margin: "auto" }}>
    <Col span={18} push={6}>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga, provident
      officiis tempora error minima illum voluptas iusto eaque porro amet,
      corporis suscipit aliquam nihil sequi quo maxime ab eum aperiam!
    </Col>
    <Col span={6} pull={18}>
      <ProfileCard />
    </Col>
  </Row>
);
export default ProfileSection;
