"use client";

import React from "react";
import CardsComponent from "./Cards.component";

export function Cards({ image, title, titleButton, price }: Readonly<any>) {
  return (
    <CardsComponent
      image={image}
      title={title}
      titleButton={titleButton}
      price={price}
    />
  );
}
