import React, { memo, useEffect } from "react";
import ThemeHeaderRCM from "../../../../../../components/ThemeHeaderRCM";
import { getTopListAction } from "./../../store/actionCreators";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../../../../../store/reducer";
import { Card, Col, Row } from "antd";
import { CaretRightOutlined } from "@ant-design/icons";
import "./index.less";
const HotRecommed: React.FC = memo(() => {
  const dispatch = useDispatch();

  const { hotRankings } = useSelector(
    (state: IRootState) => ({
      hotRankings: state.recommend.hotRankings,
    }),
    shallowEqual
  );

  useEffect(() => {
    if (!hotRankings) {
      dispatch(getTopListAction(1));
    }
  }, [dispatch]);

  return (
    <div className="hot-recommend-wrapper">
      <ThemeHeaderRCM title="热门推荐" />
      <Row className="hot-list" gutter={24}>
        {hotRankings?.tracks.slice(2, 10).map((hot) => (
          <Col className="hot-item" xs={12} sm={6} md={6} lg={6} xl={6}>
            <div className="hot-handle">
              <CaretRightOutlined />
            </div>
            <Card
              bordered
              hoverable
              cover={<img src={(hot as any).al.picUrl} alt="" />}
            ></Card>
          </Col>
        ))}
      </Row>
    </div>
  );
});

export default HotRecommed;
