"use client";

import FinalizePurchasesPage from ".";
import { useFilm } from "@/hooks/useHooks";

export default function FinalizePurchases() {
  const { handleBackHome, loading } = useFilm();

  return <FinalizePurchasesPage loading={loading} handleBackHome={handleBackHome} />;
}
