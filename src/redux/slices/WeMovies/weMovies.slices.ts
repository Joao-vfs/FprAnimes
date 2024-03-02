import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  weMovies: {
    filmsSelected: [],
  },
} as any;

export const WeMoviesSlice = createSlice({
  name: "weMovies",
  initialState,
  reducers: {
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

export const { handleFilmsSelected, handleRemoveFilm, handleResetState } =
  WeMoviesSlice.actions;

export default WeMoviesSlice.reducer;
