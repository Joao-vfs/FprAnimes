"use client";

import React from "react";

import SearchComponent from "./Search.component";
import { UseAppSelector } from "@/redux/store";

export function Search() {
  const valueFilter = UseAppSelector((state) => state.searchSlice.filter);
  
  return <SearchComponent valueFilter={valueFilter} />;
}
