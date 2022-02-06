import { DownOutlined, UpOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";
import React, { memo, useCallback, useRef, useState } from "react";
import PlayerMenu from "./cpns/playerMenu";
import PlayerHandler from "./cpns/playerHandler";
import PlayerAudio, { IAudioRef } from "./cpns/playerAudio";
import PlayerInfo from "./cpns/playerInfo";
import "./index.less";

const PlayerBar: React.FC = memo(() => {
  //显示隐藏播放栏
  const [showPlayer, setShowPlayer] = useState(true);
  //是否在播放中
  const [isPlay, setIsPlay] = useState(false);
  //进度条
  const audioRef = useRef<IAudioRef>(null);
  //显示隐藏播放菜单
  const [isShowPlayerMenu, setIsShowPlayerMenu] = useState(false);
  //当前播放时间
  const [currentTime, setCurrentTime] = useState(0);
  //进度条是否在拖动中
  const [isChange, setIsChange] = useState(false);
  const [progress, setProgress] = useState(0);

  //播放 暂停
  const playMusic = useCallback(() => {
    isPlay ? audioRef.current?.pause() : audioRef.current?.play();
    setIsPlay(!isPlay);
  }, [isPlay]);

  const closePlayerMenu = () => {
    setIsShowPlayerMenu(false);
  };

  const togglePlayer = () => {
    setShowPlayer(!showPlayer);
  };
  return (
    <div className={`player-bar-wrapper ${showPlayer && "show"}`}>
      <PlayerMenu isShow={isShowPlayerMenu} onClose={closePlayerMenu} />
      <div className="content">
        <div className="content-toggle" onClick={togglePlayer}>
          {showPlayer ? <UpOutlined /> : <DownOutlined />}
        </div>
        <Row gutter={24} justify="center" style={{ width: "100%" }}>
          <Col sm={24} xs={24} md={16} lg={16} xl={16} className="play-info">
            <PlayerInfo
              progress={progress}
              setProgress={setProgress}
              isPlay={isPlay}
              playMusic={playMusic}
              audio={audioRef.current!}
              setIsChange={setIsChange}
              currentTime={currentTime}
              setCurrentTime={setCurrentTime}
            />
          </Col>
          <Col sm={24} xs={24} md={8} lg={8} xl={8}>
            <PlayerHandler
              isPlay={isPlay}
              isShowPlayerMenu={isShowPlayerMenu}
              setIsShowPlayer={setIsShowPlayerMenu}
              playMusic={playMusic}
            />
          </Col>
        </Row>
        <PlayerAudio
          isChange={isChange}
          ref={audioRef}
          setIsPlay={setIsPlay}
          isPlay={isPlay}
          setProgress={setProgress}
          setCurrentTime={setCurrentTime}
          currentTime={currentTime}
        />
      </div>
    </div>
  );
});

export default PlayerBar;
