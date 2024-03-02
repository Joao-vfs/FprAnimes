"use client";

import { ListFilms, Loading } from "@/components";
import { useFilm } from "@/hooks/useHooks";

export default function HomePage() {
  const { loading } = useFilm();

  return loading ? <Loading /> : <ListFilms />;
}
