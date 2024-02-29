"use client";

import { useEffect, useState } from "react";
import ListFilmsComponent from "./ListFilms.component";
import { getFilms } from "@/services/query";
import { IMovieProps } from "@/interfaces/IMovies.interface";
import { UseAppSelector } from "@/redux/store";

export function ListFilms() {
  const [list, setList] = useState<IMovieProps[]>([]);

  const ItemsAdd = UseAppSelector((state) => state.listFilmsSlice.list.itemsCart)

  useEffect(() => {
    const FetchListFilms = async () => {
      const res = await getFilms();
      setList(res);
    };
    FetchListFilms();
  }, []);
  return <ListFilmsComponent list={list} ItemsAdd={ItemsAdd} />;
}
