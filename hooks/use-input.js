import { useState } from "react";

const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");

  const valueIsValid = validateValue(enteredValue);
  const isNumber = !isNaN(enteredValue);

  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const reset = () => {
    setEnteredValue("");
  };

  return {
    value: enteredValue,
    isValid: valueIsValid,
    isNumber,
    valueChangeHandler,
    reset,
  };
};

export default useInput;
