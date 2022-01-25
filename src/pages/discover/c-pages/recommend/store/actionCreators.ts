import { RecommedActionType } from "./constants";
import {
  getTopBanners,
  getHotRecommends,
} from "./../../../../../service/module/recommend";
import { Dispatch } from "react";

const changeTopBannerAction = (res: any) => ({
  type: RecommedActionType.CHANGE_BANNER_TOP,
  topBanners: res.banners,
});

export const getTopBannerAction =
  (loadElm: Element) => (dispatch: Dispatch<any>) => {
    getTopBanners(loadElm).then((res) => {
      dispatch(changeTopBannerAction((res as any).data));
    });
  };

const changeHotRecommendsAction = (res: any) => ({
  type: RecommedActionType.CHANGE_HOT_ROCOMMEND,
  hotRecommends: res.result,
});

export const getHotRecommendAction = () => (dispatch: Dispatch<any>) => {
  getHotRecommends().then((res) => {
    dispatch(changeHotRecommendsAction((res as any).data));
  });
};
