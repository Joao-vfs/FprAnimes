"use client";

import React from "react";

import { ICardProps } from "@/interfaces/ICard.interface";

import CardsComponent from "./Cards.component";

export function Cards({
  image,
  title,
  price,
  onClick,
  add,
}: Readonly<ICardProps>) {
  return (
    <CardsComponent
      image={image}
      title={title}
      price={price}
      onClick={onClick}
      add={add}
    />
  );
}
