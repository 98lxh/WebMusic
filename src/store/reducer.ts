import { combineReducers, CombinedState } from "redux";
import { IRecommendState } from "../pages/discover/c-pages/recommend/store/reducer";

import { reducer as redcommendReducer } from "./../pages/discover/c-pages/recommend/store";
export interface IRootState {
  recommend: IRecommendState;
}
const reducer = combineReducers<CombinedState<IRootState>>({
  recommend: redcommendReducer,
});

export default reducer;
