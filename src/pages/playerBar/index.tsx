import {
  CaretRightOutlined,
  ContainerOutlined,
  DownOutlined,
  StepBackwardOutlined,
  StepForwardOutlined,
  UpOutlined,
} from "@ant-design/icons";
import { Badge, Col, Row, Slider } from "antd";
import React, { memo, useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../store/reducer";
import { formatDate } from "../../utils/format-utils";
import { getSongDetailAction } from "./store/actionCreators";
import "./index.less";
const PlayerBar: React.FC = memo(() => {
  const [showPlayer, setShowPlayer] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [isChange, setIsChange] = useState(false);
  const dispatch = useDispatch();
  const audioRef = useRef<HTMLAudioElement>(null);
  const { currentSong } = useSelector((state: IRootState) => ({
    currentSong: state.playerBar.currentSong as any,
  }));
  const picUrl = (currentSong.al && currentSong.al.picUrl) || "";
  const singerName = currentSong.ar && currentSong.ar[0].name;
  const duration = currentSong.dt || 0;
  const [progress, setProgress] = useState(0);
  const playMuisc = () => {
    audioRef.current!.src =
      "https://music.163.com/song/media/outer/url?id=" + 1430583016 + ".mp3";
    audioRef.current!.play();
  };
  const timeUpdate = (event: React.UIEvent<HTMLAudioElement>) => {
    if (isChange) return;
    setCurrentTime(event.currentTarget.currentTime * 1000);
    setProgress((currentTime / duration) * 100);
  };
  const sliderChange = useCallback((value: number) => {
    const currentTime = (value / 100) * duration;
    setIsChange(true);
    setCurrentTime(currentTime);
    setProgress(value);
  }, []);
  const sliderAfterChange = useCallback(
    (value: number) => {
      const currentTime = ((value / 100) * duration) / 1000;
      audioRef.current!.currentTime = currentTime;
      setCurrentTime(currentTime * 1000);
      setIsChange(false);
    },
    [duration]
  );
  useEffect(() => {
    dispatch(getSongDetailAction(1430583016));
  }, [dispatch]);

  const togglePlayer = () => {
    setShowPlayer(!showPlayer);
  };
  return (
    <div className={`player-bar-wrapper ${showPlayer && "show"}`}>
      <div className="content">
        <div className="content-toggle" onClick={togglePlayer}>
          {showPlayer ? <UpOutlined /> : <DownOutlined />}
        </div>
        <Row gutter={24} justify="center" style={{ width: "100%" }}>
          <Col sm={24} xs={24} md={16} lg={16} xl={16} className="play-info">
            <div className="image">
              <img src={picUrl} alt="" />
            </div>
            <div className="info">
              <div className="song">
                <span className="song-name">{currentSong.name}</span>
                <span className="singer-name">{singerName}</span>
              </div>
              <div className="progress">
                <div className="progress-bar">
                  <Slider
                    onChange={sliderChange}
                    onAfterChange={sliderAfterChange}
                    defaultValue={30}
                    value={progress}
                  />
                </div>
                <div className="time-info">
                  <span className="now-time">{formatDate(currentTime)}</span>
                  <span className="divider">/</span>
                  <span className="end-time">{formatDate(duration)}</span>
                </div>
              </div>
            </div>
          </Col>
          <Col sm={24} xs={24} md={8} lg={8} xl={8} className="updn">
            <div>
              <StepBackwardOutlined />
            </div>
            <div>
              <CaretRightOutlined onClick={playMuisc} />
            </div>
            <div>
              <StepForwardOutlined />
            </div>
            <div
              className="xx"
              onClick={() => {
                console.log(currentSong);
              }}
            >
              单曲循环
            </div>
            <div>
              <Badge status="default" count={2}>
                <ContainerOutlined style={{ fontSize: "1.5rem" }} />
              </Badge>
            </div>
          </Col>
        </Row>
      </div>
      <audio ref={audioRef} onTimeUpdate={timeUpdate} />
    </div>
  );
});

export default PlayerBar;
