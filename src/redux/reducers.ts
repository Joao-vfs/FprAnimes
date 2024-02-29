import { combineReducers } from "@reduxjs/toolkit";

import listFilmsSlice from "@/redux/slices/ListFilms/ListFilms.slices";

export const rootReducers = combineReducers({
  listFilmsSlice,
});
