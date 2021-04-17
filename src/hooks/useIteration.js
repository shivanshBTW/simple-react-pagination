import { useState } from "react";

function useIteration(initialValue) {
  let [value, setValue] = useState(initialValue);

  let increaseValue = (addValue = 1) => {
    setValue(value + addValue);
  };

  let decreaseValue = (subtractValue = 1) => {
    setValue(value - subtractValue);
  };

  return [value, increaseValue, decreaseValue, setValue];
}

export default useIteration;
