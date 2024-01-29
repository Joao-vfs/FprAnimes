import { configureStore } from "@reduxjs/toolkit";

import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import { rootReducers } from "./reducers";


export const store = configureStore({
  reducer: rootReducers,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const UseAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const UseAppDispatch: () => AppDispatch = useDispatch;
