"use client";

import CartPage from ".";
import { useFilm } from "@/hooks/useHooks";

export default function Cart() {
  const { handleBackHome, loading } = useFilm();

  return <CartPage handleBackHome={handleBackHome} loading={loading} />;
}
