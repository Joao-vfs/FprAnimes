"use client";

import { useEffect, useState } from "react";

import { getAnimes } from "@/services/query";

import { UseAppSelector } from "@/redux/store";

import { IListAnimesDataProps } from "@/interfaces/listAnimes.interface";

import AllPage from "./All.page";

export default function All() {
  const [allAnimes, setAllAnimes] = useState<IListAnimesDataProps[]>([]);
  const [firstPage, setFirstPage] = useState(0);

  const page = UseAppSelector((state) => state.paginationSlice.page);

  useEffect(() => {
    if (page === 20) {
      setFirstPage(0);
    } else {
      setFirstPage(page - 20);
    }
    const fetchDataAnimes = async () => {
      try {
        const res = await getAnimes(firstPage);
        setAllAnimes(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchDataAnimes();
  }, [page, firstPage]);

  return <AllPage title="Todos" listAnimes={allAnimes} />;
}
