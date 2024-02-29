"use client";

import { useEffect, useState } from "react";
import ListFilmsComponent from "./ListFilms.component";
import { getFilms } from "@/services/query";
import { IMovieProps } from "@/interfaces/IMovies.interface";

export function ListFilms() {
  const [list, setList] = useState<IMovieProps[]>([]);

  useEffect(() => {
    const FetchListFilms = async () => {
      const res = await getFilms();
      setList(res);
    };
    FetchListFilms();
  });
  return <ListFilmsComponent list={list} />;
}
