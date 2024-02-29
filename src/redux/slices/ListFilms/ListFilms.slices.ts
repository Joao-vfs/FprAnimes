import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: {
    itemsCart: {},
  },
} as any;

export const listFilmsSlice = createSlice({
  name: "listFilms",
  initialState,
  reducers: {
    handleAddItemsCart: (state, action) => {
      const { itemId } = action.payload;
      const currentCount = state.list.itemsCart[itemId] || 0;
      if (currentCount < 6) {
        state.list.itemsCart[itemId] = currentCount + 1;
      }
    },
    handleRemoveItemsCart: (state, action) => {
      const { itemId } = action.payload;
      if (state.list.itemsCart[itemId] && state.list.itemsCart[itemId] > 0) {
        state.list.itemsCart[itemId] -= 1;
      }
    },
  },
});

export const { handleAddItemsCart } = listFilmsSlice.actions;

export default listFilmsSlice.reducer;
