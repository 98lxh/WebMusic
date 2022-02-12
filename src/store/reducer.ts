import { combineReducers, CombinedState, Reducer } from "redux";
import { IRecommendState } from "../pages/discover/c-pages/recommend/store/reducer";
import { IPlayerBarState } from "../pages/player/store/reducer";

import { reducer as recommendReducer } from "./../pages/discover/c-pages/recommend/store";
import { reducer as playerBarReuducer } from "../pages/player/store";
import actionTypes from "./constant";

interface ISystemState {
  themeDark: boolean;
}
export interface IRootState {
  recommend: IRecommendState;
  playerBar: IPlayerBarState;
  system: ISystemState;
}

const defaultState: ISystemState = {
  themeDark: true,
};

const systemReducer: Reducer<ISystemState, any> = (state = defaultState, action) => {
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
  system: systemReducer,
});

export default reducer;
