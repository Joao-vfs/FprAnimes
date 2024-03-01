"use client";

import { useState } from "react";
import { IMovieProps } from "@/interfaces/IMovies.interface";
import { UseAppDispatch } from "@/redux/store";
import {
  handleAddItemsCart,
  handleFilmsSelected,
  handleRemoveItemsCart,
} from "@/redux/slices/ListFilms/ListFilms.slices";

export function FilmCartHandler() {
  const [selectedFilms, setSelectedFilms] = useState<IMovieProps[]>([]);
  const dispatch = UseAppDispatch();

  const handleFilmClick = (film: IMovieProps) => {
    const isFilmSelected = selectedFilms.some(
      (selectedFilm) => selectedFilm.id === film.id
    );

    if (isFilmSelected) {
      setSelectedFilms((prevSelectedFilms) =>
        prevSelectedFilms.filter((selectedFilm) => selectedFilm.id !== film.id)
      );
      dispatch(handleRemoveItemsCart(film.id));
    } else {
      setSelectedFilms((prevSelectedFilms) => [...prevSelectedFilms, film]);
      dispatch(handleAddItemsCart(film.id));
      dispatch(handleFilmsSelected(film));
    }
  };

  return { selectedFilms, handleFilmClick };
}
