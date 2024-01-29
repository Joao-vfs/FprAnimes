import { combineReducers } from "@reduxjs/toolkit";

import headerSlice from "@/redux/slices/Header/Header.slices";
import listAnimesSlice from "@/redux/slices/ListAnimes/ListAnimes.slices";
import paginationSlice from "@/redux/slices/Pagination/Pagination.slices";
import searchSlice from "@/redux/slices/Search/Search.slices";
import sidebarSlice from "@/redux/slices/Sibebar/Sidebar.slices";

export const rootReducers = combineReducers({
  headerSlice,
  listAnimesSlice,
  paginationSlice,
  searchSlice,
  sidebarSlice,
});
