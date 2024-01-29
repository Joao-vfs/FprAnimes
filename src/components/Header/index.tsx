"use client";

import React from "react";
import HeaderComponent from "./Header.component";
import { UseAppSelector } from "@/redux/store";

export function Header() {
  const otherHeader = UseAppSelector((state) => state.headerSlice.changeHeader);
  return <HeaderComponent otherHeader={otherHeader} />;
}
