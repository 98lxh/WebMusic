import React, { memo } from "react";
import { Col, Row } from "antd";
import { Outlet } from "react-router";
import GlobalHeader from "../components/GlobalHeader";
import GlobalFooter from "../components/GlobalFooter";
import PlayerBar from "../pages/playerBar";
import "./index.less";
const Layout: React.FC = memo(() => {
  return (
    <div className="layout-wrapper">
      <GlobalHeader />
      <Row gutter={24} justify={"center"}>
        <Col sm={24} xs={24} md={24} lg={20} xl={18}>
          <Outlet />
        </Col>
      </Row>
      <PlayerBar />
      <GlobalFooter />
    </div>
  );
});

export default Layout;
