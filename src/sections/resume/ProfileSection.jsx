import React from "react";
import { Col, Row } from "antd";
import Tech from '../../sections/skill/Tech';
import ProfileCard from "../../components/cards/ProfileCard";
const ProfileSection = () => (
  <Row style={{ height: "50vh", width: "85%", margin: "auto" }}>
    <Col span={18} push={6}>
      <Tech />
    </Col>
    <Col span={6} pull={18}>
      <ProfileCard />
    </Col>
  </Row>
);
export default ProfileSection;
