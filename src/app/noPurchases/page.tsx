"use client";

import { useFilm } from "@/hooks/useHooks";

import CartPage from ".";

export default function Cart() {
  const { handleBackHome, loading } = useFilm();

  return <CartPage handleBackHome={handleBackHome} loading={loading} />;
}
