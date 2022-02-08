import React, { memo } from "react";
import { Col, Row } from "antd";
import { Outlet, useLocation } from "react-router";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import GlobalHeader from "../components/GlobalHeader";
import GlobalFooter from "../components/GlobalFooter";
import PlayerBar from "../pages/player";
import "./index.less";
import GolbalDrawer from "../components/GolbalDrawer";
import { SettingFilled } from "@ant-design/icons";
const Layout: React.FC = memo(() => {
  const location = useLocation();
  return (
    <div className="layout-wrapper">
      <GlobalHeader />
      <TransitionGroup className="fade">
        <CSSTransition key={location.pathname} classNames="fade" timeout={800}>
          <Row gutter={24} justify={"center"} className="main-wrapper">
            <Col sm={24} xs={24} md={24} lg={20} xl={18}>
              <Outlet />
            </Col>
          </Row>
        </CSSTransition>
      </TransitionGroup>
      <PlayerBar />
      <GolbalDrawer title="设置" icon={<SettingFilled />}></GolbalDrawer>
      <GlobalFooter />
    </div>
  );
});

export default Layout;
