import { Reducer } from "redux";
import { RecommendBannersType } from "../../../../../service/module/types";
import { RecommedActionType } from "./constants";
export interface IRecommendState {
  topBanners: RecommendBannersType[];
}

interface IRecommendAction {
  type: RecommedActionType;
  topBanners?: RecommendBannersType[];
}

const defaultState = {
  topBanners: [],
};

const reducer: Reducer<IRecommendState, IRecommendAction> = (
  state = defaultState,
  action
) => {
  switch (action.type) {
    case RecommedActionType.CHANGE_BANNER_TOP:
      return { ...state, topBanners: action.topBanners! };
    default:
      return state;
  }
};

export default reducer;
