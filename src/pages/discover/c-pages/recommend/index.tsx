import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../../../store/reducer";
import { getTopBannerAction } from "./store/actionCreators";

const Recommend: React.FC = () => {
  const dispatch = useDispatch();
  const { topBanners } = useSelector(
    (state: any) => ({
      topBanners: state.recommend.get("topBanners"),
    }),
    shallowEqual
  );
  useEffect(() => {
    dispatch(getTopBannerAction());
  }, [dispatch]);

  return (
    <div>
      <h1>长度:{topBanners.length}</h1>
    </div>
  );
};

export default memo(Recommend);
