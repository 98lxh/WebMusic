import { combineReducers } from "redux";

import { reducer as redcommendReducer } from "./../pages/discover/c-pages/recommend/store";

const reducer = combineReducers({
  recommend: redcommendReducer,
});

export default reducer;
