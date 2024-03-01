"use client";

import { useEffect, useState } from "react";
import ListFilmsComponent from "./ListFilms.component";
import { getFilms } from "@/services/query";
import { IMovieProps } from "@/interfaces/IMovies.interface";

import { FilmCartHandler } from "@/hooks/useHooks";
import { UseAppSelector } from "@/redux/store";

export function ListFilms() {
  const [list, setList] = useState<IMovieProps[]>([]);
  const selectedIds = UseAppSelector(
    (state) => state.listFilmsSlice.list.itemsCart
  );
  const { handleFilmClick } = FilmCartHandler();

  useEffect(() => {
    const fetchListFilms = async () => {
      const res = await getFilms();
      setList(res);
    };
    fetchListFilms();
  }, []);

  return (
    <ListFilmsComponent
      list={list}
      setList={setList}
      handleFilmClick={handleFilmClick}
      selectedIds={selectedIds}
    />
  );
}
