"use client";

import { handleFilmsSelected } from "@/redux/slices/ListFilms/ListFilms.slices";
import SelectedFilmsComponent from "./SelectedFilms.component";
import { UseAppDispatch, UseAppSelector } from "@/redux/store";

export function SelectedFilms() {
  const dispatch = UseAppDispatch();
  const selectedFilms = UseAppSelector(
    (state) => state.listFilmsSlice.list.filmsSelected
  );

  return <SelectedFilmsComponent selectedFilms={selectedFilms} />;
}
