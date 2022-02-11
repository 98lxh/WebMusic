import React, { memo, useEffect, useRef } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import ThemeHeaderRCM from "../../../../../../components/ThemeHeaderRCM";
import { getTopListAction } from "../../store/actionCreators";
import { IRootState } from "../../../../../../store/reducer";
import { Col, Row } from "antd";
import TopRanking from "../../../../../../components/TopRanking";

const RankingRecommend: React.FC = memo(() => {
  const dispatch = useDispatch();
  const upLoadRef = useRef<HTMLDivElement>(null);
  const newLoadRef = useRef<HTMLDivElement>(null);
  const originLoadRef = useRef<HTMLDivElement>(null);
  const { newRankings, upRankings, originRankings } = useSelector(
    (state: IRootState) => ({
      newRankings: state.recommend.newRankings,
      upRankings: state.recommend.upRankings,
      originRankings: state.recommend.originRankings,
    }),
    shallowEqual
  );
  useEffect(() => {
    if (!newRankings) {
      dispatch(getTopListAction(0, upLoadRef.current!));
      dispatch(getTopListAction(2, newLoadRef.current!));
      dispatch(getTopListAction(3, originLoadRef.current!));
    }
  }, [dispatch, newRankings]);
  return (
    <div className="newalbum-wrapper">
      <ThemeHeaderRCM title="榜单" />
      <Row gutter={24} className="ranking-wrapper">
        <Col sm={24} xs={24} md={8} xl={8} lg={8}>
          <TopRanking rankingInfo={upRankings!} />
          <div ref={upLoadRef}></div>
        </Col>
        <Col sm={24} xs={24} md={8} xl={8} lg={8}>
          <TopRanking rankingInfo={newRankings!} />
          <div ref={newLoadRef}></div>
        </Col>
        <Col sm={24} xs={24} md={8} xl={8} lg={8}>
          <TopRanking rankingInfo={originRankings!} />
          <div ref={originLoadRef}></div>
        </Col>
      </Row>
    </div>
  );
});

export default RankingRecommend;
