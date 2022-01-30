import { combineReducers, CombinedState } from "redux";
import { IRecommendState } from "../pages/discover/c-pages/recommend/store/reducer";
import { IPlayerBarState } from "../pages/playerBar/store/reducer";

import { reducer as recommendReducer } from "./../pages/discover/c-pages/recommend/store";
import { reducer as playerBarReuducer } from "./../pages/playerBar/store";
export interface IRootState {
  recommend: IRecommendState;
  playerBar: IPlayerBarState;
}
const reducer = combineReducers<CombinedState<IRootState>>({
  recommend: recommendReducer,
  playerBar: playerBarReuducer,
});

export default reducer;
