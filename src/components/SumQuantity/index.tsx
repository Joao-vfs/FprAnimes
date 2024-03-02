import React, { useState } from "react";
import SumQuantityComponent from "./SumQuantity.component";
import { useFilm } from "@/hooks/useHooks";
import { useRouter } from "next/navigation";

interface SumQuantityProps {
  onChange: (quantity: number) => void;
  filmId: string;
}

export function SumQuantity({ onChange, filmId }: SumQuantityProps) {
  const [value, setValue] = useState(1);
  const { handleRemoveFilmId } = useFilm();
  const router = useRouter();

  const decrement = () => {
    setValue((prevValue) => {
      const newValue = prevValue - 1;
      onChange(newValue);
      return newValue;
    });
    if (value === 1) {
      handleRemoveFilmId(filmId);
      router.push('/noPurchases')
    }
  };

  const increment = () => {
    setValue((prevValue) => {
      const newValue = prevValue + 1;
      onChange(newValue);
      return newValue;
    });
  };

  return (
    <SumQuantityComponent
      value={value}
      decrement={decrement}
      increment={increment}
    />
  );
}
