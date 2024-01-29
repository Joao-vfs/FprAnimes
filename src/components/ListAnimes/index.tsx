"use client";

import React, { useEffect, useState } from "react";

import { IListAnimesDataProps, IListAnimesProps } from "@/interfaces/listAnimes.interface";

import ListAnimesComponent from "./ListAnimes.component";

export function ListAnimes({ data }: Readonly<IListAnimesProps>) {
  const [listAnimes, setListAnimes] = useState<IListAnimesDataProps[]>([]);

  useEffect(() => {
    const fetchDataAnimes = async () => {
      try {
        await setListAnimes(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchDataAnimes();
  }, [data]);
  return <ListAnimesComponent data={listAnimes} />;
}
