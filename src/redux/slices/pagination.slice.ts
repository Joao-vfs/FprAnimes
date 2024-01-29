import { createSlice } from "@reduxjs/toolkit";
import { IPaginationSliceProps } from "@/interfaces/pagination.interface";

const initialState: IPaginationSliceProps = {
  page: 20,
};

export const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    togglePrevPage: (state) => {
      state.page = state.page - 20;
    },
    toggleNextPage: (state) => {
      state.page = state.page + 20;
    },
    handleFirstPage: (state) => {
      state.page = initialState.page;
    },
  },
});

export const { togglePrevPage, toggleNextPage, handleFirstPage } =
  paginationSlice.actions;

export default paginationSlice.reducer;
