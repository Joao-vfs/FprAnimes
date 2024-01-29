"use client";

import { useEffect, useState } from "react";

import { getAnimesCategorys } from "@/services/query";

import { UseAppSelector } from "@/redux/store";

import { IListAnimesDataProps } from "@/interfaces/IListAnimes.interface";

import CategoryPage from "./Category.page";

export default function Category() {
  const [categoryAnimes, setCategoryAnimes] = useState<IListAnimesDataProps[]>(
    []
  );

  const category = UseAppSelector((state) => state.sidebarSlice.category);
  const page = UseAppSelector((state) => state.paginationSlice.page);

  useEffect(() => {
    const fetchDataAnimes = async () => {
      try {
        const res = await getAnimesCategorys(category, page);
        setCategoryAnimes(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchDataAnimes();
  }, [category, page]);

  return <CategoryPage title={category} listAnimes={categoryAnimes} />;
}
