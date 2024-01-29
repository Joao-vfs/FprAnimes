import { createSlice } from "@reduxjs/toolkit";

import { IListAnimesSliceProps } from "@/interfaces/listAnimes.interface";

const initialState: IListAnimesSliceProps = {
  id: 0,
};

export const listAnimesSlice = createSlice({
  name: "listAnimes",
  initialState,
  reducers: {
    handleIdAnimesSelection: (state, action) => {
      state.id = action.payload;
    },
  },
});

export const { handleIdAnimesSelection } = listAnimesSlice.actions;

export default listAnimesSlice.reducer;
