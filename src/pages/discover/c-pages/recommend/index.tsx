import React, { memo } from "react";
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
    </div>
  );
});

export default Recommend;
