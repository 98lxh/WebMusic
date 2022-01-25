import React, { memo, useCallback, useEffect, useState } from "react";

import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getTopBannerAction } from "../../store/actionCreators";
import { IRootState } from "../../../../../../store/reducer";

import { Carousel } from "antd";
import "./index.less";
const Banner: React.FC = () => {
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

  return (
    <div className="banner-wrapper">
      <div className="banner">
        <Carousel effect={"fade"} autoplay>
          {topBanners.map((banner) => (
            <div className="banner-item" key={banner.imageUrl}>
              <img src={banner.imageUrl} alt={banner.typeTitle} />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default memo(Banner);
