import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: {
    itemsCart: [],
    filmsSelected: [],
  },
} as any;

export const listFilmsSlice = createSlice({
  name: "listFilms",
  initialState,
  reducers: {
    handleAddItemsCart: (state, action) => {
      state.list.itemsCart = [...state.list.itemsCart, action.payload];
    },
    handleRemoveItemsCart: (state, action) => {
      state.list.itemsCart = state.list.itemsCart.filter(
        (itemId: number) => itemId !== action.payload
      );
    },
    handleFilmsSelected: (state, action) => {
      state.list.filmsSelected = [...state.list.filmsSelected, action.payload];
    },
    handleRemoveFilm: (state, action) => {
      state.list.filmsSelected = state.list.filmsSelected.filter(
        (film: { id: string; }) => film.id !== action.payload
      );
    },
  },
});

export const {
  handleAddItemsCart,
  handleRemoveItemsCart,
  handleFilmsSelected,
  handleRemoveFilm,
} = listFilmsSlice.actions;

export default listFilmsSlice.reducer;
