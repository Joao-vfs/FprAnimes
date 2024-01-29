"use client";

import React, { useEffect, useState } from "react";

import { UseAppSelector } from "@/redux/store";

import { IListAnimesDataProps } from "@/interfaces/IListAnimes.interface";

import { getAnimesSpecific } from "@/services/query";

import SpecificAnimePage from "./specificAnime.page";

export default function Searched() {
  const [specificAnime, setSpecificAnime] = useState<IListAnimesDataProps | null>(null);

  const id = UseAppSelector((state) => state.listAnimesSlice.id);

  useEffect(() => {
    const fetchDataAnimes = async () => {
      try {
        const res = await getAnimesSpecific(id);
        setSpecificAnime(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchDataAnimes();
  }, [id]);

  return <SpecificAnimePage specificAnime={specificAnime} />;
}
