"use client";

import React from "react";
import CardsComponent from "./Cards.component";

export function Cards({ image, title, price, onClick, add }: Readonly<any>) {
  return <CardsComponent image={image} title={title} price={price} onClick={onClick} add={add} />;
}
