"use client";

import React from 'react'
import TitleListComponent from './TitleList.component';


export  function TitleList({ title }: { title: string }) {
  return <TitleListComponent title={title} />
}
