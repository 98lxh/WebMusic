import React, { memo, useCallback } from "react";
import { useSelector } from "react-redux";
import { IRootState } from "../../../../store/reducer";
import { formatDate } from "../../../../utils/format-utils";
import { IAudioRef } from "../playerAudio";
import { Slider } from "antd";
import "./index.less";
import {IMusicInfo} from "../../store/reducer";
interface IPlayInfoProps {
  isPlay: boolean;
  audio: IAudioRef;
  progress: number;
  currentTime: number;
  setCurrentTime: (value: number) => void;
  playMusic: () => void;
  setProgress: (value: number) => void;
  setIsChange: (value: boolean) => void;
}
const PlayerInfo: React.FC<IPlayInfoProps> = memo((props) => {
  const {
    playMusic,
    isPlay,
    audio,
    progress,
    setProgress,
    setIsChange,
    currentTime,
    setCurrentTime,
  } = props;

  const { currentSong } = useSelector((state: IRootState) => ({
    currentSong: state.playerBar.currentSong as IMusicInfo,
  }));

  const picUrl = currentSong?.picUrl;
  const singerName = currentSong?.singerName;
  const duration = currentSong?.duration || 0;

  //滑动进度条
  const sliderChange = useCallback(
    (value: number) => {
      const currentTime = (value / 100) * duration;
      setIsChange(true);
      setCurrentTime(currentTime);
      setProgress(value);
    },
    [duration, setCurrentTime, setIsChange, setProgress]
  );

  //滑动进度条完成
  const sliderAfterChange = useCallback(
    (value: number) => {
      const currentTime = ((value / 100) * duration) / 1000;
      audio.setCurrentTime(currentTime);
      setCurrentTime(currentTime * 1000);
      setIsChange(false);
      if (!isPlay) {
        playMusic();
      }
    },
    [duration, isPlay, playMusic, setCurrentTime, audio, setIsChange]
  );

  return (
    <div className="player-info-wrapper">
      <div className="image">
        <img src={picUrl} alt="" />
      </div>
      <div className="info">
        <div className="song">
          <span className="song-name">{currentSong?.name}</span>
          <span className="singer-name">{singerName}</span>
        </div>
        <div className="progress">
          <div className="progress-bar">
            <Slider
              onChange={sliderChange}
              tooltipVisible={false}
              onAfterChange={sliderAfterChange}
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
    </div>
  );
});

export default PlayerInfo;