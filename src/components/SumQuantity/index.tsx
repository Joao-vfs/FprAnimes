import React, { useState } from "react";

import SumQuantityComponent from "./SumQuantity.component";

export default function SumQuantity() {
  const [value, setValue] = useState(1);

  const decrement = () => {
    setValue((prevValue) => prevValue - 1);
  };

  const increment = () => {
    setValue((prevValue) => prevValue + 1);
  };

  return (
    <SumQuantityComponent
      value={value}
      decrement={decrement}
      increment={increment}
    />
  );
}
