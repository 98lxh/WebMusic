import { RecommedActionType } from "./constants";
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

const changeTopBannerAction = (res: IRecommendBannners) => ({
  type: RecommedActionType.CHANGE_BANNER_TOP,
  topBanners: res.banners,
});

export const getTopBannerAction =
  (loadElm: Element) => (dispatch: Dispatch<any>) => {
    getTopBanners(loadElm).then((res) => {
      dispatch(changeTopBannerAction(res));
    });
  };

const changeHotRecommendsAction = (res: IHotRecommend) => ({
  type: RecommedActionType.CHANGE_HOT_ROCOMMEND,
  hotRecommends: res.result,
});

export const getHotRecommendAction =
  (loadElm: Element) => (dispatch: Dispatch<any>) => {
    getHotRecommends(loadElm).then((res) => {
      dispatch(changeHotRecommendsAction(res));
    });
  };

export const changeUpRankingAction = (res: ITopRecommend) => ({
  type: RecommedActionType.CHANEG_UP_RANKING,
  upRankings: res.playlist,
});

export const changeNewRankingAction = (res: ITopRecommend) => ({
  type: RecommedActionType.CHANEG_NEW_RANKING,
  newRankings: res.playlist,
});

export const changeOriginRankingAction = (res: ITopRecommend) => ({
  type: RecommedActionType.CHANEG_ORIGIN_RANKING,
  originRankings: res.playlist,
});

export const getTopListAction = (idx: number) => (dispatch: Dispatch<any>) => {
  getTopList(idx).then((res) => {
    switch (idx) {
      case 0:
        dispatch(changeNewRankingAction(res));
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
