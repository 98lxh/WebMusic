import { Reducer } from "redux";
import {
  HotRecommend,
  RecommendBannersType,
  TopPlayList,
} from "../../../../../service/module/netease/module/types";
import { RecommedActionType } from "./constants";
export interface IRecommendState {
  topBanners: RecommendBannersType[];
  hotRecommends: HotRecommend[];
  upRankings: TopPlayList | null;
  newRankings: TopPlayList | null;
  originRankings: TopPlayList | null;
}

interface IRecommendAction {
  type: RecommedActionType;
  topBanners: RecommendBannersType[];
  hotRecommends: HotRecommend[];
  upRankings: TopPlayList | null;
  newRankings: TopPlayList | null;
  originRankings: TopPlayList | null;
}

const defaultState: IRecommendState = {
  topBanners: [],
  hotRecommends: [],
  upRankings: null,
  newRankings: null,
  originRankings: null,
};

const reducer: Reducer<IRecommendState, IRecommendAction> = (
  state = defaultState,
  action
) => {
  switch (action.type) {
    case RecommedActionType.CHANGE_BANNER_TOP:
      return { ...state, topBanners: action.topBanners! };
    case RecommedActionType.CHANGE_HOT_ROCOMMEND:
      return { ...state, hotRecommends: action.hotRecommends! };
    case RecommedActionType.CHANEG_UP_RANKING:
      return { ...state, upRankings: action.upRankings };
    case RecommedActionType.CHANEG_NEW_RANKING:
      return { ...state, newRankings: action.newRankings };
    case RecommedActionType.CHANEG_ORIGIN_RANKING:
      return { ...state, originRankings: action.originRankings };
    default:
      return state;
  }
};

export default reducer;
