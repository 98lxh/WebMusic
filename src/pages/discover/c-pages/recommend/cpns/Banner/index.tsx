import React, { memo, useCallback, useEffect, useState } from "react";

import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getTopBannerAction } from "../../store/actionCreators";
import { IRootState } from "../../../../../../store/reducer";

import { Carousel, Col, Row } from "antd";
import "./index.less";
const Banner: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const dispatch = useDispatch();
  const { topBanners } = useSelector(
    (state: IRootState) => ({
      topBanners: state.recommend.topBanners,
    }),
    shallowEqual
  );
  useEffect(() => {
    dispatch(getTopBannerAction());
  }, [dispatch]);

  const bannerChnage = useCallback((_: number, to: number) => {
    setCurrentIndex(to);
  }, []);

  const bannerBg =
    topBanners[currentIndex] &&
    `url(${topBanners[currentIndex].imageUrl}?imageView&blur=40x20) center center/3000px`;

  return (
    <Row
      className="banner-wrapper"
      gutter={24}
      justify={"center"}
      style={{ background: bannerBg }}
    >
      <Col sm={24} xs={24} md={24} lg={18} xl={16} className="banner">
        <Carousel effect={"fade"} autoplay beforeChange={bannerChnage}>
          {topBanners.map((banner) => (
            <div className="banner-item" key={banner.imageUrl}>
              <img src={banner.imageUrl} alt={banner.typeTitle} />
            </div>
          ))}
        </Carousel>
      </Col>
    </Row>
  );
};

export default memo(Banner);
