import { Col, Row } from "antd";
import React, { memo, useEffect, useRef } from "react";
import {
  DeleteOutlined,
  UnorderedListOutlined,
  DownloadOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../../../store/reducer";
import { formatDate } from "../../../../utils/format-utils";
import { changeCurrentSong } from "../../store/actionCreators";
import "./index.less";
import { IMusicInfo } from "../../store/reducer";

interface IPlayMenuProps {
  isShow: boolean;
  currentLyricIndex: number;
  onClose: () => void;
}
const playerMenu: React.FC<IPlayMenuProps> = memo((props) => {
  const { currentLyricIndex } = props;
  const lyricRef = useRef<HTMLDivElement>(null);
  const { playList, currentSong, currentLyric } = useSelector(
    (state: IRootState) => ({
      playList: state.playerBar.playList,
      currentSong: state.playerBar.currentSong as IMusicInfo,
      currentLyric: state.playerBar.currentLyric,
    }),
    shallowEqual
  );
  useEffect(() => {
    const currentLyric: any = lyricRef.current?.children[currentLyricIndex];
    if (currentLyric && currentLyric.offsetTop) {
      lyricRef.current!.scrollTop = currentLyric.offsetTop - 230;
    }
  }, [currentLyricIndex]);
  const dispatch = useDispatch();
  const changeMusic = (musicIndex: number) => {
    dispatch(changeCurrentSong("next", musicIndex));
  };
  return (
    <div className={`player-menu-wrapper ${props.isShow ? "show" : "hide"}`}>
      <Row gutter={24}>
        <Col sm={0} xs={0} md={10} lg={10} xl={10} className="music-info">
          <div className="music-info-title">{currentSong.name}</div>
          <div className="music-lyric-wrapper" ref={lyricRef}>
            {currentLyric.map((lyricObj, index) => (
              <p
                key={index}
                className={`music-lyric ${
                  index === currentLyricIndex && "active"
                }`}
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
                <p className="singer-name">{music.singerName}</p>
                <p className="music-time">{formatDate(music.duration)}</p>
                <img
                  src={`/imgs/ico/${
                    music.origin === "netease" ? "netease.png" : "bbbug.ico"
                  }`}
                  alt=""
                />
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </div>
  );
});
export default playerMenu;
