"use client";

import React, { useEffect, useState } from "react";

import { UseAppSelector } from "@/redux/store";

import { IListAnimesDataProps } from "@/interfaces/listAnimes.interface";

import { getAnimesSearched } from "@/services/query";

import SearchedPage from "./Searched.page";

export default function Searched() {
  const [searchedAnimes, setSearchedAnimes] = useState<IListAnimesDataProps[]>([]);

  const page = UseAppSelector((state) => state.paginationSlice.page);
  const searchedName = UseAppSelector((state) => state.searchSlice.filter);

  useEffect(() => {
    const fetchDataAnimes = async () => {
      try {
        const res = await getAnimesSearched(searchedName, page);
        setSearchedAnimes(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchDataAnimes();
  }, [searchedName, page]);

  return (
    <SearchedPage
      listAnimes={searchedAnimes}
      title={`Pesquisa por: ${searchedName}`}
    />
  );
}
