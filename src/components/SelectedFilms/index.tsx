"use client";

import SelectedFilmsComponent from "./SelectedFilms.component";
import { UseAppSelector } from "@/redux/store";

export function SelectedFilms() {
  const selectedFilms = UseAppSelector(
    (state) => state.WeMoviesSlice.weMovies.filmsSelected
  );

  return <SelectedFilmsComponent selectedFilms={selectedFilms} />;
}
