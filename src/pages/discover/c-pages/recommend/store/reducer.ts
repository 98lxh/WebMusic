import { Reducer } from "redux";
import {
  HotRecommend,
  RecommendBannersType,
  TopPlayList,
} from "../../../../../service/module/netease/module/types";
import { actionTypes } from "./constants";
export interface IRecommendState {
  topBanners: RecommendBannersType[];
  hotRecommends: HotRecommend[];
  upRankings: TopPlayList | null;
  newRankings: TopPlayList | null;
  originRankings: TopPlayList | null;
  hotRankings: TopPlayList | null;
}

interface IRecommendAction {
  type: actionTypes;
  topBanners: RecommendBannersType[];
  hotRecommends: HotRecommend[];
  upRankings: TopPlayList | null;
  newRankings: TopPlayList | null;
  originRankings: TopPlayList | null;
  hotRankings: TopPlayList | null;
}

const defaultState: IRecommendState = {
  topBanners: [],
  hotRecommends: [],
  upRankings: null,
  newRankings: null,
  originRankings: null,
  hotRankings: null,
};

const reducer: Reducer<IRecommendState, IRecommendAction> = (
  state = defaultState,
  action
) => {
  switch (action.type) {
    case actionTypes.CHANGE_BANNER_TOP:
      return { ...state, topBanners: action.topBanners! };
    case actionTypes.CHANGE_HOT_ROCOMMEND:
      return { ...state, hotRecommends: action.hotRecommends! };
    case actionTypes.CHANEG_UP_RANKING:
      return { ...state, upRankings: action.upRankings };
    case actionTypes.CHANEG_NEW_RANKING:
      return { ...state, newRankings: action.newRankings };
    case actionTypes.CHANEG_ORIGIN_RANKING:
      return { ...state, originRankings: action.originRankings };
    case actionTypes.CHANGE_HOT_RANKING:
      return { ...state, hotRankings: action.hotRankings };
    default:
      return state;
  }
};

export default reducer;
