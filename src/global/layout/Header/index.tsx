"use client";

import React from "react";
import HeaderLayout from "./Header.layout";
import { UseAppSelector } from "@/redux/store";
import { useFilm } from "@/hooks/useHooks";

export function Header() {
  const { handleBackHome } = useFilm();

  const itemsCart = UseAppSelector(
    (state) => state.WeMoviesSlice.weMovies.filmsSelected
  );
  return <HeaderLayout itemsCart={itemsCart} handleBackHome={handleBackHome} />;
}
