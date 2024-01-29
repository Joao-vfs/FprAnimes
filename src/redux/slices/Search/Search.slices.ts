import { createSlice } from "@reduxjs/toolkit";
import { ISearchSliceProps } from "@/interfaces/ISearch.interface";

const initialState: ISearchSliceProps = {
  filter: "",
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    handleSearchedNames: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { handleSearchedNames } = searchSlice.actions;

export default searchSlice.reducer;
