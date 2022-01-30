import React, { memo } from "react";
import GolbalDrawer from "../../../../components/GolbalDrawer";
import Banner from "./cpns/Banner";
import HotRecommed from "./cpns/HotRecommend";
import RankingRecommend from "./cpns/RankingRecommend";
import "./index.less";

const Recommend: React.FC = memo(() => {
  return (
    <div className="recommend-wrapper">
      <div className="recommend-main">
        <Banner />
        <HotRecommed />
        <RankingRecommend />
      </div>
      <GolbalDrawer title="入驻歌手/热门主播"></GolbalDrawer>
    </div>
  );
});

export default Recommend;
