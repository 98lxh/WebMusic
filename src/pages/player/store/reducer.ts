import { Reducer } from "redux";
import actionTypes from "./constant";
export interface IPlayerBarState {
  currentSong: any;
}
const defaultState = {
  currentSong: {},
};

export const reducer: Reducer<IPlayerBarState> = (
  state = defaultState,
  action: any
) => {
  switch (action.type) {
    case actionTypes.CHANGE_CURRENT_SONG:
      return { ...state, currentSong: action.currentSong };
    default:
      return state;
  }
};
