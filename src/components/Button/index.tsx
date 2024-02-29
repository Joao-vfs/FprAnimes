"use client";

import React from "react";
import ButtonComponent from "./Button.component";

export function Button({ title, add }: Readonly<any>) {
  return <ButtonComponent title={title} add={add} />;
}
