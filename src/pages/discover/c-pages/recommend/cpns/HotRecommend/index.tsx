import React, { memo, useEffect, useRef } from "react";
import ThemeHeaderRCM from "../../../../../../components/ThemeHeaderRCM";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getHotRecommendAction } from "../../store/actionCreators";
import { IRootState } from "../../../../../../store/reducer";
import { Card, Col, Row } from "antd";
import "./index.less";
import { FireOutlined } from "@ant-design/icons";
const HotRecommed: React.FC = memo(() => {
  const dispatch = useDispatch();
  const loadingRef = useRef<HTMLDivElement>(null);

  const { hopRecommends } = useSelector(
    (state: IRootState) => ({
      hopRecommends: state.recommend.hotRecommends,
    }),
    shallowEqual
  );

  useEffect(() => {
    if (!hopRecommends.length) {
      dispatch(getHotRecommendAction(loadingRef.current!));
    }
  }, [dispatch, hopRecommends]);

  return (
    <div className="hot-recommend-wrapper">
      <ThemeHeaderRCM title="热门推荐" />
      <div ref={loadingRef}></div>
      <Row className="hot-list" gutter={24}>
        {hopRecommends.map((hot) => (
          <Col
            className="hot-item"
            xs={12}
            sm={6}
            md={6}
            lg={6}
            xl={6}
            key={hot.picUrl}
          >
            <Card hoverable cover={<img src={hot.picUrl} alt="" />}>
              <div className="hot-desc">
                <FireOutlined />
                {hot.name}
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
});

export default HotRecommed;
