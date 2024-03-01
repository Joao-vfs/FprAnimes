"use client";

import React from "react";
import ButtonComponent from "./Button.component";

export function Button({ add, onClick, children }: Readonly<any>) {
  return (
    <ButtonComponent add={add} onClick={onClick}>
      {children}
    </ButtonComponent>
  );
}
