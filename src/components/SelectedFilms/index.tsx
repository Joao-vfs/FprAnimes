"use client";

import { useFilm } from "@/hooks/useHooks";

import SelectedFilmsComponent from "./SelectedFilms.component";

export function SelectedFilms() {
  const {
    loading,
    selectedPrice,
    handleQuantityChange,
    prices,
    handleRemoveFilmId,
    handleRedirectRouter,
  } = useFilm();

  return (
    <SelectedFilmsComponent
      loading={loading}
      selectedFilms={selectedPrice}
      handleQuantityChange={handleQuantityChange}
      prices={prices}
      handleRemoveFilmId={handleRemoveFilmId}
      handleRedirectRouter={handleRedirectRouter}
    />
  );
}
