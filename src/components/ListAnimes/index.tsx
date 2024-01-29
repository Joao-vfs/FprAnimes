"use client";

import React, { useEffect, useState } from "react";

import { IListAnimesDataProps, IListAnimesProps } from "@/interfaces/IListAnimes.interface";

import ListAnimesComponent from "./ListAnimes.component";

export function ListAnimes({ data }: Readonly<IListAnimesProps>) {
  const [listAnimes, setListAnimes] = useState<IListAnimesDataProps[]>([]);

  useEffect(() => {
    const fetchDataAnimes = async () => {
      try {
        setListAnimes(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchDataAnimes();
  }, [data]);
  return <ListAnimesComponent data={listAnimes} />;
}
