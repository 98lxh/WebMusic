import React, { memo } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import {
  ContainerOutlined,
  StepBackwardOutlined,
  StepForwardOutlined,
} from "@ant-design/icons";
import { Badge, Tooltip } from "antd";
import {
  changeCurrentSong,
  changeSequenceAction,
} from "../../store/actionCreators";
import { IRootState } from "../../../../store/reducer";
import "./index.less";

interface IPlayerHandlerProps {
  isPlay: boolean;
  isShowLyric: boolean;
  setIsShowLyric: (value: boolean) => void;
  isShowPlayerMenu: boolean;
  playMusic: () => void;
  setIsShowPlayer: (value: boolean) => void;
}

const PlayerHandler: React.FC<IPlayerHandlerProps> = memo((props) => {
  const {
    isPlay,
    playMusic,
    setIsShowPlayer,
    isShowPlayerMenu,
    setIsShowLyric,
    isShowLyric,
  } = props;
  const dispatch = useDispatch();
  const { playList, sequence } = useSelector(
    (state: IRootState) => ({
      playList: state.playerBar.playList,
      sequence: state.playerBar.sequence,
    }),
    shallowEqual
  );
  //列表为空时禁用所有操作
  const IS_DISABLED = playList.length === 0;
  //切换上一首和下一首歌曲
  const changeMusic = (tag: "previous" | "next") => {
    dispatch(changeCurrentSong(tag));
  };

  //切换列表循环和单曲循环
  const changeSequence = () => {
    let currentSequence = sequence + 1;
    if (currentSequence > 2) {
      currentSequence = 0;
    }
    dispatch(changeSequenceAction(currentSequence));
  };
  return (
    <div className="player-handler-wrapper">
      <div
        className={`handle ${IS_DISABLED && "disabled"}`}
        onClick={() => changeMusic("previous")}
      >
        <StepBackwardOutlined />
      </div>
      <div
        className={`handle ${IS_DISABLED && "disabled"}`}
        onClick={playMusic}
      >
        <i
          className={`iconfont
           ${isPlay ? "icon-24gf-pause2" : "icon-shipinbofangshibofang"}
           `}
        />
      </div>
      <div
        className={`handle ${IS_DISABLED && "disabled"}`}
        onClick={() => changeMusic("next")}
      >
        <StepForwardOutlined />
      </div>
      <div
        className={`handle 
        ${IS_DISABLED && "disabled"} 
        ${isShowLyric && "active"}`}
        onClick={() => setIsShowLyric(!isShowLyric)}
      >
        <i className={`iconfont icon-geciweidianji`}></i>
      </div>
      <div
        className={`handle ${IS_DISABLED && "disabled"}`}
        onClick={changeSequence}
      >
        <Tooltip
          title={
            sequence === 0
              ? "单曲循环"
              : sequence === 1
              ? "随机播放"
              : "列表播放"
          }
        >
          <i
            className={`iconfont 
              ${
                sequence === 0
                  ? " icon-danquxunhuan"
                  : sequence === 1
                  ? "icon-suijibofang"
                  : "icon-liebiaoxunhuan"
              }`}
          />
        </Tooltip>
      </div>
      <div>
        <Badge count={playList.length}>
          <ContainerOutlined
            className={`player-menu-btn ${isShowPlayerMenu && "active"}`}
            onClick={() => {
              setIsShowPlayer(!isShowPlayerMenu);
            }}
          />
        </Badge>
      </div>
    </div>
  );
});

export default PlayerHandler;
