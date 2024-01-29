"use client";

import React, { useEffect, useState } from "react";

import { getAnimesAllCategorys } from "@/services/query";

import { UseAppSelector } from "@/redux/store";

import { IListAnimesProps } from "@/interfaces/pages.intefaces";

import SidebarComponent from "./Sidebar.component";

export function Sidebar() {
  const [listCategorys, setListCategory] = useState<IListAnimesProps[]>([]);

  const openSidebar = UseAppSelector((state) => state.sidebarSlice.openSibebar);

  useEffect(() => {
    const FetchAllCategoryData = async () => {
      try {
        const res = await getAnimesAllCategorys();
        setListCategory(res?.data);
      } catch (error) {
        console.error(error);
      }
    };
    FetchAllCategoryData();
  }, []);

  return (
    <SidebarComponent openSidebar={openSidebar} listCategorys={listCategorys} />
  );
}
