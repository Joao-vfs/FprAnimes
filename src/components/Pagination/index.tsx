"use client";

import React from "react";

import PaginationComponent from "./Pagination.component";
import { UseAppSelector } from "@/redux/store";

export function Pagination() {
  const page = UseAppSelector((state) => state.paginationSlice.page);


  return <PaginationComponent page={page} />;
}
