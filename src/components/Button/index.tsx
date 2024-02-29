"use client";

import React from "react";
import ButtonComponent from "./Button.component";

export function Button({ title, add, item, onClick }: Readonly<any>) {
  return <ButtonComponent title={title} add={add} item={item} onClick={onClick} />;
}
