import React from "react";
import { Layout } from "antd";
import AppFooter from "./footer/Footer";
import AppHeader from "./header/Header";
import { Outlet } from "react-router-dom";
import "../style/headerLayout/globalHeader.scss";

const { Header, Content, Footer } = Layout;

const AppLayout = () => {
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Header
        className="global-header"
        style={{
          padding: 0,
        }}
      >
        <AppHeader />
      </Header>
      <Content>
        <Outlet />
      </Content>
      <Footer style={{ padding: 0, textAlign: "center" }}>
        <AppFooter />
      </Footer>
    </Layout>
  );
};
export default AppLayout;
