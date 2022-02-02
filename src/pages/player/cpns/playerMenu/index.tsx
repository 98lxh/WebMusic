import { Col, Drawer, Row } from "antd";
import React, { memo } from "react";

interface IPlayMenuProps {
  isShow: boolean;
  onClose: () => void;
}
const playerMenu: React.FC<IPlayMenuProps> = memo((props) => {
  return (
    <Drawer
      title="播放菜单"
      visible={props.isShow}
      onClose={props.onClose}
      placement="top"
    >
      <Row gutter={24}>
        <Col className="muisc-list"></Col>
        <Col className="muisc-info"></Col>
      </Row>
    </Drawer>
  );
});
export default playerMenu;
