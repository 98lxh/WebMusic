import { combineReducers, CombinedState, Reducer } from "redux";
import { IRecommendState } from "../pages/discover/c-pages/recommend/store/reducer";
import { IPlayerBarState } from "../pages/player/store/reducer";

import { reducer as recommendReducer } from "./../pages/discover/c-pages/recommend/store";
import { reducer as playerBarReuducer } from "../pages/player/store";
import actionTypes from "./constant";

interface IAppState {
  themeDark: boolean;
}
export interface IRootState {
  recommend: IRecommendState;
  playerBar: IPlayerBarState;
  app: IAppState;
}

const defaultState: IAppState = {
  themeDark: true,
};

const appReducer: Reducer<IAppState, any> = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_DARK:
      return { ...state, themeDark: action.themeDark };
    default:
      return state;
  }
};

const reducer = combineReducers<CombinedState<IRootState>>({
  recommend: recommendReducer,
  playerBar: playerBarReuducer,
  app: appReducer,
});

export default reducer;
