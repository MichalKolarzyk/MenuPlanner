import { useState } from "react";
import useBindInput from "./useBindInput";

const useInput = (useValidatorsArray: any) => {
  const [enteredValue, setEnteredValue] = useState("");
  const input = useBindInput(enteredValue, setEnteredValue, useValidatorsArray);

  return input;
};

export default useInput;