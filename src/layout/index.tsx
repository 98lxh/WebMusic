import React, { memo, Suspense } from "react";
import { Col, Row } from "antd";
import { Outlet, useLocation } from "react-router";
import GlobalHeader from "../components/GlobalHeader";
import GlobalFooter from "../components/GlobalFooter";
import GlobalLoading from "../components/GlobalLoading";
import PlayerBar from "../pages/player";
import Setting from "../components/Settings";
import { shallowEqual, useSelector } from "react-redux";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { IRootState } from "../store/reducer";
import "./index.less";

const Layout: React.FC = memo(() => {
  const { themeDark } = useSelector(
    (state: IRootState) => ({
      themeDark: state.app.themeDark,
    }),
    shallowEqual
  );
  const location = useLocation();
  return (
    <div className={`layout-wrapper ${themeDark && "dark"}`}>
      <GlobalHeader />
      <TransitionGroup className="fade">
        <CSSTransition key={location.pathname} classNames="fade" timeout={800}>
          <Row gutter={24} justify={"center"} className="main-wrapper">
            <Col sm={24} xs={24} md={24} lg={22} xl={20}>
              <Suspense fallback={<GlobalLoading type="golbal" />}>
                <Outlet />
              </Suspense>
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
