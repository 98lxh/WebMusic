import { Reducer } from "redux";
import {
  HotRecommend,
  RecommendBannersType,
} from "../../../../../service/module/types";
import { RecommedActionType } from "./constants";
export interface IRecommendState {
  topBanners: RecommendBannersType[];
  hotRecommends: HotRecommend[];
}

interface IRecommendAction {
  type: RecommedActionType;
  topBanners?: RecommendBannersType[];
  hotRecommends?: any;
}

const defaultState = {
  topBanners: [],
  hotRecommends: [],
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
    default:
      return state;
  }
};

export default reducer;
