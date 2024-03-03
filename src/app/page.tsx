"use client";

import { useFilm } from "@/hooks/useHooks";

import { ListFilms, Loading } from "@/components";

export default function HomePage() {
  const { loading } = useFilm();

  return loading ? <Loading /> : <ListFilms />;
}
