import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import ThemeHeaderRCM from "../../../../../../components/ThemeHeaderRCM";
import { getTopListAction } from "../../store/actionCreators";
import { IRootState } from "../../../../../../store/reducer";
import { Col, Row } from "antd";
import "./index.less";
import TopRanking from "../../../../../../components/TopRanking";

const RankingRecommend: React.FC = memo(() => {
  const dispatch = useDispatch();
  const { newRankings, upRankings, originRankings } = useSelector(
    (state: IRootState) => ({
      newRankings: state.recommend.newRankings,
      upRankings: state.recommend.upRankings,
      originRankings: state.recommend.originRankings,
    }),
    shallowEqual
  );
  useEffect(() => {
    dispatch(getTopListAction(0));
    dispatch(getTopListAction(2));
    dispatch(getTopListAction(3));
  }, [dispatch]);
  return (
    <div className="newalbum-wrapper" style={{ padding: ".3rem .5rem" }}>
      <ThemeHeaderRCM title="榜单" />
      <Row gutter={24} className="ranking-wrapper">
        <Col sm={24} xs={24} md={8} xl={8} lg={8}>
          <TopRanking rankingInfo={upRankings!} />
        </Col>
        <Col sm={24} xs={24} md={8} xl={8} lg={8}>
          <TopRanking rankingInfo={newRankings!} />
        </Col>
        <Col sm={24} xs={24} md={8} xl={8} lg={8}>
          <TopRanking rankingInfo={originRankings!} />
        </Col>
      </Row>
    </div>
  );
});

export default RankingRecommend;
