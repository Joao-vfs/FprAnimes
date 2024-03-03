"use client";

import { useFilm } from "@/hooks/useHooks";

import FinalizePurchasesPage from ".";

export default function FinalizePurchases() {
  const { handleBackHome, loading } = useFilm();

  return (
    <FinalizePurchasesPage loading={loading} handleBackHome={handleBackHome} />
  );
}
