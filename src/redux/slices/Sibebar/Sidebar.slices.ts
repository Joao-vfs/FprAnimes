import { createSlice } from "@reduxjs/toolkit";
import { ISidebarSliceProps } from "@/interfaces/ISibebar.interface";

const initialState: ISidebarSliceProps = {
  openSibebar: false,
  category: "",
};

export const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    toggleOpenSidebar: (state) => {
      state.openSibebar = !state.openSibebar;
    },

    selectedCategory: (state, action) => {
      state.category = action.payload
    },
  },
});

export const { toggleOpenSidebar, selectedCategory } = sidebarSlice.actions;

export default sidebarSlice.reducer;
