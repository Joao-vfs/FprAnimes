import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  weMovies: {
    itemsCart: [],
    filmsSelected: [],
  },
} as any;

export const WeMoviesSlice = createSlice({
  name: "weMovies",
  initialState,
  reducers: {
    handleAddItemsCart: (state, action) => {
      state.weMovies.itemsCart = [...state.weMovies.itemsCart, action.payload];
    },
    handleRemoveItemsCart: (state, action) => {
      state.weMovies.itemsCart = state.weMovies.itemsCart.filter(
        (itemId: number) => itemId !== action.payload
      );
    },
    handleFilmsSelected: (state, action) => {
      state.weMovies.filmsSelected = [
        ...state.weMovies.filmsSelected,
        action.payload,
      ];
    },
    handleRemoveFilm: (state, action) => {
      state.weMovies.filmsSelected = state.weMovies.filmsSelected.filter(
        (film: { id: string }) => film.id !== action.payload
      );
    },
    handleResetState: (state) => {
      state.weMovies = initialState.weMovies;
    },
  },
});

export const {
  handleAddItemsCart,
  handleRemoveItemsCart,
  handleFilmsSelected,
  handleRemoveFilm,
  handleResetState,
} = WeMoviesSlice.actions;

export default WeMoviesSlice.reducer;
