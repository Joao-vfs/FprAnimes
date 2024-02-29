import { combineReducers } from "@reduxjs/toolkit";

import headerSlice from "@/redux/slices/Header/Header.slices";
import listAnimesSlice from "@/redux/slices/ListAnimes/ListAnimes.slices";

export const rootReducers = combineReducers({
  headerSlice,
  listAnimesSlice,
});
