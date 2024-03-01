"use client";

import { UseAppSelector } from "@/redux/store";
import CartPage from ".";
import { isMobile } from "@/global/isMobile/isMobile";

export default function Cart() {
  const itemsCart = UseAppSelector(
    (state) => state.listFilmsSlice.list.itemsCart
  );
  return <CartPage itemsCart={itemsCart} isMobile={isMobile()} />;
}
