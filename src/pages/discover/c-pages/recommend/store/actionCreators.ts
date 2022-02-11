import { actionTypes } from "./constants";
import {
  getTopBanners,
  getHotRecommends,
  getTopList,
} from "./../../../../../service/module/netease/module/recommend";
import {
  IHotRecommend,
  IRecommendBannners,
  ITopRecommend,
} from "./../../../../../service/module/netease/module/types";
import { Dispatch } from "react";

export const getTopBannerAction =
  (loadElm: Element) => (dispatch: Dispatch<any>) => {
    getTopBanners(loadElm).then((res) => {
      dispatch(changeTopBannerAction(res));
    });
  };

export const getHotRecommendAction =
  (loadElm: Element) => (dispatch: Dispatch<any>) => {
    getHotRecommends(loadElm).then((res) => {
      dispatch(changeHotRecommendsAction(res));
    });
  };

export const getTopListAction =
  (idx: number, loadElm: Element) => (dispatch: Dispatch<any>) => {
    getTopList(idx, loadElm).then((res) => {
      switch (idx) {
        case 0:
          dispatch(changeNewRankingAction(res));
          break;
        case 1:
          dispatch(changeHotRankingAction(res));
          break;
        case 2:
          dispatch(changeOriginRankingAction(res));
          break;
        case 3:
          dispatch(changeUpRankingAction(res));
          break;
      }
    });
  };

export const changeUpRankingAction = (res: ITopRecommend) => ({
  type: actionTypes.CHANEG_UP_RANKING,
  upRankings: res.playlist,
});

export const changeNewRankingAction = (res: ITopRecommend) => ({
  type: actionTypes.CHANEG_NEW_RANKING,
  newRankings: res.playlist,
});

export const changeOriginRankingAction = (res: ITopRecommend) => ({
  type: actionTypes.CHANEG_ORIGIN_RANKING,
  originRankings: res.playlist,
});

export const changeHotRankingAction = (res: ITopRecommend) => ({
  type: actionTypes.CHANGE_HOT_RANKING,
  hotRankings: res.playlist,
});

const changeHotRecommendsAction = (res: IHotRecommend) => ({
  type: actionTypes.CHANGE_HOT_ROCOMMEND,
  hotRecommends: res.result,
});

const changeTopBannerAction = (res: IRecommendBannners) => ({
  type: actionTypes.CHANGE_BANNER_TOP,
  topBanners: res.banners,
});
