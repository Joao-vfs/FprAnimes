"use client";

import { isMobile } from "@/global/isMobile/isMobile";
import FinalizePurchasesPage from ".";

export default function FinalizePurchases() {
  return <FinalizePurchasesPage isMobile={isMobile()} />;
}
