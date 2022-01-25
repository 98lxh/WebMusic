import React, { memo } from "react";
import { Col, Row } from "antd";
import { Outlet } from "react-router";
import GlobalHeader from "../components/GlobalHeader";
import GlobalFooter from "../components/GlobalFooter";
import "./index.less";
const Layout: React.FC = memo(() => {
  return (
    <div className="layout-wrapper">
      <GlobalHeader />
      <Row gutter={24} justify={"center"}>
        <Col sm={24} xs={24} md={24} lg={22} xl={20}>
          <Outlet />
        </Col>
      </Row>
      <GlobalFooter />
    </div>
  );
});

export default Layout;
