"use client";

import React from "react";
import HeaderLayout from "./Header.layout";
import { UseAppSelector } from "@/redux/store";

export function Header() {
    const itemsCart = UseAppSelector((state) => state.listFilmsSlice.list.itemsCart)
    return <HeaderLayout itemsCart={itemsCart} />;
}
