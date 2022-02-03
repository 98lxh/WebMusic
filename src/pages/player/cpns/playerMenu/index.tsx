import { Col, Drawer, Row } from "antd";
import React, { memo } from "react";
import './index.less'
import {AppstoreAddOutlined, DeleteOutlined, ShareAltOutlined, UnorderedListOutlined,DownloadOutlined} from "@ant-design/icons";
interface IPlayMenuProps {
  isShow: boolean;
  onClose: () => void;
}
const playerMenu: React.FC<IPlayMenuProps> = memo((props) => {
  return (
    <Drawer className="player-menu-wrapper" title="播放菜单"
      visible={props.isShow}
      onClose={props.onClose}
      placement="bottom"
    >
      <Row gutter={24}>
        <Col sm={24} xs={24} md={10} lg={10} xl={10} className="music-info">
          <div className="music-info-title">海底</div>
        </Col>
        <Col sm={24} xs={24} md={14} lg={14} xl={14}  className="music-list">
          <div className="music-menu-title">
              <div className="music-menu-icon">
                <UnorderedListOutlined />
                <p>播放列表(2)</p>
              </div>
              <div className="music-menu-clear">
                <DeleteOutlined />
                <p>清除</p>
              </div>
          </div>
          <ul className="music-menu-list">
            <li className="music-menu-item">
              <p className="music-name">海底</p>
              <div className="music-handle">
                <AppstoreAddOutlined />
                <DeleteOutlined />
                <DownloadOutlined />
              </div>
              <p className="music-time">02:31</p>
              <ShareAltOutlined />
            </li>
          </ul>
        </Col>
      </Row>
    </Drawer>
  );
});
export default playerMenu;
