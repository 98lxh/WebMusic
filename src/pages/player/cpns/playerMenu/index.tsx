import { Col, Row } from "antd";
import React, { memo } from "react";
import {
  DeleteOutlined,
  ShareAltOutlined,
  UnorderedListOutlined,
  DownloadOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../../../store/reducer";
import { formatDate } from "../../../../utils/format-utils";
import { changeCurrentSong } from "../../store/actionCreators";
import "./index.less";

interface IPlayMenuProps {
  isShow: boolean;
  onClose: () => void;
}
const playerMenu: React.FC<IPlayMenuProps> = memo((props) => {
  const { playList, currentSong, currentLyric } = useSelector(
    (state: IRootState) => ({
      playList: state.playerBar.playList,
      currentSong: state.playerBar.currentSong,
      currentLyric: state.playerBar.currentLyric,
    }),
    shallowEqual
  );
  const dispatch = useDispatch();
  const changeMusic = (musicIndex: number) => {
    dispatch(changeCurrentSong("next", musicIndex));
  };
  return (
    <div className={`player-menu-wrapper ${props.isShow ? "show" : "hide"}`}>
      <Row gutter={24}>
        <Col sm={0} xs={0} md={10} lg={10} xl={10} className="music-info">
          <div className="music-info-title">{currentSong.name}</div>
          <div className="music-lyric-wrapper">
            {currentLyric.map((lyricObj, index) => (
              <p
                key={index}
                className={`music-lyric ${index === 2 && "active"}`}
              >
                {lyricObj.content}
              </p>
            ))}
          </div>
        </Col>
        <Col sm={24} xs={24} md={14} lg={14} xl={14} className="music-list">
          <div className="music-menu-title">
            <div className="music-menu-icon">
              <UnorderedListOutlined />
              <p>播放列表({playList.length || 0})</p>
            </div>
            <div className="music-menu-clear">
              <DeleteOutlined />
              <p>清除</p>
              <div className="music-menu-close" onClick={() => props.onClose()}>
                <CloseOutlined />
              </div>
            </div>
          </div>
          <ul className="music-menu-list">
            {playList.map((music, index) => (
              <li
                key={index}
                className={`music-menu-item ${
                  currentSong.id === music.id && "current-play"
                }`}
                onClick={() => changeMusic(index)}
              >
                <p className="music-name">{music.name}</p>
                <div className="music-handle">
                  <DownloadOutlined />
                  <DeleteOutlined />
                </div>
                <p className="singer-name">{music.ar[0].name}</p>
                <p className="music-time">{formatDate(music.dt)}</p>
                <ShareAltOutlined />
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </div>
  );
});
export default playerMenu;
