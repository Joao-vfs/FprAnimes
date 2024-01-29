import { createSlice } from "@reduxjs/toolkit";

import { IHeaderSliceProps } from "@/interfaces/IHeader.interface";


const initialState: IHeaderSliceProps = {
  changeHeader: "large",
};

export const headerSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    toggleChangeHeader: (state, action) => {
      state.changeHeader = action.payload
    },
  },
});

export const { toggleChangeHeader } = headerSlice.actions;

export default headerSlice.reducer;
