import React, { memo } from "react";
import { Col, Row } from "antd";
import { Outlet, useLocation } from "react-router";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import GlobalHeader from "../components/GlobalHeader";
import GlobalFooter from "../components/GlobalFooter";
import PlayerBar from "../pages/player";
import "./index.less";
import Setting from "../components/Setting";
import { shallowEqual, useSelector } from "react-redux";
import { IRootState } from "../store/reducer";
const Layout: React.FC = memo(() => {
  const location = useLocation();
  const { themeDark } = useSelector(
    (state: IRootState) => ({
      themeDark: state.app.themeDark,
    }),
    shallowEqual
  );
  return (
    <div className="layout-wrapper">
      <GlobalHeader />
      <TransitionGroup className="fade">
        <CSSTransition key={location.pathname} classNames="fade" timeout={800}>
          <Row
            gutter={24}
            justify={"center"}
            className={`main-wrapper ${themeDark && "dark"}`}
          >
            <Col sm={24} xs={24} md={24} lg={22} xl={20}>
              <Outlet />
            </Col>
          </Row>
        </CSSTransition>
      </TransitionGroup>
      <Setting />
      <PlayerBar />
      <GlobalFooter />
    </div>
  );
});

export default Layout;
