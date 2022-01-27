import React, { memo } from "react";
import { TopPlayList } from "../../service/module/types";
import { CaretRightOutlined, PlusOutlined } from "@ant-design/icons";
import "./index.less";

interface TopRankingProps {
  rankingInfo: TopPlayList;
}
const TopRanking: React.FC<TopRankingProps> = memo(({ rankingInfo }) => {
  return (
    <div className="top-ranking-wrapper">
      <div className="ranking-header">
        <img src={rankingInfo?.coverImgUrl} alt="" />
        <h1 className="ranking-title">{rankingInfo?.name}</h1>
      </div>

      <div className="ranking-list">
        {rankingInfo?.tracks.slice(0, 10).map((muisc, index) => (
          <div className="ranking-item" key={index}>
            <p
              className="muisc-ranking"
              style={{ color: index <= 2 ? "#c10d0c" : "#666666" }}
            >
              {index + 1}
            </p>
            <p className="muisc-name">{muisc.name}</p>
            <div className="muisc-handle">
              <CaretRightOutlined />
              <PlusOutlined />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

export default TopRanking;
