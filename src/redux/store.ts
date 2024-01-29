import { configureStore } from "@reduxjs/toolkit";

import { TypedUseSelectorHook, useSelector } from "react-redux";

import headerSlice from "@/redux/slices/header.slices";
import listAnimesSlice  from "@/redux/slices/listAnimes.slices";
import paginationSlice from "@/redux/slices/pagination.slice";
import searchSlice from "@/redux/slices/search.slices";
import sidebarSlice from "@/redux/slices/sidebar.slices";

export const store = configureStore({
  reducer: {
    headerSlice,
    listAnimesSlice,
    paginationSlice,
    searchSlice,
    sidebarSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const UseAppSelector: TypedUseSelectorHook<RootState> = useSelector;
