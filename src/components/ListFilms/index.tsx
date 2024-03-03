"use client";

import { useFilm } from "@/hooks/useHooks";

import ListFilmsComponent from "./ListFilms.component";

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
