import { createSlice } from "@reduxjs/toolkit";

import { IWeMoviesStateProps } from "@/interfaces/IWeMoviesState.interface";

const initialState = {
  weMovies: {
    filmsSelected: [],
  },
} as IWeMoviesStateProps;

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
        (film) => film.id !== action.payload
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
