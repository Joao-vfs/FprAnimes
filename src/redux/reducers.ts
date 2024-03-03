import { combineReducers } from "@reduxjs/toolkit";

import WeMoviesSlice from "@/redux/slices/WeMovies/weMovies.slices";

export const rootReducers = combineReducers({
  WeMoviesSlice,
});
