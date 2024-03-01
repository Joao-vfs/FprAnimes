"use client";

import React from "react";
import HeaderLayout from "./Header.layout";
import { UseAppSelector } from "@/redux/store";
import { isMobile } from "@/global/isMobile/isMobile";

export function Header() {
  const itemsCart = UseAppSelector(
    (state) => state.listFilmsSlice.list.itemsCart
  );
  return <HeaderLayout itemsCart={itemsCart} isMobile={isMobile()} />;
}
