import React, { memo } from "react";
import { TopPlayList,TopPlayListTrack } from "../../service/module/netease/module/types";
import { CaretRightOutlined, PlusOutlined } from "@ant-design/icons";
import {getSongDetailAction} from '../../pages/player/store/actionCreators'
import "./index.less";
import {useDispatch} from "react-redux";

interface TopRankingProps {
  rankingInfo: TopPlayList;
}
const TopRanking: React.FC<TopRankingProps> = memo(({ rankingInfo }) => {
  const dispatch = useDispatch();
  const playMusic = (music:TopPlayListTrack) => {
      dispatch(getSongDetailAction(music.id))
  }
  return (
    <div className="top-ranking-wrapper">
      <div className="ranking-header">
        <img src={rankingInfo?.coverImgUrl} alt="" />
        <h1 className="ranking-title">{rankingInfo?.name}</h1>
      </div>

      <div className="ranking-list">
        {rankingInfo?.tracks.slice(0, 10).map((music, index) => (
          <div className="ranking-item" key={index}>
            <p
              className="muisc-ranking"
              style={{ color: index <= 2 ? "#c10d0c" : "#666666" }}
            >
              {index + 1}
            </p>
            <p className="muisc-name">{music.name}</p>
            <div className="muisc-handle">
              <CaretRightOutlined onClick={()=>{playMusic(music)}} />
              <PlusOutlined />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

export default TopRanking;
