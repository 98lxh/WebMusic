import {
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
import {changeSequenceAction, getSongDetailAction} from "./store/actionCreators";
import "./index.less";
import PlayerMenu from "./cpns/playerMenu";
const PlayerBar: React.FC = memo(() => {
  const [showPlayer, setShowPlayer] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [isChange, setIsChange] = useState(false);
  const [isPlay, setIsPlay] = useState(false);
  const [isShowPlayerMenu, setIsShowPlayerMenu] = useState(false);
  const dispatch = useDispatch();
  const audioRef = useRef<HTMLAudioElement>(null);
  const { currentSong,sequence,playList } = useSelector((state: IRootState) => ({
    currentSong: state.playerBar.currentSong as any,
    sequence:state.playerBar.sequence,
    playList:state.playerBar.playList
  }));
  const picUrl = (currentSong.al && currentSong.al.picUrl) || "";
  const singerName = currentSong.ar && currentSong.ar[0].name;
  const duration = currentSong.dt || 0;
  const [progress, setProgress] = useState(0);
  const playMusic = useCallback(() => {
    isPlay ? audioRef.current?.pause() : audioRef.current?.play();
    setIsPlay(!isPlay);
  }, [isPlay]);
  const timeUpdate = (event: React.UIEvent<HTMLAudioElement>) => {
    if (isChange) return;
    setCurrentTime(event.currentTarget.currentTime * 1000);
    setProgress((currentTime / duration) * 100);
  };
  const handlePlayerMenu = (isShow: boolean) => {
    setIsShowPlayerMenu(isShow);
  };
  const closePlayerMenu = () => {
    setIsShowPlayerMenu(false)
  }
  const sliderChange = useCallback(
    (value: number) => {
      const currentTime = (value / 100) * duration;
      setIsChange(true);
      setCurrentTime(currentTime);
      setProgress(value);
    },
    [duration]
  );
  const sliderAfterChange = useCallback(
    (value: number) => {
      const currentTime = ((value / 100) * duration) / 1000;
      audioRef.current!.currentTime = currentTime;
      setCurrentTime(currentTime * 1000);
      setIsChange(false);
      if (!isPlay) {
        playMusic();
      }
    },
    [duration, isPlay, playMusic]
  );
  //切换列表循环和单曲循环
  const changeSequence = () => {
    dispatch(changeSequenceAction(sequence === 0 ? 1 : 0))
  }
  useEffect(() => {
    dispatch(getSongDetailAction(1430583016));
  }, [dispatch]);
  useEffect(() => {
    audioRef.current!.src =
      "https://music.163.com/song/media/outer/url?id=" +
      currentSong.id +
      ".mp3";
  }, [currentSong]);
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
                    tooltipVisible={false}
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
            <div onClick={playMusic}>
              <i
                className={`iconfont ${
                  isPlay ? "icon-24gf-pause2" : "icon-shipinbofangshibofang"
                }`}
               />
            </div>
            <div>
              <StepForwardOutlined />
            </div>
            <div onClick={changeSequence}>
              <i className={`iconfont ${sequence === 0 ? ' icon-danquxunhuan' : 'icon-liebiaoxunhuan'}`} />
            </div>
            <div>
              <Badge count={playList.length}>
                <ContainerOutlined className={`player-menu-btn ${isShowPlayerMenu && 'active'}`}
                  onClick={()=>{setIsShowPlayerMenu(!isShowPlayerMenu)}}
                />
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
