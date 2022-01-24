import { Reducer } from "redux";
import { RecommendBannersType } from "../../../../../service/module/recommend";
import { RecommedActionType } from "./constants";
import { Map } from "immutable";
export interface IRecommendState {
  topBanners: RecommendBannersType[];
}

interface IRecommendAction {
  type: RecommedActionType;
  topBanners?: RecommendBannersType[];
}

const defaultState = Map({
  topBanners: [],
});

const reducer: Reducer<any, IRecommendAction> = (
  state = defaultState,
  action
) => {
  switch (action.type) {
    case RecommedActionType.CHANGE_BANNER_TOP:
      return state.set("topBanners", action.topBanners);
    default:
      return state;
  }
};

export default reducer;
