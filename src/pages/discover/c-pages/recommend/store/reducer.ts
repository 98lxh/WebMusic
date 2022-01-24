import { Reducer } from "redux";
import * as actionTypes from "./constants";
const defaultState = {
  topBanners: [],
};

const reducer: Reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_BANNER_TOP:
      return { ...state, topBanners: [] };
    default:
      return state;
  }
};

export default reducer;
