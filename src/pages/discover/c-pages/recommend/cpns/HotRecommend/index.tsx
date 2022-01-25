import React, { memo, useEffect } from "react";
import ThemeHeaderRCM from "../../../../../../components/ThemeHeaderRCM";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getHotRecommendAction } from "../../store/actionCreators";
import { IRootState } from "../../../../../../store/reducer";
import { Card, Col, Row, Skeleton } from "antd";
import "./index.less";
import { FireOutlined } from "@ant-design/icons";
const HotRecommed: React.FC = memo(() => {
  const dispatch = useDispatch();
  const { hopRecommends } = useSelector(
    (state: IRootState) => ({
      hopRecommends: state.recommend.hotRecommends,
    }),
    shallowEqual
  );
  useEffect(() => {
    dispatch(getHotRecommendAction());
  }, [dispatch]);

  return (
    <div className="hot-recommend-wrapper">
      <ThemeHeaderRCM title="热门推荐" />
      <Row className="hot-list" gutter={24}>
        {hopRecommends.map((hot, index) => (
          <Col
            className="hot-item"
            xs={12}
            sm={6}
            md={6}
            lg={6}
            xl={6}
            key={hot.picUrl}
          >
            <Card hoverable cover={<img src={hot.picUrl} />}>
              <div className="hot-desc-mask">
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
