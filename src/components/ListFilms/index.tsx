"use client";

import ListFilmsComponent from "./ListFilms.component";

import { useFilm } from "@/hooks/useHooks";

export function ListFilms() {
  const { list, loading, handleCardClick, addStatus } = useFilm();

  return (
    <ListFilmsComponent
      list={list}
      loading={loading}
      addStatus={addStatus}
      handleCardClick={handleCardClick}
    />
  );
}
