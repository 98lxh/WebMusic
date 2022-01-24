import { RecommedActionType } from "./constants";
import { getTopBanners } from "./../../../../../service/module/recommend";
import { Dispatch } from "react";

const changeTopBannerAction = (res: any) => ({
  type: RecommedActionType.CHANGE_BANNER_TOP,
  topBanners: res.banners,
});

export const getTopBannerAction = () => (dispatch: Dispatch<any>) => {
  getTopBanners().then((res) => {
    dispatch(changeTopBannerAction(res.data));
  });
};
